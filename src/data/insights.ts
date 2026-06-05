export type InsightCategorySlug =
  | 'desenvolvimento'
  | 'seo'
  | 'freelance'
  | 'ia'
  | 'ferramentas';

export interface InsightFilter {
  label: string;
  value: InsightCategorySlug | 'all';
  current?: boolean;
}

interface InsightBasePost {
  title: string;
  excerpt: string;
  description: string;
  category: string;
  categorySlug: InsightCategorySlug;
  date: string;
  isoDate: string;
  readTime: string;
  slug: string;
  tags: string[];
  featured?: boolean;
  published?: boolean;
  heroImage?: string;
  heroImageAlt?: string;
}

export type InsightArticleBlock =
  | {
      type: 'heading';
      id: string;
      level: 2 | 3;
      text: string;
    }
  | {
      type: 'paragraph';
      text: string;
    }
  | {
      type: 'list';
      ordered?: boolean;
      items: string[];
    }
  | {
      type: 'blockquote';
      text: string;
      cite?: string;
    }
  | {
      type: 'code';
      language: string;
      code: string;
      caption?: string;
    }
  | {
      type: 'image';
      src?: string;
      alt: string;
      caption?: string;
    }
  | {
      type: 'links';
      items: {
        href: string;
        label: string;
        text: string;
      }[];
    };

export interface InsightPublishedPost extends InsightBasePost {
  published: true;
  author: {
    name: string;
    role: string;
    bio: string;
  };
  content: InsightArticleBlock[];
}

export type InsightPost = InsightBasePost | InsightPublishedPost;

export const insightFilters: InsightFilter[] = [
  { label: 'Todos', value: 'all', current: true },
  { label: 'Desenvolvimento', value: 'desenvolvimento' },
  { label: 'SEO', value: 'seo' },
  { label: 'Freelance', value: 'freelance' },
  { label: 'IA', value: 'ia' },
  { label: 'Ferramentas', value: 'ferramentas' },
];

