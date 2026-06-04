export const navigation = [
  { href: '/', label: 'Início' },
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
    title: 'Entrega no prazo',
    subtitle: 'com qualidade garantida',
  },
  {
    icon: 'support_agent',
    title: 'Suporte real',
    subtitle: 'após o lançamento',
  },
];

export const services = [
  {
    icon: 'corporate_fare',
    href: '/site-institucional/',
    title: 'Site Institucional',
    description:
      'Presença digital premium para a sua empresa. Desenvolvido com foco em autoridade de marca, SEO técnico e experiência do usuário — para que clientes te encontrem no Google e confiem no que veem.',
    bullets: ['SEO otimizado', 'Mobile first', 'Código limpo'],
  },
  {
    icon: 'article',
    href: '/blog-profissional/',
    title: 'Blog Profissional',
    description:
      'Estrutura editorial feita para ranquear no Google. Publique conteúdo com autoridade, performance e uma experiência de leitura que retém visitantes e gera oportunidades de negócio.',
    bullets: ['SEO editorial', 'Gestão simples', 'Alta performance'],
  },
  {
    icon: 'ads_click',
    href: '/landing-page/',
    title: 'Landing Page',
    description:
      'Páginas desenvolvidas para campanhas e anúncios que precisam converter. Velocidade máxima, copy focada em lead e estrutura testada para maximizar o retorno do seu investimento em tráfego pago.',
    bullets: ['Foco em conversão', 'Velocidade máxima', 'Para tráfego pago'],
  },
];

