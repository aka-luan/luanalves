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
  breadcrumbLabel: string;
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
  relatedInsightSlugs: string[];
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
  {
    href: '/site-para-imobiliaria/',
    label: 'Site para imobiliária',
    copy: 'Imóveis por bairro e tipo, captação de proprietários e contato com o corretor pelo WhatsApp.',
    number: '04',
  },
  {
    href: '/site-para-medicos/',
    label: 'Site para médicos e clínicas',
    copy: 'Especialidades, exames e agendamento, com comunicação sóbria e dentro das normas do conselho.',
    number: '05',
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
    breadcrumbLabel: 'Incorporadora',
    title: 'Site para incorporadora | Empreendimentos e contato · Luan Alves',
    description:
      'Site para incorporadora com uma página por empreendimento, localização, tipologias e contato pelo WhatsApp que identifica o lançamento. SEO técnico incluso.',
    canonicalPath: '/site-para-incorporadora/',
    relatedInsightSlugs: ['site-para-incorporadora-o-que-precisa-ter', 'landing-page-ou-site-institucional'],
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
    breadcrumbLabel: 'Construtora',
    title: 'Site para construtora | Obras e portfólio · Luan Alves',
    description:
      'Site para construtora com portfólio de obras entregues e em andamento, segmentos atendidos e pedido de orçamento pelo WhatsApp. SEO técnico incluso.',
    canonicalPath: '/site-para-construtora/',
    relatedInsightSlugs: ['site-de-construtora-como-mostrar-obras', 'site-institucional-o-que-precisa-ter'],
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
    breadcrumbLabel: 'Madeira engenheirada',
    title: 'Site para indústria de madeira engenheirada | Luan Alves',
    description:
      'Site para indústria e empresas de madeira engenheirada apresentarem produtos, projetos e conteúdo técnico a arquitetos, construtoras e especificadores.',
    canonicalPath: '/site-para-industria-de-madeira-engenheirada/',
    relatedInsightSlugs: ['clt-e-mlc-madeira-engenheirada', 'site-institucional-o-que-precisa-ter'],
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

  'site-para-imobiliaria': {
    slug: 'site-para-imobiliaria',
    namespace: 'site-para-imobiliaria',
    breadcrumbLabel: 'Imobiliária',
    title: 'Site para imobiliária | Imóveis e captação · Luan Alves',
    description:
      'Site para imobiliária com imóveis organizados por bairro e tipo, captação de proprietários e contato com o corretor pelo WhatsApp. SEO técnico incluso.',
    canonicalPath: '/site-para-imobiliaria/',
    relatedInsightSlugs: ['site-para-incorporadora-o-que-precisa-ter', 'quanto-custa-um-site-profissional'],
    serviceName: 'Criação de site para imobiliária',
    whatsappHref: buildWhatsappHref(
      'Olá, Luan! Quero conversar sobre um site para minha imobiliária. Trabalhamos com ',
    ),
    hero: {
      eyebrow: 'Sites para segmentos · Imobiliárias',
      title: 'Site para imobiliária que organiza os imóveis',
      accent: 'e leva o cliente ao corretor.',
      copy: 'Crio sites para imobiliárias que vendem e alugam imóveis de terceiros. O site tem páginas por bairro e tipo de imóvel, uma página para o proprietário que quer anunciar e contato com o corretor pelo WhatsApp.',
      image: '/assets/conviva-portfolio.webp',
      imageAlt:
        'Site da Conviva Engenharia exibido como referência de experiência em sites do mercado imobiliário.',
      primaryCta: 'Quero um site para minha imobiliária',
      proof: [
        { value: 'Trésor · Conviva', label: 'Experiência em sites do mercado imobiliário' },
        { value: 'Bairro e tipo', label: 'Organização dos imóveis' },
        { value: 'WhatsApp', label: 'Contato direto com o corretor' },
      ],
    },
    problems: {
      eyebrow: 'O ponto de decisão',
      title: 'Quem procura imóvel compara imobiliárias antes de ligar para uma.',
      copy: 'O cliente abre vários sites na mesma tarde. Fica com a imobiliária em que acha o bairro que procura, vê quem atende e entende como falar com o corretor. O proprietário faz outra pergunta. Essa imobiliária parece séria o bastante para cuidar do meu imóvel?',
      items: [
        {
          icon: 'location_on',
          title: 'Imóveis difíceis de comparar',
          copy: 'Sem páginas por bairro e por tipo, o cliente rola uma lista longa e desiste antes de achar o que procura.',
        },
        {
          icon: 'badge',
          title: 'Imobiliária sem rosto',
          copy: 'Sem corretores, registro no CRECI e história da empresa, o site parece um anúncio qualquer e o proprietário não confia.',
        },
        {
          icon: 'chat',
          title: 'Contato sem contexto',
          copy: 'Uma mensagem que não diz qual imóvel interessa obriga o corretor a recomeçar a conversa do zero.',
        },
      ],
    },
    architecture: {
      eyebrow: 'Arquitetura recomendada',
      title: 'Páginas para quem busca imóvel e para quem quer anunciar o seu.',
      copy: 'O site atende dois públicos com caminhos separados. O comprador ou locatário chega por bairro e tipo de imóvel. O proprietário encontra a imobiliária e o convite para anunciar.',
      items: [
        {
          icon: 'map',
          title: 'Imóveis por bairro e tipo',
          copy: 'Páginas de bairro e de tipo, como apartamento, casa e terreno, que também respondem a buscas locais no Google.',
        },
        {
          icon: 'key',
          title: 'Captação de proprietários',
          copy: 'Uma página para quem quer vender ou alugar, explicando como a imobiliária trabalha e como começar pelo WhatsApp.',
        },
        {
          icon: 'support_agent',
          title: 'Corretores e atendimento',
          copy: 'Equipe, áreas de atuação e um botão de WhatsApp que informa o imóvel ou o bairro de interesse.',
        },
        {
          icon: 'verified_user',
          title: 'Confiança e registro',
          copy: 'Número do CRECI, história da imobiliária e dados da empresa visíveis nas páginas principais.',
        },
      ],
    },
    cases: {
      eyebrow: 'Experiência no mercado imobiliário',
      title: 'Dois sites do setor, nenhum deles de imobiliária.',
      copy: 'A Conviva Engenharia é uma construtora e a Trésor Incorporações é uma incorporadora. As duas vendem imóveis próprios, enquanto a imobiliária intermedia imóveis de terceiros. Esses sites mostram experiência em apresentar imóveis, etapas da compra e contato comercial. Se você lança os próprios empreendimentos, veja a página de site para incorporadora.',
      primaryId: 'conviva-engenharia',
      secondaryId: 'tresor-incorporacoes',
    },
    differentials: {
      eyebrow: 'Como eu trabalho',
      title: 'Você fala direto com quem faz o site.',
      copy: 'A forma de manter os imóveis atualizados é definida com você, de acordo com o tamanho da carteira e a rotina da equipe.',
      items: [
        {
          icon: 'account_tree',
          title: 'Estrutura antes do layout',
          copy: 'Defino como os imóveis são agrupados, quais páginas existem e por onde o cliente chega ao corretor antes de desenhar.',
        },
        {
          icon: 'photo_library',
          title: 'Fotos que carregam rápido',
          copy: 'Fotos de imóveis entram em tamanho e peso adequados, para a página abrir bem no celular do cliente.',
        },
        {
          icon: 'travel_explore',
          title: 'SEO local desde o início',
          copy: 'Títulos, URLs e páginas por bairro seguem a forma como as pessoas procuram imóveis na cidade.',
        },
        {
          icon: 'extension',
          title: 'Integrações sob escopo',
          copy: 'Painel de cadastro de imóveis, portais e integração por XML são extensões opcionais, avaliadas e orçadas à parte.',
        },
      ],
    },
    faq: [
      {
        question: 'O site já vem com painel para cadastrar imóveis?',
        answer:
          'Não automaticamente. O painel de cadastro, a integração com portais por XML e a sincronização com sistemas de gestão são extensões de escopo. Elas são avaliadas conforme o tamanho da carteira e a rotina da imobiliária, e a proposta registra a solução escolhida.',
      },
      {
        question: 'Qual é a diferença entre o site de uma imobiliária e o de uma incorporadora?',
        answer:
          'A imobiliária intermedia imóveis de terceiros. Ela precisa organizar muitos imóveis, captar proprietários e dar visibilidade aos corretores. A incorporadora lança os próprios empreendimentos e precisa de uma página para cada lançamento. A página de site para incorporadora trata desse segundo caso.',
      },
      {
        question: 'Você já fez sites para imobiliárias?',
        answer:
          'Os sites do portfólio neste mercado são de uma incorporadora (Trésor) e de uma construtora (Conviva Engenharia). Nenhum deles é de uma imobiliária. A experiência está em apresentar imóveis, etapas da compra e contato comercial, e é isso que aplico à estrutura de uma imobiliária.',
      },
      ...sharedFaq,
    ],
    cta: {
      title: 'Me conte como sua imobiliária atende e eu proponho a estrutura do site.',
      copy: 'Me diga quantos imóveis a carteira tem, quais bairros você atende e como os corretores recebem os contatos. Eu retorno com os próximos passos.',
      buttonLabel: 'Conversar sobre o site da imobiliária',
    },
  },

  'site-para-medicos': {
    slug: 'site-para-medicos',
    namespace: 'site-para-medicos',
    breadcrumbLabel: 'Médicos e clínicas',
    title: 'Site para médico e clínica | Agendamento · Luan Alves',
    description:
      'Site para médico e clínica com especialidades, exames, informações do consultório e agendamento pelo WhatsApp, em linguagem sóbria. SEO técnico incluso.',
    canonicalPath: '/site-para-medicos/',
    relatedInsightSlugs: ['site-institucional-o-que-precisa-ter', 'quanto-custa-um-site-profissional'],
    serviceName: 'Criação de site para médico e clínica',
    whatsappHref: buildWhatsappHref(
      'Olá, Luan! Quero conversar sobre um site para meu consultório ou clínica. Atuo na área de ',
    ),
    hero: {
      eyebrow: 'Sites para segmentos · Médicos e clínicas',
      title: 'Site para médico e clínica que explica o atendimento',
      accent: 'e facilita o agendamento.',
      copy: 'Crio sites para médicos e clínicas apresentarem especialidades, exames, endereço e formas de agendar. A linguagem é sóbria, o texto é curto e a leitura funciona bem para quem pesquisa no celular.',
      image: '/assets/cdv-portfolio.webp',
      imageAlt:
        'Site da Clínica CDV exibido como referência de site para clínica médica.',
      primaryCta: 'Quero um site para meu consultório',
      proof: [
        { value: 'Clínica CDV', label: 'Site de clínica médica no portfólio' },
        { value: 'Especialidades', label: 'Cada uma em sua própria seção' },
        { value: 'WhatsApp', label: 'Agendamento fácil de encontrar' },
      ],
    },
    problems: {
      eyebrow: 'O ponto de decisão',
      title: 'O paciente pesquisa o médico antes de marcar a consulta.',
      copy: 'Depois de uma indicação, o paciente costuma procurar o nome do médico ou da clínica no Google. Ele quer saber o que o médico atende, onde fica o consultório e como marcar. Um site confuso ou desatualizado passa a impressão de um atendimento desorganizado.',
      items: [
        {
          icon: 'medical_services',
          title: 'Especialidades pouco claras',
          copy: 'O paciente não entende o que o consultório atende nem se aquele é o profissional que ele procura.',
        },
        {
          icon: 'event_available',
          title: 'Agendamento escondido',
          copy: 'Telefone, endereço e horário ficam em lugares diferentes, e o paciente desiste de procurar.',
        },
        {
          icon: 'phone_iphone',
          title: 'Site ruim no celular',
          copy: 'Muitas buscas por médico acontecem no celular, e uma página lenta ou apertada afasta o paciente.',
        },
      ],
    },
    architecture: {
      eyebrow: 'Arquitetura recomendada',
      title: 'Informação objetiva sobre o atendimento, do perfil ao agendamento.',
      copy: 'O site apresenta quem atende, o que atende e como marcar, sem excesso de texto.',
      items: [
        {
          icon: 'person',
          title: 'Perfil do médico ou da clínica',
          copy: 'Formação, registro profissional (CRM e RQE, quando houver) e história do consultório ou da clínica.',
        },
        {
          icon: 'stethoscope',
          title: 'Especialidades e exames',
          copy: 'Uma página ou seção por especialidade e por exame, em linguagem que o paciente entende.',
        },
        {
          icon: 'location_on',
          title: 'Local e horário',
          copy: 'Endereço, mapa e horário de atendimento no mesmo lugar em que o paciente procura o contato.',
        },
        {
          icon: 'chat',
          title: 'Agendamento pelo WhatsApp',
          copy: 'Botão de contato visível em todas as páginas, com mensagem que já informa a especialidade de interesse.',
        },
      ],
    },
    cases: {
      eyebrow: 'Experiência aplicada',
      title: 'Uma clínica médica e um site de profissional liberal.',
      copy: 'A Clínica CDV é uma clínica com especialidades, exames e agendamento. A Poliana Bentes é uma consultoria, não uma clínica. Entra aqui como exemplo de site de profissional que se apresenta pelo nome, com serviços e blog.',
      primaryId: 'clinica-cdv',
      secondaryId: 'poliana-bentes',
    },
    differentials: {
      eyebrow: 'Como eu trabalho',
      title: 'Comunicação sóbria, dentro das regras da profissão.',
      copy: 'A publicidade médica tem regras próprias. Os textos do site precisam seguir as normas de publicidade do conselho profissional, e a conferência final é responsabilidade do médico ou da clínica. Isto não é orientação jurídica.',
      items: [
        {
          icon: 'balance',
          title: 'Sem promessa de resultado',
          copy: 'O site informa o que o consultório faz. Não promete cura, não usa antes e depois e não recorre a apelos sensacionalistas.',
        },
        {
          icon: 'devices',
          title: 'Pensado para o celular',
          copy: 'Cada página é desenhada e testada no celular, onde o paciente costuma pesquisar e marcar a consulta.',
        },
        {
          icon: 'travel_explore',
          title: 'SEO técnico desde o início',
          copy: 'Metadados, títulos e URLs entram na base do projeto, para o consultório aparecer quando o paciente pesquisa.',
        },
        {
          icon: 'lock',
          title: 'Cuidado com dados do paciente',
          copy: 'O site não pede dados clínicos. Formulários, prontuário e agenda online são extensões avaliadas à parte.',
        },
      ],
    },
    faq: [
      {
        question: 'O site segue as regras de publicidade médica?',
        answer:
          'Organizo o conteúdo com sobriedade, sem promessa de resultado, sem antes e depois e sem sensacionalismo. As normas de publicidade do conselho profissional continuam sendo responsabilidade do médico ou da clínica, que deve conferir os textos antes da publicação. Não presto orientação jurídica.',
      },
      {
        question: 'Posso incluir fotos de pacientes ou depoimentos?',
        answer:
          'Recomendo não incluir. As normas de publicidade médica restringem esse tipo de conteúdo, e o conselho profissional define o que pode ser publicado. Confirme com o conselho antes de enviar qualquer material desse tipo.',
      },
      {
        question: 'O site serve para clínicas ou só para médicos individuais?',
        answer:
          'Serve para os dois. O consultório individual precisa de perfil, especialidade e agendamento. A clínica com vários profissionais precisa de uma seção para cada especialidade e para cada exame.',
      },
      {
        question: 'É possível ter agenda online ou prontuário no site?',
        answer:
          'Agenda online, formulários que coletam dados e integração com sistemas de gestão são extensões de escopo. Dados de saúde exigem cuidado, e a proposta define o que entra, quem contrata a ferramenta e como as informações são tratadas.',
      },
      ...sharedFaq,
    ],
    cta: {
      title: 'Me conte como funciona o seu atendimento e eu proponho a estrutura do site.',
      copy: 'Me diga a especialidade, se o atendimento é em consultório ou clínica e como o paciente agenda hoje. Eu retorno com os próximos passos.',
      buttonLabel: 'Conversar sobre o site do consultório',
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
