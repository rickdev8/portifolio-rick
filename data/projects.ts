export type ProjectImage = {
  src: string
  alt: string
}

export type Project = {
  number: string
  slug: string
  title: string
  kind: string
  description: string
  stack: string[]
  code: string
  live: string
  imageUrl: string
  imageAlt: string
  gallery?: ProjectImage[]
  featured?: boolean
  status?: string
  worksNote?: string
  visual: 'retail' | 'health' | 'finance'
  details: {
    problem: string
    solution: string
    learnings: string[]
    sources?: string[]
  }
}

export const projects: Project[] = [
  {
    number: '01', slug: 'sistema-de-estoque', title: 'Sistema de Estoque', kind: 'Freelance · Em produção',
    description: 'Sistema vendido e usado por uma loja física real, em produção numa VPS Hostinger. Inclui dashboards, pagamentos Pix com QR Code, leitura de códigos e integração com ViaCEP.',
    stack: ['Fastify', 'Prisma', 'PostgreSQL', 'JWT', 'bcrypt'], featured: true, visual: 'retail',
    imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ZCk7hn8zJLtVaG7IHfyp5516fGKN0i.png',
    imageAlt: 'Dashboard de estatísticas de vendas e estoque.',
    gallery: [
      { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ZCk7hn8zJLtVaG7IHfyp5516fGKN0i.png', alt: 'Dashboard com estatísticas de vendas, custos e categorias de produtos.' },
      { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-fo3JrfuyE7xavsPo0fmD3OA99aGLtd.png', alt: 'Tabela de produtos com filtros e informações de estoque.' },
      { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-O2cFy4hjjGq7ZvrnGQt6cJt6Ib86Sp.png', alt: 'Lista de produtos e seus códigos de barras para impressão.' },
      { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-AiVzQTnjyyp5hrFvBvwfCPQG49RO87.png', alt: 'Etapa de seleção de produtos no fluxo de criação de uma venda.' },
      { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vtyLz0I7W6hX6GUiDx6DsaJiv7ePNJ.png', alt: 'Etapa de revisão da venda com produtos, pagamento e total.' },
    ],
    code: 'https://github.com/rickdev8', live: '[link]',
    details: {
      problem: 'Uma loja física precisava organizar sua operação de estoque e vendas com um sistema adequado à rotina do negócio.',
      solution: 'Desenvolvi e coloquei em produção uma aplicação com dashboards, geração de QR Code para pagamentos Pix, leitura de QR Code e consulta de endereços pela API ViaCEP. O sistema roda em uma VPS Hostinger e é utilizado pela loja.',
      learnings: ['Entender o fluxo de trabalho do cliente antes de definir a solução.', 'Levar uma aplicação do desenvolvimento até uma operação real em produção.', 'Integrar serviços e recursos de pagamento em um sistema de gestão.'],
    },
  },
  {
    number: '02', slug: 'saudedela', title: 'SaúdeDela', kind: 'Feira de ciências · IFBA',
    description: 'Plataforma sobre saúde da mulher criada para a feira de ciências “Ciência Delas”. Combina acompanhamento de ciclo, dados abertos e chatbot educativo com RAG.',
    stack: ['Next.js', 'TypeScript', 'RAG', 'LLMs', 'Dados abertos'], visual: 'health',
    imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CllPaMA65E8dCw26DCKhdr2c5hPuYO.png',
    imageAlt: 'Página real do SaúdeDela sobre informação e dados de saúde da mulher, com identidade visual rosa e vinho.',
    code: '[link]', live: '[link]',
    details: {
      problem: 'Criar, para a feira de ciências do IFBA, uma experiência acessível sobre saúde da mulher, conectando informação educativa e dados públicos.',
      solution: 'A plataforma reúne acompanhamento de ciclo e sintomas, leitura de padrões a partir do histórico, dashboard estatístico e chatbot educativo com RAG. A identidade visual própria utiliza tons de rosa e vinho.',
      learnings: ['Aplicar tecnologia a um tema de impacto social com cuidado na apresentação das informações.', 'Explorar recuperação aumentada por geração (RAG) para responder com base em fontes de referência.', 'Organizar dados abertos de saúde em uma experiência compreensível.'],
      sources: ['DATASUS', 'PNS / IBGE', 'OMS', 'Febrasgo'],
    },
  },
  {
    number: '03', slug: 'sistema-financeiro-com-ia', title: 'Sistema Financeiro com IA', kind: 'Produto próprio · Em construção',
    description: 'Sistema financeiro para pequenas e médias empresas, construído do zero com uma arquitetura mais limpa. O objetivo é tornar a leitura e a organização financeira mais simples.',
    stack: ['Next.js', 'TypeScript', 'Node.js', 'IA', 'PostgreSQL'], visual: 'finance', status: 'Em construção',
    imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vnBevDrigOtaPpxQCfsUo0wZSDBiWU.png',
    imageAlt: 'Dashboard financeiro com saldos, gráfico de receitas e painel de insights de IA.',
    gallery: [
      { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vnBevDrigOtaPpxQCfsUo0wZSDBiWU.png', alt: 'Visão geral financeira com saldos, receitas, despesas e insights de IA.' },
      { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0arkHRdapUnmFiFsc80kp8Zg2MTvhJ.png', alt: 'Dashboard financeiro com transações recentes e distribuição de despesas.' },
      { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-YgS8ZYVJFgWd1IDQPsXfe2hJUi5wEF.png', alt: 'Gráfico financeiro comparando receitas, despesas e saldo.' },
      { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-mfeJGp8WVewZzLJNZnzpRQtYMVofvN.png', alt: 'Formulário para adicionar uma nova transação financeira.' },
      { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-SoQTeSvgdK93nPswQtfrKR5gkaq1Rq.png', alt: 'Gráfico de linhas de receitas e despesas no painel financeiro.' },
    ],
    code: '[link]', live: '[link]', worksNote: '[preencher]',
    details: {
      problem: 'Pequenas e médias empresas precisam acompanhar suas finanças sem tornar a categorização e a consulta aos dados uma tarefa difícil.',
      solution: 'O produto está sendo construído do zero, com foco em uma arquitetura mais limpa. A proposta inclui categorização automática de transações por IA e consultas em linguagem natural sobre os dados financeiros.',
      learnings: ['Aplicar aprendizados de projetos anteriores em uma arquitetura organizada desde o início.', 'Explorar IA em fluxos de categorização e consulta de informações.', 'Manter o escopo em evolução enquanto o produto é desenvolvido.'],
    },
  },
]
