# milestones.md — luanalves.com.br

> Versão 2.0 — Documento de execução progressiva para o Codex

---

## Dependências entre milestones

```
M1 → M2 → M3 → M4 → M5 → M6 ↘
                               M8
                    M7 ────────↗
```

M7 (Three.js) pode começar em paralelo com M6 (Barba) desde que M5 esteja aprovada.
Todas as outras milestones são estritamente sequenciais.

---

# 0. Contexto fixo do projeto

## Marca

- **Nome:** Luan Alves
- **Domínio:** `luanalves.com.br`
- **Slogan:** `Tecnologia que cabe no seu negócio`
- **Público:** donos de pequenas empresas que acham tecnologia intimidadora
- **Tom:** moderno, tech, confiável, humano, direto
- **Não parecer:** corporativo, frio, exageradamente técnico, visualmente caótico

## Identidade visual

- **Background principal:** `#0B1622`
- **Accent green:** `#00E5A0`
- **Accent blue:** `#185FA5`
- **Logo/monograma:** `{LA;}`

---

## Motion Tokens (valores concretos — não negociáveis)

```css
/* Duração */
--duration-fast: 0.25s;
--duration-base: 0.55s;
--duration-slow: 0.9s;
--duration-xslow: 1.4s;

/* Easing */
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);
--ease-in-out: cubic-bezier(0.87, 0, 0.13, 1);
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
--ease-linear: linear;

/* Translate padrão nos reveals */
--reveal-y: 32px;
--reveal-y-subtle: 14px;

/* Opacidade inicial nos reveals */
--reveal-opacity: 0;
```

> O Codex DEVE usar esses tokens. Não inventar durações ou easings novos sem justificativa explícita.

---

## Princípios de motion

1. **Reveal, not explode** — entradas suaves, nunca bruscas
2. **Flow, not noise** — consistência entre seções
3. **Depth, not spectacle** — profundidade serve à leitura
4. **Precision, not randomness** — cada duração tem motivo
5. **Meaning before motion** — se o motion não ajuda a entender, não usa

---

## Stack técnica

| Camada               | Tecnologia                                        |
| -------------------- | ------------------------------------------------- |
| Framework            | Astro                                             |
| Animações gerais     | GSAP + ScrollTrigger                              |
| Transições de página | Barba.js                                          |
| Camada 3D            | Three.js (pontual)                                |
| HTML base            | gerado pelo Stitch (input externo em stitch.html) |

---

# 1. Objetivo deste arquivo

Este documento define a execução do projeto em **milestones contínuas**, com handoff claro para o Codex implementar o site em etapas seguras, revisáveis e progressivas.

**Regra de ouro:** não tentar implementar tudo em uma única etapa.

Cada milestone deve:

- terminar em estado executável e navegável
- preservar qualidade visual sem regressão
- manter build local e deploy de preview funcionando
- permitir revisão completa antes da próxima camada

**Rollback:** se uma milestone não passar nos critérios de aceite, reverter para o último commit aprovado, documentar o bloqueio em um comentário no PR e não avançar.

---

# 2. Arquitetura alvo

## Estrutura de pastas

