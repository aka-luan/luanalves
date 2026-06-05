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

export const insightFilters: InsightFilter[] = [
  { label: 'Todos', value: 'all', current: true },
  { label: 'Desenvolvimento', value: 'desenvolvimento' },
  { label: 'SEO', value: 'seo' },
  { label: 'Freelance', value: 'freelance' },
  { label: 'IA', value: 'ia' },
  { label: 'Ferramentas', value: 'ferramentas' },
];

export const insights: InsightPost[] = [
  {
    title:
      'Como um site novo pode ganhar autoridade orgânica sem comprar backlinks',
    excerpt:
      'Um caminho prático para fortalecer SEO com conteúdo, cases reais, links naturais e sinais de confiança.',
    description:
      'Veja como um site novo pode construir autoridade orgânica com cluster de conteúdo, portfólio, backlinks naturais e estratégia SEO de 90 dias.',
    category: 'SEO',
    categorySlug: 'seo',
    date: '05 jun. 2026',
    isoDate: '2026-06-05',
    readTime: '9 min',
    slug: 'como-ganhar-autoridade-organica-sem-comprar-backlinks',
    tags: ['SEO', 'Backlinks', 'Autoridade orgânica', 'Conteúdo'],
    featured: true,
    published: true,
    heroImage: '/assets/blog-hero.webp',
    heroImageAlt:
      'Mesa de trabalho com notebook representando planejamento de conteúdo e SEO.',
    author: {
      name: 'Luan Alves',
      role: 'Desenvolvedor web freelancer',
      bio: 'Desenvolvo sites, blogs e landing pages com foco em performance, SEO técnico e conversão via WhatsApp.',
    },
    content: [
      {
        type: 'paragraph',
        text: 'Quando um site está no começo da vida orgânica, o desafio raramente é só publicar mais páginas. O Google ainda tem poucos sinais para entender se aquele domínio é confiável, se fala do assunto com frequência e se outras pessoas reconhecem aquela marca como referência.',
      },
      {
        type: 'paragraph',
        text: 'Para um profissional ou empresa que vende criação de sites, blogs e landing pages, a estratégia mais segura não é comprar pacotes de backlinks. É construir autoridade temática, reforçar sinais de confiança e conquistar alguns links bons, naturais e coerentes com o mercado.',
      },
      {
        type: 'heading',
        id: 'autoridade-organica-nao-nasce-de-um-link-isolado',
        level: 2,
        text: 'Autoridade orgânica não nasce de um link isolado',
      },
      {
        type: 'paragraph',
        text: 'Backlinks ajudam, mas eles não compensam uma base fraca. Se o site tem poucas páginas, pouco conteúdo útil, nenhum case detalhado e poucos sinais de autoria, um link novo vira só um atalho frágil. A autoridade real aparece quando conteúdo, prova, reputação e experiência caminham juntos.',
      },
      {
        type: 'blockquote',
        text: 'Para site novo, cinco backlinks bons e relevantes costumam valer mais que cem links sem contexto.',
      },
      {
        type: 'heading',
        id: 'crie-um-cluster-de-conteudo-especifico',
        level: 2,
        text: 'Crie um cluster de conteúdo específico',
      },
      {
        type: 'paragraph',
        text: 'O primeiro passo é mostrar consistência temática. Um site que vende desenvolvimento web precisa ter páginas e artigos que respondam dúvidas reais de quem está avaliando contratar um site profissional.',
      },
      {
        type: 'list',
        items: [
          'Quanto custa criar um site profissional?',
          'Quanto custa uma landing page?',
          'Quanto custa manter um site por mês?',
          'Site barato vale a pena?',
          'Site institucional ou landing page: qual escolher?',
          'Como escolher um desenvolvedor web freelancer?',
          'O que está incluso na criação de um site profissional?',
          'Por que minha empresa precisa de um site profissional?',
        ],
      },
      {
        type: 'heading',
        id: 'use-seus-projetos-como-prova-de-experiencia',
        level: 2,
        text: 'Use seus projetos como prova de experiência',
      },
      {
        type: 'paragraph',
        text: 'Portfólio não serve apenas para mostrar visual. Cada projeto real pode virar um case com contexto, desafio, estratégia, tecnologia, decisões de SEO, decisões de performance e resultado percebido pelo cliente.',
      },
      {
        type: 'paragraph',
        text: 'Esse tipo de página cria conteúdo único, difícil de copiar, e fortalece sinais de experiência. Também aumenta a chance de receber links naturais dos próprios clientes, parceiros e fornecedores envolvidos no projeto.',
      },
      {
        type: 'heading',
        id: 'conquiste-backlinks-por-relacionamento',
        level: 2,
        text: 'Conquiste backlinks por relacionamento',
      },
      {
        type: 'list',
        items: [
          'Peça links em sites de clientes quando fizer sentido, usando variações naturais como "Desenvolvido por Luan Alves" ou "Criação do site: Luan Alves".',
          'Busque parceiros locais em Belém e no Brasil: designers, fotógrafos, consultores, agências, profissionais de tráfego pago e fornecedores dos seus clientes.',
          'Participe de diretórios sérios, associações comerciais, eventos e comunidades de tecnologia ou empreendedorismo.',
          'Evite repetir a mesma âncora exata em todos os links. Naturalidade importa mais que controle excessivo.',
        ],
      },
      {
        type: 'image',
        src: '/assets/blog-hero.webp',
        alt: 'Planejamento editorial para fortalecer autoridade orgânica de um site novo.',
        caption:
          'Autoridade orgânica cresce quando conteúdo, prova real e reputação externa apontam para a mesma direção.',
      },
      {
        type: 'heading',
        id: 'publique-fora-do-seu-site-com-criterio',
        level: 2,
        text: 'Publique fora do seu site com critério',
      },
      {
        type: 'paragraph',
        text: 'Guest posts e citações editoriais funcionam melhor quando o assunto combina com o seu serviço. Para desenvolvimento web, bons temas envolvem presença digital, sites para pequenos negócios, SEO técnico, performance, conversão e landing pages.',
      },
      {
        type: 'list',
        items: [
          'Como um site profissional ajuda pequenas empresas a venderem mais.',
          'Erros comuns em sites de prestadores de serviço.',
          'Diferença entre landing page e site institucional.',
          'Checklist para lançar um site profissional.',
          'O que avaliar antes de contratar um desenvolvedor web freelancer.',
        ],
      },
      {
        type: 'heading',
        id: 'crie-conteudo-linkavel',
        level: 2,
        text: 'Crie conteúdo linkável',
      },
      {
        type: 'paragraph',
        text: 'Algumas páginas recebem links porque resolvem uma dúvida recorrente ou oferecem uma ferramenta útil. Esse conteúdo precisa ser mais específico que um post genérico e fácil de compartilhar em conversas, propostas e comunidades.',
      },
      {
        type: 'list',
        items: [
          'Calculadora de preço de site.',
          'Checklist gratuito de criação de site profissional.',
          'Tabela de custos de domínio, hospedagem e manutenção.',
          'Modelo de briefing para criação de site.',
          'Comparativo entre Wix, WordPress e site sob medida.',
          'Checklist de SEO técnico para sites institucionais.',
        ],
      },
      {
        type: 'heading',
        id: 'o-que-evitar',
        level: 2,
        text: 'O que evitar',
      },
      {
        type: 'paragraph',
        text: 'Pacotes de backlinks, comentários automáticos, PBNs, diretórios genéricos e guest posts em massa costumam trazer mais risco que valor. Link bom tem contexto, relevância, tráfego real ou pelo menos coerência editorial.',
      },
      {
        type: 'paragraph',
        text: 'Também vale evitar obsessão por DA ou DR. Essas métricas ajudam a comparar sites em ferramentas de SEO, mas não são métricas oficiais do Google. O que importa é a qualidade do contexto, a relação com o seu nicho e a naturalidade do link.',
      },
      {
        type: 'heading',
        id: 'plano-simples-de-90-dias',
        level: 2,
        text: 'Plano simples de 90 dias',
      },
      {
        type: 'list',
        ordered: true,
        items: [
          'Mês 1: publique um post pilar sobre preço de site, crie dois ou três artigos de apoio e melhore links internos para páginas de serviço.',
          'Mês 2: transforme três projetos reais em cases detalhados e peça backlinks para clientes ou parceiros quando houver contexto.',
          'Mês 3: publique dois guest posts, busque diretórios locais bons e lance um material linkável, como checklist ou calculadora.',
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
        text: 'A meta inicial não precisa ser gigante. Para um site novo, dez a vinte backlinks bons e relevantes nos primeiros meses, junto com conteúdo consistente e cases bem estruturados, já podem começar a mover o ponteiro.',
      },
      {
        type: 'links',
        items: [
          {
            href: '/criacao-de-sites/',
            label: 'Ver serviço',
            text: 'Criação de sites profissionais com base técnica preparada para SEO.',
          },
          {
            href: '/portfolio/',
            label: 'Ver portfólio',
            text: 'Projetos reais que ajudam a construir prova, confiança e autoridade.',
          },
          {
            href: '/blog-profissional/',
            label: 'Ver estrutura editorial',
            text: 'Blog profissional para empresas que querem publicar conteúdo indexável.',
          },
          {
            href: 'https://wa.me/5591982890565?text=Ol%C3%A1%2C%20Luan!%20Li%20o%20artigo%20sobre%20autoridade%20org%C3%A2nica%20e%20quero%20fortalecer%20o%20SEO%20do%20meu%20site.',
            label: 'Falar no WhatsApp',
            text: 'Me chame para planejar conteúdo, cases e uma base de SEO mais forte.',
          },
        ],
      },
    ],
  },
];

export const publishedInsights = insights.filter(
  (post): post is InsightPublishedPost => post.published === true,
);

export const getInsightPath = (post: Pick<InsightPost, 'slug'>) =>
  `/insights/${post.slug}/`;

export const getInsightToc = (post: InsightPublishedPost) =>
  post.content
    .filter(
      (
        block,
      ): block is Extract<InsightArticleBlock, { type: 'heading' }> =>
        block.type === 'heading',
    )
    .map((heading) => ({
      id: heading.id,
      text: heading.text,
      level: heading.level,
    }));
