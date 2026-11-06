export const navigation = [
  { href: '/', label: 'Início' },
  { href: '/sobre/', label: 'Sobre' },
  {
    href: '/criacao-de-sites/',
    label: 'Criação de Sites',
    children: [
      { href: '/site-institucional/', label: 'Site Institucional' },
      { href: '/landing-page/', label: 'Landing Page' },
      { href: '/blog-profissional/', label: 'Blog Profissional' },
      { href: '/criacao-de-sites-belem/', label: 'Criação de Sites em Belém' },
    ],
  },
  { href: '/portfolio/', label: 'Portfólio' },
  { href: '/insights/', label: 'Insights' },
  { href: '/#contato', label: 'Contato' },
];

export const trustItems = [
  {
    icon: 'rocket_launch',
    title: 'Atendimento direto,',
    subtitle: 'sem agências',
  },
  {
    icon: 'verified',
    title: 'Design e desenvolvimento',
    subtitle: 'para celular e desktop',
  },
  {
    icon: 'support_agent',
    title: 'Escopo e etapas',
    subtitle: 'definidos na proposta',
  },
];

export const services = [
  {
    icon: 'corporate_fare',
    href: '/site-institucional/',
    title: 'Site Institucional',
    description:
      'Apresente sua empresa, serviços e projetos em um site organizado, com leitura clara no celular e caminhos diretos para contato.',
    bullets: ['SEO técnico', 'Design responsivo', 'Serviços e projetos'],
  },
  {
    icon: 'article',
    href: '/blog-profissional/',
    title: 'Blog Profissional',
    description:
      'Organize artigos e temas em uma estrutura editorial com base técnica de SEO. A forma de publicação é definida conforme a rotina da sua equipe e o escopo do projeto.',
    bullets: ['SEO editorial', 'Categorias e artigos', 'Leitura no celular'],
  },
  {
    icon: 'ads_click',
    href: '/landing-page/',
    title: 'Landing Page',
    description:
      'Apresente uma oferta de campanha com mensagem clara, carregamento otimizado e um caminho direto para contato. Integrações e mensuração são combinadas no escopo.',
    bullets: ['Oferta e CTA claros', 'Página leve', 'Para campanhas'],
  },
];