```txt
src/
  components/
    layout/
      SiteHeader.astro
      SiteFooter.astro
    sections/
      HeroSection.astro
      NarrativeBreak.astro
      ManifestoSection.astro
      ServicesSection.astro
      AudienceSection.astro
      DifferenceSection.astro
      ProcessSection.astro
      FinalCTASection.astro
    ui/
      Button.astro
      SectionHeading.astro
      Eyebrow.astro
      GridCard.astro
  pages/
    index.astro
    about.astro
    services.astro
    contact.astro
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

## Convenções

- componentes sem lógica desnecessária
- nomes de arquivo claros e previsíveis
- classes legíveis
- scripts separados por responsabilidade
- motion hooks fáceis de localizar

---

# 3. Deploy e ambientes

| Ambiente          | Plataforma sugerida                   | Quando ativar    |
| ----------------- | ------------------------------------- | ---------------- |
| Local dev         | `astro dev`                           | Desde M1         |
| Preview de branch | Vercel / Netlify                      | Desde M2         |
| Staging           | subdomínio `staging.luanalves.com.br` | Desde M5         |
| Produção          | `luanalves.com.br`                    | Após M8 aprovada |

> Cada milestone deve ter um deploy de preview antes de ser considerada concluída.
> Vercel recomendado: deploy automático por branch, preview URLs geradas por PR.

---

# 4. Apêndice A — Copy final por seção

> Substituir pelo texto definitivo aprovado antes de iniciar M2.
> Codex NÃO deve inventar ou manter placeholder após essa milestone.

| Seção             | Copy                                                                                      |
| ----------------- | ----------------------------------------------------------------------------------------- |
| Hero headline     | `Tecnologia que cabe no seu negócio`                                                      |
| Hero subheadline  | `Sistemas sob medida para pequenas empresas que querem crescer sem depender de planilha.` |
| Hero CTA          | `Ver projetos` / `Falar comigo`                                                           |
| Manifesto         | `[inserir texto aprovado]`                                                                |
| Serviços — título | `O que eu faço`                                                                           |
| Serviço 1         | `Sistemas Web — Aplicações sob medida para automatizar o seu negócio.`                    |
| Serviço 2         | `APIs & Integrações — Conexão entre sistemas e ferramentas que você já usa.`              |
| Serviço 3         | `Consultoria — Orientação técnica clara, sem jargão, sem enrolação.`                      |
| Para quem é       | `[inserir texto aprovado]`                                                                |
| Diferencial       | `[inserir texto aprovado]`                                                                |
| Processo          | `[inserir texto aprovado]`                                                                |
| CTA final         | `Vamos conversar?`                                                                        |
| Footer            | `© 2026 Luan Alves · luanalves.com.br`                                                    |

---

# 5. Sequência de milestones

| #   | Nome                              | Complexidade | Depende de |
| --- | --------------------------------- | ------------ | ---------- |
| M1  | Foundation / Astro Base           | Baixa        | —          |
| M2  | Static Home Integration           | Média        | M1         |
| M3  | Componentization + Responsive     | Média        | M2         |
| M4  | Motion Layer 1                    | Média        | M3         |
| M5  | Motion Layer 2 (Scroll Narrative) | Alta         | M4         |
| M6  | Page System + Barba               | Alta         | M5         |
| M7  | Three.js Signature Layer          | Alta         | M5         |
| M8  | Polish / SEO / Performance / A11y | Média        | M6 + M7    |

---

# 6. Milestone 1 — Foundation / Astro Base

**Complexidade:** baixa
**Objetivo:** criar o esqueleto do projeto e definir a base estrutural.

## Entregáveis

- projeto Astro configurado e rodando localmente
- estrutura de pastas criada conforme seção 2
- BaseLayout.astro criado
- tokens visuais definidos em `tokens.css`
- estilos globais mínimos aplicados
- build sem erros

## Tarefas

1. Inicializar projeto Astro
2. Criar estrutura de pastas
3. Criar `BaseLayout.astro`
4. Criar `src/styles/tokens.css` com:
   - cores da marca (`--color-bg`, `--color-green`, `--color-blue`)
   - motion tokens (seção 0 deste documento)
   - spacing scale
   - radius scale
   - typography defaults
5. Criar `src/styles/global.css` com reset e base de layout
6. Garantir que a home renderiza com layout base vazio
7. Preparar imports condicionais para GSAP, Barba e Three sem ativar

## Critérios de aceite

- [ ] projeto roda em `localhost`
- [ ] build passa sem erros
- [ ] tokens visuais aplicados e verificáveis
- [ ] estrutura pronta para componentização
- [ ] nenhum código de animação ativo ainda

## Rollback

Se build falhar ou estrutura não seguir a arquitetura definida: apagar e reiniciar do zero. M1 é a mais simples — não avançar com base frágil.

## Handoff

Codex segue para M2 integrando o HTML do Stitch como home estática.

---

# 7. Milestone 2 — Static Home Integration

**Complexidade:** média
**Objetivo:** transformar o HTML do Stitch em home Astro estática, limpa e fiel.

## Entregáveis

- home estática completa em Astro
- copy da seção 4 deste documento aplicada
- hierarquia de seções preservada
- semântica HTML melhorada
- layout funciona sem JS de animação

## Pré-tarefa obrigatória: auditoria do HTML do Stitch

Antes de integrar, catalogar:

- [ ] wrappers desnecessários (divs sem semântica)
- [ ] classes inline que conflitam com o sistema de tokens
- [ ] IDs duplicados
- [ ] headings fora de ordem (h3 antes de h2, etc.)
- [ ] elementos sem atributos de acessibilidade (alt, aria-label)
- [ ] CSS inline que deve ser extraído
- [ ] scripts embutidos que precisam ser isolados

> Documentar todos os problemas encontrados em comentário no PR antes de prosseguir com a integração.

## Seções esperadas na home (em ordem)

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

## Tarefas

1. Auditar HTML do Stitch (ver pré-tarefa acima)
2. Importar e limpar o HTML para a home Astro
3. Remover wrappers desnecessários
4. Corrigir semântica: `header`, `main`, `section`, `footer`
5. Corrigir ordem de headings
6. Aplicar copy final da seção 4
7. Garantir contraste e legibilidade
8. Corrigir CSS frágil ou dependente de estrutura externa
9. Garantir que a home funciona sem JS de animação

## Critérios de aceite

- [ ] home estática visualmente próxima ao design
- [ ] copy final aplicada em todas as seções
- [ ] semântica correta e verificável
- [ ] layout compreensível em desktop e mobile sem animações
- [ ] nenhum console error

## Rollback

Manter o HTML original do Stitch como branch separada. Se a integração quebrar o visual, reverter para esse estado e auditar novamente.

## Handoff

Codex segue para componentização sem alterar o visual ou inserir motion.

---

# 8. Milestone 3 — Componentization + Responsive Stability

**Complexidade:** média
**Objetivo:** quebrar a home em componentes Astro e consolidar responsividade.

## Entregáveis

- home dividida em componentes por seção
- UI atoms extraídos
- estilos reorganizados por seção
- responsividade consistente desktop/mobile
- markup preparado para hooks de animação

## Componentes a extrair

```
components/layout/
  SiteHeader.astro
  SiteFooter.astro

