# MILESTONES — luanalves.com.br

> Guia de desenvolvimento para agente autônomo. Cada milestone tem estado inicial, estado alvo, critério de conclusão binário e arquivos tocados. Trabalhe um milestone por vez. Não avance sem o critério de conclusão estar satisfeito.

---

## Como usar este arquivo

- Execute os milestones **em ordem**. Dependências são sequenciais (exceto M6, que pode rodar em paralelo com M5).
- Marque cada task com `[x]` ao concluir.
- Ao terminar um milestone inteiro, atualize o status de `[ PENDENTE ]` para `[ CONCLUÍDO ]`.
- **Stop condition global:** pare e peça revisão humana antes de qualquer ação que envolva deploy em produção ou publicação no domínio real.

---

## Mapa de dependências

```
M0 → M1 → M2 → M3 → M4 → M5 ↘
                    M6 ────────→ M7
```

M6 (Three.js) pode começar em paralelo com M5 (Barba) desde que M4 esteja aprovado.

---

## Contexto fixo do projeto

| Campo | Valor |
|---|---|
| Nome | Luan Alves |
| Domínio | `luanalves.com.br` |
| Slogan | `Tecnologia que cabe no seu negócio` |
| Público | Donos de pequenas empresas |
| Background | `#0B1622` |
| Accent green | `#00E5A0` |
| Accent blue | `#185FA5` |
| Logo | `{LA;}` |
| Stack | Astro + GSAP + Barba.js + Three.js |

---

## Motion Tokens (valores concretos — não negociáveis)

```css
--duration-fast:   0.25s;
--duration-base:   0.55s;
--duration-slow:   0.9s;
--duration-xslow:  1.4s;
--ease-out:        cubic-bezier(0.16, 1, 0.3, 1);
--ease-in-out:     cubic-bezier(0.87, 0, 0.13, 1);
--ease-spring:     cubic-bezier(0.34, 1.56, 0.64, 1);
--reveal-y:        32px;
--reveal-y-subtle: 14px;
```

> O Codex DEVE usar esses tokens. Não inventar durações ou easings sem justificativa explícita.

---

## MILESTONE 0 — Fundação Astro `[ CONCLUÍDO ]`

**Objetivo:** base Astro funcional com estrutura de pastas, tokens visuais e estilos globais.

**Estado inicial:** pasta vazia.
**Estado alvo:** `astro dev` roda sem erro e home renderiza com layout base.

**Arquivos tocados:** estrutura de pastas, `BaseLayout.astro`, `tokens.css`, `global.css`

### Tasks

- [x] Inicializar projeto Astro
- [x] Criar estrutura de pastas:
  ```
  src/
    components/
      layout/
      sections/
      ui/
    pages/
      index.astro
    layouts/
      BaseLayout.astro
    styles/
      tokens.css
      global.css
      utilities.css
      sections/
    scripts/
      gsap/
      barba/
      three/
      utils/
  public/
  ```
- [x] Criar `BaseLayout.astro`
- [x] Criar `tokens.css` com cores da marca, motion tokens, spacing e typography
- [x] Criar `global.css` com reset e base de layout
- [x] Garantir que `astro build` passa sem erros

**Critério de conclusão:** `astro dev` roda, home renderiza com layout base, `astro build` sem erros. ✓ ou ✗

**Status atual:** concluído. Base Astro criada, tokens aplicados e build validado.

---

## MILESTONE 1 — Integração da Home Estática `[ CONCLUÍDO ]`

**Objetivo:** home Astro estática completa, fiel ao design, com copy final aplicada e sem dependência de animações.

**Estado inicial:** home com layout base vazio.
**Estado alvo:** `astro dev` exibe home completa e navegável sem JS de animação.

**Arquivos tocados:** `pages/index.astro`, `styles/global.css`, `styles/sections/`

### Tasks

- [x] Auditar HTML do Stitch antes de integrar:
  - [x] catalogar wrappers desnecessários
  - [x] identificar classes inline conflitantes
  - [x] verificar IDs duplicados
  - [x] confirmar ordem correta de headings
  - [x] listar elementos sem atributos de acessibilidade
- [x] Integrar e limpar HTML do Stitch na home Astro
- [x] Corrigir semântica: `header`, `main`, `section`, `footer`
- [x] Aplicar copy final em todas as seções:
  - Hero, Manifesto, Serviços, Para quem é, Diferencial, Processo, CTA final, Footer
