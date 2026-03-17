import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Database, Layout, Mail, ArrowRight, Github, Linkedin, MapPin, ExternalLink } from 'lucide-react';
import './App.css';

const App = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }
  };

  return (
    <div className="viewport">
      {/* Dynamic Background Mesh */}
      <div className="mesh-gradient"></div>
      <div className="noise-overlay"></div>

      <nav className="navbar">
        <div className="nav-content">
          <div className="logo">AM<span>.</span></div>
          <div className="nav-status"><span className="dot"></span> Open for Opportunities</div>
          <button className="nav-cta">Get in Touch</button>
        </div>
      </nav>

      <main className="main-wrapper">
        {/* HERO SECTION */}
        <section className="hero">
          <motion.div {...fadeInUp} className="hero-info">
            <span className="badge">Software Engineer</span>
            <h1 className="display-text">Aditya <br/>Mishra</h1>
            <p className="hero-sub">Crafting high-performance Java systems and intelligent web experiences. Based in Indore, India.</p>
            <div className="hero-meta">
              <span><MapPin size={16}/> Indore</span>
              <span><Cpu size={16}/> Java & DL</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="hero-image-area"
          >
            <div className="image-card">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Aditya&backgroundColor=111" alt="Aditya" />
              <div className="card-glass-label">Aditya Mishra, 24</div>
            </div>
          </motion.div>
        </section>

        {/* STATS/SKILLS BENTO */}
        <section className="bento-section">
          <div className="bento-grid">
            <div className="bento-item main-skill">
              <Terminal className="icon-red" />
              <h3>Core Backend</h3>
              <p>Specialized in Java, Multithreading, and Scalable Architectures.</p>
            </div>
            <div className="bento-item">
              <Layout className="icon-red" />
              <h3>Frontend</h3>
              <p>React & Modern CSS.</p>
            </div>
            <div className="bento-item">
              <Database className="icon-red" />
              <h3>Data</h3>
              <p>SQL & System Design.</p>
            </div>
            <div className="bento-item wide">
              <h3>Currently Exploring</h3>
              <div className="tag-cloud">
                <span>Deep Learning</span>
                <span>Neural Networks</span>
                <span>Node.js</span>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section className="projects-section">
          <h2 className="section-heading">Featured Engineering</h2>
          <div className="project-list">
            <ProjectCard 
              title="Hostel Management Portal" 
              type="Enterprise Solution" 
              tech="Java • JSP • MySQL" 
            />
            <ProjectCard 
              title="Course Selling Platform" 
              type="E-Commerce Engine" 
              tech="React • Node.js • Auth" 
            />
          </div>
        </section>

        {/* CONTACT */}
        <footer className="footer">
          <div className="footer-glass">
            <h2>Let's build the future together.</h2>
            <div className="social-links">
              <a href="#"><Github /></a>
              <a href="#"><Linkedin /></a>
              <a href="mailto:aditya@example.com"><Mail /></a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

const ProjectCard = ({ title, type, tech }) => (
  <motion.div whileHover={{ y: -10 }} className="project-row">
    <div className="project-content">
      <span className="project-type">{type}</span>
      <h3 className="project-title">{title}</h3>
      <p className="project-tech">{tech}</p>
    </div>
    <div className="project-link"><ExternalLink /></div>
  </motion.div>
);

export default App;