import { verticalPageLinks } from './verticalPages';
import { projectExtensionsCopy, projectScopeFaq } from './projectScope';

const phone = '5591982890565';
const siteUrl = 'https://luanalves.com.br';

const buildWhatsappHref = (text: string) =>
  `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

export interface BreadcrumbSchemaItem {
  name: string;
  path: string;
}

export interface ServiceCard {
  icon: string;
  title: string;
  copy: string;
}

export interface ServiceAreaServed {
  '@type': 'City' | 'AdministrativeArea' | 'Country';
  name: string;
}

export interface ServicePageContent {
  slug: string;
  areaServed?: ServiceAreaServed | ServiceAreaServed[];
  relatedPages?: {
    title: string;
    copy: string;
    links: { href: string; label: string }[];
  };
  relatedInsightSlugs: string[];
  proof: {
    projectSlug: string;
    title: string;
    copy: string;
    limitation: string;
  };
  namespace: string;
  title: string;
  description: string;
  canonicalPath: string;
  serviceName: string;
  relatedSegments?: typeof verticalPageLinks;
  whatsappHref: string;
  hero: {
    eyebrow: string;
    hideEyebrow?: boolean;
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
    copy: 'Defino a ordem das seções, o texto de cada uma e onde ficam os botões de contato antes de começar o design.',
  },
  {
    icon: 'design_services',
    title: 'Design e desenvolvimento',
    copy: 'Crio a interface e implemento em Astro, com layout adaptado ao celular e otimização de carregamento.',
  },
  {
    icon: 'rocket_launch',
    title: 'Revisão e lançamento',
    copy: 'Faço os ajustes finais combinados e publico a página.',
  },
];

const sharedFaq = [
  ...projectScopeFaq,
  {
    question: 'A página funciona bem no celular?',
    answer:
      'Sim. O layout é feito para celular e desktop, com texto legível, carregamento otimizado e botões de contato fáceis de tocar.',
  },
  {
    question: 'O projeto já inclui SEO?',
    answer:
      'Inclui a base técnica: title, description, canonical, headings, performance, estrutura semântica e boas práticas de indexação.',
  },
  {
    question: 'Você pode configurar WhatsApp, mapa ou analytics?',
    answer:
      'Os caminhos de contato pelo WhatsApp fazem parte da base. Mapas, eventos de conversão e ferramentas de análise são integrações opcionais avaliadas e orçadas no escopo.',
  },
];

export const servicePages: Record<string, ServicePageContent> = {
  'site-institucional': {
    slug: 'site-institucional',
    proof: {
      projectSlug: 'agencia-skyrocket',
      title: 'Serviços e identidade em uma estrutura institucional.',
      copy: 'O projeto da Agência Skyrocket mostra como organizar a apresentação de uma empresa de serviços com identidade própria e caminhos de contato.',
      limitation: 'A prova é a estrutura entregue e sua apresentação. Não há métricas de vendas atribuídas a este case.',
    },
    relatedInsightSlugs: ['site-institucional-o-que-precisa-ter', 'criacao-de-site-wordpress-ou-sob-medida'],
    namespace: 'site-institucional',
    title: 'Site institucional profissional | Luan Alves',
    description:
      'Site institucional para empresas que precisam apresentar serviços, diferenciais e formas de contato, com SEO técnico e botões para o WhatsApp.',
    canonicalPath: '/site-institucional/',
    serviceName: 'Site institucional',
    relatedSegments: verticalPageLinks,
    whatsappHref: buildWhatsappHref(
      'Olá, Luan! Quero solicitar um orçamento para um site institucional profissional.',
    ),
    hero: {
      eyebrow: 'Serviço • Site institucional',
      hideEyebrow: true,
      title:
        'Site institucional à altura da sua empresa',
      accent: 'à altura da sua empresa',
      copy: 'Crio sites institucionais que apresentam serviços, diferenciais e formas de contato logo nas primeiras seções, com SEO técnico e layout adaptado ao celular.',
      ctaLabel: 'Quero um site institucional profissional',
      secondaryLabel: 'Ver portfólio',
      secondaryHref: '#portfolio',
      image: '/assets/site-institucional-hero.webp',
      features: [
        {
          icon: 'workspace_premium',
          title: 'Apresentação',
          copy: 'Serviços e diferenciais logo no início.',
        },
        {
          icon: 'search',
          title: 'SEO técnico',
          copy: 'Estrutura preparada para indexação.',
        },
        {
          icon: 'devices',
          title: 'Responsivo',
          copy: 'Layout adaptado a celular, tablet e desktop.',
        },
      ],
    },
    benefits: {
      eyebrow: 'Benefícios',
      title: 'Um site que explica o que você faz e como falar com você.',
      accent: 'como falar com você',
      copy: 'Um site institucional bem construído ajuda o cliente a entender o que você faz, por que confiar e como iniciar uma conversa.',
      items: [
        {
          icon: 'verified',
          title: 'Credibilidade',
          copy: 'Empresa, serviços e projetos organizados para o cliente conferir antes de entrar em contato.',
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
          copy: 'Botões de WhatsApp no início, ao longo das seções e no fim da página.',
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
          copy: 'Substitua um site desatualizado por um que mostre o que a empresa faz hoje.',
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
        'Da conversa inicial à página publicada, em quatro etapas.',
      accent: 'página publicada',
      copy: 'Defino estrutura e textos antes do design, para que cada seção tenha uma função clara para quem visita.',
      items: sharedProcess,
    },
    included: {
      eyebrow: 'Incluso',
      title: 'O que entra no projeto institucional.',
      accent: 'projeto institucional',
      copy: 'A base organiza páginas, conteúdo fornecido, design, desenvolvimento, SEO técnico e contato. ' + projectExtensionsCopy,
      items: [
        {
          icon: 'schema',
          title: 'Arquitetura de páginas',
          copy: 'Home, serviços, sobre, contato ou estrutura equivalente ao escopo.',
        },
        {
          icon: 'edit_note',
          title: 'Revisão de textos',
          copy: 'Ajustes no texto fornecido para explicar serviços, diferenciais e próximos passos.',
        },
        {
          icon: 'image',
          title: 'Tratamento visual',
          copy: 'Imagens, cards, destaques e chamadas com o mesmo padrão visual em todas as páginas.',
        },
        {
          icon: 'settings',
          title: 'Configurações de publicação',
          copy: 'SEO inicial, favicon e imagens de compartilhamento. Integrações externas são opcionais.',
        },
      ],
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
      title: 'Vamos planejar o site da sua empresa?',
      copy: 'Me conte sobre sua empresa, seus serviços e o que o site precisa resolver.',
      buttonLabel: 'Pedir orçamento do site institucional',
    },
  },
  'landing-page': {
    slug: 'landing-page',
    proof: {
      projectSlug: 'agencia-skyrocket',
      title: 'Uma referência de mensagem e apresentação de serviços.',
      copy: 'O site institucional da Agência Skyrocket permite avaliar hierarquia visual, apresentação da oferta e caminhos de contato que também precisam ser planejados numa landing page.',
      limitation: 'Este é um case institucional, não uma landing page de campanha. Ele não comprova taxa de conversão, retorno de mídia ou resultados de uma oferta específica.',
    },
    relatedInsightSlugs: ['landing-page-ou-site-institucional', 'por-que-performance-site-afeta-conversao'],
    namespace: 'landing-page',
    title: 'Landing page para campanhas | Luan Alves',
    description:
      'Landing page para tráfego pago e captação de leads, com uma oferta por página, carregamento otimizado e contato pelo WhatsApp.',
    canonicalPath: '/landing-page/',
    serviceName: 'Landing page',
    whatsappHref: buildWhatsappHref(
      'Olá, Luan! Quero uma landing page para minha campanha.',
    ),
    hero: {
      eyebrow: 'Serviço • Landing page',
      hideEyebrow: true,
      title:
        'Landing page para levar quem clica no anúncio até o WhatsApp',
      accent: 'até o WhatsApp',
      copy: 'Desenvolvo páginas focadas em campanhas, anúncios e captação de leads, com texto direto, carregamento otimizado e botões de contato ao longo da página.',
      ctaLabel: 'Quero uma landing page para minha campanha',
      secondaryLabel: 'Ver cases',
      secondaryHref: '#portfolio',
      image: '/assets/landing-hero.webp',
      features: [
        {
          icon: 'ads_click',
          title: 'Campanhas',
          copy: 'Pensada para tráfego pago e ações pontuais.',
        },
        {
          icon: 'speed',
          title: 'Carregamento',
          copy: 'Página leve, otimizada para abrir no celular.',
        },
        {
          icon: 'conversion_path',
          title: 'Contato',
          copy: 'Uma ação principal, repetida ao longo da página.',
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
          title: 'Carregamento otimizado',
          copy: 'Página leve, com imagens otimizadas para quem chega pelo celular.',
        },
        {
          icon: 'fact_check',
          title: 'Objeções cobertas',
          copy: 'Blocos de prova, benefícios, processo e FAQ para apoiar a decisão.',
        },
        {
          icon: 'monitoring',
          title: 'Base para mensuração',
          copy: 'Botões e seções preparados para eventos de conversão. A configuração de ferramentas de análise é opcional.',
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
      title: 'O que entra na landing page.',
      accent: 'landing page',
      copy: 'A base organiza a oferta, conteúdo fornecido, design, desenvolvimento, SEO técnico, performance e contato. ' + projectExtensionsCopy,
      items: [
        {
          icon: 'title',
          title: 'Primeira tela',
          copy: 'Oferta, prova e botão principal visíveis logo ao abrir a página.',
        },
        {
          icon: 'view_column',
          title: 'Seções de conversão',
          copy: 'Benefícios, prova, processo, perguntas frequentes e chamada final para contato.',
        },
        {
          icon: 'phone_iphone',
          title: 'Feita para o celular',
          copy: 'Leitura e toque pensados para quem vem do anúncio no celular.',
        },
        {
          icon: 'analytics',
          title: 'Preparação para análise',
          copy: 'Estrutura pronta para eventos, tags e ajustes futuros.',
        },
      ],
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
      title: 'Sua campanha precisa de uma página própria?',
      copy: 'Me envie a oferta, o público e o canal de tráfego. Com isso, defino a estrutura da página e o caminho até o contato.',
      buttonLabel: 'Pedir orçamento da landing page',
    },
  },
  'blog-profissional': {
    slug: 'blog-profissional',
    proof: {
      projectSlug: 'poliana-bentes',
      title: 'Conteúdo editorial integrado à presença institucional.',
      copy: 'O projeto Poliana Bentes reúne site institucional e blog, com uma base para publicação de conteúdo e atualização da consultoria.',
      limitation: 'O CMS fez parte do escopo deste projeto. A forma de publicação do seu blog é definida na proposta; o case não apresenta crescimento orgânico medido.',
    },
    relatedInsightSlugs: ['site-institucional-o-que-precisa-ter', 'checklist-lancamento-site-empresarial'],
    namespace: 'blog-profissional',
    title: 'Blog profissional para empresas | Luan Alves',
    description:
      'Blog profissional para empresas, com categorias, modelo de artigo, SEO técnico e links para serviços e contato.',
    canonicalPath: '/blog-profissional/',
    serviceName: 'Blog profissional',
    whatsappHref: buildWhatsappHref(
      'Olá, Luan! Quero criar um blog profissional.',
    ),
    hero: {
      eyebrow: 'Serviço • Blog profissional',
      hideEyebrow: true,
      title:
        'Blog profissional para publicar o que sua empresa sabe',
      accent: 'o que sua empresa sabe',
      copy: 'Crio blogs com categorias, modelo de artigo e SEO técnico. A solução de atualização é definida conforme a rotina da equipe; CMS é uma extensão opcional.',
      ctaLabel: 'Quero criar um blog profissional',
      secondaryLabel: 'Ver projetos',
      secondaryHref: '#portfolio',
      image: '/assets/blog-hero.webp',
      features: [
        {
          icon: 'article',
          title: 'Editorial',
          copy: 'Estrutura pensada para conteúdo recorrente.',
        },
        {
          icon: 'manage_search',
          title: 'SEO',
          copy: 'Title, description e headings em cada artigo.',
        },
        {
          icon: 'menu_book',
          title: 'Leitura',
          copy: 'Tipografia e espaçamento para textos longos.',
        },
      ],
    },
    benefits: {
      eyebrow: 'Benefícios',
      title: 'Artigos organizados por tema, fáceis de ler no celular.',
      accent: 'por tema',
      copy: 'Os artigos respondem dúvidas que seus clientes já têm e podem ser enviados durante uma negociação. Cada artigo é uma página a mais para o Google indexar.',
      items: [
        {
          icon: 'topic',
          title: 'Arquitetura editorial',
          copy: 'Categorias e páginas para agrupar artigos por tema.',
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
          title: 'Acervo que cresce',
          copy: 'Artigos antigos continuam publicados e podem ser enviados a novos clientes.',
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
          copy: 'Explique temas técnicos em artigos que você pode citar e compartilhar.',
        },
        {
          icon: 'groups',
          title: 'Times comerciais',
          copy: 'Use artigos para educar leads, responder dúvidas e apoiar propostas.',
        },
        {
          icon: 'domain',
          title: 'Empresas com SEO em pauta',
          copy: 'Publique guias, comparativos e conteúdos que não dependem de data.',
        },
      ],
    },
    process: {
      eyebrow: 'Processo',
      title: 'Do mapa editorial ao blog pronto para publicação.',
      accent: 'pronto para publicação',
      copy: 'Defino categorias, modelo de artigo e links internos antes do design.',
      items: sharedProcess,
    },
    included: {
      eyebrow: 'Incluso',
      title: 'Base técnica e visual para conteúdo profissional.',
      accent: 'conteúdo profissional',
      copy: 'A base entrega arquitetura editorial, organização do conteúdo fornecido, design, desenvolvimento, SEO técnico, performance e contato. ' + projectExtensionsCopy,
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
          title: 'Forma de atualização',
          copy: 'Estrutura preparada para edição conforme a solução definida no escopo.',
        },
        {
          icon: 'link',
          title: 'Links internos',
          copy: 'Base para conectar artigos, serviços, cases e contato.',
        },
      ],
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
      title: 'Vamos planejar o blog da sua empresa?',
      copy: 'Me conte quais temas sua empresa quer disputar e como o blog precisa funcionar na rotina de publicação.',
      buttonLabel: 'Pedir orçamento do blog',
    },
  },
  'criacao-de-sites-belem': {
    slug: 'criacao-de-sites-belem',
    areaServed: [
      { '@type': 'City', name: 'Belém' },
      {
        '@type': 'AdministrativeArea',
        name: 'Região Metropolitana de Belém',
      },
    ],
    relatedPages: {
      title: 'Sua empresa fica em outra cidade?',
      copy: 'O processo é o mesmo para quem está fora de Belém: conversa pelo WhatsApp, reuniões por vídeo e etapas definidas na proposta.',
      links: [
        { href: '/criacao-de-sites-manaus/', label: 'Criação de sites em Manaus' },
        { href: '/criacao-de-sites/', label: 'Todos os formatos de site' },
      ],
    },
    proof: {
      projectSlug: 'poliana-bentes',
      title: 'Um projeto para comunicar atuação no Pará.',
      copy: 'A BNTS / Poliana Bentes é uma consultoria sediada em Belém que atua em todo o Pará com relações institucionais e governamentais. Desenvolvi o site, o blog e o CMS a partir do design e da copy da Parawara Design.',
      limitation: 'A referência local está na atuação da consultoria e na entrega apresentada. Não há métricas de posição local ou volume de leads atribuídas ao projeto.',
    },
    relatedInsightSlugs: ['como-escolher-quem-cria-site-em-belem', 'como-escolher-desenvolvedor-web-freelancer'],
    namespace: 'criacao-de-sites-belem',
    title: 'Criação de sites em Belém | Luan Alves',
    description:
      'Criação de sites em Belém para empresas que querem apresentar serviços e região de atendimento, com SEO local e contato pelo WhatsApp.',
    canonicalPath: '/criacao-de-sites-belem/',
    serviceName: 'Criação de sites em Belém',
    whatsappHref: buildWhatsappHref(
      'Olá, Luan! Quero criar meu site em Belém.',
    ),
    hero: {
      eyebrow: 'Serviço • Belém/PA',
      hideEyebrow: true,
      title:
        'Criação de sites em Belém para empresas da cidade e da região metropolitana',
      accent: 'região metropolitana',
      copy: 'Atendo diretamente de Belém, com processo remoto. Organizo conteúdo, design e desenvolvimento para apresentar os serviços de empresas da cidade e região metropolitana e facilitar o contato pelo WhatsApp.',
      ctaLabel: 'Quero criar meu site em Belém',
      secondaryLabel: 'Ver portfólio',
      secondaryHref: '#portfolio',
      image: '/assets/criacao-sites-belem-hero.webp',
      features: [
        {
          icon: 'location_on',
          title: 'Belém/PA',
          copy: 'Atendimento direto de Belém, com processo remoto.',
        },
        {
          icon: 'map',
          title: 'SEO local',
          copy: 'Informações sobre serviços e região de atendimento.',
        },
        {
          icon: 'chat_bubble',
          title: 'WhatsApp',
          copy: 'Botões para pedir orçamento ou atendimento.',
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
          title: 'Contexto local',
          copy: 'Página com contexto de Belém e região metropolitana quando fizer sentido.',
        },
        {
          icon: 'travel_explore',
          title: 'SEO local',
          copy: 'Serviços e região de atuação organizados para ajudar quem procura sua empresa a entender a oferta.',
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
      title: 'Atendimento remoto, direto comigo, a partir de Belém.',
      accent: 'a partir de Belém',
      copy: 'As conversas acontecem pelo WhatsApp, e as etapas seguem o que foi definido na proposta.',
      items: sharedProcess,
    },
    included: {
      eyebrow: 'Incluso',
      title: 'O que entra no site para empresas de Belém.',
      accent: 'empresas de Belém',
      copy: 'A base combina apresentação institucional, conteúdo local fornecido, design, desenvolvimento, WhatsApp, SEO técnico e performance. ' + projectExtensionsCopy,
      items: [
        {
          icon: 'corporate_fare',
          title: 'Página institucional',
          copy: 'Apresentação clara da empresa, serviços, diferenciais e formas de contato.',
        },
        {
          icon: 'map',
          title: 'Informações locais',
          copy: 'Cidade, região de atendimento e endereço, quando houver.',
        },
        {
          icon: 'phone_in_talk',
          title: 'Contato por WhatsApp',
          copy: 'Botões que abrem o WhatsApp para pedir orçamento ou atendimento.',
        },
        {
          icon: 'search',
          title: 'SEO técnico inicial',
          copy: 'Canonical, metadados, headings e performance desde a publicação.',
        },
      ],
    },
    faq: [
      ...sharedFaq,
      {
        question: 'Você atende presencialmente em Belém?',
        answer:
          'O atendimento é remoto, com conversas diretas pelo WhatsApp. Se o projeto pedir uma reunião presencial em Belém, dá para combinar.',
      },
    ],
    cta: {
      title: 'Seu negócio em Belém precisa de um site mais profissional?',
      copy: 'Me conte sobre sua empresa, área de atendimento e objetivo principal. Eu retorno com os próximos passos e os materiais necessários para a proposta.',
      buttonLabel: 'Pedir orçamento do site em Belém',
    },
  },
  'criacao-de-sites-manaus': {
    slug: 'criacao-de-sites-manaus',
    areaServed: { '@type': 'City', name: 'Manaus' },
    relatedPages: {
      title: 'Outras páginas sobre o atendimento.',
      copy: 'Atendo de Belém, e o processo é o mesmo para empresas de outras cidades. A página de Belém mostra como funciona o atendimento na minha cidade.',
      links: [
        { href: '/criacao-de-sites-belem/', label: 'Criação de sites em Belém' },
        { href: '/criacao-de-sites/', label: 'Todos os formatos de site' },
      ],
    },
    proof: {
      projectSlug: 'urbem',
      title: 'Um site técnico para quem avalia fornecedores antes de falar.',
      copy: 'A Urbem atua com madeira engenheirada e precisava apresentar produtos e projetos a arquitetos, construtoras e decisores. Desenvolvi o site, o blog e o CMS customizado a partir do design e da copy de uma agência parceira.',
      limitation: 'É uma referência de site técnico, não um cliente de Manaus. Não tenho case em Manaus e não há métricas de leads ou posição atribuídas ao projeto.',
    },
    relatedInsightSlugs: ['site-institucional-o-que-precisa-ter', 'como-escolher-desenvolvedor-web-freelancer'],
    namespace: 'criacao-de-sites-manaus',
    title: 'Criação de sites em Manaus | Luan Alves',
    description:
      'Criação de sites em Manaus feita de Belém, com reuniões por vídeo e WhatsApp, para indústrias, turismo e empresas de serviço.',
    canonicalPath: '/criacao-de-sites-manaus/',
    serviceName: 'Criação de sites em Manaus',
    whatsappHref: buildWhatsappHref(
      'Olá, Luan! Quero criar o site da minha empresa em Manaus.',
    ),
    hero: {
      eyebrow: 'Serviço • Manaus/AM',
      hideEyebrow: true,
      title:
        'Criação de sites em Manaus, com atendimento remoto a partir de Belém',
      accent: 'atendimento remoto a partir de Belém',
      copy: 'Moro e trabalho em Belém e atendo empresas de Manaus por vídeo e WhatsApp. Não tenho escritório em Manaus. O site é feito para quem decide a compra sem visitar a empresa, como o cliente corporativo de outra cidade ou o turista que planeja a viagem.',
      ctaLabel: 'Quero criar meu site em Manaus',
      secondaryLabel: 'Ver projeto de referência',
      secondaryHref: '#portfolio',
      image: '/assets/site-institucional-hero.webp',
      features: [
        {
          icon: 'videocam',
          title: 'Reunião por vídeo',
          copy: 'Alinhamentos por chamada, sem deslocamento.',
        },
        {
          icon: 'schedule',
          title: 'Uma hora de diferença',
          copy: 'Manaus fica uma hora atrás de Belém. Marcamos no seu horário.',
        },
        {
          icon: 'chat_bubble',
          title: 'WhatsApp',
          copy: 'Conversa direta comigo, do briefing à publicação.',
        },
      ],
    },
    benefits: {
      eyebrow: 'Benefícios',
      title: 'O que o site resolve para uma empresa de Manaus.',
      accent: 'empresa de Manaus',
      copy: 'Quem compra de uma empresa de Manaus muitas vezes está em outra cidade e consulta o site antes do primeiro contato.',
      items: [
        {
          icon: 'factory',
          title: 'Zona Franca e Polo Industrial',
          copy: 'Indústrias e fornecedores ligados à Zona Franca de Manaus apresentam operação, linhas de produto e contato comercial a compradores que conferem o site antes da primeira conversa.',
        },
        {
          icon: 'forest',
          title: 'Turismo e ecoturismo',
          copy: 'Hospedagens, operadoras e guias na Amazônia atendem quem pesquisa de longe. A página reúne roteiros, o que está incluso e um caminho direto para o WhatsApp.',
        },
        {
          icon: 'domain',
          title: 'Serviços regionais',
          copy: 'Escritórios, clínicas, construtoras e prestadoras que atendem Manaus e outras cidades do Amazonas mostram serviços e região de atendimento em um só lugar.',
        },
        {
          icon: 'forum',
          title: 'Conversão pelo WhatsApp',
          copy: 'Chamadas diretas para orçamento, visita técnica ou primeiro contato comercial.',
        },
      ],
    },
    audience: {
      eyebrow: 'Para quem é',
      title: 'Para empresas de Manaus que precisam ser entendidas por quem está fora.',
      accent: 'quem está fora',
      copy: 'Serve para empresas de Manaus que vendem para outras empresas ou recebem clientes de fora da cidade.',
      items: [
        {
          icon: 'precision_manufacturing',
          title: 'Indústria e fornecedores do Polo',
          copy: 'Apresentação técnica da operação para compradores e parceiros.',
        },
        {
          icon: 'travel_explore',
          title: 'Turismo e ecoturismo',
          copy: 'Roteiros, hospedagem e serviços para quem planeja a viagem antes de chegar. Versão em outro idioma é avaliada no escopo.',
        },
        {
          icon: 'handshake',
          title: 'Serviços e empresas regionais',
          copy: 'Páginas para apoiar indicação, prospecção e reuniões comerciais.',
        },
      ],
    },
    process: {
      eyebrow: 'Processo',
      title: 'Atendimento remoto, direto comigo.',
      accent: 'direto comigo',
      copy: 'O briefing e os alinhamentos acontecem por vídeo e WhatsApp. As etapas seguem o que foi definido na proposta.',
      items: sharedProcess,
    },
    included: {
      eyebrow: 'Incluso',
      title: 'O que entra no site para empresas de Manaus.',
      accent: 'empresas de Manaus',
      copy: 'A base combina apresentação institucional, conteúdo fornecido pela empresa, design, desenvolvimento, WhatsApp, SEO técnico e performance. ' + projectExtensionsCopy,
      items: [
        {
          icon: 'corporate_fare',
          title: 'Página institucional',
          copy: 'Empresa, produtos ou serviços, diferenciais e contato comercial apresentados com clareza.',
        },
        {
          icon: 'map',
          title: 'Informações para quem avalia de fora',
          copy: 'Cidade, região de atendimento e endereço, quando houver, para quem decide de outra cidade.',
        },
        {
          icon: 'phone_in_talk',
          title: 'Contato por WhatsApp',
          copy: 'Botões que abrem o WhatsApp para pedir orçamento ou atendimento.',
        },
        {
          icon: 'search',
          title: 'SEO técnico inicial',
          copy: 'Canonical, metadados, headings e performance desde a publicação.',
        },
      ],
    },
    faq: [
      ...sharedFaq,
      {
        question: 'Você tem escritório ou atende presencialmente em Manaus?',
        answer:
          'Não. Moro e trabalho em Belém e não tenho escritório em Manaus. O atendimento é remoto, por vídeo e WhatsApp. Se o projeto pedir uma reunião presencial, avaliamos isso antes da proposta.',
      },
      {
        question: 'A diferença de horário atrapalha o projeto?',
        answer:
          'Manaus fica uma hora atrás de Belém. Marcamos as reuniões em horário comercial para os dois lados, e o resto da conversa segue pelo WhatsApp.',
      },
      {
        question: 'Você já fez sites para empresas de Manaus?',
        answer:
          'Não tenho case de empresa de Manaus no portfólio. O projeto de referência desta página é a Urbem, um site técnico de madeira engenheirada. Com empresas de outras cidades, o processo é o mesmo: vídeo, WhatsApp e etapas definidas na proposta.',
      },
    ],
    cta: {
      title: 'Sua empresa em Manaus precisa de um site mais profissional?',
      copy: 'Me conte sobre a empresa, quem decide a compra e o objetivo principal. Respondo pelo WhatsApp com os próximos passos e os materiais necessários para a proposta.',
      buttonLabel: 'Pedir orçamento do site em Manaus',
    },
  },
};

export const getBreadcrumbSchema = (items: BreadcrumbSchemaItem[]) => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: `${siteUrl}${item.path}`,
  })),
});

export const getFaqPageSchema = (
  items: { question: string; answer: string }[],
  id: string,
) => ({
  '@type': 'FAQPage',
  '@id': id,
  mainEntity: items.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
});

const serviceHubBreadcrumb = [
  { name: 'Início', path: '/' },
  { name: 'Criação de sites', path: '/criacao-de-sites/' },
];

export const getServicePageSchema = (page: ServicePageContent) => [
  getBreadcrumbSchema([
    ...serviceHubBreadcrumb,
    { name: page.serviceName, path: page.canonicalPath },
  ]),
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${siteUrl}${page.canonicalPath}#service`,
    name: page.serviceName,
    description: page.description,
    url: `${siteUrl}${page.canonicalPath}`,
    provider: {
      '@id': `${siteUrl}/#business`,
    },
    areaServed: page.areaServed ?? { '@type': 'Country', name: 'Brasil' },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      url: `${siteUrl}${page.canonicalPath}#contato`,
    },
  },
  getFaqPageSchema(page.faq, `${siteUrl}${page.canonicalPath}#faq`),
];
