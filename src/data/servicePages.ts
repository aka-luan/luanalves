const phone = '5591982890565';
const siteUrl = 'https://luanalves.com.br';

const buildWhatsappHref = (text: string) =>
  `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

export interface ServiceCard {
  icon: string;
  title: string;
  copy: string;
}

export interface ServicePageContent {
  slug: string;
  namespace: string;
  title: string;
  description: string;
  canonicalPath: string;
  serviceName: string;
  whatsappHref: string;
  hero: {
    eyebrow: string;
    title: string;
    accent: string;
    copy: string;
    ctaLabel: string;
    secondaryLabel: string;
    secondaryHref: string;
    image: string;
    features: ServiceCard[];
  };
  benefits: {
    eyebrow: string;
    title: string;
    accent: string;
    copy: string;
    items: ServiceCard[];
  };
  audience: {
    eyebrow: string;
    title: string;
    accent: string;
    copy: string;
    items: ServiceCard[];
  };
  process: {
    eyebrow: string;
    title: string;
    accent: string;
    copy: string;
    items: ServiceCard[];
  };
  included: {
    eyebrow: string;
    title: string;
    accent: string;
    copy: string;
    items: ServiceCard[];
  };
  differentials: {
    eyebrow: string;
    title: string;
    accent: string;
    copy: string;
    items: ServiceCard[];
  };
  faq: { question: string; answer: string }[];
  cta: {
    title: string;
    copy: string;
    buttonLabel: string;
  };
}

const sharedProcess = [
  {
    icon: 'explore',
    title: 'Diagnóstico',
    copy: 'Entendo seu objetivo, público, concorrentes e o papel da página na geração de oportunidades.',
  },
  {
    icon: 'account_tree',
    title: 'Estrutura',
    copy: 'Organizo narrativa, seções, CTAs e prioridades antes do design para reduzir retrabalho.',
  },
  {
    icon: 'design_services',
    title: 'Design e desenvolvimento',
    copy: 'Crio a interface e implemento em Astro com foco em velocidade, responsividade e leitura.',
  },
  {
    icon: 'rocket_launch',
    title: 'Revisão e lançamento',
    copy: 'Ajusto detalhes finais, publico a página e deixo a base pronta para mensuração e melhorias.',
  },
];

const sharedDifferentials = [
  {
    icon: 'forum',
    title: 'Atendimento direto',
    copy: 'Você fala com quem planeja, desenha e desenvolve. Menos ruído, mais clareza.',
  },
  {
    icon: 'speed',
    title: 'Performance como padrão',
    copy: 'Estrutura enxuta, imagens otimizadas e código pensado para carregar rápido.',
  },
  {
    icon: 'search',
    title: 'Base técnica de SEO',
    copy: 'Metadados, hierarquia de headings, canonical e estrutura semântica desde o início.',
  },
  {
    icon: 'support_agent',
    title: 'Suporte pós-lançamento',
    copy: 'Entrega com orientação e acompanhamento para ajustes essenciais depois da publicação.',
  },
];

const sharedFaq = [
  {
    question: 'Quanto tempo leva para o projeto ficar pronto?',
    answer:
      'O prazo depende do escopo, número de páginas e materiais disponíveis. Antes de começar, você recebe um cronograma claro com etapas e datas.',
  },
  {
    question: 'A página funciona bem no celular?',
    answer:
      'Sim. O layout é pensado para desktop e mobile, com atenção à leitura, velocidade, navegação e CTAs fáceis de acessar.',
  },
  {
    question: 'O projeto já inclui SEO?',
    answer:
      'Inclui a base técnica: title, description, canonical, headings, performance, estrutura semântica e boas práticas de indexação.',
  },
  {
    question: 'Você pode configurar WhatsApp, mapa ou analytics?',
    answer:
      'Sim. Integrações essenciais podem entrar no escopo, incluindo WhatsApp, mapa, eventos de conversão e ferramentas de análise.',
  },
];

export const servicePages: Record<string, ServicePageContent> = {
  'site-institucional': {
    slug: 'site-institucional',
    namespace: 'site-institucional',
    title: 'Site Institucional Profissional | Luan Alves',
    description:
      'Site institucional para empresas que precisam transmitir autoridade, apresentar serviços com clareza e aparecer no Google com base técnica sólida.',
    canonicalPath: '/site-institucional/',
    serviceName: 'Site Institucional',
    whatsappHref: buildWhatsappHref(
      'Olá, Luan! Quero solicitar um orçamento para um site institucional profissional.',
    ),
    hero: {
      eyebrow: 'Serviço • Site institucional',
      title:
        'Site institucional para empresas que querem parecer tão profissionais quanto são',
      accent: 'tão profissionais quanto são',
      copy: 'Crio sites institucionais com visual premium, estrutura clara e base técnica para apresentar sua empresa com autoridade desde o primeiro acesso.',
      ctaLabel: 'Quero um site institucional profissional',
      secondaryLabel: 'Ver portfólio',
      secondaryHref: '#portfolio',
      image: '/assets/site-institucional-hero.png',
      features: [
        {
          icon: 'workspace_premium',
          title: 'Autoridade',
          copy: 'Imagem profissional desde a primeira dobra.',
        },
        {
          icon: 'search',
          title: 'SEO técnico',
          copy: 'Estrutura preparada para indexação.',
        },
        {
          icon: 'devices',
          title: 'Responsivo',
          copy: 'Experiência consistente em qualquer tela.',
        },
      ],
    },
    benefits: {
      eyebrow: 'Benefícios',
      title: 'Presença digital com clareza, confiança e intenção comercial.',
      accent: 'confiança',
      copy: 'Um site institucional bem construído ajuda o cliente a entender o que você faz, por que confiar e como iniciar uma conversa.',
      items: [
        {
          icon: 'verified',
          title: 'Credibilidade imediata',
          copy: 'Design, conteúdo e hierarquia visual para reduzir dúvida e transmitir segurança.',
        },
        {
          icon: 'corporate_fare',
          title: 'Serviços bem apresentados',
          copy: 'Seções organizadas para explicar ofertas, diferenciais e formas de atendimento.',
        },
        {
          icon: 'manage_search',
          title: 'Base para busca orgânica',
          copy: 'Estrutura técnica para o Google entender a página e suas principais intenções.',
        },
        {
          icon: 'chat_bubble',
          title: 'Contato facilitado',
          copy: 'CTAs estratégicos para WhatsApp em pontos naturais da navegação.',
        },
      ],
    },
    audience: {
      eyebrow: 'Para quem é',
      title:
        'Para empresas que precisam mostrar valor antes da primeira conversa.',
      accent: 'mostrar valor',
      copy: 'Funciona para negócios que vendem serviço, consultoria, atendimento local ou soluções B2B e precisam de presença profissional.',
      items: [
        {
          icon: 'business_center',
          title: 'Prestadores de serviço',
          copy: 'Apresente especialidades, processo e diferenciais com mais clareza.',
        },
        {
          icon: 'apartment',
          title: 'Empresas consolidadas',
          copy: 'Atualize a percepção da marca com uma vitrine digital mais refinada.',
        },
        {
          icon: 'handshake',
          title: 'Negócios B2B',
          copy: 'Crie uma página que apoia reuniões, propostas e indicações.',
        },
      ],
    },
    process: {
      eyebrow: 'Processo',
      title:
        'Método claro para transformar posicionamento em página publicada.',
      accent: 'página publicada',
      copy: 'Cada etapa conecta estratégia, design e desenvolvimento para evitar uma página bonita sem função comercial.',
      items: sharedProcess,
    },
    included: {
      eyebrow: 'Incluso',
      title: 'O que entra no projeto institucional.',
      accent: 'projeto institucional',
      copy: 'A entrega cobre a base necessária para sua empresa se apresentar bem, carregar rápido e converter visitantes em conversas.',
      items: [
        {
          icon: 'schema',
          title: 'Arquitetura de páginas',
          copy: 'Home, serviços, sobre, contato ou estrutura equivalente ao escopo.',
        },
        {
          icon: 'edit_note',
          title: 'Copy orientada à clareza',
          copy: 'Ajustes de texto para explicar valor, diferenciais e próximos passos.',
        },
        {
          icon: 'image',
          title: 'Tratamento visual',
          copy: 'Organização de imagens, cards, destaques e chamadas com padrão premium.',
        },
        {
          icon: 'settings',
          title: 'Configurações essenciais',
          copy: 'SEO inicial, favicon, social preview e integrações combinadas.',
        },
      ],
    },
    differentials: {
      eyebrow: 'Diferenciais',
      title: 'Entrega direta, técnica e pensada para negócios reais.',
      accent: 'negócios reais',
      copy: 'O foco é criar uma presença profissional que não dependa de explicações extras para transmitir valor.',
      items: sharedDifferentials,
    },
    faq: [
      ...sharedFaq,
      {
        question: 'Posso incluir várias páginas no site institucional?',
        answer:
          'Sim. O escopo pode incluir páginas separadas para serviços, sobre, contato, políticas, cases e outras necessidades comerciais.',
      },
    ],
    cta: {
      title: 'Vamos criar uma presença institucional mais forte?',
      copy: 'Me conte sobre sua empresa, seus serviços e o que precisa mudar na percepção digital do seu negócio.',
      buttonLabel: 'Quero um site institucional profissional',
    },
  },
  'landing-page': {
    slug: 'landing-page',
    namespace: 'landing-page',
    title: 'Landing Page para Campanhas | Luan Alves',
    description:
      'Landing page profissional para tráfego pago, captação de leads e campanhas com foco em velocidade, clareza e conversão via WhatsApp.',
    canonicalPath: '/landing-page/',
    serviceName: 'Landing Page',
    whatsappHref: buildWhatsappHref(
      'Olá, Luan! Quero uma landing page para minha campanha.',
    ),
    hero: {
      eyebrow: 'Serviço • Landing page',
      title:
        'Landing page feita para transformar visitantes em oportunidades reais',
      accent: 'oportunidades reais',
      copy: 'Desenvolvo páginas focadas em campanhas, anúncios e captação de leads, com narrativa objetiva, carregamento rápido e CTAs bem posicionados.',
      ctaLabel: 'Quero uma landing page para minha campanha',
      secondaryLabel: 'Ver cases',
      secondaryHref: '#portfolio',
      image: '/assets/landing-hero.png',
      features: [
        {
          icon: 'ads_click',
          title: 'Campanhas',
          copy: 'Pensada para tráfego pago e ações pontuais.',
        },
        {
          icon: 'speed',
          title: 'Velocidade',
          copy: 'Menos atrito entre clique e contato.',
        },
        {
          icon: 'conversion_path',
          title: 'Conversão',
          copy: 'Seções e CTAs com intenção clara.',
        },
      ],
    },
    benefits: {
      eyebrow: 'Benefícios',
      title: 'Mais clareza para quem chega pelo anúncio.',
      accent: 'chega pelo anúncio',
      copy: 'A página precisa confirmar a promessa da campanha, responder objeções e levar o visitante ao próximo passo sem distração.',
      items: [
        {
          icon: 'filter_alt',
          title: 'Mensagem focada',
          copy: 'Uma oferta, um público e uma ação principal por página.',
        },
        {
          icon: 'bolt',
          title: 'Carregamento rápido',
          copy: 'Estrutura leve para reduzir abandono em campanhas mobile.',
        },
        {
          icon: 'fact_check',
          title: 'Objeções cobertas',
          copy: 'Blocos de prova, benefícios, processo e FAQ para apoiar a decisão.',
        },
        {
          icon: 'monitoring',
          title: 'Base para mensuração',
          copy: 'CTAs e estrutura preparados para eventos e leitura de performance.',
        },
      ],
    },
    audience: {
      eyebrow: 'Para quem é',
      title:
        'Para negócios que investem para atrair atenção e precisam converter melhor.',
      accent: 'converter melhor',
      copy: 'Ideal para lançamentos, campanhas de tráfego pago, captação de orçamentos, listas de espera e validação de ofertas.',
      items: [
        {
          icon: 'campaign',
          title: 'Campanhas de tráfego pago',
          copy: 'Página alinhada ao anúncio, palavra-chave e promessa da campanha.',
        },
        {
          icon: 'event_available',
          title: 'Lançamentos e ofertas',
          copy: 'Estrutura para apresentar benefício, urgência legítima e próximos passos.',
        },
        {
          icon: 'request_quote',
          title: 'Captação de leads',
          copy: 'Fluxo direto para WhatsApp, formulário ou ferramenta combinada.',
        },
      ],
    },
    process: {
      eyebrow: 'Processo',
      title: 'Da promessa da campanha até a página pronta para captar leads.',
      accent: 'captar leads',
      copy: 'A construção parte da intenção do tráfego para que o visitante encontre continuidade entre anúncio, página e contato.',
      items: sharedProcess,
    },
    included: {
      eyebrow: 'Incluso',
      title: 'Elementos essenciais para uma landing page eficiente.',
      accent: 'landing page eficiente',
      copy: 'A entrega prioriza clareza, velocidade e conversão sem excesso de elementos que desviam a atenção.',
      items: [
        {
          icon: 'title',
          title: 'Hero com proposta forte',
          copy: 'Primeira dobra clara, com promessa, prova e CTA principal.',
        },
        {
          icon: 'view_column',
          title: 'Seções de conversão',
          copy: 'Benefícios, prova, processo, FAQ e fechamento com CTA.',
        },
        {
          icon: 'phone_iphone',
          title: 'Mobile first',
          copy: 'Leitura e toque pensados para quem vem do anúncio no celular.',
        },
        {
          icon: 'analytics',
          title: 'Preparação para análise',
          copy: 'Estrutura pronta para eventos, tags e ajustes futuros.',
        },
      ],
    },
    differentials: {
      eyebrow: 'Diferenciais',
      title: 'Design e código trabalhando para diminuir atrito.',
      accent: 'diminuir atrito',
      copy: 'A página é construída para sustentar a campanha, não para competir com ela.',
      items: sharedDifferentials,
    },
    faq: [
      ...sharedFaq,
      {
        question: 'Landing page é diferente de site institucional?',
        answer:
          'Sim. A landing page é mais focada em uma campanha ou oferta específica. O site institucional apresenta a empresa de forma mais ampla.',
      },
    ],
    cta: {
      title: 'Sua campanha precisa de uma página mais forte?',
      copy: 'Me envie a oferta, público e canal de tráfego. Eu ajudo a transformar isso em uma página objetiva para gerar oportunidades.',
      buttonLabel: 'Quero uma landing page para minha campanha',
    },
  },
  'blog-profissional': {
    slug: 'blog-profissional',
    namespace: 'blog-profissional',
    title: 'Blog Profissional para Empresas | Luan Alves',
    description:
      'Blog profissional com estrutura editorial, SEO técnico e experiência de leitura para transformar conteúdo em autoridade e oportunidades.',
    canonicalPath: '/blog-profissional/',
    serviceName: 'Blog Profissional',
    whatsappHref: buildWhatsappHref(
      'Olá, Luan! Quero criar um blog profissional.',
    ),
    hero: {
      eyebrow: 'Serviço • Blog profissional',
      title:
        'Blog profissional para transformar conteúdo em autoridade e oportunidades',
      accent: 'autoridade e oportunidades',
      copy: 'Crio estruturas editoriais rápidas, organizadas e preparadas para SEO, com experiência de leitura profissional e gestão simples de conteúdo.',
      ctaLabel: 'Quero criar um blog profissional',
      secondaryLabel: 'Ver projetos',
      secondaryHref: '#portfolio',
      image: '/assets/blog-hero.png',
      features: [
        {
          icon: 'article',
          title: 'Editorial',
          copy: 'Estrutura pensada para conteúdo recorrente.',
        },
        {
          icon: 'manage_search',
          title: 'SEO',
          copy: 'Base técnica para ranqueamento orgânico.',
        },
        {
          icon: 'menu_book',
          title: 'Leitura',
          copy: 'Experiência limpa para reter visitantes.',
        },
      ],
    },
    benefits: {
      eyebrow: 'Benefícios',
      title: 'Conteúdo com estrutura para ser encontrado, lido e lembrado.',
      accent: 'encontrado',
      copy: 'Um blog profissional transforma conhecimento em ativo digital, apoia vendas consultivas e aumenta a superfície de descoberta no Google.',
      items: [
        {
          icon: 'topic',
          title: 'Arquitetura editorial',
          copy: 'Categorias, páginas e componentes pensados para organizar temas e clusters.',
        },
        {
          icon: 'search',
          title: 'SEO on-page',
          copy: 'Templates com title, description, headings e marcação semântica consistente.',
        },
        {
          icon: 'auto_stories',
          title: 'Leitura confortável',
          copy: 'Tipografia, espaçamento e hierarquia para conteúdo longo no desktop e mobile.',
        },
        {
          icon: 'trending_up',
          title: 'Autoridade acumulada',
          copy: 'Cada artigo passa a apoiar descoberta, confiança e conversão futura.',
        },
      ],
    },
    audience: {
      eyebrow: 'Para quem é',
      title:
        'Para empresas que querem publicar com consistência e aparência profissional.',
      accent: 'publicar com consistência',
      copy: 'Indicado para consultorias, empresas B2B, prestadores de serviço e marcas que querem usar conteúdo como canal de aquisição.',
      items: [
        {
          icon: 'psychology',
          title: 'Especialistas e consultores',
          copy: 'Transforme conhecimento técnico em conteúdo claro e rastreável.',
        },
        {
          icon: 'groups',
          title: 'Times comerciais',
          copy: 'Use artigos para educar leads, responder dúvidas e apoiar propostas.',
        },
        {
          icon: 'domain',
          title: 'Empresas com SEO em pauta',
          copy: 'Crie base para publicar guias, comparativos e conteúdos evergreen.',
        },
      ],
    },
    process: {
      eyebrow: 'Processo',
      title: 'Do mapa editorial ao blog pronto para publicação.',
      accent: 'pronto para publicação',
      copy: 'A estrutura nasce pensando em quem lê, em quem publica e em como os mecanismos de busca interpretam o conteúdo.',
      items: sharedProcess,
    },
    included: {
      eyebrow: 'Incluso',
      title: 'Base técnica e visual para conteúdo profissional.',
      accent: 'conteúdo profissional',
      copy: 'O projeto entrega a estrutura para publicar com padrão visual, organização e boas práticas de SEO.',
      items: [
        {
          icon: 'dashboard',
          title: 'Template de listagem',
          copy: 'Página para organizar posts, categorias e chamadas editoriais.',
        },
        {
          icon: 'article',
          title: 'Template de artigo',
          copy: 'Layout de leitura com hierarquia, imagens, links e CTA.',
        },
        {
          icon: 'edit_square',
          title: 'Gestão simples',
          copy: 'Estrutura preparada para edição conforme a solução definida no escopo.',
        },
        {
          icon: 'link',
          title: 'Links internos',
          copy: 'Base para conectar artigos, serviços, cases e contato.',
        },
      ],
    },
    differentials: {
      eyebrow: 'Diferenciais',
      title: 'Um blog com cara de publicação séria, não só uma lista de posts.',
      accent: 'publicação séria',
      copy: 'A experiência editorial precisa reforçar autoridade em cada detalhe visual e técnico.',
      items: sharedDifferentials,
    },
    faq: [
      ...sharedFaq,
      {
        question: 'Você também escreve os artigos?',
        answer:
          'Posso apoiar estrutura, pauta e revisão de SEO, mas a produção completa de conteúdo depende do escopo combinado para o projeto.',
      },
    ],
    cta: {
      title: 'Vamos transformar seu conteúdo em ativo digital?',
      copy: 'Me conte quais temas sua empresa quer disputar e como o blog precisa funcionar na rotina de publicação.',
      buttonLabel: 'Quero criar um blog profissional',
    },
  },
  'criacao-de-sites-belem': {
    slug: 'criacao-de-sites-belem',
    namespace: 'criacao-de-sites-belem',
    title: 'Criação de Sites em Belém | Luan Alves',
    description:
      'Criação de sites em Belém para empresas que precisam de presença digital profissional, SEO local e conversão via WhatsApp.',
    canonicalPath: '/criacao-de-sites-belem/',
    serviceName: 'Criação de Sites em Belém',
    whatsappHref: buildWhatsappHref(
      'Olá, Luan! Quero criar meu site em Belém.',
    ),
    hero: {
      eyebrow: 'Serviço • Belém/PA',
      title:
        'Criação de sites em Belém para negócios que querem crescer com presença digital profissional',
      accent: 'presença digital profissional',
      copy: 'Desenvolvo sites para empresas de Belém e região metropolitana que precisam aparecer melhor, transmitir confiança e receber mais contatos pelo WhatsApp.',
      ctaLabel: 'Quero criar meu site em Belém',
      secondaryLabel: 'Ver portfólio',
      secondaryHref: '#portfolio',
      image: '/assets/criacao-sites-belem-hero.png',
      features: [
        {
          icon: 'location_on',
          title: 'Belém/PA',
          copy: 'Copy local sem repetição forçada.',
        },
        {
          icon: 'map',
          title: 'SEO local',
          copy: 'Estrutura para cidade, mapa e área de atendimento.',
        },
        {
          icon: 'chat_bubble',
          title: 'WhatsApp',
          copy: 'Contato rápido para orçamento e atendimento.',
        },
      ],
    },
    benefits: {
      eyebrow: 'Benefícios',
      title: 'Mais confiança para quem procura seu negócio em Belém.',
      accent: 'Belém',
      copy: 'Uma presença local bem construída ajuda clientes da cidade a entenderem sua oferta e avançarem para uma conversa.',
      items: [
        {
          icon: 'storefront',
          title: 'Presença local forte',
          copy: 'Página com contexto de Belém e região metropolitana quando fizer sentido.',
        },
        {
          icon: 'travel_explore',
          title: 'SEO local',
          copy: 'Metadados, headings e conteúdo alinhados à intenção de busca regional.',
        },
        {
          icon: 'pin_drop',
          title: 'Mapa e atendimento',
          copy: 'Integração com mapa, área de atuação e canais de contato conforme escopo.',
        },
        {
          icon: 'forum',
          title: 'Conversão pelo WhatsApp',
          copy: 'Chamadas diretas para orçamentos, agendamentos ou primeiro contato.',
        },
      ],
    },
    audience: {
      eyebrow: 'Para quem é',
      title:
        'Para empresas locais que precisam ser levadas a sério no digital.',
      accent: 'empresas locais',
      copy: 'Atende negócios de Belém e região metropolitana que vendem serviços, atendimento especializado, consultoria ou soluções para empresas.',
      items: [
        {
          icon: 'medical_services',
          title: 'Serviços especializados',
          copy: 'Clínicas, consultórios, escritórios e profissionais que dependem de confiança.',
        },
        {
          icon: 'real_estate_agent',
          title: 'Mercado local',
          copy: 'Empresas que precisam explicar valor, região de atendimento e diferenciais.',
        },
        {
          icon: 'handshake',
          title: 'Negócios B2B em Belém',
          copy: 'Páginas para apoiar prospecção, indicação e reuniões comerciais.',
        },
      ],
    },
    process: {
      eyebrow: 'Processo',
      title: 'Um processo remoto e direto, com entendimento do mercado local.',
      accent: 'mercado local',
      copy: 'O projeto combina atendimento ágil, estratégia de conteúdo e desenvolvimento técnico para colocar seu site no ar com consistência.',
      items: sharedProcess,
    },
    included: {
      eyebrow: 'Incluso',
      title: 'Estrutura para presença local profissional.',
      accent: 'presença local',
      copy: 'A entrega pode combinar apresentação institucional, conteúdo local, WhatsApp, mapa e base técnica de SEO.',
      items: [
        {
          icon: 'corporate_fare',
          title: 'Página institucional',
          copy: 'Apresentação clara da empresa, serviços, diferenciais e formas de contato.',
        },
        {
          icon: 'map',
          title: 'Sinais locais',
          copy: 'Cidade, região de atendimento e elementos de confiança usados com naturalidade.',
        },
        {
          icon: 'phone_in_talk',
          title: 'Contato por WhatsApp',
          copy: 'CTAs com texto coerente para iniciar orçamento ou atendimento.',
        },
        {
          icon: 'search',
          title: 'SEO técnico inicial',
          copy: 'Canonical, metadados, headings e performance desde a publicação.',
        },
      ],
    },
    differentials: {
      eyebrow: 'Diferenciais',
      title: 'Desenvolvimento profissional para negócios de Belém e do Brasil.',
      accent: 'Belém',
      copy: 'Você tem atendimento direto, visão técnica e uma página que respeita a busca local sem parecer texto artificial.',
      items: sharedDifferentials,
    },
    faq: [
      ...sharedFaq,
      {
        question: 'Você atende presencialmente em Belém?',
        answer:
          'O atendimento principal é remoto, com comunicação direta pelo WhatsApp. Quando fizer sentido, o projeto pode considerar necessidades locais, mapa e região de atendimento.',
      },
    ],
    cta: {
      title: 'Seu negócio em Belém precisa de um site mais profissional?',
      copy: 'Me conte sobre sua empresa, área de atendimento e objetivo principal. Eu retorno com os próximos passos para tirar o projeto do papel.',
      buttonLabel: 'Quero criar meu site em Belém',
    },
  },
};

export const getServicePageSchema = (page: ServicePageContent) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${siteUrl}${page.canonicalPath}#service`,
  name: page.serviceName,
  description: page.description,
  url: `${siteUrl}${page.canonicalPath}`,
  provider: {
    '@id': `${siteUrl}/#business`,
  },
  areaServed:
    page.slug === 'criacao-de-sites-belem'
      ? [
          { '@type': 'City', name: 'Belém' },
          {
            '@type': 'AdministrativeArea',
            name: 'Região Metropolitana de Belém',
          },
        ]
      : { '@type': 'Country', name: 'Brasil' },
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    url: `${siteUrl}${page.canonicalPath}#contato`,
  },
});
