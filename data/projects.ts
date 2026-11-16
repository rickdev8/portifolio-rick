export type Project = {
  number: string
  slug: string
  title: string
  kind: string
  description: string
  stack: string[]
  code: string
  live: string
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
    code: '[link]', live: '[link]', worksNote: '[preencher]',
    details: {
      problem: 'Pequenas e médias empresas precisam acompanhar suas finanças sem tornar a categorização e a consulta aos dados uma tarefa difícil.',
      solution: 'O produto está sendo construído do zero, com foco em uma arquitetura mais limpa. A proposta inclui categorização automática de transações por IA e consultas em linguagem natural sobre os dados financeiros.',
      learnings: ['Aplicar aprendizados de projetos anteriores em uma arquitetura organizada desde o início.', 'Explorar IA em fluxos de categorização e consulta de informações.', 'Manter o escopo em evolução enquanto o produto é desenvolvido.'],
    },
  },
]