export const projects = [
  {
    id: 'tresor-incorporacoes',
    title: 'Trésor Incorporações',
    subtitle: 'Desenvolvimento & Motion',
    description:
      'Site institucional de uma incorporadora de alto padrão, com páginas da marca e dos empreendimentos e transições animadas.',
    serviceType: 'Site Institucional',
    summary:
      'Site institucional para incorporadora de luxo, com empreendimentos, animações e contato.',
    tags: ['SEO técnico', 'Motion', 'Performance'],
    themeColor: '#4a1f0b',
    externalUrl: 'https://tresorincorporacoes.com.br',
    image: '/assets/tresor-home.webp',
    alt: 'Página inicial do site da Trésor Incorporações em um tablet, com menu, foto de um terraço e o título "Exclusividade & Sofisticação".',
    url: 'https://tresorincorporacoes.com.br',
    niche: 'Incorporadora de Luxo',
    caseVideo: {
      src: '/assets/placeholders/tresor-video-modal.webm',
      poster: '/assets/placeholders/tresor-mobile-modal.webp',
      title: 'Showcase em vídeo do projeto Trésor Incorporações',
    },
    gallery: [
      {
        src: '/assets/placeholders/tresor-idv-modal.webp',
        alt: 'Variação visual da identidade do projeto Trésor Incorporações',
      },
      {
        src: '/assets/placeholders/tresor-idv2-modal.webp',
        alt: 'Segunda variação visual do projeto Trésor Incorporações',
      },
      {
        src: '/assets/placeholders/tresor-mobile-modal.webp',
        alt: 'Versão mobile do projeto Trésor Incorporações',
      },
    ],
  },
  {
    id: 'skyrocket',
    title: 'Skyrocket',
    subtitle: 'Desenvolvimento & Otimização',
    description:
      'Site de uma agência de marketing de performance, com serviços, cases e contato em seções curtas.',
    serviceType: 'Landing Page',
    summary:
      'Site para agência de marketing, com serviços, cases e proposta de valor.',
    tags: ['Conversão', 'Animação', 'SEO'],
    themeColor: '#123f7a',
    externalUrl: 'https://agenciaskyrocket.com.br',
    image: '/assets/skyrocket-home.webp',
    alt: 'Página inicial do site da Agência Skyrocket em um celular, com o título "Inovação e criatividade para ir além", botão de WhatsApp e ilustração de um astronauta.',
    url: 'https://agenciaskyrocket.com.br',
    niche: 'Marketing Digital',
    caseVideo: {
      src: '/assets/placeholders/skyrocket-showcase.webm',
      poster: '/assets/placeholders/skyrocket-video-poster.svg',
      title: 'Showcase em vídeo do projeto Skyrocket',
    },
    gallery: [
      {
        src: '/assets/placeholders/skyrocket-gallery-01.svg',
        alt: 'Placeholder da galeria do projeto Skyrocket 1',
      },
      {
        src: '/assets/placeholders/skyrocket-gallery-02.svg',
        alt: 'Placeholder da galeria do projeto Skyrocket 2',
      },
      {
        src: '/assets/placeholders/skyrocket-gallery-03.svg',
        alt: 'Placeholder da galeria do projeto Skyrocket 3',
      },
    ],
  },
  {
    id: 'poliana-bentes',
    title: 'Poliana Bentes',
    subtitle: 'Desenvolvimento & CMS',
    description:
      'Site institucional e blog de uma consultoria de relações institucionais em Belém, com serviços, publicações e agenda.',
    serviceType: 'Blog Profissional',
    summary:
      'Site institucional com blog para consultoria, atualizado pela própria equipe no CMS.',
    tags: ['CMS', 'Editorial', 'Mobile'],
    themeColor: '#173b28',
    externalUrl: 'https://polianabentes.com.br',
    image: '/assets/poliana-bentes-home.webp',
    alt: 'Página inicial do site da BNTS Consultoria em um monitor, com foto de Poliana Bentes, menu e o título "Construindo o futuro do seu negócio".',
    url: 'https://polianabentes.com.br',
    niche: 'Consultoria Empresarial',
    caseVideo: {
      src: '/assets/placeholders/poliana-showcase.webm',
      poster: '/assets/placeholders/poliana-video-poster.svg',
      title: 'Showcase em vídeo do projeto Poliana Bentes',
    },
    gallery: [
      {
        src: '/assets/placeholders/poliana-gallery-01.svg',
        alt: 'Placeholder da galeria do projeto Poliana Bentes 1',
      },
      {
        src: '/assets/placeholders/poliana-gallery-02.svg',
        alt: 'Placeholder da galeria do projeto Poliana Bentes 2',
      },
      {
        src: '/assets/placeholders/poliana-gallery-03.svg',
        alt: 'Placeholder da galeria do projeto Poliana Bentes 3',
      },
    ],
  },
];

interface PortfolioCaseDetail {
  slug: string;
  relatedInsightSlugs: string[];
  year: string;
  client: string;
  segment: string;
  deliveredAt: string;
  siteLabel: string;
  challenge: string;
  solution: string;
  participation?: { development: string; designAndCopy: string };
  primaryService?: { href: string; label: string };
  evidence?: { href: string; label: string; description: string }[];
  deliverables: {
    title: string;
    description: string;
  }[];
  gallery: {
    src: string;
    alt: string;
    caption: string;
  }[];
  results: {
    value: string;
    label: string;
  }[];
  mobileImage?: string;
}

