import { projectScopeFaq } from './projectScope';

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
    copy: 'Uma página por empreendimento, marca da incorporadora e contato do comercial no mesmo site.',
    number: '01',
  },
  {
    href: '/site-para-construtora/',
    label: 'Site para construtora',
    copy: 'Obras entregues e em andamento, segmentos atendidos e pedido de orçamento.',
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
  ...projectScopeFaq,
  {
    question: 'O site será responsivo e rápido no celular?',
    answer:
      'Sim. Cada página é desenhada e testada no celular e no desktop, e o peso das imagens entra na conta desde a estrutura da página.',
  },
  {
    question: 'A entrega inclui SEO?',
    answer:
      'Inclui a base técnica de SEO: metadados, hierarquia de títulos, URLs, canonical, dados estruturados adequados, performance e títulos que seguem a ordem do conteúdo.',
  },
];

export const verticalPages: Record<string, VerticalPageContent> = {
  'site-para-incorporadora': {
    slug: 'site-para-incorporadora',
    namespace: 'site-para-incorporadora',
    title: 'Site para incorporadora | Empreendimentos e contato · Luan Alves',
    description:
      'Site para incorporadora com uma página por empreendimento, localização, tipologias e contato pelo WhatsApp que identifica o lançamento. SEO técnico incluso.',
    canonicalPath: '/site-para-incorporadora/',
    serviceName: 'Criação de site para incorporadora',
    whatsappHref: buildWhatsappHref(
      'Olá, Luan! Quero conversar sobre um site para minha incorporadora. Temos ',
    ),
    hero: {
      eyebrow: 'Sites para segmentos · Incorporadoras',
      title: 'Site para incorporadora com uma página',
      accent: 'para cada empreendimento.',
      copy: 'Crio sites para incorporadoras com conceito, localização, tipologias e estágio de cada lançamento, e um contato pelo WhatsApp que chega ao comercial com o nome do empreendimento.',
      image: '/assets/tresor-portfolio.webp',
      imageAlt:
        'Site da Trésor Incorporações exibido como referência de site para incorporadora.',
      primaryCta: 'Quero apresentar meus empreendimentos',
      proof: [
        { value: 'Trésor · Tymber', label: 'Sites de incorporadora no portfólio' },
        { value: '1 página', label: 'Por empreendimento' },
        { value: 'WhatsApp', label: 'Mensagem identifica o lançamento' },
      ],
    },
    problems: {
      eyebrow: 'O ponto de decisão',
      title: 'O comprador avalia a incorporadora antes de visitar o decorado.',
      copy: 'Um site genérico reduz empreendimentos de alto valor a uma sequência de imagens. O comprador volta ao site várias vezes antes de visitar o decorado, e em cada visita precisa achar planta, localização, estágio da obra e o contato do comercial.',
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
      title: 'Uma página por empreendimento e contato que identifica o lançamento.',
      copy: 'O site junta as páginas institucionais da incorporadora e uma página para cada projeto, escrita para compradores, investidores e parceiros.',
      items: [
        {
          icon: 'apartment',
          title: 'Empreendimentos bem apresentados',
          copy: 'Páginas para conceito, localização, tipologias, comodidades, estágio e canais de interesse.',
        },
        {
          icon: 'auto_awesome',
          title: 'Marca e estilo de vida',
          copy: 'Páginas institucionais com a história da incorporadora, o padrão dos projetos e os bairros onde ela atua.',
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
      title: 'Dois sites de incorporadora com empreendimentos, marca e contato na mesma navegação.',
      copy: 'A Trésor é uma incorporadora de alto padrão. A Tymber lança empreendimentos construídos com madeira engenheirada.',
      primaryId: 'tresor-incorporacoes',
      secondaryId: 'tymber',
    },
    differentials: {
      eyebrow: 'Como eu trabalho',
      title: 'Você fala direto com quem faz o site.',
      copy: 'Você fala com quem estrutura, desenha e desenvolve. As integrações e a forma de atualização são definidas conforme a operação, sem encaixar o projeto em um pacote rígido.',
      items: [
        {
          icon: 'architecture',
          title: 'Narrativa antes da interface',
          copy: 'Defino as páginas, a ordem das informações e o caminho até o contato antes de desenhar o layout.',
        },
        {
          icon: 'photo_library',
          title: 'Imagem com performance',
          copy: 'Renders e fotos entram em tamanho e peso adequados para a página carregar rápido.',
        },
        {
          icon: 'devices',
          title: 'Experiência responsiva',
          copy: 'Cada página é desenhada e testada também no celular, não só adaptada depois.',
        },
        {
          icon: 'extension',
          title: 'Crescimento previsto',
          copy: 'CMS, CRM, formulários e novas páginas são extensões opcionais, avaliadas e orçadas quando a rotina exigir.',
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
      title: 'Me mostre o próximo lançamento e eu proponho a estrutura do site.',
      copy: 'Me conte quantos projetos precisam ser apresentados, como o comercial recebe os contatos e qual percepção a marca precisa construir.',
      buttonLabel: 'Conversar sobre o site da incorporadora',
    },
  },

  'site-para-construtora': {
    slug: 'site-para-construtora',
    namespace: 'site-para-construtora',
    title: 'Site para construtora | Obras e portfólio · Luan Alves',
    description:
      'Site para construtora com portfólio de obras entregues e em andamento, segmentos atendidos e pedido de orçamento pelo WhatsApp. SEO técnico incluso.',
    canonicalPath: '/site-para-construtora/',
    serviceName: 'Criação de site para construtora',
    whatsappHref: buildWhatsappHref(
      'Olá, Luan! Quero conversar sobre um site para minha construtora. Atuamos com ',
    ),
    hero: {
      eyebrow: 'Sites para segmentos · Construtoras',
      title: 'Site para construtora que mostra cada obra entregue',
      accent: 'com tipologia, local e escopo.',
      copy: 'Crio sites institucionais para construtoras mostrarem obras, segmentos atendidos e histórico de entrega a clientes, parceiros e contratantes.',
      image: '/assets/conviva-portfolio.webp',
      imageAlt:
        'Site da Conviva Engenharia exibido como referência de site para construtora.',
      primaryCta: 'Quero fortalecer minha construtora',
      proof: [
        { value: 'Conviva', label: 'Site de engenharia no portfólio' },
        { value: 'Obras', label: 'Entregues e em andamento' },
        { value: 'Orçamento', label: 'Contato por tipo de pedido' },
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
      title: 'Da apresentação da empresa às obras executadas.',
      copy: 'O site mostra o que a construtora faz, onde atua e quais obras já entregou.',
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
          copy: 'História, processo e documentos que o cliente pede antes de fechar contrato.',
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
      title: 'Sites com obras, andamento e conteúdo técnico.',
      copy: 'O site da Conviva Engenharia informa andamento da obra, entrega e assistência técnica. O da Urbem organiza conteúdo técnico para arquitetos e construtoras.',
      primaryId: 'conviva-engenharia',
      secondaryId: 'urbem',
    },
    differentials: {
      eyebrow: 'Como eu trabalho',
      title: 'O site parte do que a construtora comprova.',
      copy: 'Uso só números, certificações e obras que a empresa pode comprovar. Não invento capacidade.',
      items: [
        {
          icon: 'account_tree',
          title: 'Arquitetura por decisão',
          copy: 'Serviços, obras e provas são organizados conforme o caminho de quem avalia a empresa.',
        },
        {
          icon: 'speed',
          title: 'Portfólio sem lentidão',
          copy: 'Fotos de obra entram em tamanho e peso adequados para a galeria não travar a página.',
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
    title: 'Site para indústria de madeira engenheirada | Luan Alves',
    description:
      'Site para indústria e empresas de madeira engenheirada apresentarem produtos, projetos e conteúdo técnico a arquitetos, construtoras e especificadores.',
    canonicalPath: '/site-para-industria-de-madeira-engenheirada/',
    serviceName: 'Criação de site para empresa de madeira engenheirada',
    whatsappHref: buildWhatsappHref(
      'Olá, Luan! Quero conversar sobre um site para nossa empresa de madeira engenheirada. Trabalhamos com ',
    ),
    hero: {
      eyebrow: 'Sites para segmentos · Madeira engenheirada',
      title: 'Site para indústria de madeira engenheirada',
      accent: 'com produtos, obras e material técnico.',
      copy: 'Crio sites para empresas que projetam, fabricam ou montam sistemas em CLT, MLC e mass timber, com páginas de produto, obras e material técnico para arquitetos, engenheiros e construtoras.',
      image: '/assets/urbem-portfolio.webp',
      imageAlt:
        'Site da Urbem exibido como referência de site para indústria de madeira engenheirada.',
      primaryCta: 'Quero apresentar nossa tecnologia',
      proof: [
        { value: 'Urbem', label: 'Site de indústria de madeira engenheirada no portfólio' },
        { value: 'CLT · Glulam · S4S', label: 'Produtos com página própria' },
        { value: 'Biblioteca', label: 'Material técnico e blog' },
      ],
    },
    problems: {
      eyebrow: 'O ponto de especificação',
      title: 'Arquiteto que não acha dados técnicos no site não especifica o sistema.',
      copy: 'Quem especifica madeira engenheirada procura aplicações, desempenho e obras de referência. Um site superficial deixa arquitetos, construtoras e incorporadoras sem respostas para especificar, comparar ou iniciar um estudo de viabilidade.',
      items: [
        {
          icon: 'forest',
          title: 'Produto confundido com madeira comum',
          copy: 'Sem contexto técnico, CLT, MLC e mass timber perdem precisão e valor percebido.',
        },
        {
          icon: 'schema',
          title: 'Cadeia fragmentada',
          copy: 'Indústria, engenharia, fabricação, logística e montagem aparecem como partes desconectadas.',
        },
        {
          icon: 'menu_book',
          title: 'Conhecimento difícil de acessar',
          copy: 'Dados, aplicações, projetos e materiais técnicos ficam espalhados e o especificador não acha o que procura.',
        },
      ],
    },
    architecture: {
      eyebrow: 'Arquitetura recomendada',
      title: 'Produtos, obras e documentação técnica separados por quem consulta.',
      copy: 'O site atende quem está conhecendo o sistema, quem avalia viabilidade e quem já procura produtos ou parceiros.',
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
      eyebrow: 'Experiência na cadeia',
      title: 'Da indústria ao empreendimento: duas provas reais em mass timber.',
      copy: 'A Urbem mostra a profundidade de uma operação industrial com produtos, projetos, biblioteca e blog. A Tymber traduz a madeira engenheirada em proposta imobiliária e marca.',
      primaryId: 'urbem',
      secondaryId: 'tymber',
    },
    differentials: {
      eyebrow: 'Como eu trabalho',
      title: 'Informação técnica em níveis de detalhe.',
      copy: 'Decisores encontram uma visão geral, especificadores encontram a documentação, e quem já tem um projeto encontra o contato.',
      items: [
        {
          icon: 'hub',
          title: 'Entrada por público',
          copy: 'Arquitetos, engenheiros, construtoras e incorporadoras têm um caminho próprio no menu para suas dúvidas.',
        },
        {
          icon: 'article',
          title: 'Base editorial',
          copy: 'A arquitetura pode crescer com biblioteca, blog, projetos e versões em outros idiomas.',
        },
        {
          icon: 'travel_explore',
          title: 'Descoberta orgânica',
          copy: 'Uma página por produto e por aplicação aparece em mais buscas sobre esses temas.',
        },
        {
          icon: 'verified',
          title: 'Só informação verificável',
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
      title: 'Um site que o especificador consegue consultar.',
      copy: 'Me conte em qual etapa (projeto, fabricação, logística ou montagem) sua empresa atua, quais produtos ou serviços oferece e quais públicos precisam avançar pelo site.',
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
        name: 'Criação de sites',
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