- [x] Garantir contraste e legibilidade
- [x] Garantir que home funciona sem JS de animação
- [x] Seções presentes em ordem:
  1. Hero
  2. Transição narrativa 1
  3. Manifesto
  4. Serviços
  5. Transição narrativa 2
  6. Para quem é
  7. Diferencial
  8. Processo
  9. Transição narrativa 3
  10. CTA final
  11. Footer

**Critério de conclusão:** home estática com copy final, sem console error, layout compreensível em desktop e mobile sem animações. ✓ ou ✗

**Status atual:** concluído. Home estática integrada, copy aplicada e visual validado.

---

## MILESTONE 2 — Componentização + Responsividade `[ CONCLUÍDO ]`

**Objetivo:** home quebrada em componentes Astro por seção, estilos organizados e responsividade estável.

**Estado inicial:** home em arquivo único.
**Estado alvo:** cada seção é um componente isolado; layout estável em 375px, 768px e 1280px.

**Arquivos tocados:** `components/sections/*`, `components/layout/*`, `components/ui/*`, `styles/sections/*`

### Tasks

- [x] Extrair componentes de seção:
  - [x] `HeroSection.astro`
  - [x] `NarrativeBreak.astro` (reutilizável nas 3 transições)
  - [x] `ManifestoSection.astro`
  - [x] `ServicesSection.astro`
  - [x] `AudienceSection.astro`
  - [x] `DifferenceSection.astro`
  - [x] `ProcessSection.astro`
  - [x] `FinalCTASection.astro`
- [x] Extrair componentes de layout: `SiteHeader.astro`, `SiteFooter.astro`
- [x] Extrair UI atoms: `Button.astro`, `SectionHeading.astro`, `Eyebrow.astro`, `GridCard.astro`
- [x] Reorganizar CSS por seção em `styles/sections/`
- [x] Ajustar breakpoints e espaçamentos mobile
- [x] Adicionar atributos para futura animação em todos os elementos relevantes:
  ```html
  data-animate="reveal"
  data-section="hero"
  data-reveal="fade-up"
  data-parallax="true"
  data-sticky="true"
  ```
- [x] Confirmar que home continua visualmente idêntica após componentização

**Critério de conclusão:** `astro dev` exibe home idêntica ao estado anterior; cada seção localizável em < 10s; mobile estável em 375/768/1280px. ✓ ou ✗

**Status atual:** concluído. Home componentizada, estilos organizados por seção e responsividade validada.

---

## MILESTONE 3 — Motion Layer 1 — Entradas e Microinterações `[ PENDENTE ]`

**Objetivo:** primeira camada de motion com GSAP — hero entrance, reveals por seção, stagger e microinterações.

**Estado inicial:** home estática sem animações.
**Estado alvo:** `astro dev` exibe hero animado, reveals nas seções e hovers refinados. Página legível sem JS.

**Arquivos tocados:** `scripts/gsap/hero.js`, `scripts/gsap/reveals.js`, `scripts/gsap/utils.js`, `components/sections/HeroSection.astro`

### Escopo desta milestone
- sem sticky ainda
- sem scroll narrative ainda
- sem Three.js ainda
- sem Barba ainda

### Tasks

- [ ] Instalar e configurar GSAP + ScrollTrigger
- [ ] Criar `scripts/gsap/utils.js` com funções reutilizáveis de animação
- [ ] Hero entrance em `scripts/gsap/hero.js`:
  - [ ] headline por linha com stagger (delay: 0ms, 80ms, 160ms...)
  - [ ] subheadline com entrada suave posterior
  - [ ] CTA com entrada após subheadline
- [ ] Reveals por seção em `scripts/gsap/reveals.js` via `data-reveal`
- [ ] Stagger nos cards de serviços
- [ ] Hover refinado em botões, links e cards clicáveis
- [ ] Garantir fallback: página legível e navegável sem JS
- [ ] Confirmar que todos os valores usam os motion tokens definidos no topo deste arquivo — zero valores hardcoded

**Critério de conclusão:** `astro dev` exibe hero animado com stagger; reveals ativam no scroll; hovers responsivos; `astro build` sem erros; LCP não degradado. ✓ ou ✗

**Rollback:** desativar imports GSAP. Home continua navegável como estática.

---

## MILESTONE 4 — Motion Layer 2 — Scroll Narrative `[ PENDENTE ]`

