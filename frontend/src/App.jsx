import React, { useEffect, useRef, useState } from 'react'
import './App.css'

const App = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const heroRef = useRef(null)

  useEffect(() => {
    const handleMouse = (e) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [])

  const skills = [
    { name: 'React', level: 90, icon: '⚛️' },
    { name: 'JavaScript', level: 88, icon: '🟡' },
    { name: 'CSS / Tailwind', level: 85, icon: '🎨' },
    { name: 'Node.js', level: 78, icon: '🟢' },
    { name: 'Python', level: 75, icon: '🐍' },
    { name: 'Git & GitHub', level: 82, icon: '🐙' },
  ]

  const projects = [
    {
      title: 'NebulaChat',
      desc: 'Real-time chat app with socket.io, JWT auth and dark UI.',
      tags: ['React', 'Node', 'Socket.io'],
      color: '#ff6b6b',
    },
    {
      title: 'ShopVerse',
      desc: 'Full-stack e-commerce platform with cart, payments & admin panel.',
      tags: ['React', 'MongoDB', 'Stripe'],
      color: '#ffd93d',
    },
    {
      title: 'DevBoard',
      desc: 'Developer dashboard to track tasks, GitHub activity & metrics.',
      tags: ['React', 'REST API', 'Charts'],
      color: '#6bcb77',
    },
    {
      title: 'AetherBlog',
      desc: 'Markdown-based blog engine with syntax highlighting & dark mode.',
      tags: ['Next.js', 'MDX', 'Vercel'],
      color: '#4d96ff',
    },
  ]

  const parallaxX = typeof window !== 'undefined' ? (mousePos.x / window.innerWidth - 0.5) * 30 : 0
  const parallaxY = typeof window !== 'undefined' ? (mousePos.y / window.innerHeight - 0.5) * 30 : 0

  return (
    <div className="portfolio">
      {/* Cursor glow */}
      <div
        className="cursor-glow"
        style={{ left: mousePos.x, top: mousePos.y }}
      />

      {/* ─── HERO ─── */}
      <section className="hero" ref={heroRef}>
        <div className="hero-bg">
          <div className="orb orb1" style={{ transform: `translate(${parallaxX * 0.6}px, ${parallaxY * 0.6}px)` }} />
          <div className="orb orb2" style={{ transform: `translate(${-parallaxX * 0.4}px, ${-parallaxY * 0.4}px)` }} />
          <div className="orb orb3" style={{ transform: `translate(${parallaxX * 0.3}px, ${parallaxY * 0.8}px)` }} />
          <div className="grid-overlay" />
        </div>

        <nav className="nav">
          <span className="logo">AM<span className="dot">.</span></span>
          <ul className="nav-links">
            {['About', 'Skills', 'Projects', 'Contact'].map(l => (
              <li key={l}><a href={`#${l.toLowerCase()}`}>{l}</a></li>
            ))}
          </ul>
        </nav>

        <div className="hero-content">
          <p className="hero-eyebrow">👋 Hello, World — I'm</p>
          <h1 className="hero-name">
            <span className="name-line">Aditya</span>
            <span className="name-line accent">Mishra</span>
          </h1>
          <p className="hero-tagline">Full‑Stack Developer &amp; Creative Technologist</p>
          <div className="hero-meta">
            <span className="badge">📍 Ghaziabad, India</span>
            <span className="badge">🎂 21 years old</span>
            <span className="badge">💼 Open to work</span>
          </div>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-ghost">Hire Me</a>
          </div>
        </div>

        <div className="scroll-hint">
          <span>scroll</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section className="section about-section" id="about">
        <div className="section-inner">
          <div className="about-visual">
            <div className="avatar-ring">
              <div className="avatar-inner">
                <span className="avatar-emoji">👨‍💻</span>
              </div>
              <div className="ring ring1" />
              <div className="ring ring2" />
            </div>
          </div>
          <div className="about-text">
            <h2 className="section-title">About <span className="accent">Me</span></h2>
            <p>
              I'm a passionate full-stack developer from Indore, crafting elegant digital
              experiences that live at the intersection of design and technology. I love
              building things that make people go <em>"wow, how did they do that?"</em>
            </p>
            <p>
              Whether it's a snappy React UI, a robust Node API, or a smooth Python script —
              I obsess over every pixel and every millisecond of performance.
            </p>
            <div className="about-stats">
              {[['10+', 'Projects Built'], ['3+', 'Years Coding'], ['∞', 'Cups of Tea']].map(([n, l]) => (
                <div className="stat" key={l}>
                  <span className="stat-num">{n}</span>
                  <span className="stat-label">{l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SKILLS ─── */}
      <section className="section skills-section" id="skills">
        <h2 className="section-title centered">My <span className="accent">Skills</span></h2>
        <p className="section-sub centered">Technologies I work with every day</p>
        <div className="skills-grid">
          {skills.map((s, i) => (
            <div className="skill-card" key={s.name} style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="skill-top">
                <span className="skill-icon">{s.icon}</span>
                <span className="skill-name">{s.name}</span>
                <span className="skill-pct">{s.level}%</span>
              </div>
              <div className="skill-bar-bg">
                <div
                  className="skill-bar-fill"
                  style={{ '--w': `${s.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── PROJECTS ─── */}
      <section className="section projects-section" id="projects">
        <h2 className="section-title centered">Featured <span className="accent">Projects</span></h2>
        <p className="section-sub centered">Things I've built and shipped</p>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <div
              className="project-card"
              key={p.title}
              style={{ '--accent': p.color, animationDelay: `${i * 0.12}s` }}
            >
              <div className="project-header">
                <span className="project-num">0{i + 1}</span>
                <div className="project-glow" />
              </div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>
              <div className="project-tags">
                {p.tags.map(t => <span className="tag" key={t}>{t}</span>)}
              </div>
              <a href="#" className="project-link">View Project →</a>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section className="section contact-section" id="contact">
        <div className="contact-inner">
          <h2 className="section-title centered">Let's <span className="accent">Connect</span></h2>
          <p className="section-sub centered">Got a project in mind? I'd love to hear about it.</p>
          <div className="contact-cards">
            {[
              { icon: '📧', label: 'Email', val: 'adityazmishra4@example.com' },
              { icon: '💼', label: 'LinkedIn', val: 'linkedin.com/in/adityamishra1425' },
              { icon: '🐙', label: 'GitHub', val: 'github.com/aditya-mishra-007' },
            ].map(c => (
              <div className="contact-card" key={c.label}>
                <span className="contact-icon">{c.icon}</span>
                <span className="contact-label">{c.label}</span>
                <span className="contact-val">{c.val}</span>
              </div>
            ))}
          </div>
          <a href="mailto:aditya@example.com" className="btn btn-primary big-btn">
            Say Hello 👋
          </a>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="footer">
        <p>Crafted with <span className="heart">♥</span> by <strong>Aditya Mishra</strong> · Ghaziabad, India · 2025</p>
      </footer>
    </div>
  )
}

export default App