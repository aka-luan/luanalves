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
      type: 'table';
      caption?: string;
      columns: string[];
      rows: string[][];
    }
  | {
      type: 'faq';
      items: {
        question: string;
        answer: string;
      }[];
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

const checklistInsight: InsightPost = {
  title:
    'Checklist para lançamento de site empresarial: o que revisar antes de publicar',
  excerpt:
    'Um guia prático para revisar conteúdo, SEO, performance, formulários, segurança e conversão antes de colocar um site no ar.',
  description:
    'Veja o checklist para lançamento de site empresarial e revise conteúdo, mobile, SEO, velocidade, formulários, SSL, analytics e pós-lançamento antes de publicar.',
  category: 'SEO',
  categorySlug: 'seo',
  date: '05 jun. 2026',
  isoDate: '2026-06-05',
  readTime: '14 min',
  slug: 'checklist-lancamento-site-empresarial',
  tags: ['Checklist', 'Lançamento', 'SEO', 'Conversão'],
  heroImage: '/assets/insights/checklist-lancamento-post.webp',
  heroImageAlt:
    'Mesa de trabalho escura com notebook em revisão final de site empresarial antes do lançamento.',
  published: true,
  author: {
    name: 'Luan Alves',
    role: 'Desenvolvedor web freelancer',
    bio: 'Desenvolvo sites, blogs e landing pages com foco em performance, SEO técnico e conversão via WhatsApp.',
  },
  content: [
    {
      type: 'paragraph',
      text: 'Antes de publicar um site empresarial, revise pelo menos estes pontos: conteúdo, versão mobile, links, formulários, SEO básico, velocidade, domínio, SSL, analytics e segurança. Lançar um site sem essa revisão aumenta o risco de perder credibilidade, visitas e contatos logo no início.',
    },
    {
      type: 'paragraph',
      text: 'Na prática, o lançamento não é momento de descobrir erro de texto, botão quebrado ou página lenta. Site empresarial precisa entrar no ar com aparência confiável, estrutura indexável e caminho claro para conversão.',
    },
    {
      type: 'table',
      caption:
        'Tabela-resumo do que revisar antes de publicar um site empresarial.',
      columns: ['Área', 'O que revisar antes do lançamento'],
      rows: [
        ['Conteúdo', 'Textos, dados de contato, clareza da oferta e CTAs'],
        ['Design e mobile', 'Responsividade, leitura, contraste e navegação'],
        ['Links e botões', 'Menu, logo, botões, redes sociais e 404'],
        ['Conversão', 'Formulários, WhatsApp, telefone e e-mail clicáveis'],
        [
          'SEO básico',
          'Title, description, H1, headings, URLs, sitemap e robots',
        ],
        ['Performance', 'Imagens, scripts, fontes, cache e Core Web Vitals'],
        ['Infraestrutura', 'Domínio, SSL, redirects, DNS e versão final'],
        ['Métricas', 'Analytics, Search Console e eventos principais'],
        ['Segurança', 'Backup, acessos, spam e atualizações'],
        ['Pós-lançamento', 'Indexação, testes finais e monitoramento inicial'],
      ],
    },
    {
      type: 'heading',
      id: 'por-que-usar-um-checklist-antes-de-publicar',
      level: 2,
      text: 'Por que usar um checklist antes de publicar um site?',
    },
    {
      type: 'paragraph',
      text: 'Porque erro pequeno em lançamento costuma virar problema grande depois. Um formulário que não envia, um WhatsApp sem mensagem pronta, uma página com title duplicado ou uma versão mobile mal resolvida já bastam para reduzir confiança e derrubar conversão.',
    },
    {
      type: 'blockquote',
      text: 'Site pronto não é site apenas bonito. Site pronto é site revisado, testado e preparado para receber visita, indexar bem e gerar contato.',
    },
    {
      type: 'heading',
      id: 'revise-o-conteudo-de-todas-as-paginas',
      level: 2,
      text: '1. Revise o conteúdo de todas as páginas',
    },
    {
      type: 'paragraph',
      text: 'O primeiro filtro é simples: o visitante entende o que a empresa faz, para quem ela trabalha e qual é o próximo passo? Antes de publicar, releia home, serviços, sobre, contato e qualquer landing page com olhar comercial, não só visual.',
    },
    {
      type: 'list',
      items: [
        'Corrija erros de português, acentuação e consistência de tom.',
        'Atualize telefone, e-mail, endereço, links de redes sociais e horários.',
        'Confirme se cada página tem título claro e proposta de valor objetiva.',
        'Revise chamadas para ação, principalmente nos pontos de contato.',
        'Remova textos genéricos, placeholder e promessas vagas.',
        'Cheque se serviços, diferenciais e prova social estão fáceis de encontrar.',
      ],
    },
    {
      type: 'heading',
      id: 'confira-se-o-site-funciona-bem-no-celular',
      level: 2,
      text: '2. Confira se o site funciona bem no celular',
    },
    {
      type: 'paragraph',
      text: 'Boa parte do tráfego empresarial chega pelo celular. Se o visitante precisa dar zoom para ler, tocar duas vezes para abrir menu ou lutar com formulário, o site já entra devendo. Revisão mobile não é detalhe. É parte do lançamento.',
    },
    {
      type: 'list',
      items: [
        'Menu mobile abre e fecha sem travar.',
        'Botões têm tamanho confortável para toque.',
        'Títulos longos não quebram de forma estranha.',
        'Imagens não cortam informação importante.',
        'Formulários são simples de preencher no teclado do celular.',
        'WhatsApp, telefone e e-mail podem ser acionados com um toque.',
        'Leitura segue clara em 4G, sem atraso exagerado no carregamento.',
      ],
    },
    {
      type: 'heading',
      id: 'teste-todos-os-links-e-botoes',
      level: 2,
      text: '3. Teste todos os links e botões',
    },
    {
      type: 'paragraph',
      text: 'Muita empresa revisa layout e esquece fluxo. Link quebrado em lançamento passa uma sensação imediata de descuido. O teste precisa incluir navegação principal, rodapé, botões de CTA, logo e rotas secundárias.',
    },
    {
      type: 'list',
      items: [
        'Itens do menu levam para a página ou seção certa.',
        'Logo volta para a home.',
        'Botões de orçamento e contato funcionam.',
        'Links internos ajudam a continuar a navegação.',
        'Links externos abrem corretamente.',
        'Redes sociais apontam para perfis reais.',
        'Página 404 existe e orienta o visitante.',
      ],
    },
    {
      type: 'heading',
      id: 'teste-formularios-whatsapp-e-canais-de-contato',
      level: 2,
      text: '4. Teste formulários, WhatsApp e canais de contato',
    },
    {
      type: 'paragraph',
      text: 'Esse é um dos pontos mais importantes do checklist. Se a empresa depende de orçamento, lead ou agendamento, o contato precisa funcionar sem ambiguidade. Não basta o formulário aparecer. Ele precisa enviar, confirmar e direcionar a conversa do jeito certo.',
    },
    {
      type: 'heading',
      id: 'o-que-validar-nos-canais-de-contato',
      level: 3,
      text: 'O que validar nos canais de contato',
    },
    {
      type: 'list',
      items: [
        'Formulário envia para o e-mail correto.',
        'Campos obrigatórios e mensagens de erro funcionam.',
        'Mensagem de sucesso aparece com clareza.',
        'Proteção contra spam está ativa.',
        'Link do WhatsApp abre com mensagem inicial pronta.',
        'Telefone e e-mail estão clicáveis.',
        'Se houver mapa ou endereço, a informação está correta.',
      ],
    },
    {
      type: 'heading',
      id: 'revise-o-seo-basico-antes-de-indexar',
      level: 2,
      text: '5. Revise o SEO básico antes de indexar',
    },
    {
      type: 'paragraph',
      text: 'Publicar sem SEO básico significa abrir mão de entendimento técnico logo na primeira leitura do Google e de mecanismos com IA. O objetivo aqui não é fazer otimização profunda no dia do lançamento, mas garantir uma base limpa, coerente e rastreável.',
    },
    {
      type: 'list',
      items: [
        'Cada página tem title tag específica.',
        'Meta description resume a proposta com clareza.',
        'Existe um H1 por página.',
        'H2 e H3 seguem hierarquia lógica.',
        'URLs são amigáveis e sem versões provisórias.',
        'Imagens importantes têm alt text descritivo.',
        'Canonical está correto quando necessário.',
        'Sitemap XML e robots.txt estão acessíveis.',
        'Search Console pode receber a versão final do site.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Frase simples para guardar: site empresarial deve entrar no ar com sinais claros de estrutura. Título, headings, URLs e indexação não são acabamento. São fundação.',
    },
    {
      type: 'heading',
      id: 'verifique-velocidade-e-performance',
      level: 2,
      text: '6. Verifique velocidade e performance',
    },
    {
      type: 'paragraph',
      text: 'Página lenta piora experiência, reduz conversão e costuma prejudicar a primeira impressão da marca. O visitante talvez não saiba explicar Core Web Vitals, mas percebe quando o site demora, treme ou trava.',
    },
    {
      type: 'list',
      items: [
        'Imagens estão em formato otimizado, como WebP quando fizer sentido.',
        'Arquivos pesados foram comprimidos.',
        'Lazy loading está configurado para imagens fora da dobra.',
        'CSS e JS não carregam mais do que o necessário.',
        'Fontes não bloqueiam leitura inicial.',
        'Cache e hospedagem estão coerentes com o projeto.',
        'Pelo menos uma checagem no PageSpeed Insights foi feita antes de publicar.',
      ],
    },
    {
      type: 'heading',
      id: 'confira-dominio-hospedagem-e-ssl',
      level: 2,
      text: '7. Confira domínio, hospedagem e SSL',
    },
    {
      type: 'paragraph',
      text: 'Parte técnica invisível também afeta lançamento. Um site pode estar bonito e ainda assim abrir sem HTTPS, resolver DNS errado ou manter versão antiga em subdomínio de testes. Tudo isso precisa ser validado antes da divulgação.',
    },
    {
      type: 'list',
      items: [
        'Domínio aponta para o ambiente certo.',
        'Certificado SSL está ativo.',
        'HTTP redireciona para HTTPS.',
        'Versões com e sem www seguem uma regra consistente.',
        'Ambiente de teste, staging ou versão temporária não está exposto indevidamente.',
        'DNS e e-mails do domínio estão funcionando como esperado.',
      ],
    },
    {
      type: 'heading',
      id: 'configure-analytics-search-console-e-eventos',
      level: 2,
      text: '8. Configure Analytics, Search Console e eventos',
    },
    {
      type: 'paragraph',
      text: 'Lançar sem medição transforma decisão em chute. Desde o primeiro dia, a empresa precisa saber se o site está recebendo visitas, quais páginas são mais vistas e quais cliques indicam intenção comercial.',
    },
    {
      type: 'list',
      items: [
        'Google Analytics ou ferramenta equivalente instalada.',
        'Google Search Console preparado para a propriedade final.',
        'Eventos importantes configurados, como clique em WhatsApp e envio de formulário.',
        'Tag Manager, se usado, publicado na versão correta.',
        'Metas ou conversões principais mapeadas desde o início.',
      ],
    },
    {
      type: 'heading',
      id: 'revise-seguranca-e-backups',
      level: 2,
      text: '9. Revise segurança e backups',
    },
    {
      type: 'paragraph',
      text: 'Segurança não é tema para depois do lançamento. O ideal é entrar no ar já com acesso controlado, backup recente e superfície desnecessária removida. Isso vale ainda mais para sites com CMS, plugins ou integrações de terceiros.',
    },
    {
      type: 'list',
      items: [
        'Existe backup antes da publicação final.',
        'Senhas fortes e acessos revisados.',
        'Usuários temporários foram removidos.',
        'Plugins, extensões ou scripts desnecessários foram eliminados.',
        'Atualizações essenciais já foram aplicadas.',
        'Medidas anti-spam foram ativadas em formulários.',
      ],
    },
    {
      type: 'heading',
      id: 'faca-uma-revisao-final-de-experiencia',
      level: 2,
      text: '10. Faça uma revisão final de experiência',
    },
    {
      type: 'paragraph',
      text: 'Aqui entra o olhar de quem visita o site pela primeira vez. Em poucos segundos, o usuário precisa entender o que a empresa faz, por que ela parece confiável e como pode iniciar contato. Se isso não estiver claro, ainda não é hora de publicar.',
    },
    {
      type: 'list',
      items: [
        'A proposta da empresa aparece logo na primeira dobra.',
        'Os serviços são fáceis de localizar.',
        'Existe CTA claro em páginas importantes.',
        'A navegação está simples e previsível.',
        'O site transmite confiança visual e textual.',
        'Portfólio, depoimentos ou diferenciais reforçam credibilidade.',
        'A página de contato está acessível sem fricção.',
      ],
    },
    {
      type: 'heading',
      id: 'o-que-fazer-depois-que-o-site-entra-no-ar',
      level: 2,
      text: '11. O que fazer depois que o site entra no ar?',
    },
    {
      type: 'paragraph',
      text: 'Publicar não encerra o trabalho. Os primeiros dias servem para confirmar se a versão final está respondendo bem em produção, se a medição está correta e se o site está pronto para começar a ganhar tração orgânica e comercial.',
    },
    {
      type: 'list',
      items: [
        'Teste novamente formulários e WhatsApp no domínio final.',
        'Envie sitemap para o Google Search Console.',
        'Confira indexação e possíveis bloqueios.',
        'Monitore velocidade e erros técnicos.',
        'Acompanhe cliques, leads e comportamento das principais páginas.',
        'Revise o site após 7, 15 e 30 dias para ajustes finos.',
      ],
    },
    {
      type: 'heading',
      id: 'perguntas-frequentes',
      level: 2,
      text: 'Perguntas frequentes sobre lançamento de site empresarial',
    },
    {
      type: 'faq',
      items: [
        {
          question: 'O que revisar antes de lançar um site?',
          answer:
            'Antes do lançamento, revise conteúdo, mobile, links, formulários, SEO básico, velocidade, domínio, SSL, analytics e segurança. Esses pontos reduzem risco de erro técnico e melhoram a percepção de profissionalismo.',
        },
        {
          question: 'Preciso configurar SEO antes de publicar o site?',
          answer:
            'Sim. O ideal é publicar com a base de SEO pronta: title, meta description, H1, headings, URLs amigáveis, sitemap, robots.txt e indexação preparada para Search Console.',
        },
        {
          question:
            'Quanto tempo leva para revisar um site antes do lançamento?',
          answer:
            'Depende do tamanho do projeto. Uma revisão básica pode levar algumas horas. Sites empresariais maiores, com mais páginas, integrações e aprovações, podem exigir alguns dias.',
        },
        {
          question:
            'O site deve ser indexado antes ou depois da revisão final?',
          answer:
            'Depois da revisão final. Assim você evita que páginas incompletas, links temporários ou conteúdo provisório sejam rastreados cedo demais.',
        },
        {
          question: 'O que fazer logo depois de publicar um site?',
          answer:
            'Teste tudo no domínio final, envie sitemap, acompanhe Search Console e analytics, monitore formulários e observe conversões nos primeiros dias.',
        },
      ],
    },
    {
      type: 'heading',
      id: 'proximo-passo',
      level: 2,
      text: 'Próximo passo',
    },
    {
      type: 'paragraph',
      text: 'Se sua empresa está perto de publicar, a melhor decisão é revisar estrutura, conversão e base técnica antes de divulgar o link. Corrigir isso no pré-lançamento custa menos do que recuperar confiança e lead perdido depois.',
    },
    {
      type: 'links',
      items: [
        {
          href: '/criacao-de-sites/',
          label: 'Criação de sites',
          text: 'Veja como estruturo sites profissionais com base técnica, clareza comercial e revisão antes do lançamento.',
        },
        {
          href: '/site-institucional/',
          label: 'Site institucional',
          text: 'Entenda o formato ideal para empresas que precisam apresentar serviços com mais autoridade e confiança.',
        },
        {
          href: '/blog-profissional/',
          label: 'Blog profissional',
          text: 'Conheça a estrutura para publicar conteúdo indexável e conectar SEO com geração de contatos.',
        },
        {
          href: 'https://wa.me/5591982890565?text=Ol%C3%A1%2C%20Luan!%20Li%20o%20artigo%20sobre%20checklist%20de%20lan%C3%A7amento%20de%20site%20e%20quero%20revisar%20meu%20projeto%20antes%20de%20publicar.',
          label: 'Falar no WhatsApp',
          text: 'Se quiser revisar seu site antes de publicar, me chama e eu te ajudo a validar estrutura, SEO básico e conversão.',
        },
      ],
    },
  ],
};

const siteInstitucionalInsight: InsightPublishedPost = {
  title:
    'Site institucional: o que precisa ter para gerar confiança e contatos?',
  excerpt:
    'Os elementos que fazem um site institucional transmitir credibilidade, explicar serviços com clareza e facilitar o contato comercial.',
  description:
    'Veja o que um site institucional precisa ter para transmitir confiança, apresentar sua empresa com clareza, aparecer no Google e gerar contatos qualificados.',
  category: 'Estrutura',
  categorySlug: 'desenvolvimento',
  date: '05 jun. 2026',
  isoDate: '2026-06-05',
  readTime: '13 min',
  slug: 'site-institucional-o-que-precisa-ter',
  tags: ['Site institucional', 'Conversão', 'Credibilidade', 'SEO'],
  published: true,
  heroImage: '/assets/insights/site-institucional-post.webp',
  heroImageAlt:
    'Tela de site institucional profissional em ambiente escuro, com foco em apresentação de serviços e contato.',
  author: {
    name: 'Luan Alves',
    role: 'Desenvolvedor web freelancer',
    bio: 'Desenvolvo sites, blogs e landing pages com foco em performance, SEO técnico e conversão via WhatsApp.',
  },
  content: [
    {
      type: 'paragraph',
      text: 'Um site institucional precisa, no mínimo, combinar proposta de valor clara, design profissional, serviços bem explicados, prova de confiança, boa experiência no celular, SEO básico e caminhos de contato fáceis. Quando esses elementos trabalham juntos, o site deixa de ser apenas uma vitrine e passa a apoiar percepção de marca, busca orgânica e geração de orçamento.',
    },
    {
      type: 'paragraph',
      text: 'Na prática, o visitante decide muito rápido se a empresa parece confiável. Se a mensagem estiver vaga, o layout parecer improvisado ou o contato estiver escondido, a chance de abandono aumenta. Por isso, um site institucional profissional precisa reduzir dúvidas e orientar o próximo passo sem atrito.',
    },
    {
      type: 'table',
      caption:
        'Resumo dos elementos que não podem faltar em um site institucional profissional.',
      columns: ['Elemento', 'Por que importa'],
      rows: [
        [
          'Proposta de valor clara',
          'Explica rapidamente o que a empresa faz e para quem faz.',
        ],
        [
          'Design profissional',
          'Transmite credibilidade e reforça posicionamento.',
        ],
        [
          'Navegação simples',
          'Ajuda o visitante a encontrar o que precisa sem esforço.',
        ],
        [
          'Página Sobre bem construída',
          'Humaniza a marca e contextualiza a empresa.',
        ],
        [
          'Serviços bem explicados',
          'Deixa a oferta compreensível e comercialmente forte.',
        ],
        [
          'Diferenciais reais',
          'Mostra por que escolher a empresa e não só o concorrente.',
        ],
        [
          'Provas de confiança',
          'Reduz objeções com portfólio, depoimentos e sinais de autoridade.',
        ],
        [
          'CTAs bem posicionados',
          'Conduz o visitante para contato ou orçamento.',
        ],
        [
          'Contato fácil',
          'Diminui fricção com WhatsApp, formulário e canais diretos.',
        ],
        [
          'Versão mobile consistente',
          'Garante boa experiência na principal origem de tráfego.',
        ],
        [
          'SEO básico desde o início',
          'Ajuda o site a ser entendido e encontrado no Google.',
        ],
        [
          'Performance e segurança',
          'Melhora experiência, confiança e estabilidade técnica.',
        ],
      ],
    },
    {
      type: 'heading',
      id: 'o-que-e-um-site-institucional',
      level: 2,
      text: 'O que é um site institucional?',
    },
    {
      type: 'paragraph',
      text: 'Site institucional é a presença oficial da empresa na internet. Ele organiza apresentação da marca, serviços, diferenciais, provas de confiança, conteúdo e canais de contato em uma estrutura que facilita entendimento e decisão.',
    },
    {
      type: 'blockquote',
      text: 'Um site institucional profissional não serve só para dizer que a empresa existe. Ele precisa explicar valor, reduzir dúvidas e facilitar o contato.',
    },
    {
      type: 'heading',
      id: 'proposta-de-valor-clara-na-primeira-dobra',
      level: 2,
      text: '1. Proposta de valor clara na primeira dobra',
    },
    {
      type: 'paragraph',
      text: 'A primeira tela precisa responder três perguntas: o que a empresa faz, para quem faz e qual é o próximo passo esperado do visitante. Isso normalmente aparece em forma de título objetivo, subtítulo útil e uma CTA visível.',
    },
    {
      type: 'list',
      items: [
        'Título principal direto, sem frase genérica.',
        'Subtítulo com contexto, benefício e tipo de serviço.',
        'CTA clara para orçamento, conversa ou diagnóstico.',
        'Algum sinal rápido de autoridade, como nicho, tempo de atuação ou resultado.',
      ],
    },
    {
      type: 'heading',
      id: 'design-profissional-alinhado-a-marca',
      level: 2,
      text: '2. Design profissional alinhado à marca',
    },
    {
      type: 'paragraph',
      text: 'Design institucional não é só estética. É percepção de cuidado, clareza e coerência. Tipografia, contraste, hierarquia, ritmo visual e imagens precisam ajudar a empresa a parecer tão profissional quanto ela realmente é.',
    },
    {
      type: 'paragraph',
      text: 'Em um site institucional, o design precisa fazer a empresa parecer tão profissional quanto ela é.',
    },
    {
      type: 'heading',
      id: 'navegacao-simples-e-estrutura-clara',
      level: 2,
      text: '3. Navegação simples e estrutura clara',
    },
    {
      type: 'paragraph',
      text: 'O menu deve refletir o caminho de decisão do cliente, não a organização interna da empresa. Quando a navegação é confusa, o visitante perde contexto e tende a sair antes de entender a oferta.',
    },
    {
      type: 'list',
      items: [
        'Início',
        'Sobre',
        'Serviços',
        'Diferenciais ou metodologia',
        'Projetos, portfólio ou cases',
        'Contato',
      ],
    },
    {
      type: 'heading',
      id: 'pagina-sobre-bem-construida',
      level: 2,
      text: '4. Página Sobre bem construída',
    },
    {
      type: 'paragraph',
      text: 'A página Sobre não deve ser um texto institucional vazio. Ela precisa mostrar contexto, posicionamento, experiência e forma de atendimento com linguagem concreta. Isso humaniza a empresa e ajuda o visitante a confiar mais rápido.',
    },
    {
      type: 'list',
      items: [
        'História da empresa sem excesso de autopromoção.',
        'Posicionamento claro e realista.',
        'Segmentos atendidos ou área de atuação.',
        'Modo de trabalho, equipe ou responsável direto.',
        'Informações que sustentem confiança, não só adjetivos.',
      ],
    },
    {
      type: 'heading',
      id: 'servicos-bem-explicados',
      level: 2,
      text: '5. Serviços bem explicados',
    },
    {
      type: 'paragraph',
      text: 'Muita empresa cita serviços sem explicar para quem são, que problema resolvem e como funcionam. Em um site institucional, isso enfraquece tanto a conversão quanto a leitura de SEO. Serviço precisa ser apresentado com clareza comercial.',
    },
    {
      type: 'list',
      items: [
        'O que é o serviço.',
        'Para quem ele faz sentido.',
        'Qual dor ou objetivo ele atende.',
        'Como funciona a entrega.',
        'Qual o próximo passo para pedir orçamento.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Se sua empresa precisa estruturar essa base com mais profundidade, vale olhar a página de criação de sites e entender como cada formato atende um momento diferente do negócio.',
    },
    {
      type: 'heading',
      id: 'diferenciais-reais-da-empresa',
      level: 2,
      text: '6. Diferenciais reais da empresa',
    },
    {
      type: 'paragraph',
      text: 'Diferencial útil não é “qualidade e compromisso”. Diferencial útil é algo que ajuda o cliente a comparar propostas e sentir segurança na escolha. Atendimento direto, processo claro, suporte, especialização e velocidade de execução contam mais do que slogans.',
    },
    {
      type: 'list',
      items: [
        'Atendimento direto com quem executa.',
        'Prazo e escopo mais claros.',
        'Especialização em um tipo de serviço ou segmento.',
        'Base técnica de SEO e performance desde o início.',
        'Suporte depois do lançamento.',
      ],
    },
    {
      type: 'heading',
      id: 'provas-de-confianca',
      level: 2,
      text: '7. Provas de confiança',
    },
    {
      type: 'paragraph',
      text: 'Portfólio, depoimentos, logos de clientes, números e cases ajudam a empresa a parecer verificável. Isso é importante porque confiança online não nasce só do texto institucional. Ela depende de evidência.',
    },
    {
      type: 'paragraph',
      text: 'Se a empresa já tem projetos publicados, o ideal é levar o visitante para exemplos reais em vez de prometer resultado sem mostrar contexto.',
    },
    {
      type: 'heading',
      id: 'ctas-bem-posicionadas',
      level: 2,
      text: '8. CTAs bem posicionadas',
    },
    {
      type: 'paragraph',
      text: 'Um erro comum é deixar o botão de contato só no final da página. O site institucional precisa ter chamadas para ação em pontos estratégicos, acompanhando o avanço da confiança do visitante.',
    },
    {
      type: 'list',
      items: [
        'CTA na primeira dobra.',
        'CTA depois dos serviços.',
        'CTA após provas de confiança.',
        'CTA repetida no rodapé ou no bloco final.',
      ],
    },
    {
      type: 'heading',
      id: 'contato-facil-whatsapp-formulario-e-canais-diretos',
      level: 2,
      text: '9. Contato fácil: WhatsApp, formulário e canais diretos',
    },
    {
      type: 'paragraph',
      text: 'Para boa parte das empresas brasileiras, WhatsApp é parte central da conversão. O contato precisa ser simples, clicável e rápido. Se o visitante quiser falar, ele não pode precisar procurar demais para isso.',
    },
    {
      type: 'list',
      items: [
        'WhatsApp com mensagem inicial pronta quando fizer sentido.',
        'Formulário simples, com poucos campos.',
        'Telefone e e-mail clicáveis.',
        'Endereço e horário, se forem relevantes para o tipo de negócio.',
      ],
    },
    {
      type: 'heading',
      id: 'versao-mobile-bem-pensada',
      level: 2,
      text: '10. Versão mobile bem pensada',
    },
    {
      type: 'paragraph',
      text: 'Responsividade não é só adaptar blocos para caber na tela. O site precisa continuar legível, rápido e fácil de usar em 4G, com menu estável, botões tocáveis e hierarquia clara.',
    },
    {
      type: 'list',
      items: [
        'Texto legível sem zoom.',
        'Botões confortáveis para toque.',
        'Menu mobile simples.',
        'Imagens sem cortes problemáticos.',
        'Contato visível durante a navegação.',
      ],
    },
    {
      type: 'heading',
      id: 'seo-basico-desde-o-inicio',
      level: 2,
      text: '11. SEO básico desde o início',
    },
    {
      type: 'paragraph',
      text: 'Mesmo um site institucional pequeno precisa nascer com base técnica limpa. Title, description, headings, URLs amigáveis, imagens com alt, dados estruturados quando cabem e links internos ajudam o Google a entender a página desde o começo.',
    },
    {
      type: 'list',
      items: [
        'Title específico por página.',
        'Meta description útil, sem duplicação.',
        'Um H1 por página e H2/H3 coerentes.',
        'URLs curtas e legíveis.',
        'Links internos para serviços e conteúdos relacionados.',
        'Base pronta para sitemap, robots e indexação.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Para negócios com atuação regional, também faz sentido observar como uma página local pode reforçar presença em buscas geográficas, como no caso de criação de sites em Belém.',
    },
    {
      type: 'heading',
      id: 'performance-seguranca-e-manutencao',
      level: 2,
      text: '12. Performance, segurança e manutenção',
    },
    {
      type: 'paragraph',
      text: 'Parte da confiança do site institucional vem daquilo que o usuário nem sempre consegue nomear: carregamento rápido, estabilidade, HTTPS, formulários funcionando e manutenção básica em dia. Quando isso falha, a credibilidade cai junto.',
    },
    {
      type: 'list',
      items: [
        'Imagens otimizadas.',
        'Código enxuto e sem excesso de scripts.',
        'SSL ativo.',
        'Proteção contra spam nos formulários.',
        'Rotina mínima de atualização e revisão.',
      ],
    },
    {
      type: 'heading',
      id: 'estrutura-ideal-de-um-site-institucional',
      level: 2,
      text: 'Estrutura ideal de um site institucional',
    },
    {
      type: 'paragraph',
      text: 'A estrutura ideal varia conforme o momento da empresa, mas existe uma base recorrente que costuma funcionar bem para apresentação, autoridade e conversão.',
    },
    {
      type: 'list',
      items: [
        'Home com proposta de valor, serviços, diferenciais, provas e CTA.',
        'Sobre com contexto e posicionamento.',
        'Serviços com páginas ou blocos claros para cada solução principal.',
        'Portfólio, projetos ou cases quando houver material real.',
        'Contato com WhatsApp, formulário e canais diretos.',
        'Blog ou Insights para fortalecer presença orgânica quando a empresa quer crescer em SEO.',
      ],
    },
    {
      type: 'heading',
      id: 'o-que-um-site-institucional-nao-precisa-ter',
      level: 2,
      text: 'O que um site institucional não precisa ter?',
    },
    {
      type: 'paragraph',
      text: 'Nem todo elemento “bonito” ajuda o site a vender melhor. Em muitos casos, excesso visual e estrutura sem estratégia atrapalham mais do que ajudam.',
    },
    {
      type: 'list',
      items: [
        'Animações em excesso.',
        'Textos institucionais genéricos.',
        'Menu confuso ou inflado.',
        'Formulários longos demais.',
        'Banners rotativos sem função real.',
        'Banco de imagens que não comunicam confiança.',
        'Blog abandonado apenas para “parecer completo”.',
      ],
    },
    {
      type: 'heading',
      id: 'checklist-final-antes-de-publicar',
      level: 2,
      text: 'Checklist final antes de publicar',
    },
    {
      type: 'paragraph',
      text: 'Antes de colocar o site no ar, faça uma revisão curta e objetiva. Isso evita lançar uma estrutura bonita, mas frágil do ponto de vista comercial e técnico.',
    },
    {
      type: 'list',
      items: [
        'A primeira dobra explica o valor da empresa com clareza.',
        'Os serviços estão compreensíveis e atualizados.',
        'Há prova de confiança real.',
        'As CTAs aparecem nos pontos certos.',
        'WhatsApp e formulário funcionam.',
        'A versão mobile está confortável.',
        'O SEO básico foi configurado.',
        'O site abre rápido e com HTTPS ativo.',
      ],
    },
    {
      type: 'heading',
      id: 'perguntas-frequentes',
      level: 2,
      text: 'Perguntas frequentes sobre site institucional',
    },
    {
      type: 'faq',
      items: [
        {
          question: 'O que não pode faltar em um site institucional?',
          answer:
            'Não podem faltar proposta de valor clara, design profissional, serviços bem explicados, formas de contato fáceis, versão mobile consistente, SEO básico, prova de confiança e CTAs bem posicionadas.',
        },
        {
          question: 'Quantas páginas um site institucional deve ter?',
          answer:
            'Depende da empresa, mas uma estrutura inicial costuma incluir Home, Sobre, Serviços e Contato. Quando há mais ofertas, vale criar páginas específicas por serviço.',
        },
        {
          question: 'Site institucional precisa ter blog?',
          answer:
            'Não é obrigatório, mas ajuda bastante quando a empresa quer atrair visitas pelo Google, publicar conteúdo útil e construir autoridade orgânica ao longo do tempo.',
        },
        {
          question: 'Site institucional precisa de SEO?',
          answer:
            'Sim. Mesmo um site institucional simples precisa de title, description, headings, URLs amigáveis, links internos e base técnica organizada para ser melhor entendido pelos mecanismos de busca.',
        },
        {
          question: 'Qual a diferença entre site institucional e landing page?',
          answer:
            'O site institucional apresenta a empresa de forma mais ampla. A landing page é mais focada em uma campanha, oferta ou conversão específica, normalmente com menos distrações e um objetivo central.',
        },
        {
          question: 'Quanto custa um site institucional?',
          answer:
            'O valor depende de escopo, quantidade de páginas, design, conteúdo, SEO e funcionalidades. Em projetos profissionais, o custo varia bastante conforme o nível de personalização e suporte necessário.',
        },
      ],
    },
    {
      type: 'heading',
      id: 'proximo-passo',
      level: 2,
      text: 'Próximo passo',
    },
    {
      type: 'paragraph',
      text: 'Se sua empresa precisa parecer mais profissional no digital, o melhor caminho é estruturar um site institucional que una clareza, confiança e contato fácil. Isso vale mais do que encher a página de efeitos sem direção comercial.',
    },
    {
      type: 'links',
      items: [
        {
          href: '/site-institucional/',
          label: 'Site institucional',
          text: 'Veja a estrutura que eu desenvolvo para empresas que precisam apresentar serviços com mais autoridade e facilitar o contato.',
        },
        {
          href: '/criacao-de-sites/',
          label: 'Criação de sites',
          text: 'Entenda como diferentes formatos de site atendem objetivos comerciais e níveis de maturidade diferentes.',
        },
        {
          href: '/criacao-de-sites-belem/',
          label: 'Criação de sites em Belém',
          text: 'Conheça a abordagem voltada para presença local, busca orgânica e conversão via WhatsApp.',
        },
        {
          href: '/blog-profissional/',
          label: 'Blog profissional',
          text: 'Descubra quando faz sentido conectar site institucional com uma base editorial para crescer em SEO.',
        },
        {
          href: '/insights/quanto-custa-um-site-profissional/',
          label: 'Quanto custa um site profissional',
          text: 'Compare escopo, investimento e diferenças entre landing page, site institucional e outras estruturas.',
        },
        {
          href: 'https://wa.me/5591982890565?text=Ol%C3%A1%2C%20Luan!%20Li%20o%20artigo%20sobre%20site%20institucional%20e%20quero%20entender%20qual%20estrutura%20faz%20sentido%20para%20a%20minha%20empresa.',
          label: 'Falar no WhatsApp',
          text: 'Se quiser definir a melhor estrutura para o seu site institucional, me chama e eu te ajudo a organizar conteúdo, SEO e conversão.',
        },
      ],
    },
  ],
};

const quantoTempoInsight: InsightPublishedPost = {
  title: 'Quanto tempo leva para criar um site profissional?',
  excerpt:
    'Veja os prazos médios por tipo de projeto, etapas do processo, fatores que atrasam e o que ajuda a lançar mais rápido.',
  description:
    'Descubra quanto tempo leva para criar um site profissional, com prazos por tipo de projeto, etapas, atrasos comuns e dicas para acelerar o lançamento.',
  category: 'Mercado',
  categorySlug: 'freelance',
  date: '05 jun. 2026',
  isoDate: '2026-06-05',
  readTime: '15 min',
  slug: 'quanto-tempo-leva-para-criar-um-site-profissional',
  tags: [
    'Prazo',
    'Site profissional',
    'Site institucional',
    'Landing page',
    'SEO',
  ],
  heroImage: '/assets/insights/quanto-tempo-post.webp',
  heroImageAlt:
    'Mesa de trabalho escura com notebook, notas de planejamento e pistas visuais de cronograma para criação de site profissional.',
  published: true,
  author: {
    name: 'Luan Alves',
    role: 'Desenvolvedor web freelancer',
    bio: 'Desenvolvo sites, blogs e landing pages com foco em performance, SEO técnico e conversão via WhatsApp.',
  },
  content: [
    {
      type: 'paragraph',
      text: 'Em média, um site profissional leva de 2 a 8 semanas para ficar pronto, dependendo do tipo de projeto, número de páginas, nível de personalização, conteúdo disponível, funcionalidades e velocidade das aprovações. Uma landing page pode sair em poucos dias. Um site institucional mais completo costuma exigir algumas semanas.',
    },
    {
      type: 'paragraph',
      text: 'O ponto principal é simples: publicar rápido até dá. Publicar bem exige processo. Quando o projeto precisa alinhar posicionamento, design, desenvolvimento, SEO técnico, revisão e lançamento, o prazo real deixa de ser só “tempo de codar” e passa a ser tempo de estruturar a entrega direito.',
    },
    {
      type: 'blockquote',
      text: 'Criar rápido é possível. Criar bem exige processo.',
    },
    {
      type: 'table',
      caption:
        'Prazos médios para criar diferentes tipos de site profissional.',
      columns: ['Tipo de site', 'Prazo médio'],
      rows: [
        ['Landing page simples', '3 a 10 dias úteis'],
        ['Site one page', '1 a 2 semanas'],
        ['Site institucional básico', '2 a 4 semanas'],
        ['Site institucional completo', '4 a 8 semanas'],
        ['Blog profissional', '3 a 6 semanas'],
        ['Site com CMS personalizado', '4 a 10 semanas'],
        ['Loja virtual', '6 a 12 semanas'],
        ['Projeto sob medida', '2 a 6 meses ou mais'],
      ],
    },
    {
      type: 'heading',
      id: 'quanto-tempo-demora-para-criar-um-site',
      level: 2,
      text: 'Quanto tempo demora para criar um site?',
    },
    {
      type: 'paragraph',
      text: 'O prazo muda conforme o escopo. Projetos simples podem ser lançados em poucos dias, mas sites empresariais mais completos passam por briefing, estrutura, conteúdo, design, desenvolvimento, revisão, SEO básico e publicação. Quanto mais decisões o site precisa sustentar, maior tende a ser o tempo necessário para entregar algo realmente profissional.',
    },
    {
      type: 'heading',
      id: 'prazos-por-tipo-de-site',
      level: 2,
      text: 'Prazos médios por tipo de site',
    },
    {
      type: 'heading',
      id: 'quanto-tempo-leva-para-criar-uma-landing-page',
      level: 3,
      text: 'Quanto tempo leva para criar uma landing page?',
    },
    {
      type: 'paragraph',
      text: 'Landing page costuma ser o formato mais rápido porque foca em uma única oferta, campanha ou serviço. Mesmo assim, o prazo depende de copy pronta, quantidade de seções, formulário, integração com WhatsApp, versão mobile e testes finais.',
    },
    {
      type: 'paragraph',
      text: 'Na prática, o prazo mais comum fica entre 3 e 10 dias úteis quando escopo e aprovação andam bem.',
    },
    {
      type: 'heading',
      id: 'quanto-tempo-leva-para-criar-um-site-institucional',
      level: 3,
      text: 'Quanto tempo leva para criar um site institucional?',
    },
    {
      type: 'paragraph',
      text: 'Site institucional exige mais cuidado porque precisa apresentar empresa, serviços, diferenciais, autoridade e canais de contato com mais clareza. Home, sobre, serviços, portfólio ou cases, contato, SEO básico, responsividade e revisão final entram no pacote.',
    },
    {
      type: 'paragraph',
      text: 'Para a maioria das empresas, o prazo realista fica entre 2 e 8 semanas, dependendo da profundidade do conteúdo e do nível de personalização.',
    },
    {
      type: 'heading',
      id: 'quanto-tempo-leva-para-criar-um-blog-profissional',
      level: 3,
      text: 'Quanto tempo leva para criar um blog profissional?',
    },
    {
      type: 'paragraph',
      text: 'Blog profissional envolve mais do que template de artigo. É preciso pensar em estrutura de posts, categorias, página de artigo, SEO editorial, fluxo de publicação e, em alguns casos, CMS. Por isso, o prazo tende a ficar entre 3 e 6 semanas.',
    },
    {
      type: 'heading',
      id: 'quanto-tempo-leva-para-criar-uma-loja-virtual',
      level: 3,
      text: 'Quanto tempo leva para criar uma loja virtual?',
    },
    {
      type: 'paragraph',
      text: 'Loja virtual normalmente leva mais tempo porque depende de catálogo, pagamento, frete, políticas, cadastro, integrações e testes de compra. Mesmo quando a interface parece simples, o fluxo operacional costuma aumentar o prazo para 6 a 12 semanas ou mais.',
    },
    {
      type: 'heading',
      id: 'etapas-da-criacao-de-um-site-profissional',
      level: 2,
      text: 'Quais etapas fazem parte da criação de um site profissional?',
    },
    {
      type: 'heading',
      id: 'briefing-e-entendimento-do-projeto',
      level: 3,
      text: '1. Briefing e entendimento do projeto',
    },
    {
      type: 'paragraph',
      text: 'Antes de abrir layout ou escrever código, é preciso entender objetivo do site, público, serviços, diferenciais, referências, concorrência, páginas necessárias e tom da comunicação. Essa etapa costuma levar de 1 a 3 dias.',
    },
    {
      type: 'heading',
      id: 'planejamento-da-estrutura',
      level: 3,
      text: '2. Planejamento da estrutura',
    },
    {
      type: 'paragraph',
      text: 'Aqui entra arquitetura da informação: mapa do site, hierarquia das páginas, seções da home, CTAs e jornada do usuário. Em projetos mais enxutos, isso pode andar rápido. Em projetos maiores, leva alguns dias para ficar redondo.',
    },
    {
      type: 'paragraph',
      text: 'Faixa comum: 1 a 5 dias.',
    },
    {
      type: 'heading',
      id: 'conteudo-e-copy',
      level: 3,
      text: '3. Conteúdo e copy',
    },
    {
      type: 'paragraph',
      text: 'Essa é uma das fases que mais atrasam projetos. Quando textos, imagens, diferenciais, perguntas frequentes e dados de contato já estão organizados, o prazo anda. Quando tudo precisa ser levantado no meio do processo, o cronograma estica.',
    },
    {
      type: 'paragraph',
      text: 'Faixa comum: 3 dias a 2 semanas.',
    },
    {
      type: 'heading',
      id: 'design-da-interface',
      level: 3,
      text: '4. Design da interface',
    },
    {
      type: 'paragraph',
      text: 'Nesta etapa, o foco é hierarquia visual, experiência mobile, clareza da oferta, ritmo das seções e coerência com a marca. Dependendo do nível de personalização, o design pode levar de 1 a 3 semanas.',
    },
    {
      type: 'heading',
      id: 'desenvolvimento',
      level: 3,
      text: '5. Desenvolvimento',
    },
    {
      type: 'paragraph',
      text: 'É quando layout vira site funcional. Entram implementação das páginas, formulários, integração com WhatsApp, performance, responsividade, imagens otimizadas e SEO técnico básico.',
    },
    {
      type: 'paragraph',
      text: 'Faixa comum: 1 a 4 semanas.',
    },
    {
      type: 'heading',
      id: 'revisao-testes-e-ajustes',
      level: 3,
      text: '6. Revisão, testes e ajustes',
    },
    {
      type: 'paragraph',
      text: 'Site profissional precisa ser testado antes de entrar no ar. Aqui entram links, botões, formulários, revisão mobile, velocidade, analytics, Search Console, SSL e conteúdo final.',
    },
    {
      type: 'paragraph',
      text: 'Faixa comum: 2 a 7 dias.',
    },
    {
      type: 'heading',
      id: 'lancamento',
      level: 3,
      text: '7. Lançamento',
    },
    {
      type: 'paragraph',
      text: 'O lançamento envolve domínio, hospedagem, SSL, redirects, sitemap, indexação e testes finais em produção. Quando infraestrutura e acessos já estão prontos, essa etapa pode levar de 1 a 3 dias.',
    },
    {
      type: 'heading',
      id: 'o-que-pode-atrasar-a-criacao-de-um-site',
      level: 2,
      text: 'O que pode atrasar a criação de um site?',
    },
    {
      type: 'paragraph',
      text: 'Na maioria dos projetos, o maior atraso não está no desenvolvimento em si, mas na falta de conteúdo, decisões pendentes e mudanças de escopo durante o processo.',
    },
    {
      type: 'list',
      items: [
        'Briefing incompleto ou objetivo mal definido.',
        'Falta de textos, imagens ou dados da empresa.',
        'Demora para aprovar etapas.',
        'Mudanças de escopo no meio do projeto.',
        'Muitas revisões sem direção clara.',
        'Decisão tardia sobre funcionalidades.',
        'Domínio ou hospedagem sem acesso.',
        'Integrações externas que dependem de terceiros.',
        'Aprovação por muitas pessoas ao mesmo tempo.',
      ],
    },
    {
      type: 'heading',
      id: 'como-acelerar-a-criacao-do-site',
      level: 2,
      text: 'Como acelerar a criação do site?',
    },
    {
      type: 'paragraph',
      text: 'Se a empresa quer lançar mais rápido sem sacrificar qualidade, o melhor caminho é preparar o básico antes do início do projeto.',
    },
    {
      type: 'list',
      items: [
        'Defina objetivo principal do site.',
        'Liste páginas desejadas e prioridades.',
        'Separe textos principais e diferenciais.',
        'Tenha logo e identidade visual em bom estado.',
        'Organize fotos, referências e provas de confiança.',
        'Reúna dados de contato e serviços.',
        'Garanta acesso a domínio e hospedagem.',
        'Escolha uma pessoa responsável por aprovar.',
      ],
    },
    {
      type: 'heading',
      id: 'template-criador-site-profissional-ou-agencia',
      level: 2,
      text: 'Template, criador de sites, site profissional ou agência: o que muda no prazo?',
    },
    {
      type: 'paragraph',
      text: 'Ferramentas prontas podem colocar um site no ar mais rápido, mas rapidez não é único critério. Para empresas, o site precisa transmitir confiança, carregar bem, explicar a oferta e ajudar a gerar contato.',
    },
    {
      type: 'table',
      caption: 'Comparação prática entre formatos comuns de criação de site.',
      columns: ['Método', 'Vantagem', 'Limitação'],
      rows: [
        ['Template pronto', 'Mais rápido e barato', 'Menos personalização'],
        ['Criador de sites', 'Publicação simples', 'Menor controle técnico'],
        [
          'Site profissional personalizado',
          'Mais estratégico e exclusivo',
          'Exige mais tempo',
        ],
        ['Agência', 'Time completo', 'Custo e prazo maiores'],
      ],
    },
    {
      type: 'heading',
      id: 'da-para-criar-um-site-profissional-em-poucos-dias',
      level: 2,
      text: 'Dá para criar um site profissional em poucos dias?',
    },
    {
      type: 'paragraph',
      text: 'Sim, em alguns casos. Uma landing page ou site simples pode ficar pronto em poucos dias quando escopo, conteúdo e aprovação já estão resolvidos. Mas sites empresariais mais completos geralmente precisam de mais tempo para garantir clareza, design, SEO, performance e boa experiência mobile.',
    },
    {
      type: 'heading',
      id: 'quanto-tempo-leva-para-aparecer-no-google',
      level: 2,
      text: 'Quanto tempo leva para o site aparecer no Google?',
    },
    {
      type: 'paragraph',
      text: 'Publicar o site não significa aparecer imediatamente nas primeiras posições. A indexação pode acontecer em poucos dias ou semanas, mas ranqueamento depende de SEO técnico, qualidade do conteúdo, autoridade do domínio, concorrência e consistência editorial.',
    },
    {
      type: 'paragraph',
      text: 'Por isso, prazo de criação do site e prazo para ganhar tração orgânica são coisas diferentes. Um projeto bem feito acelera a base. O resultado em busca vem com construção contínua.',
    },
    {
      type: 'heading',
      id: 'perguntas-frequentes',
      level: 2,
      text: 'Perguntas frequentes sobre prazo para criar um site',
    },
    {
      type: 'faq',
      items: [
        {
          question: 'Quanto tempo leva para criar um site profissional?',
          answer:
            'Em média, de 2 a 8 semanas, dependendo do tipo de site, número de páginas, conteúdo, funcionalidades e velocidade das aprovações.',
        },
        {
          question: 'É possível criar um site em uma semana?',
          answer:
            'Sim, principalmente landing pages ou sites simples com conteúdo pronto. Sites institucionais mais completos normalmente precisam de mais tempo.',
        },
        {
          question: 'O que demora mais na criação de um site?',
          answer:
            'Na prática, costumam atrasar mais a coleta de conteúdo, aprovações, mudanças de escopo, revisões e integrações externas.',
        },
        {
          question: 'Criar site com template é mais rápido?',
          answer:
            'Sim, mas isso pode limitar personalização, performance, identidade visual e estratégia comercial.',
        },
        {
          question: 'Quanto tempo leva para um site aparecer no Google?',
          answer:
            'A indexação pode levar alguns dias ou semanas, mas ranquear bem depende de SEO, conteúdo, autoridade e concorrência.',
        },
      ],
    },
    {
      type: 'heading',
      id: 'proximo-passo',
      level: 2,
      text: 'Próximo passo',
    },
    {
      type: 'paragraph',
      text: 'Se sua empresa quer lançar com mais clareza e menos retrabalho, o melhor caminho é definir escopo, conteúdo e objetivo comercial antes de começar. Isso encurta prazo sem sacrificar qualidade.',
    },
    {
      type: 'links',
      items: [
        {
          href: '/criacao-de-sites/',
          label: 'Criação de sites',
          text: 'Veja como estruturo sites profissionais com base técnica, clareza comercial e foco em conversão.',
        },
        {
          href: '/site-institucional/',
          label: 'Site institucional',
          text: 'Entenda o formato ideal para empresas que precisam apresentar serviços com mais autoridade e confiança.',
        },
        {
          href: '/blog-profissional/',
          label: 'Blog profissional',
          text: 'Descubra como um blog bem estruturado ajuda a construir presença orgânica com base técnica limpa.',
        },
        {
          href: 'https://wa.me/5591982890565?text=Ol%C3%A1%2C%20Luan!%20Li%20o%20artigo%20sobre%20quanto%20tempo%20leva%20para%20criar%20um%20site%20profissional%20e%20quero%20entender%20qual%20prazo%20faz%20sentido%20para%20meu%20projeto.',
          label: 'Falar no WhatsApp',
          text: 'Me conte sobre seu projeto e eu te ajudo a entender qual prazo faz sentido para o tipo de site que sua empresa precisa.',
        },
      ],
    },
  ],
};

export const insights: InsightPost[] = [
  checklistInsight,
  siteInstitucionalInsight,
  quantoTempoInsight,
  {
    title:
      'Quanto custa um site profissional em 2026? Veja preços por tipo de projeto',
    excerpt:
      'Faixas realistas de preço para landing page, site institucional, blog, loja virtual e projetos sob medida.',
    description:
      'Veja quanto custa criar um site profissional em 2026, com preços para landing page, site institucional, blog, loja virtual, manutenção, domínio e hospedagem.',
    category: 'Mercado',
    categorySlug: 'freelance',
    date: '05 jun. 2026',
    isoDate: '2026-06-05',
    readTime: '12 min',
    slug: 'quanto-custa-um-site-profissional',
    tags: ['Preço', 'Site profissional', 'Criação de sites', 'SEO'],
    featured: true,
    published: true,
    heroImage: '/assets/insights/quanto-custa-post.webp',
    heroImageAlt:
      'Mesa de trabalho com notebook representando planejamento de preço e estrutura de site profissional.',
    author: {
      name: 'Luan Alves',
      role: 'Desenvolvedor web freelancer',
      bio: 'Desenvolvo sites, blogs e landing pages com foco em performance, SEO técnico e conversão via WhatsApp.',
    },
    content: [
      {
        type: 'paragraph',
        text: 'Um site profissional pode custar de menos de R$1.000 a mais de R$30.000, dependendo do tipo de projeto, nível de personalização, funcionalidades, tecnologia, SEO e manutenção.',
      },
      {
        type: 'paragraph',
        text: 'A resposta curta é: em 2026, uma landing page simples costuma ficar entre R$800 e R$2.500, enquanto um site institucional profissional costuma variar de R$2.000 a R$8.000. Projetos com blog, CMS, loja virtual ou funcionalidades sob medida exigem mais investimento.',
      },
      {
        type: 'table',
        caption:
          'Faixas médias de preço para criação de site profissional no Brasil em 2026.',
        columns: ['Tipo de site', 'Faixa média de preço'],
        rows: [
          ['Landing page simples', 'R$800 a R$2.500'],
          ['Site one page', 'R$1.000 a R$3.000'],
          ['Site institucional', 'R$2.000 a R$8.000'],
          ['Blog profissional', 'R$2.500 a R$10.000'],
          ['Site com CMS', 'R$3.000 a R$12.000'],
          ['Loja virtual', 'R$5.000 a R$30.000+'],
          ['Projeto sob medida', 'R$10.000 a R$100.000+'],
        ],
      },
      {
        type: 'heading',
        id: 'quanto-custa-criar-um-site',
        level: 2,
        text: 'Quanto custa criar um site?',
      },
      {
        type: 'paragraph',
        text: 'O preço de um site varia porque a palavra "site" pode significar coisas muito diferentes. Uma página simples para validar presença digital não tem o mesmo escopo de um site institucional com várias páginas, blog, SEO técnico, integração com ferramentas e manutenção recorrente.',
      },
      {
        type: 'paragraph',
        text: 'Por isso, comparar apenas o preço final pode confundir. O mais importante é entender o que está incluso: estratégia, estrutura das páginas, design, desenvolvimento, performance, SEO, suporte, domínio, hospedagem e evolução depois do lançamento.',
      },
      {
        type: 'heading',
        id: 'o-que-influencia-no-preco',
        level: 2,
        text: 'O que mais influencia no preço de um site?',
      },
      {
        type: 'heading',
        id: 'tipo-de-site',
        level: 3,
        text: 'Tipo de site',
      },
      {
        type: 'paragraph',
        text: 'Landing page, site institucional, blog, loja virtual e projeto sob medida têm objetivos diferentes. Quanto mais páginas, regras, integrações e necessidades de gestão, maior tende a ser o valor.',
      },
      {
        type: 'heading',
        id: 'numero-de-paginas',
        level: 3,
        text: 'Número de páginas',
      },
      {
        type: 'paragraph',
        text: 'Uma página única custa menos que um site com home, sobre, serviços, portfólio, blog, contato e páginas específicas para cada oferta. Cada nova página exige estrutura, copy, layout, revisão e otimização.',
      },
      {
        type: 'heading',
        id: 'design-personalizado',
        level: 3,
        text: 'Design personalizado',
      },
      {
        type: 'paragraph',
        text: 'Template adaptado é uma coisa. Layout exclusivo, pensado para posicionamento, confiança e conversão, é outra. Quanto maior o nível de personalização visual e estratégica, maior o investimento.',
      },
      {
        type: 'heading',
        id: 'funcionalidades',
        level: 3,
        text: 'Funcionalidades',
      },
      {
        type: 'paragraph',
        text: 'Formulário, WhatsApp, blog, CMS, área administrativa, integrações, pagamentos, automações e filtros mudam bastante o escopo. Funcionalidade simples pode ser rápida; funcionalidade crítica exige teste, segurança e manutenção.',
      },
      {
        type: 'heading',
        id: 'seo-e-performance',
        level: 3,
        text: 'SEO e performance',
      },
      {
        type: 'paragraph',
        text: 'SEO inicial inclui title, description, headings, estrutura semântica, URLs, sitemap, schema quando fizer sentido, performance e indexação. Performance envolve carregamento rápido, imagens otimizadas, responsividade e atenção a Core Web Vitals.',
      },
      {
        type: 'heading',
        id: 'manutencao',
        level: 3,
        text: 'Manutenção',
      },
      {
        type: 'paragraph',
        text: 'Domínio, hospedagem, atualizações, segurança, ajustes de conteúdo, correções e evolução entram na conta depois do lançamento. Um site barato que ninguém mantém pode sair caro quando começa a travar, ficar lento ou perder conversão.',
      },
      {
        type: 'heading',
        id: 'quanto-custa-cada-tipo-de-site',
        level: 2,
        text: 'Quanto custa cada tipo de site?',
      },
      {
        type: 'heading',
        id: 'quanto-custa-uma-landing-page',
        level: 3,
        text: 'Quanto custa uma landing page?',
      },
      {
        type: 'paragraph',
        text: 'Uma landing page profissional costuma custar entre R$800 e R$2.500 quando o objetivo é apresentar uma oferta, captar leads ou apoiar uma campanha de tráfego pago. Projetos com copy mais estratégica, seções personalizadas, testes e integrações podem passar disso.',
      },
      {
        type: 'heading',
        id: 'quanto-custa-um-site-institucional',
        level: 3,
        text: 'Quanto custa um site institucional?',
      },
      {
        type: 'paragraph',
        text: 'Um site institucional costuma variar de R$2.000 a R$8.000. Ele é indicado para empresas que precisam apresentar serviços, construir autoridade, mostrar portfólio, responder dúvidas e gerar contatos com mais confiança.',
      },
      {
        type: 'heading',
        id: 'quanto-custa-um-blog-profissional',
        level: 3,
        text: 'Quanto custa um blog profissional?',
      },
      {
        type: 'paragraph',
        text: 'Um blog profissional pode ficar entre R$2.500 e R$10.000. O custo sobe porque blog não é só publicar texto: precisa de estrutura editorial, páginas de artigo, categorias, SEO, performance, gestão de conteúdo e bom fluxo de publicação.',
      },
      {
        type: 'heading',
        id: 'quanto-custa-uma-loja-virtual',
        level: 3,
        text: 'Quanto custa uma loja virtual?',
      },
      {
        type: 'paragraph',
        text: 'Uma loja virtual costuma começar perto de R$5.000 e pode passar de R$30.000. Catálogo, estoque, frete, pagamento, segurança, recuperação de carrinho, emissão fiscal e integrações tornam o projeto mais sensível.',
      },
      {
        type: 'heading',
        id: 'quanto-custa-um-site-sob-medida',
        level: 3,
        text: 'Quanto custa um site sob medida?',
      },
      {
        type: 'paragraph',
        text: 'Um site sob medida pode custar de R$10.000 a R$100.000 ou mais quando envolve funcionalidades específicas, sistemas internos, integrações complexas, múltiplos perfis de usuário ou uma experiência digital muito personalizada.',
      },
      {
        type: 'heading',
        id: 'wordpress-wix-freelancer-ou-agencia',
        level: 2,
        text: 'WordPress, Wix, freelancer ou agência: qual opção vale mais a pena?',
      },
      {
        type: 'paragraph',
        text: 'A melhor opção depende do objetivo, orçamento e nível de exigência técnica. Criadores de site ajudam a começar rápido, WordPress funciona bem para muitos blogs, freelancer tende a equilibrar personalização e custo, e agência faz sentido quando o projeto precisa de um time maior.',
      },
      {
        type: 'table',
        caption:
          'Comparação prática entre opções comuns para criar um site profissional.',
        columns: ['Opção', 'Melhor para', 'Limitação'],
        rows: [
          [
            'Criador de sites',
            'Começar barato e rápido',
            'Menos controle técnico e personalização',
          ],
          [
            'WordPress',
            'Blogs e sites com CMS',
            'Exige manutenção, plugins e cuidado técnico',
          ],
          [
            'Desenvolvedor freelancer',
            'Site profissional sob medida',
            'Custa mais que builder',
          ],
          ['Agência', 'Projetos maiores e times completos', 'Custo maior'],
        ],
      },
      {
        type: 'heading',
        id: 'por-que-o-mesmo-site-pode-ter-precos-diferentes',
        level: 2,
        text: 'Por que o mesmo site pode custar R$1.500 ou R$8.000?',
      },
      {
        type: 'paragraph',
        text: 'Dois orçamentos podem parecer parecidos na descrição e serem completamente diferentes na entrega. Um pode usar template pronto, não incluir SEO técnico, ter pouca revisão e não oferecer suporte. Outro pode nascer com design exclusivo, estrutura de busca, performance, responsividade, orientação de conteúdo e ajustes pós-lançamento.',
      },
      {
        type: 'blockquote',
        text: 'Preço baixo não é problema por si só. O problema é quando o preço baixo esconde ausência de estratégia, suporte, performance e base técnica.',
      },
      {
        type: 'heading',
        id: 'quanto-custa-manter-um-site',
        level: 2,
        text: 'Quanto custa manter um site?',
      },
      {
        type: 'paragraph',
        text: 'Além da criação, existe o custo de manter o site funcionando. Em projetos simples, domínio e hospedagem podem ser suficientes. Em projetos profissionais, também entram manutenção técnica, melhorias de conteúdo, ajustes de SEO e evolução de páginas.',
      },
      {
        type: 'list',
        items: [
          'Domínio: pagamento anual pelo endereço do site.',
          'Hospedagem: servidor onde o site fica publicado.',
          'Certificado SSL: normalmente incluso em boas hospedagens, mas precisa estar ativo.',
          'Manutenção técnica: correções, atualizações e monitoramento.',
          'Atualizações de conteúdo: novas páginas, textos, imagens e artigos.',
          'Ajustes de SEO: melhorias de títulos, descrições, links internos e conteúdo.',
          'Ferramentas externas: e-mail, automação, analytics, CRM ou plugins pagos.',
        ],
      },
      {
        type: 'heading',
        id: 'vale-a-pena-criar-um-site-sozinho',
        level: 2,
        text: 'Vale a pena criar um site sozinho?',
      },
      {
        type: 'paragraph',
        text: 'Vale a pena criar sozinho quando o orçamento é muito limitado, o projeto é simples e você aceita abrir mão de personalização, performance e estratégia. Mas, se o site precisa transmitir confiança, aparecer no Google e gerar contatos, contratar um profissional tende a ser uma escolha mais segura.',
      },
      {
        type: 'heading',
        id: 'qual-site-minha-empresa-precisa',
        level: 2,
        text: 'Como saber qual site minha empresa precisa?',
      },
      {
        type: 'table',
        caption:
          'Matriz simples para escolher o tipo de site conforme o objetivo do negócio.',
        columns: ['Objetivo', 'Melhor opção'],
        rows: [
          ['Captar leads de campanha', 'Landing page'],
          ['Apresentar empresa e serviços', 'Site institucional'],
          ['Atrair tráfego orgânico', 'Blog profissional'],
          ['Vender produtos online', 'Loja virtual'],
          ['Validar presença digital rápida', 'One page'],
        ],
      },
      {
        type: 'heading',
        id: 'perguntas-frequentes',
        level: 2,
        text: 'Perguntas frequentes sobre preço de site',
      },
      {
        type: 'faq',
        items: [
          {
            question: 'Quanto custa um site simples?',
            answer:
              'Um site simples pode custar de R$800 a R$3.000, dependendo do número de seções, design, conteúdo, formulário, WhatsApp e nível de acabamento.',
          },
          {
            question: 'Quanto custa um site profissional?',
            answer:
              'Um site profissional costuma variar de R$2.000 a R$8.000 em projetos institucionais, podendo passar disso quando inclui CMS, blog, integrações ou funcionalidades sob medida.',
          },
          {
            question: 'Quanto custa uma landing page?',
            answer:
              'Uma landing page profissional costuma ficar entre R$800 e R$2.500, mas pode custar mais quando envolve copy estratégica, design exclusivo, integrações e testes.',
          },
          {
            question: 'Quanto custa um site institucional?',
            answer:
              'Um site institucional normalmente fica entre R$2.000 e R$8.000, conforme quantidade de páginas, complexidade visual, SEO, conteúdo e suporte incluso.',
          },
          {
            question: 'Quanto custa manter um site por mês?',
            answer:
              'A manutenção pode variar de poucas dezenas de reais por mês, em custos básicos de domínio e hospedagem, até planos recorrentes maiores com suporte, conteúdo, SEO e evolução técnica.',
          },
          {
            question: 'O domínio está incluso no preço do site?',
            answer:
              'Depende da proposta. Alguns profissionais incluem orientação ou configuração, mas o domínio geralmente é um custo anual separado e deve ficar no nome do cliente.',
          },
          {
            question: 'Hospedagem está inclusa?',
            answer:
              'Pode estar inclusa ou ser contratada separadamente. O importante é saber quem administra a hospedagem, qual suporte existe e se ela atende performance e segurança.',
          },
          {
            question: 'Quanto tempo demora para criar um site?',
            answer:
              'Uma landing page pode levar poucos dias ou semanas. Um site institucional costuma levar algumas semanas, dependendo de conteúdo, revisões, páginas e disponibilidade para aprovação.',
          },
          {
            question: 'Site barato vale a pena?',
            answer:
              'Vale quando o objetivo é simples e o orçamento é limitado. Não vale quando o site precisa gerar confiança, ranquear no Google, carregar rápido e apoiar vendas de forma profissional.',
          },
          {
            question: 'É melhor Wix, WordPress ou site sob medida?',
            answer:
              'Wix pode servir para começar rápido, WordPress é forte para CMS e blogs, e site sob medida dá mais controle técnico, performance e personalização. A melhor escolha depende do objetivo e do orçamento.',
          },
        ],
      },
      {
        type: 'heading',
        id: 'proximo-passo',
        level: 2,
        text: 'Próximo passo',
      },
      {
        type: 'paragraph',
        text: 'Antes de investir, defina o objetivo principal do site: captar leads, apresentar serviços, publicar conteúdo, vender produtos ou validar presença digital. A partir disso, fica muito mais fácil escolher uma estrutura proporcional ao momento da empresa.',
      },
      {
        type: 'links',
        items: [
          {
            href: '/criacao-de-sites/',
            label: 'Criação de sites',
            text: 'Veja uma estrutura profissional para empresas que precisam vender, não só existir.',
          },
          {
            href: '/site-institucional/',
            label: 'Site institucional',
            text: 'Conheça a solução para apresentar serviços com mais autoridade e confiança.',
          },
          {
            href: '/landing-page/',
            label: 'Landing page',
            text: 'Entenda o formato ideal para campanhas, tráfego pago e geração de leads.',
          },
          {
            href: '/blog-profissional/',
            label: 'Blog profissional',
            text: 'Veja como estruturar conteúdo indexável para fortalecer autoridade orgânica.',
          },
          {
            href: 'https://wa.me/5591982890565?text=Ol%C3%A1%2C%20Luan!%20Li%20o%20artigo%20sobre%20quanto%20custa%20um%20site%20e%20quero%20entender%20qual%20estrutura%20faz%20sentido%20para%20meu%20projeto.',
            label: 'Falar no WhatsApp',
            text: 'Me conte sobre seu projeto e eu te digo qual estrutura faz mais sentido antes de você investir.',
          },
        ],
      },
    ],
  },
];

export const publishedInsights = insights.filter(
  (post): post is InsightPublishedPost => post.published === true,
);

export const insightFilters: InsightFilter[] = [
  { label: 'Todos', value: 'all', current: true },
  ...Array.from(
    new Map(
      publishedInsights.map((post) => [
        post.categorySlug,
        {
          label: post.category,
          value: post.categorySlug,
        },
      ]),
    ).values(),
  ),
];

export const getInsightPath = (post: Pick<InsightPost, 'slug'>) =>
  `/insights/${post.slug}/`;

export const insightHeroPrompts: Record<string, string> = {
  'quanto-tempo-leva-para-criar-um-site-profissional':
    'Create a premium dark editorial blog hero image for an article about how long it takes to build a professional website. Show a realistic web design workspace or laptop setup with subtle project-planning cues such as notes, layout sketches, timeline marks, or progress indicators, but avoid literal clocks or cheesy deadline symbolism. Use sharp, architectural composition, dark surfaces, restrained gold accent lighting, believable cinematic shadows, high detail, clean negative space, and a polished but realistic studio feel. The image should feel strategic, technical, and trustworthy, not like generic stock photography. Wide 16:10 composition suitable for a website article hero. No text in the image, no logos, no watermark, no cluttered UI, no exaggerated neon.',
};

export const getInsightToc = (post: InsightPublishedPost) =>
  post.content
    .filter(
      (block): block is Extract<InsightArticleBlock, { type: 'heading' }> =>
        block.type === 'heading',
    )
    .map((heading) => ({
      id: heading.id,
      text: heading.text,
      level: heading.level,
    }));