const basePortfolioProjects = [
  {
    id: 'tresor-incorporacoes',
    title: 'Trésor',
    categories: ['Site Institucional'],
    lead:
      'Site institucional para uma incorporadora de alto padrão.',
    description:
      'Página de portfólio do site institucional da Trésor Incorporações, incorporadora de empreendimentos de alto padrão.',
    tags: [
      'Site institucional',
      'Incorporadora',
      'Alto padrão',
      'Alto padrão residencial',
    ],
    image: '/assets/tresor-portfolio.webp',
    alt: 'Página de portfólio do site institucional da Trésor Incorporações, marca focada em empreendimentos de alto padrão.',
    externalUrl: 'https://tresorincorporacoes.com.br/',
  },
  {
    id: 'urbem',
    title: 'Urbem',
    categories: ['Site Institucional', 'Blog Profissional'],
    lead:
      'Site institucional e blog para uma indústria de CLT, Glulam e S4S.',
    description:
      'Luan desenvolveu o site da Urbem a partir do design e da copy da agência parceira. O site organiza produtos (S4S, Glulam e CLT), projetos por aplicação, biblioteca, blog e contato comercial.',
    tags: [
      'Site institucional',
      'Indústria',
      'Sustentabilidade',
      'Madeira engenheirada',
    ],
    image: '/assets/urbem-portfolio.webp',
    alt: 'Página de portfólio do site institucional da Urbem, indústria de construção civil sustentável e madeira engenheirada.',
    externalUrl: 'https://urbembr.com',
  },
  {
    id: 'tymber',
    title: 'Tymber',
    categories: ['Site Institucional', 'Blog Profissional'],
    lead:
      'Site institucional para uma incorporadora que constrói com madeira engenheirada.',
    description:
      'O site da Tymber apresenta a marca, o manifesto e as vantagens da madeira engenheirada para novos empreendimentos imobiliários.',
    tags: ['Site institucional', 'Incorporadora', 'Mass timber', 'Sustentabilidade'],
    image: '/assets/tymber-portfolio.webp',
    alt: 'Página de portfólio do site institucional da Tymber, incorporadora focada em madeira engenheirada e sustentabilidade.',
    externalUrl: 'https://tymber.com.br/',
  },
  {
    id: 'conviva-engenharia',
    title: 'Conviva Engenharia',
    categories: ['Site Institucional', 'Blog Profissional'],
    lead:
      'Site para uma construtora com empreendimentos, andamento de obra e assistência técnica.',
    description:
      'Luan desenvolveu o site da Conviva Engenharia a partir do design e da copy da Agência Skyrocket. O site apresenta os empreendimentos, as etapas da compra, o andamento da obra, a entrega, a assistência técnica e os stands de atendimento.',
    tags: ['Site institucional', 'Imobiliário', 'Empreendimentos', 'Engenharia'],
    image: '/assets/conviva-portfolio.webp',
    alt: 'Página de portfólio do site institucional da Conviva Engenharia.',
    externalUrl: 'https://convivaengenharia.com.br/',
  },
  {
    id: 'agencia-skyrocket',
    title: 'Agência Skyrocket',
    categories: ['Site Institucional'],
    lead:
      'Site institucional para uma agência de branding e marketing digital.',
    description:
      'O site da Skyrocket usa a identidade visual espacial da agência para apresentar os serviços de branding, estratégia, presença digital, conteúdo, mídia online e performance.',
    tags: ['Site institucional', 'Agência', 'Branding', 'Marketing digital'],
    image: '/assets/skyrocket-portfolio.webp',
    alt: 'Página de portfólio do site institucional da Agência Skyrocket, agência de branding e marketing digital.',
    externalUrl: 'https://agenciaskyrocket.com.br/',
  },
  {
    id: 'clinica-cdv',
    title: 'Clínica CDV',
    categories: ['Site Institucional'],
    lead:
      'Site institucional para uma clínica fundada em 2001, com especialidades, exames e agendamento.',
    description:
      'O site da Clínica CDV organiza especialidades como vascular, estética, medicina estética e nutrição, além dos exames e do agendamento. Uma seção conta a história da clínica, fundada em 2001.',
    tags: ['Site institucional', 'Saúde', 'Clínica médica', 'Agendamento'],
    image: '/assets/cdv-portfolio.webp',
    alt: 'Página de portfólio do site institucional da Clínica CDV, clínica médica com especialidades, exames e agendamento.',
    externalUrl: 'https://clinicacdv.com.br/',
  },
  {
    id: 'poliana-bentes',
    title: 'Poliana Bentes',
    categories: ['Site Institucional', 'Blog Profissional'],
    lead:
      'Site institucional para uma consultoria estratégica com atuação no território amazônico.',
    description:
      'O site apresenta a BNTS / Poliana Bentes, consultoria de processos, estratégia de negócios, assessoria empresarial e relações institucionais e governamentais. A consultoria fica em Belém e atende empresas e instituições no Pará.',
    tags: [
      'Site institucional',
      'Consultoria',
      'Estratégia',
      'Relações governamentais',
    ],
    image: '/assets/poliana-portfolio.webp',
    alt: 'Página de portfólio do site institucional da consultoria estratégica Poliana Bentes, com atuação em relações institucionais no Pará.',
    externalUrl: 'https://polianabentes.com.br/',
  },
  {
    id: 'forwhen',
    title: 'ForWhen',
    categories: ['Produto Digital'],
    lead:
      'Um presente digital de cartas para abrir no momento certo, com a voz real de quem está longe.',
    description:
      'ForWhen é um produto próprio de Luan Alves. Quem vai ficar longe escreve de 3 a 8 cartas "para quando…", cada uma com foto e nota de voz, e envia tudo em um link privado que abre no celular, sem app e sem conta.',
    tags: ['Produto digital', 'Aplicação web', 'Pagamentos', 'Mobile-first'],
    image: '/assets/forwhen-portfolio.webp',
    alt: 'Página inicial do ForWhen em um navegador e o presente de exemplo aberto em um celular, com o envelope "For Maya, from Theo".',
    externalUrl: 'https://forwhen.app/',
  },
];

