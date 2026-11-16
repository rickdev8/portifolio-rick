'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDownRight, ArrowUpRight, Code2, LockKeyhole } from 'lucide-react'
import type { Project } from '@/data/projects'

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const reduceMotion = useReducedMotion()
  return <motion.article className={`project-card ${project.featured ? 'project-featured' : ''}`} initial={reduceMotion ? false : { opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: .55, delay: reduceMotion ? 0 : (index % 2) * .08 }}>
    <div className={`project-art project-art-${project.visual}`}><Image src={project.imageUrl} alt={project.imageAlt} fill sizes="(max-width: 600px) 90vw, (max-width: 800px) 50vw, 640px" className="project-screenshot"/>{project.featured && <span className="live-stamp"><i /> Software real, cliente real, em produção</span>}</div>
    <div className="project-copy"><div className="project-eyebrow"><span>{project.number} / {project.kind}</span>{project.status && <span className="build-status"><LockKeyhole size={11} /> {project.status}</span>}</div>
      <h3>{project.title}<ArrowDownRight className="project-arrow" size={20} /></h3><p>{project.description}</p>
      {project.worksNote && <div className="works-note"><span>O QUE JÁ FUNCIONA</span><p>{project.worksNote}</p></div>}
      <div className="project-bottom"><div className="tag-list">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div><div className="project-links"><Link href={`/projetos/${project.slug}`} aria-label={`Ver detalhes de ${project.title}`}>Detalhes <ArrowUpRight size={12} /></Link><a href={project.code} target="_blank" rel="noreferrer" aria-label={`Ver código de ${project.title}`}><Code2 size={15} /> Código <ArrowUpRight size={12} /></a><a href={project.live} target="_blank" rel="noreferrer" aria-label={`Ver ${project.title} online`}>Online <ArrowUpRight size={12} /></a></div></div>
    </div>
  </motion.article>
}
