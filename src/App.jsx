import { useEffect, useState } from 'react'
import ArchDiagram from './ArchDiagram.jsx'
import { profile, stats, experience, clients, projects, skills, education } from './data.js'

const sections = [
  ['about', 'About'],
  ['experience', 'Experience'],
  ['clients', 'Client websites'],
  ['projects', 'Projects'],
  ['skills', 'Skills'],
  ['contact', 'Contact'],
]

function Ext({ href, children, className, label }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className={className} aria-label={label}>{children}</a>
}

// Renders **bold** markers from data.js
function Rich({ text }) {
  return text.split('**').map((part, i) => (i % 2 ? <b key={i}>{part}</b> : part))
}

const Icon = {
  github: <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z"/></svg>,
  linkedin: <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"/></svg>,
  mail: <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" strokeWidth="2" d="M3 5h18v14H3zM3 6l9 7 9-7"/></svg>,
  arrow: <svg viewBox="0 0 20 20" aria-hidden="true" className="arrow"><path fill="currentColor" d="M5.2 14.8a.75.75 0 0 1 0-1.06L12.44 6.5H7.75a.75.75 0 0 1 0-1.5h6.5c.41 0 .75.34.75.75v6.5a.75.75 0 0 1-1.5 0V7.56l-7.24 7.24a.75.75 0 0 1-1.06 0Z"/></svg>,
}

function useActiveSection() {
  const [active, setActive] = useState('about')
  useEffect(() => {
    const els = sections.map(([id]) => document.getElementById(id)).filter(Boolean)
    const io = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-35% 0px -60% 0px' }
    )
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])
  return active
}

function useSpotlight() {
  useEffect(() => {
    let reduce = false
    try { reduce = window.matchMedia('(prefers-reduced-motion: reduce), (pointer: coarse)').matches } catch { reduce = true }
    if (reduce) return
    const move = e => {
      document.documentElement.style.setProperty('--mx', `${e.clientX}px`)
      document.documentElement.style.setProperty('--my', `${e.clientY}px`)
    }
    window.addEventListener('pointermove', move)
    return () => window.removeEventListener('pointermove', move)
  }, [])
}

function Sidebar({ active }) {
  return (
    <header className="side">
      <div>
        <div className="avatar" aria-hidden="true">{profile.initials}</div>
        <h1><a href="#about">{profile.name}</a></h1>
        <p className="role">{profile.role}</p>
        <p className="tagline">{profile.tagline}</p>
        <p className="open"><span className="dot" />{profile.open}</p>
        <nav className="toc" aria-label="Sections">
          <ul>
            {sections.map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`} className={active === id ? 'on' : ''} aria-current={active === id ? 'true' : undefined}>
                  <span className="line" />{label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="side-foot">
        <ul className="socials">
          <li><Ext href={profile.github} label="GitHub">{Icon.github}</Ext></li>
          <li><Ext href={profile.linkedin} label="LinkedIn">{Icon.linkedin}</Ext></li>
          <li><a href={`mailto:${profile.email}`} aria-label="Email">{Icon.mail}</a></li>
        </ul>
        <Ext href={profile.resume} className="btn">View resume {Icon.arrow}</Ext>
      </div>
    </header>
  )
}

function Section({ id, title, children }) {
  return (
    <section id={id} aria-label={title}>
      <h2 className="sticky-title">{title}</h2>
      {children}
    </section>
  )
}

function About() {
  return (
    <Section id="about" title="About">
      {profile.about.map((text, i) => (
        <p key={text} className={i === 0 ? 'lead' : undefined}><Rich text={text} /></p>
      ))}
      <ArchDiagram />
      <dl className="stats">
        {stats.map(s => (
          <div key={s.label}><dt>{s.label}</dt><dd>{s.value}</dd></div>
        ))}
      </dl>
    </Section>
  )
}

function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="list">
        {experience.map(job => (
          <li key={job.role + job.org} className="card">
            <p className="when">{job.when}<br /><span>{job.where}</span></p>
            <div>
              <h3>{job.role} <span>· {job.org}</span></h3>
              {job.metrics && (
                <div className="metrics">
                  {job.metrics.map(m => <div key={m.label}><strong>{m.value}</strong><span>{m.label}</span></div>)}
                </div>
              )}
              <ul className="points">{job.points.map(p => <li key={p}>{p}</li>)}</ul>
              <ul className="tags">{job.tags.map(t => <li key={t}>{t}</li>)}</ul>
            </div>
          </li>
        ))}
      </ol>
      <Ext href={profile.resume} className="more">View full résumé {Icon.arrow}</Ext>
    </Section>
  )
}

function Clients() {
  return (
    <Section id="clients" title="Client websites">
      <p className="note">{profile.clientsNote}</p>
      <ol className="list">
        {clients.map(c => (
          <li key={c.name} className="card client">
            <Ext href={c.url} className="shot" label={`Open ${c.host}`}>
              <img src={c.shot} alt={`Screenshot of the ${c.name} website`} loading="lazy" width="960" height="487" />
            </Ext>
            <div>
              <h3><Ext href={c.url} className="title-link">{c.name} {Icon.arrow}</Ext></h3>
              <p className="kind">{c.kind} · <span className="host">{c.host}</span></p>
              <ul className="points">{c.points.map(p => <li key={p}>{p}</li>)}</ul>
              <ul className="tags">{c.tags.map(t => <li key={t}>{t}</li>)}</ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}

function Projects() {
  return (
    <Section id="projects" title="Projects">
      <ol className="list">
        {projects.map(p => (
          <li key={p.name} className="card">
            <p className="when mono">{'</>'}</p>
            <div>
              <h3><Ext href={p.repo} className="title-link">{p.name} {Icon.arrow}</Ext></h3>
              <p className="desc">{p.text}</p>
              <ul className="tags">{p.stack.map(t => <li key={t}>{t}</li>)}</ul>
            </div>
          </li>
        ))}
      </ol>
      <Ext href={profile.github} className="more">More on GitHub {Icon.arrow}</Ext>
    </Section>
  )
}

function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="skill-grid">
        {skills.map(s => (
          <div key={s.group}>
            <h3>{s.group}</h3>
            <ul className="tags">{s.items.map(i => <li key={i}>{i}</li>)}</ul>
          </div>
        ))}
      </div>
      <h3 className="edu-title">Education</h3>
      <ul className="edu">
        {education.map(e => (
          <li key={e.degree}>
            <div><strong>{e.degree}</strong><span>{e.school}</span></div>
            <time>{e.when}</time>
          </li>
        ))}
      </ul>
    </Section>
  )
}

function Contact() {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch { setCopied(false) }
  }
  return (
    <Section id="contact" title="Contact">
      <p className="big">{profile.contactPitch}</p>
      <div className="contact">
        <div className="row">
          <span>Email</span>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <button type="button" className="chip-btn" onClick={copy}>{copied ? 'Copied' : 'Copy'}</button>
        </div>
        <div className="row"><span>Phone</span><a href={`tel:${profile.phoneHref}`}>{profile.phone}</a></div>
        <div className="row"><span>Location</span><p>{profile.location}</p></div>
        <div className="row"><span>Languages</span><p>{profile.languages}</p></div>
      </div>
      <footer className="foot">
        {profile.footer} © {new Date().getFullYear()}
      </footer>
    </Section>
  )
}

export default function App() {
  const active = useActiveSection()
  useSpotlight()
  return (
    <div className="page">
      <div className="spotlight" aria-hidden="true" />
      <Sidebar active={active} />
      <main>
        <About />
        <Experience />
        <Clients />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}