export const insights: InsightPost[] = [
  {
    title:
      'Como uso IA no meu fluxo de trabalho para entregar sites 3x mais rápido',
    excerpt:
      'Do Codex ao Cursor: o que realmente funciona no dia a dia de um desenvolvedor freelancer e o que é só hype.',
    description:
      'Um recorte prático de como IA entra no fluxo de criação, desenvolvimento e revisão de sites profissionais.',
    category: 'IA & Dev',
    categorySlug: 'ia',
    date: '28 mai. 2025',
    isoDate: '2025-05-28',
    readTime: '8 min',
    slug: 'como-uso-ia-no-fluxo-de-trabalho',
    tags: ['IA', 'Workflow', 'Desenvolvimento web'],
    featured: true,
  },
  {
    title: 'Schema JSON-LD: o que é e por que seu site precisa disso ontem',
    excerpt:
      'Entenda como dados estruturados ajudam o Google a interpretar páginas, serviços e negócios locais.',
    description:
      'Guia prático sobre Schema JSON-LD para sites profissionais: o que é, por que importa para SEO e quais tipos usar primeiro.',
    category: 'SEO',
    categorySlug: 'seo',
    date: '14 mai. 2025',
    isoDate: '2025-05-14',
    readTime: '6 min',
    slug: 'schema-json-ld-por-que-seu-site-precisa',
    tags: ['Schema', 'JSON-LD', 'SEO técnico', 'Dados estruturados'],
    published: true,
    heroImage: '/assets/blog-hero.webp',
    heroImageAlt:
      'Mesa de trabalho com notebook exibindo estrutura visual de conteúdo técnico para SEO.',
    author: {
      name: 'Luan Alves',
      role: 'Desenvolvedor web freelancer',
      bio: 'Desenvolvo sites, blogs e landing pages com foco em performance, SEO técnico e conversão via WhatsApp.',
    },
    content: [
      {
        type: 'paragraph',
        text: 'Quando alguém fala em SEO, é comum pensar primeiro em palavras-chave, títulos e velocidade. Tudo isso importa. Mas existe uma camada menos visível que ajuda o Google a entender o que a página representa: os dados estruturados.',
      },
      {
        type: 'paragraph',
        text: 'Schema JSON-LD é uma forma de explicar, em linguagem de máquina, que uma página é um artigo, um serviço, uma empresa local, uma pergunta frequente ou um produto. Para o usuário, nada muda na tela. Para mecanismos de busca, o contexto fica mais claro.',
      },
      {
        type: 'heading',
        id: 'o-que-e-schema-json-ld',
        level: 2,
        text: 'O que é Schema JSON-LD?',
      },
      {
        type: 'paragraph',
        text: 'Schema é um vocabulário criado para descrever entidades e relações. JSON-LD é o formato mais usado para inserir essa descrição no HTML sem misturar marcação semântica com o conteúdo visual da página.',
      },
      {
        type: 'blockquote',
        text: 'Pense no Schema como uma ficha técnica invisível: ela não substitui bom conteúdo, mas reduz ambiguidade para quem precisa interpretar a página.',
      },
      {
        type: 'code',
        language: 'json',
        caption: 'Exemplo simplificado de BlogPosting em JSON-LD.',
        code: `{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Schema JSON-LD: o que é e por que seu site precisa",
  "author": {
    "@type": "Person",
    "name": "Luan Alves"
  },
  "inLanguage": "pt-BR"
}`,
      },
      {
        type: 'heading',
        id: 'por-que-isso-importa-para-seo',
        level: 2,
        text: 'Por que isso importa para SEO?',
      },
      {
        type: 'paragraph',
        text: 'Dados estruturados ajudam mecanismos de busca a classificar melhor o conteúdo. Isso pode reforçar sinais de autoria, tipo de página, assunto, negócio, serviço, localização e relação com outras URLs do site.',
      },
      {
        type: 'list',
        items: [
          'Melhor interpretação do conteúdo por Google, Bing e buscadores com IA.',
          'Maior chance de qualificar a página para resultados enriquecidos quando o tipo de schema permite.',
          'Consistência entre conteúdo visível, metadados, breadcrumbs e entidade da marca.',
          'Base mais clara para páginas de serviço, artigos, portfólio e perguntas frequentes.',
        ],
      },
      {
        type: 'heading',
        id: 'schema-nao-e-atalho',
        level: 2,
        text: 'Schema não é atalho para ranquear',
      },
      {
        type: 'paragraph',
        text: 'Um erro comum é tratar JSON-LD como truque técnico. Ele não transforma conteúdo fraco em página forte. Se o texto não responde à intenção de busca, se a página é lenta ou se a oferta não está clara, o Schema apenas descreve melhor uma experiência ruim.',
      },
      {
        type: 'paragraph',
        text: 'O ganho real aparece quando dados estruturados acompanham uma arquitetura coerente: uma página de serviço com proposta clara, links internos, FAQ útil, dados de contato e conteúdo alinhado ao que a pessoa procura.',
      },
      {
        type: 'heading',
        id: 'tipos-mais-uteis',
        level: 2,
        text: 'Tipos de Schema mais úteis para sites profissionais',
      },
      {
        type: 'list',
        ordered: true,
        items: [
          'Organization ou ProfessionalService para representar a marca e a atuação.',
          'WebSite para descrever o site principal e o publisher.',
          'BreadcrumbList para reforçar a hierarquia das páginas internas.',
          'Service para páginas comerciais como criação de sites, landing pages e blog profissional.',
          'BlogPosting para artigos editoriais e conteúdos de autoridade.',
          'FAQPage quando existe uma seção real de perguntas e respostas na página.',
        ],
      },
      {
        type: 'image',
        src: '/assets/blog-hero.webp',
        alt: 'Visual editorial usado para representar estrutura técnica de blog e SEO.',
        caption:
          'Schema funciona melhor quando acompanha conteúdo claro, hierarquia lógica e metadados consistentes.',
      },
      {
        type: 'heading',
        id: 'como-implementar-sem-bagunca',
        level: 2,
        text: 'Como implementar sem bagunça',
      },
      {
        type: 'paragraph',
        text: 'Em sites Astro, Next.js ou WordPress bem configurados, a melhor abordagem é centralizar a geração de Schema em dados confiáveis. O ideal é evitar JSON-LD duplicado, desatualizado ou contraditório com o conteúdo visível.',
      },
      {
        type: 'list',
        items: [
          'Defina uma fonte única para título, descrição, URL canônica e imagem social.',
          'Gere BreadcrumbList com base na rota real da página.',
          'Use BlogPosting apenas em artigos completos, não em cards de listagem.',
          'Valide o resultado depois do build, não só durante o desenvolvimento.',
        ],
      },
      {
        type: 'heading',
        id: 'erros-comuns',
        level: 2,
        text: 'Erros comuns que vale evitar',
      },
      {
        type: 'paragraph',
        text: 'O problema mais frequente não é ausência de Schema. É excesso mal cuidado: múltiplas entidades dizendo coisas diferentes, URLs sem barra final em um lugar e com barra em outro, imagens inexistentes ou FAQPage sem perguntas visíveis.',
      },
      {
        type: 'code',
        language: 'json',
        caption: 'Exemplo de BreadcrumbList coerente com a URL final.',
        code: `{
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Início",
      "item": "https://luanalves.com.br/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Insights",
      "item": "https://luanalves.com.br/insights/"
    }
  ]
}`,
      },
      {
        type: 'heading',
        id: 'proximo-passo',
        level: 2,
        text: 'Próximo passo',
      },
      {
        type: 'paragraph',
        text: 'Se seu site já tem páginas comerciais, blog ou portfólio, vale revisar se os dados estruturados refletem a estrutura real. A ordem mais pragmática é começar por página inicial, serviços, breadcrumbs e artigos completos.',
      },
      {
        type: 'links',
        items: [
          {
            href: '/criacao-de-sites/',
            label: 'Ver serviço',
            text: 'Criação de sites profissionais com base técnica preparada para SEO.',
          },
          {
            href: '/blog-profissional/',
            label: 'Ver estrutura editorial',
            text: 'Blog profissional para empresas que querem publicar conteúdo indexável.',
          },
        ],
      },
    ],
  },
  {
    title:
      'Como precificar um site profissional sem depender de tabela de preços',
    excerpt:
      'Escopo, risco e valor percebido: as três variáveis que pesam mais na proposta de um projeto web.',
    description:
      'Como pensar preço de site profissional considerando escopo, risco, valor percebido e contexto do projeto.',
    category: 'Freelance',
    categorySlug: 'freelance',
    date: '02 mai. 2025',
    isoDate: '2025-05-02',
    readTime: '7 min',
    slug: 'como-precificar-um-site-profissional',
    tags: ['Freelance', 'Proposta', 'Precificação'],
  },
  {
    title: 'WordPress vs site personalizado: quando cada um faz sentido',
    excerpt:
      'A resposta honesta antes de contratar: não é só sobre tecnologia, é sobre contexto, gestão e objetivo.',
    description:
      'Comparativo prático entre WordPress e site personalizado para decisões de presença digital.',
    category: 'Desenvolvimento',
    categorySlug: 'desenvolvimento',
    date: '18 abr. 2025',
    isoDate: '2025-04-18',
    readTime: '5 min',
    slug: 'wordpress-vs-site-personalizado',
    tags: ['WordPress', 'Site personalizado', 'Decisão técnica'],
  },
  {
    title: '5 erros de SEO técnico que afastam clientes do seu site',
    excerpt:
      'De sitemap invisível a performance ruim: problemas silenciosos que atrapalham indexação e conversão.',
    description:
      'Erros comuns de SEO técnico que prejudicam indexação, leitura e conversão em sites profissionais.',
    category: 'SEO',
    categorySlug: 'seo',
    date: '07 abr. 2025',
    isoDate: '2025-04-07',
    readTime: '6 min',
    slug: 'erros-de-seo-tecnico-que-afastam-clientes',
    tags: ['SEO técnico', 'Performance', 'Indexação'],
  },
  {
    title: 'Rank Math vs Yoast em 2025: qual plugin de SEO vale a pena?',
    excerpt:
      'O que observar além da lista de recursos: performance, Schema, controle técnico e rotina editorial.',
    description:
      'Critérios para comparar plugins de SEO no WordPress além da lista de recursos.',
    category: 'Ferramentas',
    categorySlug: 'ferramentas',
    date: '22 mar. 2025',
    isoDate: '2025-03-22',
    readTime: '5 min',
    slug: 'rank-math-vs-yoast-em-2025',
    tags: ['WordPress', 'Plugins', 'SEO'],
  },
  {
    title: 'O que mudou no meu trabalho depois de adotar um workflow com IA',
    excerpt:
      'Não é sobre substituição. É sobre onde sua atenção vai quando partes repetitivas saem do caminho.',
    description:
      'Reflexões práticas sobre rotina de desenvolvimento com IA e revisão humana.',
    category: 'IA',
    categorySlug: 'ia',
    date: '10 mar. 2025',
    isoDate: '2025-03-10',
    readTime: '9 min',
    slug: 'o-que-mudou-com-workflow-com-ia',
    tags: ['IA', 'Rotina', 'Produtividade'],
  },
  {
    title: 'Contrato de desenvolvimento: as cláusulas que evitaram problemas',
    excerpt:
      'Revisões infinitas, escopo crescente e cliente que some: como tratar isso antes do projeto começar.',
    description:
      'Pontos importantes em contratos de desenvolvimento web para reduzir conflito de escopo.',
    category: 'Freelance',
    categorySlug: 'freelance',
    date: '25 fev. 2025',
    isoDate: '2025-02-25',
    readTime: '8 min',
    slug: 'contrato-de-desenvolvimento-clausulas',
    tags: ['Contrato', 'Escopo', 'Freelance'],
  },
  {
    title: 'Core Web Vitals na prática: o que realmente afeta o LCP',
    excerpt:
      'Imagens, fontes e render-blocking: a triagem que faço antes de entregar um site ao cliente.',
    description:
      'Como diagnosticar LCP em sites profissionais considerando imagem hero, fontes e bloqueios de renderização.',
    category: 'Desenvolvimento',
    categorySlug: 'desenvolvimento',
    date: '11 fev. 2025',
    isoDate: '2025-02-11',
    readTime: '7 min',
    slug: 'core-web-vitals-na-pratica-lcp',
    tags: ['Core Web Vitals', 'LCP', 'Performance'],
  },
];

export const publishedInsights = insights.filter(
  (post): post is InsightPublishedPost => post.published === true,
);

export const getInsightPath = (post: Pick<InsightPost, 'slug'>) =>
  `/insights/${post.slug}/`;

export const getInsightToc = (post: InsightPublishedPost) =>
  post.content
    .filter(
      (
        block,
      ): block is Extract<InsightArticleBlock, { type: 'heading' }> =>
        block.type === 'heading',
    )
    .map((heading) => ({
      id: heading.id,
      text: heading.text,
      level: heading.level,
    }));