components/sections/
  HeroSection.astro
  NarrativeBreak.astro      (reutilizável entre as 3 transições)
  ManifestoSection.astro
  ServicesSection.astro
  AudienceSection.astro
  DifferenceSection.astro
  ProcessSection.astro
  FinalCTASection.astro

components/ui/
  Button.astro
  SectionHeading.astro
  Eyebrow.astro
  GridCard.astro
```

## Atributos para futura animação (adicionar agora)

```html
data-animate="reveal" data-section="hero" data-reveal="fade-up"
data-parallax="true" data-sticky="true"
```

## Tarefas

1. Extrair cada seção em componente
2. Extrair UI recorrente
3. Revisar naming e props
4. Reorganizar CSS por seção em `styles/sections/`
5. Ajustar breakpoints
6. Revisar espaçamentos mobile
7. Adicionar atributos `data-*` para futura animação
8. Verificar que a home continua idêntica após componentização

## Critérios de aceite

- [ ] home modularizada e cada seção localizável em < 10 segundos
- [ ] mobile estável em 375px, 768px e 1280px
- [ ] sem regressão visual
- [ ] atributos `data-*` aplicados em todos os elementos relevantes
- [ ] build sem erros

## Rollback

Se a componentização introduzir regressão visual: reverter para M2 aprovada e componentizar uma seção por vez.

## Handoff

Codex pode agora introduzir GSAP. Não misturar estrutura com animação.

---

# 9. Milestone 4 — Motion Layer 1

**Complexidade:** média
**Objetivo:** primeira camada de motion com GSAP — entradas, reveals e microinterações.

## Escopo desta camada

- sem sticky ainda
- sem scroll narrative ainda
- sem Three.js ainda
- sem Barba ainda

## Entregáveis

- entrada do hero animada
- reveal de textos e blocos por seção
- stagger nos cards de serviços
- microinterações em botões e links
- fallback sem JS funcional

## Tarefas

1. Instalar e configurar GSAP + ScrollTrigger
2. Criar utilitários reutilizáveis em `scripts/gsap/utils.js`
3. Hero:
   - headline por linha com stagger
   - subheadline com entrada suave posterior
   - CTA com entrada posterior ao subheadline
4. Reveals por seção usando `data-reveal`
5. Stagger nos cards de serviços
6. Hover refinado em botões, links e cards
7. Garantir fallback: página legível sem JS

## Direção de motion (aplicar tokens da seção 0)

- `--duration-base` para reveals padrão
- `--duration-fast` para microinterações
- `--ease-out` para entradas
- `--ease-spring` apenas para elementos que "saltam" intencionalmente
- translate máximo: `--reveal-y` (32px)
- nada agressivo ou que desvie o olhar do texto

## Critérios de aceite

- [ ] motion eleva sem atrapalhar leitura
- [ ] experiência legível se JS falhar
- [ ] sem queda perceptível de performance (LCP não degradado)
- [ ] tokens de motion sendo usados, sem valores hardcoded

## Rollback

Desativar scripts GSAP. A página deve continuar navegável sem motion.

## Handoff

Motion base pronto. Próxima etapa: scroll como narrativa.

---

# 10. Milestone 5 — Motion Layer 2 (Scroll Narrative)

**Complexidade:** alta
**Objetivo:** narrativa orientada por scroll com sticky sections e progressão cinematográfica.

## Entregáveis

- sticky sections funcionando
- frases narrativas por scroll
- timeline do processo guiada por scroll
- progressão cinemática da home
- mobile simplificado mas coerente

## Seções prioritárias

1. Transição narrativa 1
2. Manifesto
3. Transição narrativa 2
4. Processo
5. Transição narrativa 3

## Tarefas

1. Mapear quais seções recebem `pin: true` no ScrollTrigger
2. Implementar troca de frases por scroll
3. Progressão suave de opacidade, posição e escala
4. Timeline do processo guiada por scroll
5. Ajustar `spacer` vertical para ritmo cinematográfico
6. Mobile: simplificar sticky para fade sequencial sem pin

## Regras obrigatórias

- scroll não pode confundir — o usuário deve entender a estrutura varrendo rápido
- texto sempre legível em qualquer ponto do scroll
- máximo de 3 estados por sticky section
- mobile nunca pode travar o scroll nativo

## Critérios de aceite

- [ ] narrativa por scroll clara e sem confusão
- [ ] sticky funciona em desktop sem quebrar mobile
- [ ] seções contam história, não só fazem efeito
- [ ] performance aceitável (scroll a 60fps)

## Rollback

Desativar ScrollTrigger de sticky. Seções devem funcionar como reveals simples.

## Handoff

Home completa e animada. Projeto pode expandir para múltiplas páginas.

---

# 11. Milestone 6 — Page System + Barba

**Complexidade:** alta
**Objetivo:** múltiplas páginas e transições fluidas com Barba.js.

## Páginas previstas

- `/` — home
- `/about` — sobre Luan
- `/services` — detalhamento de serviços
- `/contact` — formulário e contatos

## Entregáveis

- estrutura de páginas em Astro
- navegação consistente entre páginas
- page transitions com Barba.js
- GSAP reiniciando corretamente após troca de página
- sem memory leaks ou listeners duplicados

## Tarefas

1. Criar páginas adicionais com layout base
2. Padronizar `SiteHeader` e `SiteFooter` entre páginas
3. Integrar Barba.js
4. Definir `data-barba="wrapper"` e `data-barba-namespace` corretamente
5. Criar transição base entre páginas (fade/translate sutil)
6. Implementar `beforeEnter` / `afterEnter` para reinit de GSAP
7. Garantir limpeza de timelines e listeners ao sair de página
8. Testar navegação em loop (A→B→A) sem degradação

## Direção da transição

- sensação de sistema contínuo, não de "reload"
- fade + translate vertical sutil (usar `--reveal-y-subtle`)
- duração: `--duration-base`
- o site reorganiza, não reinicia

## Critérios de aceite

- [ ] transição entre páginas fluida e sem flicker
- [ ] animações da nova página inicializam corretamente
- [ ] sem memory leak detectável após 10 navegações
- [ ] navegação por teclado funciona

## Rollback

Remover Barba.js. Navegação volta a ser padrão do browser sem transição.

## Handoff

Arquitetura de páginas estável. Projeto pode receber camada 3D.

---

# 12. Milestone 7 — Three.js Signature Layer

**Complexidade:** alta
**Objetivo:** assinatura visual 3D pontual e elegante, principalmente no hero.

## Escopo

- hero principal (obrigatório)
- no máximo uma seção adicional se houver justificativa clara

## Direções (em ordem de preferência)

**Opção A — preferida:** grade espacial com profundidade suave e reação ao mouse
**Opção B:** linhas e nós conectados com densidade baixa, cor verde (`#00E5A0`)
**Opção C — experimental:** monograma `{LA;}` em interpretação geométrica abstrata

