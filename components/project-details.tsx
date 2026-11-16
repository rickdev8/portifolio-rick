import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, Check, Code2, ExternalLink } from 'lucide-react'
import type { Project } from '@/data/projects'

export function ProjectDetails({ project }: { project: Project }) {
  return <main className={`detail-page detail-theme-${project.visual}`}>
    <header className="detail-header"><Link className="wordmark" href="/#inicio" aria-label="Rick — página inicial"><span>r.</span><small>HENRIQUE ABADE LEMOS</small></Link><Link href="/#projetos" className="detail-back"><ArrowLeft size={14}/> Todos os projetos</Link></header>
    <section className="detail-hero">
      <div className="detail-shell"><p className="detail-kicker">PROJETO {project.number} <span>·</span> {project.kind.toUpperCase()}</p><h1>{project.title}{project.status && <span className="detail-status">{project.status}</span>}</h1><p className="detail-summary">{project.description}</p>
        <div className="detail-actions"><a href={project.code} target="_blank" rel="noreferrer"><Code2 size={15}/> Ver código <ArrowUpRight size={13}/></a><a href={project.live} target="_blank" rel="noreferrer"><ExternalLink size={14}/> Ver online <ArrowUpRight size={13}/></a></div>
        <div className={`detail-visual detail-visual-${project.visual}`}><Image src={project.imageUrl} alt={project.imageAlt} fill sizes="(max-width: 650px) calc(100vw - 38px), 1000px" className="detail-screenshot"/></div>
      </div>
    </section>
    <section className="detail-shell detail-body"><div className="detail-narrative"><article><span>01 / O PROBLEMA</span><h2>O contexto</h2><p>{project.details.problem}</p></article><article><span>02 / A SOLUÇÃO</span><h2>O que foi construído</h2><p>{project.details.solution}</p>{project.worksNote && <p className="detail-placeholder"><strong>O que já funciona:</strong> {project.worksNote}</p>}</article><article><span>03 / APRENDIZADOS</span><h2>O que levo adiante</h2><ul>{project.details.learnings.map(item => <li key={item}><Check size={14}/>{item}</li>)}</ul></article>{project.details.sources && <article><span>FONTES DE REFERÊNCIA</span><h2>Dados abertos</h2><div className="detail-sources">{project.details.sources.map(source => <span key={source}>{source}</span>)}</div><p className="detail-source-note">Fontes citadas como referências de conteúdo do projeto; consulte a plataforma para detalhes sobre o uso de cada conjunto de dados.</p></article>}</div>
      <aside className="detail-sidebar"><div><span>STACK</span><div className="detail-tags">{project.stack.map(item => <span key={item}>{item}</span>)}</div></div><div className="detail-sidebar-note"><span>CONTEXTO</span><p>{project.kind}</p></div><Link className="detail-next" href="/#contato">Vamos conversar <ArrowUpRight size={14}/></Link></aside></section>
    <footer className="detail-footer"><Link href="/#inicio" className="wordmark"><span>r.</span><small>HENRIQUE ABADE LEMOS</small></Link><Link href="/#projetos"><ArrowLeft size={13}/> Voltar ao portfólio</Link><span>DESENVOLVIDO POR RICK · 2026</span></footer>
  </main>
}
