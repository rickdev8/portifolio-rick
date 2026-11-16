'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDownRight, ArrowUpRight, Code2, LockKeyhole, Sparkles } from 'lucide-react'
import type { Project } from '@/data/projects'

function ProjectPreview({ type }: { type: Project['visual'] }) {
  if (type === 'retail') return <div className="preview retail-preview"><div className="mini-sidebar"><span className="mini-logo">r.</span><i /><i /><i /><i /></div><div className="mini-dashboard"><div className="mini-top"><span>Visão geral</span><span className="mini-pill">● Operação ativa</span></div><div className="mini-stats"><div><small>Estoque</small><b>Produtos</b><em>Gestão e consulta</em></div><div><small>Vendas</small><b>Operação</b><em>Pagamentos Pix</em></div></div><div className="mini-chart"><div className="chart-label">Resumo da operação <span>Dashboard</span></div><div className="chart-bars">{[35, 52, 43, 73, 56, 88, 67, 100, 73, 84, 58, 92].map((h, i) => <i key={i} style={{ height: `${h}%` }} />)}</div></div></div></div>
  const previews = {
    health: <><div className="mock-window-bar"><i /><i /><i /><span>saudedela / painel</span></div><div className="health-preview"><aside><b>saúde<span>dela</span></b><small>SEU PAINEL</small><span>Visão geral</span><span>Ciclo</span><span>Bem-estar</span></aside><div className="health-main"><small>CIÊNCIA DELAS · IFBA</small><h4>Seu ciclo, com mais contexto.</h4><p>Um espaço de cuidado e informação.</p><div className="health-cards"><div><small>CICLO</small><strong>Acompanhamento</strong><i /></div><div><small>PADRÕES</small><strong>Histórico e insights</strong><i /></div></div><div className="health-chat"><Sparkles size={12} /> Converse com o guia educativo <ArrowUpRight size={11}/></div></div></div></>,
    finance: <><div className="mock-window-bar"><i /><i /><i /><span>financeiro / visão geral</span></div><div className="finance-preview"><small>FINANCEIRO / VISÃO GERAL</small><h4>Clareza para decidir.</h4><span>Organização financeira para o seu negócio.</span><div className="finance-line"><i /> Transações <strong>Categorização inteligente</strong></div><div className="finance-line"><i /> Consultas <strong>Linguagem natural</strong></div><em><Sparkles size={12} /> Pergunte sobre seus dados financeiros...</em></div></>,
  }
  return <div className={`preview mock-${type}`}>{previews[type]}</div>
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const reduceMotion = useReducedMotion()
  return <motion.article className={`project-card ${project.featured ? 'project-featured' : ''}`} initial={reduceMotion ? false : { opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: .55, delay: reduceMotion ? 0 : (index % 2) * .08 }}>
    <div className={`project-art project-art-${project.visual}`}><ProjectPreview type={project.visual} />{project.featured && <span className="live-stamp"><i /> Software real, cliente real, em produção</span>}</div>
    <div className="project-copy"><div className="project-eyebrow"><span>{project.number} / {project.kind}</span>{project.status && <span className="build-status"><LockKeyhole size={11} /> {project.status}</span>}</div>
      <h3>{project.title}<ArrowDownRight className="project-arrow" size={20} /></h3><p>{project.description}</p>
      {project.worksNote && <div className="works-note"><span>O QUE JÁ FUNCIONA</span><p>{project.worksNote}</p></div>}
      <div className="project-bottom"><div className="tag-list">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div><div className="project-links"><Link href={`/projetos/${project.slug}`} aria-label={`Ver detalhes de ${project.title}`}>Detalhes <ArrowUpRight size={12} /></Link><a href={project.code} target="_blank" rel="noreferrer" aria-label={`Ver código de ${project.title}`}><Code2 size={15} /> Código <ArrowUpRight size={12} /></a><a href={project.live} target="_blank" rel="noreferrer" aria-label={`Ver ${project.title} online`}>Online <ArrowUpRight size={12} /></a></div></div>
    </div>
  </motion.article>
}