**Objetivo:** narrativa orientada por scroll com sticky sections, frases progressivas e timeline do processo.

**Estado inicial:** motion base sem sticky.
**Estado alvo:** seções narrativas contam história no scroll; timeline do processo guiada por scroll; mobile simplificado.

**Arquivos tocados:** `scripts/gsap/scroll-narrative.js`, `scripts/gsap/process-timeline.js`, `styles/sections/`

### Tasks

- [ ] Mapear seções que recebem `pin: true` no ScrollTrigger
- [ ] Implementar troca de frases por scroll nas transições narrativas
- [ ] Progressão suave de opacidade, posição e escala (máximo 3 estados por seção sticky)
- [ ] Timeline do processo guiada por scroll em `scripts/gsap/process-timeline.js`
- [ ] Ajustar `spacer` vertical para ritmo cinematográfico
- [ ] Mobile: substituir sticky por fade sequencial sem `pin: true`
- [ ] Confirmar que o usuário entende a estrutura varrendo a página rapidamente

**Regras obrigatórias:**
- scroll nunca pode confundir — estrutura clara sem animações
- texto sempre legível em qualquer ponto do scroll
- mobile nunca trava o scroll nativo

**Critério de conclusão:** scroll narrative clara e sem confusão; sticky funciona em desktop; mobile usa fade sem pin; scroll a 60fps estável. ✓ ou ✗

**Rollback:** desativar ScrollTrigger de sticky. Seções voltam a funcionar como reveals simples do M3.

---

## MILESTONE 5 — Sistema de Páginas + Barba.js `[ PENDENTE ]`

**Objetivo:** múltiplas páginas em Astro com transições fluidas via Barba.js e GSAP reiniciando corretamente após cada navegação.

**Estado inicial:** apenas `/` (home) existente.
**Estado alvo:** 4 páginas navegáveis com transições sem flicker e sem memory leak.

**Arquivos tocados:** `pages/about.astro`, `pages/services.astro`, `pages/contact.astro`, `scripts/barba/transitions.js`, `scripts/barba/lifecycle.js`

### Páginas previstas

| Rota | Conteúdo |
|---|---|
| `/` | Home |
| `/about` | Sobre Luan |
| `/services` | Detalhamento de serviços |
| `/contact` | Formulário e contatos |

### Tasks

- [ ] Criar páginas adicionais com `BaseLayout.astro` e conteúdo base
- [ ] Padronizar `SiteHeader` e `SiteFooter` entre todas as páginas
- [ ] Integrar Barba.js
- [ ] Definir `data-barba="wrapper"` e `data-barba-namespace` em todas as páginas
- [ ] Criar transição base: fade + translate sutil (`--reveal-y-subtle`, `--duration-base`)
- [ ] Implementar `beforeEnter` / `afterEnter` para reinit de GSAP
- [ ] Garantir limpeza de timelines e listeners ao sair de página
- [ ] Testar navegação em loop (home → about → services → contact → home) sem degradação
- [ ] Confirmar ausência de memory leak após 10 navegações consecutivas

**Critério de conclusão:** transição entre todas as páginas fluida e sem flicker; animações da nova página inicializam corretamente; navegação por teclado funciona. ✓ ou ✗

**Rollback:** remover Barba.js. Navegação volta ao padrão do browser sem transição.

---

## MILESTONE 6 — Three.js — Assinatura Visual do Hero `[ PENDENTE ]`

**Objetivo:** camada 3D pontual e elegante no hero, sem competir com o texto, com fallback para mobile.

**Estado inicial:** hero com motion GSAP puro.
**Estado alvo:** hero exibe cena 3D sutil; leitura não comprometida; LCP não degradado; mobile simplificado.

**Arquivos tocados:** `scripts/three/hero.js`, `components/sections/HeroSection.astro`

### Direções (em ordem de preferência)

| Opção | Descrição |
|---|---|
| A — preferida | Grade espacial com profundidade suave e reação ao mouse |
| B | Linhas e nós conectados com baixa densidade, cor `#00E5A0` |
| C — experimental | Monograma `{LA;}` em interpretação geométrica abstrata |

### Tasks

