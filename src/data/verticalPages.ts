const phone = '5591982890565';
const siteUrl = 'https://luanalves.com.br';

const buildWhatsappHref = (text: string) =>
  `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

export interface VerticalPageItem {
  icon: string;
  title: string;
  copy: string;
}

export interface VerticalPageContent {
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
    image: string;
    imageAlt: string;
    primaryCta: string;
    proof: { value: string; label: string }[];
  };
  problems: {
    eyebrow: string;
    title: string;
    copy: string;
    items: VerticalPageItem[];
  };
  architecture: {
    eyebrow: string;
    title: string;
    copy: string;
    items: VerticalPageItem[];
  };
  cases: {
    eyebrow: string;
    title: string;
    copy: string;
    primaryId: string;
    secondaryId: string;
  };
  differentials: {
    eyebrow: string;
    title: string;
    copy: string;
    items: VerticalPageItem[];
  };
  faq: { question: string; answer: string }[];
  cta: {
    title: string;
    copy: string;
    buttonLabel: string;
  };
}

export const verticalPageLinks = [
  {
    href: '/site-para-incorporadora/',
    label: 'Site para incorporadora',
    copy: 'Empreendimentos, marca e captação de interessados em uma presença digital de alto padrão.',
    number: '01',
  },
  {
    href: '/site-para-construtora/',
    label: 'Site para construtora',
    copy: 'Obras, capacidade de entrega e confiança comercial organizadas com clareza.',
    number: '02',
  },
  {
    href: '/site-para-industria-de-madeira-engenheirada/',
    label: 'Site para madeira engenheirada',
    copy: 'Produtos técnicos, projetos e conteúdo para especificadores e decisores B2B.',
    number: '03',
  },
];

const sharedFaq = [
  {
    question: 'O site será responsivo e rápido no celular?',
    answer:
      'Sim. O projeto é pensado para desktop e mobile, com imagens otimizadas, navegação clara e atenção à velocidade desde a arquitetura da página.',
  },
  {
    question: 'A entrega inclui SEO?',
    answer:
      'Inclui a base técnica de SEO: metadados, hierarquia de títulos, URLs, canonical, dados estruturados adequados, performance e conteúdo semanticamente organizado.',
  },
  {
    question: 'É possível atualizar projetos e conteúdos depois?',
    answer:
      'Sim. A forma de atualização pode usar arquivos estruturados, CMS ou integrações, conforme a frequência de publicação e a rotina da equipe. Essa decisão entra no escopo do projeto.',
  },
];

export const verticalPages: Record<string, VerticalPageContent> = {
  'site-para-incorporadora': {
    slug: 'site-para-incorporadora',
    namespace: 'site-para-incorporadora',
    title: 'Site para Incorporadora | Projetos e Conversão · Luan Alves',
    description:
      'Site para incorporadora apresentar empreendimentos, fortalecer a marca e gerar contatos qualificados com design premium, SEO técnico e alta performance.',
    canonicalPath: '/site-para-incorporadora/',
    serviceName: 'Criação de site para incorporadora',
    whatsappHref: buildWhatsappHref(
      'Olá, Luan! Quero conversar sobre um site para minha incorporadora. Temos ',
    ),
    hero: {
      eyebrow: 'Sites para segmentos · Incorporadoras',
      title: 'Site para incorporadora que valoriza cada empreendimento',
      accent: 'antes da primeira visita.',
      copy: 'Crio experiências digitais sob medida para incorporadoras apresentarem marca, lançamentos e diferenciais com a mesma qualidade percebida que desejam transmitir em cada projeto.',
      image: '/assets/tresor-portfolio.webp',
      imageAlt:
        'Site da Trésor Incorporações exibido como referência de site para incorporadora.',
      primaryCta: 'Quero apresentar meus empreendimentos',
      proof: [
        { value: 'Marca', label: 'Posicionamento consistente' },
        { value: 'Projetos', label: 'Empreendimentos valorizados' },
        { value: 'Contato', label: 'Jornada comercial clara' },
      ],
    },
    problems: {
      eyebrow: 'O ponto de decisão',
      title: 'O comprador avalia a incorporadora antes de visitar o decorado.',
      copy: 'Um site genérico reduz empreendimentos de alto valor a uma sequência de imagens. A presença digital precisa organizar desejo, segurança e informação para sustentar uma decisão que leva tempo.',
      items: [
        {
          icon: 'location_city',
          title: 'Empreendimentos sem contexto',
          copy: 'Plantas, localização e diferenciais aparecem dispersos, dificultando a comparação e o interesse.',
        },
        {
          icon: 'diamond',
          title: 'Marca abaixo do produto',
          copy: 'A experiência digital não acompanha o padrão arquitetônico, visual ou comercial do lançamento.',
        },
        {
          icon: 'conversion_path',
          title: 'Interesse sem direção',
          copy: 'O visitante encontra informação, mas não entende qual é o próximo passo para falar com o comercial.',
        },
      ],
    },
    architecture: {
      eyebrow: 'Arquitetura recomendada',
      title: 'Uma vitrine de empreendimentos com inteligência comercial.',
      copy: 'A estrutura combina posicionamento institucional e páginas de projeto capazes de orientar compradores, investidores e parceiros sem transformar o site em um catálogo indiferenciado.',
      items: [
        {
          icon: 'apartment',
          title: 'Empreendimentos bem apresentados',
          copy: 'Páginas para conceito, localização, tipologias, comodidades, estágio e canais de interesse.',
        },
        {
          icon: 'auto_awesome',
          title: 'Marca e estilo de vida',
          copy: 'Narrativa visual que conecta arquitetura, território e proposta de valor da incorporadora.',
        },
        {
          icon: 'real_estate_agent',
          title: 'Captação por empreendimento',
          copy: 'CTAs e mensagens identificadas para o comercial reconhecer a origem e o contexto do contato.',
        },
        {
          icon: 'query_stats',
          title: 'Base para campanhas e SEO',
          copy: 'Estrutura preparada para páginas de lançamento, mídia, conteúdo e mensuração conforme o escopo.',
        },
      ],
    },
    cases: {
      eyebrow: 'Experiência no segmento',
      title: 'Projetos que tratam o imóvel como experiência, não como ficha técnica.',
      copy: 'Trésor e Tymber mostram duas direções complementares: sofisticação imobiliária e inovação sustentável aplicada a novos modos de construir.',
      primaryId: 'tresor-incorporacoes',
      secondaryId: 'tymber',
    },
    differentials: {
      eyebrow: 'Como eu trabalho',
      title: 'Atendimento direto para uma entrega que respeita a marca.',
      copy: 'Você fala com quem estrutura, desenha e desenvolve. As integrações e a forma de atualização são definidas conforme a operação, sem encaixar o projeto em um pacote rígido.',
      items: [
        {
          icon: 'architecture',
          title: 'Narrativa antes da interface',
          copy: 'Organizo prioridades e jornada antes do layout para que cada seção tenha função comercial.',
        },
        {
          icon: 'photo_library',
          title: 'Imagem com performance',
          copy: 'Renders e fotografias recebem tratamento técnico para impacto visual sem comprometer o carregamento.',
        },
        {
          icon: 'devices',
          title: 'Experiência responsiva',
          copy: 'A percepção de qualidade continua no celular, onde boa parte das primeiras visitas acontece.',
        },
        {
          icon: 'extension',
          title: 'Crescimento previsto',
          copy: 'CMS, CRM, formulários e novas páginas podem ser incorporados quando a rotina exigir.',
        },
      ],
    },
    faq: [
      {
        question: 'O site pode ter uma página para cada empreendimento?',
        answer:
          'Sim. A arquitetura pode organizar empreendimentos por estágio, localização ou perfil, com páginas próprias para conteúdo, mídia e captação de interesse.',
      },
      {
        question: 'É possível integrar formulários ou CRM imobiliário?',
        answer:
          'Sim. Formulários, CRM, analytics e outras integrações podem entrar como extensões de escopo depois de entender o fluxo comercial da incorporadora.',
      },
      ...sharedFaq,
    ],
    cta: {
      title: 'Seus empreendimentos merecem uma presença digital à altura.',
      copy: 'Me conte quantos projetos precisam ser apresentados, como o comercial recebe os contatos e qual percepção a marca precisa construir.',
      buttonLabel: 'Conversar sobre o site da incorporadora',
    },
  },

  'site-para-construtora': {
    slug: 'site-para-construtora',
    namespace: 'site-para-construtora',
    title: 'Site para Construtora | Obras e Autoridade · Luan Alves',
    description:
      'Site para construtora apresentar obras, capacidade de entrega e diferenciais com autoridade, SEO técnico, performance e conversão pelo WhatsApp.',
    canonicalPath: '/site-para-construtora/',
    serviceName: 'Criação de site para construtora',
    whatsappHref: buildWhatsappHref(
      'Olá, Luan! Quero conversar sobre um site para minha construtora. Atuamos com ',
    ),
    hero: {
      eyebrow: 'Sites para segmentos · Construtoras',
      title: 'Site para construtora que transforma obras entregues',
      accent: 'em confiança comercial.',
      copy: 'Crio sites institucionais para construtoras apresentarem experiência, empreendimentos e áreas de atuação com clareza para clientes, parceiros e novos negócios.',
      image: '/assets/conviva-portfolio.webp',
      imageAlt:
        'Site da Conviva Engenharia exibido como referência de presença digital para construtora.',
      primaryCta: 'Quero fortalecer minha construtora',
      proof: [
        { value: 'Obras', label: 'Histórico organizado' },
        { value: 'Solidez', label: 'Confiança desde o primeiro acesso' },
        { value: 'B2B', label: 'Informação para decidir' },
      ],
    },
    problems: {
      eyebrow: 'Credibilidade em jogo',
      title: 'Quem contrata uma obra procura sinais concretos de capacidade.',
      copy: 'A indicação pode abrir a conversa, mas o site confirma se a empresa parece preparada. Projetos mal documentados, discurso genérico e contato confuso enfraquecem uma decisão de alto valor.',
      items: [
        {
          icon: 'construction',
          title: 'Obras sem leitura',
          copy: 'Galerias soltas não explicam tipologia, desafio, localização, estágio ou responsabilidade da construtora.',
        },
        {
          icon: 'engineering',
          title: 'Capacidade pouco visível',
          copy: 'Segmentos atendidos, processo e experiência ficam escondidos atrás de frases institucionais vagas.',
        },
        {
          icon: 'handshake',
          title: 'Confiança interrompida',
          copy: 'Clientes e parceiros precisam procurar demais para entender histórico, atuação e como iniciar contato.',
        },
      ],
    },
    architecture: {
      eyebrow: 'Arquitetura recomendada',
      title: 'Da apresentação institucional à prova de obra executada.',
      copy: 'O site deve funcionar como credencial comercial: organiza o que a construtora faz, onde atua e por que sua equipe está preparada para assumir o próximo projeto.',
      items: [
        {
          icon: 'domain',
          title: 'Portfólio de obras',
          copy: 'Projetos entregues e em andamento com contexto, imagens e informações que comprovam experiência.',
        },
        {
          icon: 'category',
          title: 'Segmentos atendidos',
          copy: 'Residencial, comercial, industrial ou infraestrutura apresentados conforme a atuação real da empresa.',
        },
        {
          icon: 'verified_user',
          title: 'Confiança e transparência',
          copy: 'História, processo, diferenciais e documentos relevantes quando fizerem parte da jornada comercial.',
        },
        {
          icon: 'forum',
          title: 'Contato com contexto',
          copy: 'Chamadas específicas para orçamento, parceria ou apresentação de oportunidade.',
        },
      ],
    },
    cases: {
      eyebrow: 'Experiência aplicada',
      title: 'Projetos digitais para tornar construção e inovação mais fáceis de entender.',
      copy: 'A Conviva demonstra uma jornada imobiliária orientada a empreendimentos e transparência. A Urbem complementa com organização de conteúdo técnico para decisores B2B.',
      primaryId: 'conviva-engenharia',
      secondaryId: 'urbem',
    },
    differentials: {
      eyebrow: 'Como eu trabalho',
      title: 'Estrutura sólida no conteúdo, no design e no código.',
      copy: 'O projeto parte do material que a empresa consegue comprovar. Não invento números, certificações ou capacidades: transformo evidências reais em uma apresentação comercial mais forte.',
      items: [
        {
          icon: 'account_tree',
          title: 'Arquitetura por decisão',
          copy: 'Serviços, obras e provas são organizados conforme o caminho de quem avalia a empresa.',
        },
        {
          icon: 'speed',
          title: 'Portfólio sem lentidão',
          copy: 'Imagens de obra são preparadas para preservar impacto e manter uma navegação rápida.',
        },
        {
          icon: 'search',
          title: 'SEO técnico desde o início',
          copy: 'Metadados, semântica, URLs e performance entram na fundação do projeto.',
        },
        {
          icon: 'support_agent',
          title: 'Atendimento direto',
          copy: 'Alinhamento com quem planeja e desenvolve, com suporte pós-lançamento definido no escopo.',
        },
      ],
    },
    faq: [
      {
        question: 'O portfólio pode separar obras em andamento e entregues?',
        answer:
          'Sim. Os projetos podem ser organizados por estágio, tipo, localização ou segmento, desde que a classificação ajude o cliente a avaliar a experiência da construtora.',
      },
      {
        question: 'O site pode apresentar documentação ou área do cliente?',
        answer:
          'Pode. Páginas documentais, portais e áreas restritas são extensões de escopo e precisam ser avaliadas conforme segurança, integrações e rotina operacional.',
      },
      ...sharedFaq,
    ],
    cta: {
      title: 'A experiência da sua construtora precisa aparecer antes da proposta.',
      copy: 'Me conte os tipos de obra, os projetos que podem ser divulgados e o perfil de cliente que você quer atrair. Eu retorno com os próximos passos.',
      buttonLabel: 'Conversar sobre o site da construtora',
    },
  },

  'site-para-industria-de-madeira-engenheirada': {
    slug: 'site-para-industria-de-madeira-engenheirada',
    namespace: 'site-para-madeira-engenheirada',
    title: 'Site para Indústria de Madeira Engenheirada | Luan Alves',
    description:
      'Site para indústria e empresas de madeira engenheirada apresentarem produtos, projetos e conteúdo técnico a arquitetos, construtoras e especificadores.',
    canonicalPath: '/site-para-industria-de-madeira-engenheirada/',
    serviceName: 'Criação de site para empresa de madeira engenheirada',
    whatsappHref: buildWhatsappHref(
      'Olá, Luan! Quero conversar sobre um site para nossa empresa de madeira engenheirada. Trabalhamos com ',
    ),
    hero: {
      eyebrow: 'Sites para segmentos · Madeira engenheirada',
      title: 'Site para indústria de madeira engenheirada com profundidade técnica',
      accent: 'e visão de mercado.',
      copy: 'Crio sites para empresas que projetam, fabricam ou montam soluções em CLT, MLC e mass timber, conectando tecnologia construtiva a uma narrativa clara para especificadores e decisores.',
      image: '/assets/urbem-portfolio.webp',
      imageAlt:
        'Site da Urbem exibido como referência de site para indústria de madeira engenheirada.',
      primaryCta: 'Quero apresentar nossa tecnologia',
      proof: [
        { value: 'CLT · MLC', label: 'Produtos bem explicados' },
        { value: 'Projetos', label: 'Aplicações que comprovam' },
        { value: 'B2B', label: 'Conteúdo para especificadores' },
      ],
    },
    problems: {
      eyebrow: 'Complexidade sem ruído',
      title: 'Inovação técnica perde força quando o mercado não consegue compreendê-la.',
      copy: 'Madeira engenheirada exige educação, prova e confiança. Um site superficial deixa arquitetos, construtoras e incorporadoras sem respostas para especificar, comparar ou iniciar um estudo de viabilidade.',
      items: [
        {
          icon: 'forest',
          title: 'Produto confundido com madeira comum',
          copy: 'Sem contexto técnico, CLT, MLC e mass timber perdem precisão e valor percebido.',
        },
        {
          icon: 'schema',
          title: 'Ecossistema fragmentado',
          copy: 'Indústria, engenharia, fabricação, logística e montagem aparecem como partes desconectadas.',
        },
        {
          icon: 'menu_book',
          title: 'Conhecimento difícil de acessar',
          copy: 'Dados, aplicações, projetos e materiais técnicos não acompanham a jornada do especificador.',
        },
      ],
    },
    architecture: {
      eyebrow: 'Arquitetura recomendada',
      title: 'Conteúdo técnico organizado para acelerar confiança e especificação.',
      copy: 'A presença digital precisa servir a públicos diferentes sem diluir a mensagem: quem descobre o sistema, quem avalia viabilidade e quem já procura produtos ou parceiros.',
      items: [
        {
          icon: 'precision_manufacturing',
          title: 'Indústria e processo',
          copy: 'Capacidade, controle de qualidade, origem da matéria-prima e etapas produtivas apresentados com clareza.',
        },
        {
          icon: 'inventory_2',
          title: 'Produtos e sistemas',
          copy: 'CLT, MLC e componentes explicados por aplicação, desempenho e papel no projeto.',
        },
        {
          icon: 'architecture',
          title: 'Projetos e tipologias',
          copy: 'Obras reais conectam a tecnologia a escalas, usos, desafios e resultados verificáveis.',
        },
        {
          icon: 'library_books',
          title: 'Biblioteca e conteúdo',
          copy: 'Materiais técnicos, artigos e respostas para apoiar arquitetos, engenheiros e construtoras.',
        },
      ],
    },
    cases: {
      eyebrow: 'Experiência no ecossistema',
      title: 'Da indústria ao empreendimento: duas provas reais em mass timber.',
      copy: 'A Urbem mostra a profundidade de uma operação industrial com produtos, projetos, biblioteca e blog. A Tymber traduz a madeira engenheirada em proposta imobiliária e marca.',
      primaryId: 'urbem',
      secondaryId: 'tymber',
    },
    differentials: {
      eyebrow: 'Como eu trabalho',
      title: 'Rigor técnico sem perder clareza comercial.',
      copy: 'A página não tenta ensinar engenharia em um parágrafo. Ela cria camadas: visão geral para decisores, profundidade para especificadores e caminhos objetivos para quem quer conversar sobre um projeto.',
      items: [
        {
          icon: 'hub',
          title: 'Públicos conectados',
          copy: 'Arquitetos, engenheiros, construtoras e incorporadoras encontram entradas coerentes para suas dúvidas.',
        },
        {
          icon: 'article',
          title: 'Base editorial',
          copy: 'A arquitetura pode crescer com biblioteca, blog, projetos e versões em outros idiomas.',
        },
        {
          icon: 'travel_explore',
          title: 'Descoberta orgânica',
          copy: 'Conteúdo e estrutura técnica ampliam a superfície de busca para produtos, aplicações e dúvidas reais.',
        },
        {
          icon: 'verified',
          title: 'Evidência antes da promessa',
          copy: 'Projetos, processos e informações verificáveis sustentam autoridade sem recorrer a números inventados.',
        },
      ],
    },
    faq: [
      {
        question: 'A página serve apenas para fabricantes de CLT e MLC?',
        answer:
          'Não. Ela também se aplica a empresas que projetam, fabricam componentes, coordenam logística ou executam a montagem de sistemas em madeira engenheirada.',
      },
      {
        question: 'O site pode ter biblioteca técnica e versão em inglês?',
        answer:
          'Sim. Biblioteca, blog, downloads e internacionalização podem fazer parte da arquitetura. Volume de conteúdo, gestão e tradução são definidos no escopo.',
      },
      ...sharedFaq,
    ],
    cta: {
      title: 'Sua tecnologia precisa ser compreendida para ser especificada.',
      copy: 'Me conte em qual etapa do ecossistema sua empresa atua, quais produtos ou serviços oferece e quais públicos precisam avançar pelo site.',
      buttonLabel: 'Conversar sobre o site de madeira engenheirada',
    },
  },
};

export const getVerticalPageSchema = (page: VerticalPageContent) => [
  {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Início',
        item: siteUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Criação de Sites',
        item: `${siteUrl}/criacao-de-sites/`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: page.serviceName,
        item: `${siteUrl}${page.canonicalPath}`,
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${siteUrl}${page.canonicalPath}#service`,
    name: page.serviceName,
    description: page.description,
    url: `${siteUrl}${page.canonicalPath}`,
    provider: { '@id': `${siteUrl}/#business` },
    areaServed: { '@type': 'Country', name: 'Brasil' },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      url: `${siteUrl}${page.canonicalPath}#contato`,
    },
  },
];
