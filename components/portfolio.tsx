'use client'

import Image from 'next/image'
import { useEffect, useState, type FormEvent } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, ArrowUp, Check, Code2, Download, Link2, Mail, Menu, Moon, Sun, X } from 'lucide-react'
import { projects } from '@/data/projects'
import { skillGroups } from '@/data/skills'
import { ProjectCard } from '@/components/project-card'

const sections = ['sobre', 'habilidades', 'projetos', 'trajetoria', 'contato']
const CONTACT_EMAIL = '[email]'

export function Portfolio() {
  const [active, setActive] = useState('sobre')
  const [light, setLight] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [formStatus, setFormStatus] = useState('')
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id) }), { rootMargin: '-30% 0px -60% 0px' })
    sections.forEach(id => { const element = document.getElementById(id); if (element) observer.observe(element) })
    return () => observer.disconnect()
  }, [])

  function submitContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (CONTACT_EMAIL === '[email]') {
      setFormStatus('O e-mail de destino ainda não foi configurado.')
      return
    }
    const form = new FormData(event.currentTarget)
    const subject = encodeURIComponent(`Contato pelo portfólio — ${form.get('nome')}`)
    const body = encodeURIComponent(`Nome: ${form.get('nome')}\nE-mail: ${form.get('email')}\n\n${form.get('mensagem')}`)
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
    setFormStatus('Mensagem preparada no seu aplicativo de e-mail.')
  }

  return <div className={`portfolio ${light ? 'theme-light' : ''}`}>
    <header className="site-header"><a className="wordmark" href="#inicio" aria-label="Rick — início"><span>r.</span><small>HENRIQUE ABADE LEMOS</small></a>
      <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'} aria-label="Navegação principal">{sections.map((id, i) => <a key={id} className={active === id ? 'nav-active' : ''} href={`#${id}`} onClick={() => setMenuOpen(false)}><span>0{i + 1}</span>{id === 'sobre' ? 'Sobre' : id === 'habilidades' ? 'Stack' : id === 'projetos' ? 'Projetos' : id === 'trajetoria' ? 'Trajetória' : 'Contato'}</a>)}</nav>
      <div className="header-actions"><button className="theme-toggle" onClick={() => setLight(!light)} aria-label={light ? 'Ativar tema escuro' : 'Ativar tema claro'}>{light ? <Moon size={16} /> : <Sun size={16} />}</button><a className="header-cta" href="#contato">Vamos conversar <ArrowUpRight size={14} /></a><button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}>{menuOpen ? <X /> : <Menu />}</button></div>
    </header>

    <main id="inicio"><section className="hero section-shell"><div className="hero-main"><motion.div initial={reduceMotion ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .55 }} className="availability"><i /> ABERTO A OPORTUNIDADES <span>·</span> BARRA DO MENDES, BA</motion.div>
      <motion.h1 initial={reduceMotion ? false : { opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .08 }}>Código que<br />resolve <span>problemas</span><b>.</b></motion.h1>
      <motion.p className="hero-description" initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .25 }}>Desenvolvedor Full Stack construindo software útil — do primeiro commit à aplicação em produção.</motion.p>
      <motion.div className="hero-actions" initial={reduceMotion ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .35 }}><a className="button-primary" href="#projetos">Ver projetos <ArrowDownRight size={16} /></a><a className="button-text" href="#contato">Falar comigo <ArrowUpRight size={15} /></a><a className="button-cv" href="/cv-rick.pdf" download><Download size={14} /> Baixar CV</a></motion.div>
      <div className="hero-social"><a href="https://github.com/rickdev8" target="_blank" rel="noreferrer"><Code2 size={15} /> github.com/rickdev8 <ArrowUpRight size={12} /></a><a href="[link]" target="_blank" rel="noreferrer"><Link2 size={15} /> LinkedIn <ArrowUpRight size={12} /></a></div></div>
      <motion.div className="hero-portrait" initial={reduceMotion ? false : { opacity: 0, scale: .97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .2 }}><Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-e0Qje6wP7fmXpgJlUmfGh127msVFIo.png" alt="Foto de Rick, com cabelo escuro cacheado e camiseta preta" fill priority sizes="(max-width: 760px) 85vw, 42vw" className="portrait-image"/><div className="portrait-gradient"/><div className="portrait-index"><span>21 anos</span><small>DEV. FULL STACK<br />BARRA DO MENDES, BA</small></div><span className="portrait-serial">RICK · FULL STACK</span></motion.div>
      <div className="hero-bottom"><span><ArrowDown size={14} /> ROLE PARA EXPLORAR</span><span>01 — 05 <i /></span></div>
    </section>

    <section id="sobre" className="section-shell section-block about-section"><div className="section-label"><span>01 / SOBRE</span><span>UM POUCO DE CONTEXTO</span></div><div className="about-grid"><div className="about-heading"><p className="eyebrow">QUEM ESTÁ POR TRÁS DO CÓDIGO</p><h2>Sou o Rick.<br />Faço as coisas <span>acontecerem.</span></h2></div><div className="about-text"><p>Tenho 21 anos e trabalho como estagiário de Desenvolvimento de Software na Redtech. Gosto de entender o problema por inteiro e transformar requisitos em produtos que alguém realmente usa.</p><p>Hoje curso Análise e Desenvolvimento de Sistemas no IFBA. Fora do estágio, já desenvolvi e entreguei um sistema de varejo que roda em uma loja real — uma experiência que me ensinou tanto sobre produto quanto sobre código.</p><div className="credential-row"><span><Code2 size={15} /> Redtech <small>Estágio em desenvolvimento</small></span><span><Code2 size={15} /> IFBA <small>ADS · conclusão em 07/2028</small></span><span><Check size={15} /> AWS <small>Cloud Practitioner</small></span></div></div></div></section>

    <section id="habilidades" className="section-shell section-block skills-section"><div className="section-label"><span>02 / STACK</span><span>FERRAMENTAS E EXPERIÊNCIAS</span></div><div className="skills-heading"><h2>Meu kit de<br /><span>construção.</span></h2><p>Ferramentas escolhidas pelo que resolvem. Tenho mais profundidade em JavaScript e TypeScript, do front ao banco de dados.</p></div><div className="skills-grid">{skillGroups.map(group => <article className="skill-group" key={group.title}><div className="skill-group-title"><span>{group.index}</span><h3>{group.title}</h3><ArrowUpRight size={14}/></div><div className="skill-items">{group.skills.map((skill, i) => <span key={skill}><i className="skill-dot">{['⌘', '◈', '⌬', '↗', '·'][i % 5]}</i>{skill}</span>)}</div></article>)}</div></section>

    <section id="projetos" className="section-shell section-block projects-section"><div className="section-label"><span>03 / PROJETOS</span><span>TRABALHO COM CONTEXTO REAL</span></div><div className="projects-heading"><div><p className="eyebrow">DA IDEIA À ENTREGA</p><h2>Feito para<br /><span>ser usado.</span></h2></div><p>Projetos que mostram como penso e construo: com atenção à experiência, à arquitetura e ao que acontece depois do deploy.</p></div><div className="projects-grid">{projects.map((project, index) => <ProjectCard key={project.number} project={project} index={index}/>)}</div></section>

    <section id="trajetoria" className="section-shell section-block path-section"><div className="section-label"><span>04 / TRAJETÓRIA</span><span>APRENDER · CONSTRUIR · EVOLUIR</span></div><div className="path-grid"><div><p className="eyebrow">PRESENTE E PRÓXIMOS PASSOS</p><h2>Em movimento,<br /><span>com intenção.</span></h2><p className="path-intro">Cada etapa é uma oportunidade de aumentar meu repertório e assumir problemas mais complexos.</p></div><div className="timeline"><article><span className="timeline-year">ATUAL</span><i /><div><h3>Estagiário de Desenvolvimento</h3><p>Redtech <span>· Barra do Mendes, BA</span></p><small>Participação no desenvolvimento e evolução de software.</small></div></article><article><span className="timeline-year">EM CURSO</span><i /><div><h3>Análise e Desenvolvimento de Sistemas</h3><p>IFBA <span>· Previsão: jul/2028</span></p><small>Formação superior em tecnologia e desenvolvimento de software.</small></div></article><article><span className="timeline-year">CERTIFICAÇÃO</span><i /><div><h3>AWS Certified Cloud Practitioner</h3><p>Amazon Web Services</p><small>Fundamentos de cloud, serviços e infraestrutura AWS.</small></div></article></div></div></section>

    <section id="contato" className="contact-section"><div className="section-shell contact-inner"><div className="section-label"><span>05 / CONTATO</span><span>A PRÓXIMA CONVERSA COMEÇA AQUI</span></div><div className="contact-grid"><div><p className="eyebrow">TEM UM DESAFIO EM MENTE?</p><h2>Vamos construir<br />algo <span>útil.</span></h2><p className="contact-lede">Estou aberto a oportunidades CLT ou PJ e conversas sobre desenvolvimento de produto. Me conte o que você está construindo.</p>{CONTACT_EMAIL === '[email]' ? <span className="contact-email"><Mail size={17} /> {CONTACT_EMAIL}</span> : <a className="contact-email" href={`mailto:${CONTACT_EMAIL}`}><Mail size={17} /> {CONTACT_EMAIL} <ArrowUpRight size={15}/></a>}<div className="contact-social"><a href="https://github.com/rickdev8" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={12}/></a><a href="[link]" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={12}/></a></div></div>
      <form className="contact-form" onSubmit={submitContact}><label htmlFor="nome">SEU NOME</label><input id="nome" name="nome" placeholder="Como posso te chamar?" required/><label htmlFor="email">SEU E-MAIL</label><input id="email" name="email" type="email" placeholder="voce@empresa.com" required/><label htmlFor="mensagem">SUA MENSAGEM</label><textarea id="mensagem" name="mensagem" rows={4} placeholder="Um pouco sobre a oportunidade ou ideia..." required/><button type="submit" className="button-primary">Preparar mensagem <ArrowRight size={15}/></button>{formStatus && <p className="form-status" role="status">{formStatus}</p>}<small>Com o e-mail configurado, a mensagem será preparada no seu aplicativo de e-mail.</small></form></div><div className="contact-footer"><a className="wordmark" href="#inicio"><span>r.</span><small>HENRIQUE ABADE LEMOS</small></a><p>Desenhado e desenvolvido por Rick · 2026</p><a href="#inicio" className="back-top">VOLTAR AO TOPO <ArrowUp size={12}/></a></div></div></section></main>
  </div>
}
