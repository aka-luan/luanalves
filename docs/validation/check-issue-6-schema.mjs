import { readFile, readdir, writeFile } from 'node:fs/promises';
import { join, relative } from 'node:path';
import assert from 'node:assert/strict';
import { JSDOM } from 'jsdom';

async function htmlFiles(dir) {
  const files = await readdir(dir, { withFileTypes: true });
  return (await Promise.all(files.map(file => file.isDirectory()
    ? htmlFiles(join(dir, file.name))
    : file.name.endsWith('.html') ? [join(dir, file.name)] : []))).flat();
}
const results = [];
let sharedIdentity;
for (const file of await htmlFiles('dist')) {
  const document = new JSDOM(await readFile(file, 'utf8')).window.document;
  const scripts = document.querySelectorAll('script[type="application/ld+json"]');
  assert.equal(scripts.length, 1, file);
  const graph = JSON.parse(scripts[0].textContent)['@graph'];
  const identity = graph.slice(0, 3);
  sharedIdentity ??= identity;
  assert.deepEqual(identity, sharedIdentity, file);
  assert.equal(graph.filter(node => node['@id'] === 'https://luanalves.com.br/#business').length, 1);
  assert.equal(identity[1]['@type'], 'Organization');
  assert(!JSON.stringify(graph).includes('ProfessionalService'));
  assert(!JSON.stringify(graph).includes('#localbusiness'));
  const ids = graph.map(node => node['@id']).filter(Boolean);
  assert.equal(ids.length, new Set(ids).size);
  const canonical = document.querySelector('link[rel="canonical"]')?.href;
  if (canonical) {
    assert(canonical.startsWith('https://luanalves.com.br/'));
    assert(canonical.endsWith('/'));
  }
  const faq = graph.find(node => node['@type'] === 'FAQPage');
  for (const question of faq?.mainEntity ?? []) {
    assert(document.body.textContent.includes(question.name), file);
    assert(document.body.textContent.includes(question.acceptedAnswer.text), file);
  }
  const work = graph.find(node => node['@type'] === 'CreativeWork');
  if (work) assert(!work.datePublished && !work.dateModified);
  for (const personOrBusiness of identity.slice(0, 2)) {
    await readFile(join('public', new URL(personOrBusiness.image).pathname));
  }
  results.push({ file: relative('dist', file), canonical, types: graph.map(node => node['@type']), faqQuestions: faq?.mainEntity.length ?? 0 });
}
await writeFile('docs/validation/issue-6-generated-schema.json', JSON.stringify(results, null, 2) + '\n');
console.log(`${results.length} generated pages: consistent identity, canonical, visible FAQs and case date policy passed.`);