- [ ] Definir escopo exato da cena antes de codificar
- [ ] ⚠️ **STOP — revisão humana obrigatória.** Aprovar direção visual da cena antes de continuar.
- [ ] Criar cena otimizada em `scripts/three/hero.js`
- [ ] Integrar canvas ao `HeroSection.astro` sem sobrepor texto
- [ ] Coordenar entrada do canvas com GSAP hero timeline
- [ ] Implementar `matchMedia` para desativar em mobile (max-width: 768px)
- [ ] Implementar `dispose()` correto ao trocar de página com Barba
- [ ] Testar performance com Three.js + GSAP simultâneos

**Regras obrigatórias:**
- 3D não pode competir com o texto
- 3D não ocupa a página inteira como experiência principal
- mobile: desativar ou reduzir drasticamente

**Critério de conclusão:** hero com assinatura 3D sutil; LCP não degradado; mobile sem canvas; sem crash ao navegar entre páginas. ✓ ou ✗

**Rollback:** remover canvas. Hero volta ao estado de motion GSAP puro do M3.

---

## MILESTONE 7 — Polish, SEO e Acessibilidade `[ PENDENTE ]`

**Objetivo:** site pronto para deploy em produção — performance, acessibilidade, SEO completo e código limpo.

**Estado inicial:** site funcional mas sem refinamento final.
**Estado alvo:** Lighthouse Performance ≥ 85 mobile, Accessibility ≥ 90, SEO completo, sem código morto.

**Arquivos tocados:** todos os arquivos — revisão geral

### Tasks — SEO

- [ ] Meta tags em todas as páginas (title, description, OG, Twitter Card)
- [ ] Gerar `sitemap.xml` via plugin Astro
- [ ] Criar `robots.txt`
- [ ] Adicionar Schema markup: `Person` + `ProfessionalService`
- [ ] Canonical URLs em todas as páginas
- [ ] Criar `og-image.png` (1200×630px)

### Tasks — Performance

- [ ] Lighthouse Performance ≥ 85 em mobile
- [ ] Corrigir CLS, LCP e INP identificados
- [ ] Lazy load de Three.js e GSAP onde possível
- [ ] Otimizar fontes com `font-display: swap`
- [ ] Confirmar que scripts carregam com `defer` / `async`

### Tasks — Acessibilidade

- [ ] Navegação por teclado em todos os elementos interativos
- [ ] Estados de foco visíveis
- [ ] Contraste mínimo 4.5:1 em todos os textos
- [ ] `prefers-reduced-motion: reduce` desativa todas as animações
- [ ] Alt text em todas as imagens
- [ ] Aria labels onde necessário
- [ ] Site navegável sem JS

### Tasks — Código

- [ ] Remover `console.log` e código de debug
- [ ] Remover timelines e listeners duplicados
- [ ] Limpar imports não utilizados
- [ ] Limpar código experimental não usado

### Tasks — Deploy

- [ ] Configurar domínio `luanalves.com.br` na plataforma de deploy (Vercel recomendado)
- [ ] Confirmar HTTPS ativo
- [ ] Testar em dispositivo real (iOS e Android)
- [ ] ⚠️ **STOP — revisão humana obrigatória antes de publicar em produção.**

**Critério de conclusão:** Lighthouse Performance ≥ 85 e Accessibility ≥ 90 em mobile; SEO completo; `sitemap.xml` e `robots.txt` presentes; deploy aprovado por revisão humana. ✓ ou ✗

---

## Status Geral

| Milestone | Descrição                         | Status       |
|-----------|-----------------------------------|--------------|
| M0        | Fundação Astro                    | ✅ Concluído |
| M1        | Integração da home estática       | ✅ Concluído |
| M2        | Componentização + responsividade  | ✅ Concluído |
| M3        | Motion Layer 1 — Entradas         | ⬜ Pendente  |
| M4        | Motion Layer 2 — Scroll Narrative | ⬜ Pendente  |
| M5        | Sistema de páginas + Barba.js     | ⬜ Pendente  |
| M6        | Three.js — Assinatura visual      | ⬜ Pendente  |
| M7        | Polish, SEO e Acessibilidade      | ⬜ Pendente  |

---

## Stop Conditions Globais

O agente DEVE parar e aguardar revisão humana antes de:

1. Publicar qualquer coisa no domínio real `luanalves.com.br`
2. Aprovar a direção visual da cena Three.js (M6)
3. Qualquer alteração que afete o conteúdo público da home
4. Deploy final em produção (M7)

---

_luanalves.com.br — MILESTONES v2.0 | Atualizar status a cada milestone concluído_