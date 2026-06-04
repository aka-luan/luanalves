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
    title: 'Site Institucional',
    description:
      'Presença digital premium para a sua empresa. Desenvolvido com foco em autoridade de marca, SEO técnico e experiência do usuário — para que clientes te encontrem no Google e confiem no que veem.',
    bullets: ['SEO otimizado', 'Mobile first', 'Código limpo'],
  },
  {
    icon: 'article',
    title: 'Blog Profissional',
    description:
      'Estrutura editorial feita para ranquear no Google. Publique conteúdo com autoridade, performance e uma experiência de leitura que retém visitantes e gera oportunidades de negócio.',
    bullets: ['SEO editorial', 'Gestão simples', 'Alta performance'],
  },
  {
    icon: 'ads_click',
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

export const portfolioProjects = [
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