## Entregáveis

- cena 3D ou background sutil no hero
- integração estável com Astro e demais scripts
- fallback ou simplificação para mobile e dispositivos limitados
- performance aceitável mesmo com Three.js ativo

## Tarefas

1. Definir escopo exato da cena
2. Criar cena otimizada em `scripts/three/hero.js`
3. Integrar canvas ao `HeroSection.astro`
4. Coordenar entrada do canvas com GSAP hero timeline
5. Implementar `matchMedia` para desativar em mobile
6. Testar performance com Three.js + GSAP simultâneos
7. Garantir `dispose()` correto ao trocar de página com Barba

## Regras obrigatórias

- 3D não pode competir com o texto
- 3D não deve ocupar a página inteira como experiência principal
- 3D deve reforçar profundidade e sofisticação, não distrair
- mobile: desativar ou reduzir drasticamente

## Critérios de aceite

- [ ] hero ganha assinatura visual sem comprometer legibilidade
- [ ] LCP não degradado com Three.js ativo
- [ ] mobile simplificado corretamente
- [ ] sem crash ao navegar entre páginas

## Rollback

Remover canvas. Hero funciona com motion GSAP puro (M4).

## Handoff

Camadas de motion e 3D completas. Entrar em polimento final.

---

# 13. Milestone 8 — Polish / SEO / Performance / Accessibility