const portfolioCaseDetails: Record<string, PortfolioCaseDetail> = {
  'tresor-incorporacoes': {
    slug: 'tresor-incorporacoes',
    relatedInsightSlugs: ['site-institucional-o-que-precisa-ter', 'quanto-tempo-leva-para-criar-um-site-profissional'],
    year: '2025',
    client: 'Trésor Incorporações',
    segment: 'Incorporadora · Alto padrão',
    deliveredAt: '2025',
    siteLabel: 'tresorincorporacoes.com.br',
    challenge:
      'A Trésor precisava de um site com o mesmo padrão visual dos seus empreendimentos, sem esconder as informações da marca e de cada projeto.',
    solution:
      'O site apresenta a marca, os empreendimentos e os canais de contato, com transições animadas e layout pensado também para o celular.',
    deliverables: [
      {
        title: 'Site institucional',
        description:
          'Páginas da marca, dos empreendimentos e de contato.',
      },
      {
        title: 'Animações',
        description:
          'Transições e animações nas seções, com o mesmo tom visual da marca.',
      },
      {
        title: 'Layout responsivo',
        description:
          'Layout desenhado para desktop e celular.',
      },
      {
        title: 'Apresentação comercial',
        description:
          'Empreendimentos com seus diferenciais e chamadas para o comprador entrar em contato.',
      },
    ],
    gallery: [
      {
        src: '/assets/tresor-portfolio.webp',
        alt: 'Página de portfólio do site institucional da Trésor Incorporações.',
        caption: 'Visão institucional',
      },
    ],
    results: [
      {
        value: 'Marca',
        label: 'Página institucional "A Trésor" no menu principal.',
      },
      {
        value: 'Empreendimentos',
        label: 'Seção própria para os empreendimentos da incorporadora.',
      },
      {
        value: 'Mobile',
        label: 'Layout desenhado também para o celular.',
      },
      {
        value: 'Contato',
        label: 'Página de contato e atalhos para Instagram, YouTube e WhatsApp.',
      },
    ],
  },
  urbem: {
    slug: 'urbem',
    relatedInsightSlugs: ['site-institucional-o-que-precisa-ter', 'checklist-lancamento-site-empresarial'],
    year: '2024',
    client: 'Urbem',
    segment: 'Indústria · Madeira engenheirada',
    deliveredAt: '2024',
    siteLabel: 'urbembr.com',
    participation: {
      development: 'Luan Alves realizou o desenvolvimento completo do site, a implementação do blog e do CMS customizado e as configurações necessárias para o deploy.',
      designAndCopy: 'O design e a copy foram fornecidos pela agência parceira e implementados no site por Luan.',
    },
    primaryService: { href: '/site-institucional/', label: 'Site Institucional' },
    evidence: [
      { href: 'https://urbembr.com/', label: 'Produtos e conteúdo técnico', description: 'A página inicial apresenta S4S, Glulam e CLT, além de caminhos para biblioteca, blog e contato.' },
      { href: 'https://urbembr.com/projetos/', label: 'Projetos por aplicação', description: 'O portfólio reúne aplicações da madeira engenheirada em categorias como residencial, comercial e institucional.' },
    ],
    challenge:
      'A Urbem precisava apresentar uma operação técnica e sustentável para arquitetos, construtoras e decisores que avaliam especificações antes de iniciar uma conversa comercial.',
    solution:
      'O site organiza produtos, projetos, biblioteca, blog e canais comerciais, com base técnica de SEO e um blog para conteúdo sobre madeira engenheirada.',
    deliverables: [
      {
        title: 'Site institucional',
        description:
          'Estrutura de navegação para apresentar marca, produtos, projetos e canais comerciais.',
      },
      {
        title: 'Blog profissional',
        description:
          'Base editorial para publicar conteúdo técnico e apoiar descoberta orgânica.',
      },
      {
        title: 'CMS customizado',
        description:
          'CMS configurado e customizado para administrar páginas e conteúdo editorial.',
      },
      {
        title: 'Configuração de deploy',
        description:
          'Configurações necessárias para publicar o site no ambiente de hospedagem.',
      },
    ],
    gallery: [
      {
        src: '/assets/urbem-portfolio.webp',
        alt: 'Página de portfólio do site institucional da Urbem.',
        caption: 'Página inicial',
      },
    ],
    results: [
      {
        value: 'PT-BR',
        label: 'Conteúdo institucional preparado para o público brasileiro.',
      },
      {
        value: 'Conteúdo',
        label: 'Produtos, biblioteca e blog com caminhos próprios na navegação.',
      },
      {
        value: 'B2B',
        label: 'Mensagem orientada para arquitetos, construtoras e decisores.',
      },
    ],
  },
  tymber: {
    slug: 'tymber',
    relatedInsightSlugs: ['site-institucional-o-que-precisa-ter', 'landing-page-ou-site-institucional'],
    year: '2025',
    client: 'Tymber',
    segment: 'Incorporadora · Mass timber',
    deliveredAt: '2025',
    siteLabel: 'tymber.com.br',
    challenge:
      'A Tymber precisava explicar por que constrói com madeira engenheirada para quem compra imóveis, sem perder o rigor técnico.',
    solution:
      'O site organiza o manifesto, os diferenciais e as vantagens da madeira engenheirada em poucas seções.',
    deliverables: [
      {
        title: 'Site institucional',
        description:
          'Apresentação da marca, manifesto e proposta de valor em uma estrutura enxuta.',
      },
      {
        title: 'Conteúdo sobre madeira engenheirada',
        description:
          'Seções sobre o sistema construtivo e seu impacto ambiental.',
      },
      {
        title: 'Layout responsivo',
        description:
          'Layout desenhado para desktop e celular.',
      },
      {
        title: 'Base editorial',
        description:
          'Estrutura preparada para expansão com conteúdo técnico e institucional.',
      },
    ],
    gallery: [
      {
        src: '/assets/tymber-portfolio.webp',
        alt: 'Página de portfólio do site institucional da Tymber.',
        caption: 'Visão institucional',
      },
    ],
    results: [
      {
        value: 'Manifesto',
        label: 'Seção própria para o manifesto da marca.',
      },
      {
        value: 'Mobile',
        label: 'Layout desenhado também para o celular.',
      },
      {
        value: 'Madeira',
        label: 'Vantagens da madeira engenheirada explicadas para quem compra.',
      },
    ],
  },
  'conviva-engenharia': {
    slug: 'conviva-engenharia',
    relatedInsightSlugs: ['site-institucional-o-que-precisa-ter', 'quanto-custa-um-site-profissional'],
    year: '2025',
    client: 'Conviva Engenharia',
    segment: 'Engenharia · Imobiliário',
    deliveredAt: '2025',
    siteLabel: 'convivaengenharia.com.br',
    participation: {
      development: 'Luan Alves realizou o desenvolvimento completo do site, a implementação do blog e do CMS customizado e as configurações necessárias para o deploy.',
      designAndCopy: 'A Agência Skyrocket forneceu o design e a copy, implementados no site por Luan.',
    },
    primaryService: { href: '/site-institucional/', label: 'Site Institucional' },
    evidence: [
      { href: 'https://convivaengenharia.com.br/', label: 'Empreendimentos e atendimento', description: 'A página inicial apresenta empreendimentos, etapas da compra, stands e canais de atendimento.' },
    ],
    challenge:
      'A Conviva precisava mostrar seus empreendimentos e acompanhar o comprador da compra à entrega da obra em um só site.',
    solution:
      'O site reúne marca, localizações, andamento da obra, entrega, assistência técnica e stands de atendimento, com contato em cada etapa.',
    deliverables: [
      {
        title: 'Site institucional',
        description:
          'Estrutura para apresentar marca, empreendimentos e diferenciais comerciais.',
      },
      {
        title: 'Blog profissional',
        description:
          'Implementação da estrutura de artigos e publicação de conteúdo.',
      },
      {
        title: 'CMS customizado',
        description:
          'CMS configurado e customizado para administrar páginas e conteúdo editorial.',
      },
      {
        title: 'Configuração de deploy',
        description:
          'Configurações necessárias para publicar o site no ambiente de hospedagem.',
      },
    ],
    gallery: [
      {
        src: '/assets/conviva-portfolio.webp',
        alt: 'Página de portfólio do site institucional da Conviva Engenharia.',
        caption: 'Visão institucional',
      },
    ],
    results: [
      {
        value: 'Imóveis',
        label: 'Empreendimentos apresentados com localização e diferenciais de moradia.',
      },
      {
        value: 'Obra',
        label: 'Informações sobre compra, andamento da obra, entrega e assistência técnica.',
      },
      {
        value: 'Contato',
        label: 'Stands e canais de atendimento apresentados junto ao conteúdo imobiliário.',
      },
    ],
  },
  'agencia-skyrocket': {
    slug: 'agencia-skyrocket',
    relatedInsightSlugs: ['site-institucional-o-que-precisa-ter', 'como-escolher-desenvolvedor-web-freelancer'],
    year: '2023',
    client: 'Agência Skyrocket',
    segment: 'Agência · Marketing digital',
    deliveredAt: '2023',
    siteLabel: 'agenciaskyrocket.com.br',
    challenge:
      'A agência precisava apresentar seus serviços e cases em um site que carregasse rápido e mantivesse a identidade visual espacial da marca.',
    solution:
      'O site usa a identidade espacial da agência em seções curtas sobre branding, estratégia, conteúdo, mídia online e performance.',
    deliverables: [
      {
        title: 'Site criativo',
        description:
          'Layout com a identidade visual espacial da marca Skyrocket.',
      },
      {
        title: 'Página de serviços',
        description:
          'Organização clara das frentes de branding, estratégia e performance.',
      },
      {
        title: 'Otimização de leitura',
        description:
          'Títulos curtos e seções em ordem de prioridade.',
      },
      {
        title: 'SEO de base',
        description:
          'Metadados e estrutura preparados para presença institucional no Google.',
      },
    ],
    gallery: [
      {
        src: '/assets/skyrocket-portfolio.webp',
        alt: 'Página de portfólio do site institucional da Agência Skyrocket.',
        caption: 'Página de apresentação',
      },
      {
        src: '/assets/skyrocket-home.webp',
        alt: 'Página inicial do site da Agência Skyrocket.',
        caption: 'Página inicial',
      },
    ],
    results: [
      {
        value: 'Branding',
        label: 'Identidade visual espacial da agência aplicada ao site.',
      },
      {
        value: 'Serviços',
        label: 'Branding, estratégia e performance em seções separadas.',
      },
      {
        value: 'SEO',
        label: 'Metadados e estrutura de títulos configurados.',
      },
    ],
    mobileImage: '/assets/skyrocket-home.webp',
  },
  'clinica-cdv': {
    slug: 'clinica-cdv',
    relatedInsightSlugs: ['site-institucional-o-que-precisa-ter', 'checklist-lancamento-site-empresarial'],
    year: '2024',
    client: 'Clínica CDV',
    segment: 'Saúde · Clínica médica',
    deliveredAt: '2024',
    siteLabel: 'clinicacdv.com.br',
    challenge:
      'A clínica precisava organizar especialidades, exames e canais de agendamento em um site acessível.',
    solution:
      'O site apresenta a história da clínica, as especialidades, os exames e o agendamento em páginas de leitura curta.',
    deliverables: [
      {
        title: 'Site institucional',
        description:
          'Apresentação de história, especialidades, exames e informações da clínica.',
      },
      {
        title: 'Fluxo de agendamento',
        description:
          'Caminhos claros para visitantes encontrarem contato e iniciarem atendimento.',
      },
      {
        title: 'Conteúdo de serviços',
        description:
          'Uma seção para cada especialidade, em linguagem direta.',
      },
      {
        title: 'Layout responsivo',
        description:
          'Layout adaptado para pacientes pesquisando pelo celular.',
      },
    ],
    gallery: [
      {
        src: '/assets/cdv-portfolio.webp',
        alt: 'Página de portfólio do site institucional da Clínica CDV.',
        caption: 'Página institucional',
      },
    ],
    results: [
      {
        value: 'Saúde',
        label: 'Especialidades e exames organizados em seções próprias.',
      },
      {
        value: 'Agenda',
        label: 'Contato e agendamento mais fáceis de encontrar.',
      },
      {
        value: 'Mobile',
        label: 'Navegação adequada para busca rápida em celulares.',
      },
    ],
  },
  'poliana-bentes': {
    slug: 'poliana-bentes',
    relatedInsightSlugs: ['site-institucional-o-que-precisa-ter', 'quanto-tempo-leva-para-criar-um-site-profissional'],
    year: '2023',
    client: 'Poliana Bentes',
    segment: 'Consultoria · Relações institucionais',
    deliveredAt: '2023',
    siteLabel: 'polianabentes.com.br',
    participation: {
      development: 'Luan Alves realizou o desenvolvimento completo do site, a implementação do blog e do CMS customizado e as configurações necessárias para o deploy.',
      designAndCopy: 'A Parawara Design forneceu o design e a copy, implementados no site por Luan.',
    },
    primaryService: { href: '/site-institucional/', label: 'Site Institucional' },
    evidence: [
      { href: 'https://polianabentes.com.br/', label: 'Posicionamento e atuação no Pará', description: 'A apresentação institucional descreve a consultoria sediada em Belém e a atuação junto a empresas e instituições.' },
      { href: 'https://polianabentes.com.br/nossos-servicos/', label: 'Serviços da consultoria', description: 'A página organiza relações institucionais e governamentais e inteligência estratégica e regulatória.' },
    ],
    challenge:
      'A consultoria precisava mostrar sua atuação no Pará e seus serviços em um site sóbrio.',
    solution:
      'O site apresenta processos, assessoria empresarial e relações institucionais no Pará, com um blog para publicações da consultoria.',
    deliverables: [
      {
        title: 'Site institucional',
        description:
          'Estrutura para apresentar serviços, posicionamento e credibilidade.',
      },
      {
        title: 'Blog profissional',
        description:
          'Base para publicação de conteúdo e atualização institucional.',
      },
      {
        title: 'CMS customizado',
        description:
          'CMS configurado e customizado para administrar páginas e conteúdo editorial.',
      },
      {
        title: 'Configuração de deploy',
        description:
          'Configurações necessárias para publicar o site no ambiente de hospedagem.',
      },
    ],
    gallery: [
      {
        src: '/assets/poliana-portfolio.webp',
        alt: 'Página de portfólio do site institucional da Poliana Bentes.',
        caption: 'Página institucional',
      },
      {
        src: '/assets/poliana-bentes-home.webp',
        alt: 'Página inicial do site da Poliana Bentes.',
        caption: 'Página inicial',
      },
    ],
    results: [
      {
        value: 'Serviços',
        label: 'Áreas de atuação descritas em uma página própria da consultoria.',
      },
      {
        value: 'Editorial',
        label: 'Blog para publicações da consultoria.',
      },
      {
        value: 'Território',
        label: 'Apresentação da sede em Belém e da atuação no território paraense.',
      },
    ],
    mobileImage: '/assets/poliana-bentes-home.webp',
  },
  forwhen: {
    slug: 'forwhen',
    relatedInsightSlugs: ['landing-page-ou-site-institucional', 'por-que-performance-site-afeta-conversao'],
    year: '2026',
    client: 'Produto próprio',
    segment: 'Presente digital · Mercado dos EUA',
    deliveredAt: '2026',
    siteLabel: 'forwhen.app',
    participation: {
      development: 'Luan Alves concebeu o ForWhen e fez o desenvolvimento completo: fluxo de criação, gravação de voz, experiência de quem recebe, pagamento, e-mails, infraestrutura e publicação.',
      designAndCopy: 'O design de interface, a identidade visual e a copy em inglês também são de Luan, sem agência parceira.',
    },
    primaryService: { href: '/landing-page/', label: 'Landing Page' },
    evidence: [
      { href: 'https://forwhen.app/demo', label: 'Presente de exemplo', description: 'O presente de Theo para Maya mostra o envelope, a caixa de cartas, uma carta com foto e a nota de voz com a versão em texto.' },
      { href: 'https://forwhen.app/', label: 'Página inicial', description: 'Apresenta o preço, o passo a passo, os públicos e as perguntas frequentes antes do fluxo de criação.' },
      { href: 'https://forwhen.app/about', label: 'História do produto', description: 'Explica por que o produto troca as cartas de papel por um link com voz, foto e cartas lacradas até a data.' },
    ],
    challenge:
      'Cartas "open when" em papel não levam a voz de quem escreve, precisam viajar junto ou pelo correio e só ficam fechadas pela força de vontade. O desafio era transformar esse ritual em um presente que abrisse no celular de quem está longe, sem app e sem conta, mantendo a sensação de abrir uma carta.',
    solution:
      'No ForWhen, a pessoa escreve de 3 a 8 cartas, cada uma com foto e nota de voz gravada por ela mesma, e paga US$ 9,99 uma única vez para receber um link privado. Quem recebe abre as cartas em uma caixa com tema noturno, feita para o celular. Cartas com data ficam lacradas até o dia no fuso de quem lê, e cada nota de voz tem a versão em texto logo abaixo do player.',
    deliverables: [
      {
        title: 'Fluxo de criação',
        description:
          'Rascunho salvo enquanto a pessoa escreve, ideias de texto para cada momento, gravação de voz no navegador e prévia como destinatário antes de pagar.',
      },
      {
        title: 'Experiência de quem recebe',
        description:
          'Envelope com selo que abre ao ser pressionado, caixa de cartas mobile-first, cartas lacradas até a data, releitura offline e atalho na tela inicial.',
      },
      {
        title: 'Pagamento e entrega',
        description:
          'Checkout com pagamento único, cobrança em reais para compradores do Brasil, link enviado por e-mail e edição das cartas até que sejam abertas.',
      },
      {
        title: 'Infraestrutura e SEO',
        description:
          'Next.js em Cloudflare Workers, PostgreSQL, fotos e áudios no Cloudflare R2, links de presente fora dos buscadores e guias indexáveis sobre cartas.',
      },
    ],
    gallery: [
      {
        src: '/assets/forwhen-portfolio.webp',
        alt: 'Página inicial do ForWhen no navegador e o envelope do presente de exemplo no celular.',
        caption: 'Página inicial e presente de exemplo',
      },
      {
        src: '/assets/forwhen-recipient.webp',
        alt: 'Três telas de celular do presente de exemplo: o envelope fechado, a caixa de cartas de Theo para Maya e uma carta aberta com foto e player de voz.',
        caption: 'Experiência de quem recebe',
      },
      {
        src: '/assets/forwhen-sender.webp',
        alt: 'Duas telas de celular: a página inicial do ForWhen e o primeiro passo da criação, com os nomes de quem envia e de quem recebe.',
        caption: 'Página inicial e início da criação',
      },
    ],
    results: [
      {
        value: 'Sem conta',
        label: 'Quem envia e quem recebe usam apenas links privados, sem cadastro nem instalação.',
      },
      {
        value: 'Voz real',
        label: 'Cada carta pode levar uma nota de voz gravada por quem escreve, nunca uma voz de IA.',
      },
      {
        value: 'Mobile',
        label: 'Leitura pensada para o celular, com versão em texto para cada nota de voz.',
      },
      {
        value: 'US$ 9,99',
        label: 'Pagamento único no checkout, sem assinatura.',
      },
    ],
    mobileImage: '/assets/forwhen-mobile.webp',
  },
};

export const portfolioProjects = basePortfolioProjects.map((project) => ({
  ...project,
  ...portfolioCaseDetails[project.id],
}));

const featuredPortfolioCaseIds = [
  'tresor-incorporacoes',
  'agencia-skyrocket',
  'poliana-bentes',
];

export const featuredPortfolioProjects = featuredPortfolioCaseIds
  .map((id) => portfolioProjects.find((project) => project.id === id))
  .filter((project): project is (typeof portfolioProjects)[number] => Boolean(project))
  .map((project) => ({
    ...project,
    subtitle: project.categories.join(' / '),
    href: `/portfolio/${project.slug}/`,
  }));

export const reasons = [
  {
    title: 'Comunicação direta',
    subtitle: 'Você fala com o desenvolvedor',
  },
  {
    title: 'Código limpo',
    subtitle: 'Sites rápidos e bem construídos',
  },
  {
    title: 'Design para conversão',
    subtitle: 'Caminhos claros para contato',
  },
  {
    title: 'Suporte pós-entrega',
    subtitle: 'Condições definidas na proposta',
  },
];