export const projects = [
  {
    id: 'tresor-incorporacoes',
    title: 'Trésor Incorporações',
    subtitle: 'Desenvolvimento & Motion',
    description:
      'Uma vitrine digital de alto padrão pensada para transmitir exclusividade, arquitetura autoral e sofisticação comercial desde a primeira dobra.',
    serviceType: 'Site Institucional',
    summary:
      'Site institucional premium para incorporadora de luxo, com narrativa visual, motion e foco em autoridade comercial.',
    tags: ['SEO técnico', 'Motion', 'Performance'],
    themeColor: '#4a1f0b',
    externalUrl: 'https://tresorincorporacoes.com.br',
    image: '/assets/tresor-home.webp',
    alt: 'Site institucional da Trésor Incorporações — incorporadora de luxo com empreendimentos em Niterói, RJ. Design sofisticado com foco em exclusividade e valorização de imóveis.',
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
      'Uma presença digital mais afiada para uma agência orientada a performance, com ritmo visual forte e leitura clara para apresentar serviços, autoridade e cases.',
    serviceType: 'Landing Page',
    summary:
      'Experiência digital para agência de marketing, com leitura rápida de serviços, cases e proposta de valor.',
    tags: ['Conversão', 'Animação', 'SEO'],
    themeColor: '#123f7a',
    externalUrl: 'https://agenciaskyrocket.com.br',
    image: '/assets/skyrocket-home.webp',
    alt: 'Site da Agência Skyrocket — agência de marketing digital com identidade visual galáctica, portfólio de cases e soluções para marcas que querem crescer no digital.',
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
      'Um site com linguagem institucional refinada para posicionar consultoria, credibilidade e clareza de mensagem sem abrir mão de flexibilidade editorial.',
    serviceType: 'Blog Profissional',
    summary:
      'Site com base institucional e estrutura editorial para consultoria, combinando credibilidade, conteúdo e gestão simples.',
    tags: ['CMS', 'Editorial', 'Mobile'],
    themeColor: '#173b28',
    externalUrl: 'https://polianabentes.com.br',
    image: '/assets/poliana-bentes-home.webp',
    alt: 'Site da BNTS Consultoria — empresa de relações institucionais e governamentais sediada em Belém, PA. Layout clean e profissional voltado para o setor industrial.',
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
  year: string;
  client: string;
  segment: string;
  deliveredAt: string;
  siteLabel: string;
  challenge: string;
  solution: string;
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
      'Uma presença digital sofisticada para uma incorporadora que transforma endereços em experiências exclusivas.',
    description:
      'Página de portfólio do site institucional da Trésor Incorporações, marca focada em empreendimentos de alto padrão, arquitetura autoral e valorização do estilo de vida.',
    tags: [
      'Site institucional',
      'Incorporadora',
      'Alto padrão',
      'Experiência premium',
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
      'Site institucional para uma indústria que constrói o futuro com madeira engenheirada.',
    description:
      'Desenvolvemos uma presença digital robusta para apresentar a Urbem como referência em construção civil sustentável, tecnologia em mass timber e soluções em madeira engenheirada. O site organiza produtos, projetos, biblioteca, blog e canais comerciais em uma experiência clara, técnica e institucional.',
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
      'Uma experiência digital para uma incorporadora que projeta o amanhã com madeira.',
    description:
      'O site da Tymber traduz o conceito de inovação sustentável em uma navegação elegante, apresentando a marca, seu manifesto e os benefícios da madeira engenheirada para novos empreendimentos imobiliários. A comunicação valoriza tecnologia, responsabilidade ambiental e estética natural.',
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
      'Site para uma marca imobiliária focada em experiências únicas e qualidade de vida.',
    description:
      'Criamos uma estrutura digital para apresentar a Conviva, seus empreendimentos e diferenciais com uma linguagem contemporânea e aspiracional. O projeto destaca moradias inteligentes, espaços integrados, localizações premium e uma jornada pensada para gerar confiança em quem busca morar ou investir.',
    tags: ['Site institucional', 'Imobiliário', 'Empreendimentos', 'Engenharia'],
    image: '/assets/conviva-portfolio.webp',
    alt: 'Página de portfólio do site institucional da Conviva Engenharia, marca imobiliária com empreendimentos e moradias inteligentes.',
    externalUrl: 'https://convivaengenharia.com.br/',
  },
  {
    id: 'agencia-skyrocket',
    title: 'Agência Skyrocket',
    categories: ['Site Institucional'],
    lead:
      'Um site criativo para uma agência que transforma marcas em jornadas digitais.',
    description:
      'O site da Skyrocket apresenta uma identidade visual forte, jovem e espacial, comunicando soluções de branding, estratégia, presença digital, conteúdo, mídia online e performance. A experiência foi pensada para transmitir inovação, criatividade e capacidade de fazer marcas decolarem.',
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
      'Site institucional para uma clínica que une saúde, tecnologia e cuidado humanizado.',
    description:
      'A presença digital da Clínica CDV organiza especialidades como vascular, estética, medicina estética, nutrição e exames em uma experiência leve e confiável. O conteúdo reforça a trajetória da clínica, fundada em 2001, e sua proposta de cuidar da saúde, autoestima e qualidade de vida dos pacientes.',
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
      'O projeto apresenta a BNTS / Poliana Bentes como uma consultoria especializada em processos, estratégia de negócios, assessoria empresarial e relações institucionais e governamentais. A comunicação valoriza transparência, solidez, diálogo e construção de pontes entre empresas, instituições e poder público no Pará.',
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
];

const portfolioCaseDetails: Record<string, PortfolioCaseDetail> = {
  'tresor-incorporacoes': {
    slug: 'tresor-incorporacoes',
    year: '2025',
    client: 'Trésor Incorporações',
    segment: 'Incorporadora · Alto padrão',
    deliveredAt: '2025',
    siteLabel: 'tresorincorporacoes.com.br',
    challenge:
      'A Trésor precisava de uma presença digital que transmitisse sofisticação, exclusividade e confiança desde o primeiro acesso, sem perder clareza na apresentação da marca e dos empreendimentos.',
    solution:
      'O site foi estruturado para valorizar a experiência visual da marca, apresentar seus diferenciais com elegância e conduzir o visitante por uma jornada institucional objetiva, premium e responsiva.',
    deliverables: [
      {
        title: 'Site institucional',
        description:
          'Apresentação da marca, posicionamento, empreendimentos e canais de contato em uma estrutura clara e refinada.',
      },
      {
        title: 'Narrativa premium',
        description:
          'Conteúdo focado em exclusividade, conforto, arquitetura autoral e valorização do estilo de vida.',
      },
      {
        title: 'Experiência responsiva',
        description:
          'Layout adaptado para transmitir a mesma percepção de sofisticação em desktop e dispositivos móveis.',
      },
      {
        title: 'Apresentação comercial',
        description:
          'Estrutura pensada para destacar empreendimentos, benefícios e pontos de conversão para potenciais compradores.',
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
        value: 'Sofisticação',
        label: 'Presença digital alinhada ao posicionamento de alto padrão da marca.',
      },
      {
        value: 'Clareza',
        label: 'Empreendimentos, diferenciais e proposta de valor apresentados de forma objetiva.',
      },
      {
        value: 'Mobile',
        label: 'Experiência consistente para navegação e leitura em diferentes telas.',
      },
      {
        value: 'Conversão',
        label: 'Caminhos diretos para contato, apresentação dos empreendimentos e relacionamento com interessados.',
      },
    ],
  },
  urbem: {
    slug: 'urbem',
    year: '2024',
    client: 'Urbem',
    segment: 'Indústria · Madeira engenheirada',
    deliveredAt: '2024',
    siteLabel: 'urbembr.com',
    challenge:
      'A Urbem precisava apresentar uma operação técnica e sustentável para arquitetos, construtoras e decisores que avaliam especificações antes de iniciar uma conversa comercial.',
    solution:
      'O projeto organizou produtos, projetos, biblioteca, blog e canais comerciais em uma experiência institucional clara, com base preparada para SEO técnico, leitura editorial e autoridade no segmento de madeira engenheirada.',
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
        title: 'Organização de conteúdo',
        description:
          'Arquitetura de páginas pensada para leitura técnica sem perder clareza comercial.',
      },
      {
        title: 'SEO técnico',
        description:
          'Fundação de metadados, URLs e conteúdo estruturado para melhorar indexação.',
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
        value: 'SEO',
        label: 'Estrutura criada para indexação e crescimento orgânico.',
      },
      {
        value: 'B2B',
        label: 'Mensagem orientada para arquitetos, construtoras e decisores.',
      },
    ],
  },
  tymber: {
    slug: 'tymber',
    year: '2025',
    client: 'Tymber',
    segment: 'Incorporadora · Mass timber',
    deliveredAt: '2025',
    siteLabel: 'tymber.com.br',
    challenge:
      'A Tymber precisava traduzir inovação sustentável em uma presença digital elegante, sem deixar a proposta técnica confusa ou distante do mercado imobiliário.',
    solution:
      'A página organiza manifesto, diferenciais e benefícios da madeira engenheirada em uma narrativa institucional objetiva, visualmente premium e fácil de percorrer.',
    deliverables: [
      {
        title: 'Site institucional',
        description:
          'Apresentação da marca, manifesto e proposta de valor em uma estrutura enxuta.',
      },
      {
        title: 'Narrativa de sustentabilidade',
        description:
          'Conteúdo focado em inovação, responsabilidade ambiental e tecnologia construtiva.',
      },
      {
        title: 'Experiência responsiva',
        description:
          'Layout adaptado para leitura consistente em desktop e dispositivos móveis.',
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
        value: 'Clareza',
        label: 'Proposta sustentável explicada com linguagem comercial direta.',
      },
      {
        value: 'Mobile',
        label: 'Experiência planejada para leitura em diferentes telas.',
      },
      {
        value: 'Marca',
        label: 'Presença digital alinhada ao posicionamento inovador.',
      },
    ],
  },
  'conviva-engenharia': {
    slug: 'conviva-engenharia',
    year: '2025',
    client: 'Conviva Engenharia',
    segment: 'Engenharia · Imobiliário',
    deliveredAt: '2025',
    siteLabel: 'convivaengenharia.com.br',
    challenge:
      'A Conviva precisava apresentar empreendimentos e diferenciais de moradia com uma experiência que gerasse confiança sem parecer genérica.',
    solution:
      'O site estrutura a comunicação de marca, localizações, benefícios e jornada comercial em uma experiência contemporânea, aspiracional e orientada à conversão.',
    deliverables: [
      {
        title: 'Site institucional',
        description:
          'Estrutura para apresentar marca, empreendimentos e diferenciais comerciais.',
      },
      {
        title: 'Conteúdo de autoridade',
        description:
          'Texto organizado para explicar qualidade de vida, localização e confiança.',
      },
      {
        title: 'Navegação comercial',
        description:
          'Caminhos claros para visitantes avançarem até contato e avaliação.',
      },
      {
        title: 'Performance visual',
        description:
          'Imagens e seções planejadas para impacto sem perder velocidade.',
      },
    ],
    gallery: [
      {
        src: '/assets/conviva-portfolio.webp',
        alt: 'Página de portfólio do site institucional da Conviva Engenharia.',
        caption: 'Experiência principal',
      },
    ],
    results: [
      {
        value: 'Imóveis',
        label: 'Apresentação mais clara de empreendimentos e diferenciais.',
      },
      {
        value: 'Confiança',
        label: 'Conteúdo desenhado para reduzir atrito na decisão.',
      },
      {
        value: 'Contato',
        label: 'Fluxo visual direcionado para conversas comerciais.',
      },
    ],
  },
  'agencia-skyrocket': {
    slug: 'agencia-skyrocket',
    year: '2023',
    client: 'Agência Skyrocket',
    segment: 'Agência · Marketing digital',
    deliveredAt: '2023',
    siteLabel: 'agenciaskyrocket.com.br',
    challenge:
      'A agência precisava comunicar criatividade, serviços e capacidade de performance em uma experiência rápida, memorável e fácil de entender.',
    solution:
      'A solução combinou identidade visual forte, ritmo de leitura e seções objetivas para apresentar branding, estratégia, conteúdo, mídia online e performance.',
    deliverables: [
      {
        title: 'Site criativo',
        description:
          'Experiência visual com linguagem espacial alinhada à marca Skyrocket.',
      },
      {
        title: 'Página de serviços',
        description:
          'Organização clara das frentes de branding, estratégia e performance.',
      },
      {
        title: 'Otimização de leitura',
        description:
          'Hierarquia de conteúdo para visitantes entenderem valor rapidamente.',
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
        label: 'Identidade digital mais forte para apresentação da agência.',
      },
      {
        value: 'Serviços',
        label: 'Oferta organizada para leitura rápida e comercial.',
      },
      {
        value: 'SEO',
        label: 'Base institucional preparada para descoberta orgânica.',
      },
    ],
    mobileImage: '/assets/skyrocket-home.webp',
  },
  'clinica-cdv': {
    slug: 'clinica-cdv',
    year: '2024',
    client: 'Clínica CDV',
    segment: 'Saúde · Clínica médica',
    deliveredAt: '2024',
    siteLabel: 'clinicacdv.com.br',
    challenge:
      'A clínica precisava organizar especialidades, exames e canais de agendamento em um site confiável, acessível e adequado a um contexto de saúde.',
    solution:
      'A presença digital foi estruturada para destacar trajetória, cuidado humanizado, especialidades e agendamento, com leitura leve e foco em confiança.',
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
          'Organização das especialidades com linguagem objetiva e segura.',
      },
      {
        title: 'Experiência responsiva',
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
        label: 'Informação médica apresentada com clareza e sobriedade.',
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
    year: '2023',
    client: 'Poliana Bentes',
    segment: 'Consultoria · Relações institucionais',
    deliveredAt: '2023',
    siteLabel: 'polianabentes.com.br',
    challenge:
      'A consultoria precisava transmitir credibilidade, atuação estratégica e conhecimento do território amazônico sem depender de uma comunicação carregada.',
    solution:
      'O projeto criou uma base institucional e editorial com linguagem refinada, destacando processos, assessoria empresarial e relações institucionais no Pará.',
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
        title: 'CMS organizado',
        description:
          'Gestão simplificada para páginas e conteúdos recorrentes.',
      },
      {
        title: 'Mensagem estratégica',
        description:
          'Copy voltada para transparência, solidez e construção de relações.',
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
        value: 'CMS',
        label: 'Estrutura preparada para gestão simples de conteúdo.',
      },
      {
        value: 'Editorial',
        label: 'Base de blog para fortalecer autoridade institucional.',
      },
      {
        value: 'Credibilidade',
        label: 'Mensagem mais clara para empresas e instituições.',
      },
    ],
    mobileImage: '/assets/poliana-bentes-home.webp',
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
    subtitle: 'Design pensado para vender',
  },
  {
    title: 'Suporte pós-entrega',
    subtitle: 'Suporte após o lançamento',
  },
];