**Complexidade:** média
**Objetivo:** finalizar o site para produção.

## Entregáveis

- performance revisada e aprovada
- acessibilidade revisada
- SEO e meta tags aplicados
- motion consistente
- código limpo e sem código morto
- QA completo desktop + mobile

## SEO e meta (novo — não estava no documento anterior)

Para cada página:

```html
<title>Luan Alves — Desenvolvimento de Software para Pequenas Empresas</title>
<meta
  name="description"
  content="Sistemas sob medida para pequenas empresas..." />

<!-- Open Graph -->
<meta property="og:title" content="Luan Alves" />
<meta property="og:description" content="..." />
<meta property="og:image" content="/og-image.png" />
<meta property="og:url" content="https://luanalves.com.br" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
```

Adicionalmente:

- `sitemap.xml` gerado pelo Astro
- `robots.txt`
- Schema markup: `Person` + `ProfessionalService`
- Canonical URLs

## Tarefas de performance

1. Revisar CLS, LCP e INP no Lighthouse
2. Reduzir peso de assets (imagens otimizadas, fontes com `display: swap`)
3. Lazy load de Three.js e GSAP onde possível
4. Garantir que motion pesado só roda quando necessário (`prefers-reduced-motion`)
5. Revisar carregamento de scripts (defer / async)

## Tarefas de acessibilidade

1. Navegação por teclado em todos os elementos interativos
2. Estados de foco visíveis
3. Contraste mínimo 4.5:1 em todos os textos
4. `prefers-reduced-motion: reduce` desativa animações
5. Alt text em todas as imagens
6. Aria labels onde necessário
7. Experiência funcional sem JS

## Tarefas de código

1. Remover `console.log` e código de debug
2. Remover timelines e listeners duplicados
3. Limpar código experimental não usado
4. Revisar imports não utilizados

## Critérios de aceite

- [ ] Lighthouse Performance ≥ 85 em mobile
- [ ] Lighthouse Accessibility ≥ 90
- [ ] sem regressão visual em desktop e mobile
- [ ] meta tags e OG aplicados em todas as páginas
- [ ] sitemap e robots.txt presentes
- [ ] `prefers-reduced-motion` funcionando
- [ ] site navegável sem JS

## Definição de pronto

O projeto é considerado pronto quando:

- a home está fiel à direção visual
- a experiência de scroll está refinada e clara
- o site está responsivo e testado em 375px, 768px e 1280px
- as animações parecem intencionais, não excessivas
- Barba está estável entre todas as páginas
- Three.js está controlado e leve
- SEO básico está aplicado
- performance e acessibilidade estão em nível aceitável
- a mensagem principal está clara nos primeiros 3 segundos: **tecnologia clara, moderna e acessível para pequenas empresas**

---

# 14. Ordem operacional para o Codex

**Fase A — Base**

1. criar base Astro
2. definir tokens (incluindo motion tokens)
3. integrar e auditar HTML do Stitch
4. limpar estrutura
5. estabilizar layout estático com copy final

**Fase B — Estrutura** 6. componentizar seções 7. organizar estilos 8. estabilizar responsividade 9. adicionar atributos `data-*`

**Fase C — Motion base** 10. integrar GSAP 11. hero motion 12. reveals por seção 13. hovers e stagger

**Fase D — Scroll narrative** 14. sticky sections 15. narrativa por scroll 16. timeline do processo

**Fase E — Navegação avançada** 17. estruturar páginas 18. integrar Barba 19. coordenar lifecycle das animações

**Fase F — Assinatura visual** 20. integrar Three.js no hero 21. simplificar mobile 22. otimizar performance

**Fase G — Finalização** 23. SEO e meta tags 24. acessibilidade 25. performance 26. QA geral 27. limpeza final

---

# 15. Regras de handoff entre milestones

**Regra 1 — Estado de entrega**
Cada milestone termina com:

- build passando sem erros
- sem erro crítico no console
- experiência navegável
- deploy de preview ativo
- commit isolado com mensagem clara

**Regra 2 — Revisão antes de avançar**
Antes de começar a próxima milestone, verificar:

- regressão visual
- impacto em mobile
- impacto em performance
- risco de acoplamento excessivo

**Regra 3 — Separação de responsabilidades**
Não misturar objetivos:

- milestone de estrutura → não introduzir Three.js
- milestone de GSAP base → não puxar Barba
- milestone de scroll narrative → não redesenhar tipografia

**Regra 4 — Clareza sempre ganha**
Se houver dúvida entre "mais efeito" e "mais clareza": escolher clareza.

**Regra 5 — Rollback documentado**
Se uma milestone falhar nos critérios de aceite: reverter para o commit anterior aprovado, documentar o bloqueio com precisão (o que falhou, por quê, o que foi tentado) e não avançar até resolução.

---

# 16. Prompts resumidos por milestone (para uso direto com Codex)

**M1 — Foundation**

> "Crie a base do projeto em Astro com estrutura de pastas limpa, BaseLayout, tokens visuais completos (incluindo motion tokens definidos no milestones.md) e estilos globais. Não implemente animações ainda."

**M2 — Static Integration**

> "Antes de integrar, audite o HTML do Stitch e documente todos os problemas encontrados. Depois monte a home estática em Astro, preservando fidelidade visual, aplicando a copy final do milestones.md, melhorando semântica e mantendo a página clara sem animações."

**M3 — Componentization**

> "Quebre a home em componentes por seção conforme a estrutura do milestones.md, extraia UI recorrente, estabilize responsividade em 375/768/1280px e adicione atributos data-\* para futura animação."

**M4 — Motion Layer 1**

> "Integre GSAP para hero entrance, reveal de textos, stagger de cards e microinterações. Use exclusivamente os motion tokens definidos no milestones.md. Mantenha fallback funcional sem JS."

**M5 — Motion Layer 2**

> "Implemente sticky sections e scroll narrative nas transições e no processo usando ScrollTrigger. Máximo 3 estados por seção sticky. Mobile deve usar fade sequencial sem pin."

**M6 — Page System + Barba**

> "Estruture as páginas e adicione transições com Barba.js. Garanta reinit correto do GSAP após troca de página e ausência de memory leaks. Teste navegação em loop A→B→A."

**M7 — Three.js**

> "Adicione cena 3D pontual no hero usando Three.js. Prioridade: profundidade sutil, boa performance, integração com GSAP timeline e dispose() correto para Barba. Desativar em mobile."

**M8 — Polish**

> "Revise performance (Lighthouse ≥ 85 mobile), acessibilidade (≥ 90), aplique SEO completo com meta, OG, sitemap e schema markup. Limpe código morto e prepare o projeto para produção."
