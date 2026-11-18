import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Briefcase,
  Code2,
} from "lucide-react";

export default function Hero({ t }) {
  return (
    <section className="hero section" id="home">
      <div className="hero-content">
        <motion.div
          className="status"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="status-dot"></span>
          {t.hero.available}
        </motion.div>

        <motion.p
          className="hero-greeting"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          {t.hero.greeting}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {t.hero.name}
          <span className="gradient-text">.</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {t.hero.role}
        </motion.h2>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {t.hero.description}
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <a href="#projects" className="btn btn-primary">
            {t.hero.projects}
            <ArrowUpRight size={18} />
          </a>

          <a href="#contact" className="btn btn-outline">
            {t.hero.contact}
          </a>
        </motion.div>

        <div className="social-links">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Code2 />
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Briefcase />
          </a>
        </div>
      </div>

      <motion.div
        className="hero-visual"
        animate={{ y: [0, -12, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="code-card">
          <div className="code-header">
            <div className="window-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <span>developer.js</span>
          </div>

          <div className="code-body">
            <p><span className="code-purple">const</span> developer = {"{"}</p>
            <p className="indent">
              name: <span className="code-green">"Developer"</span>,
            </p>
            <p className="indent">
              role: <span className="code-green">"Software Engineer"</span>,
            </p>
            <p className="indent">
              skills: [
            </p>
            <p className="indent2 code-green">
              "Python", "React",
            </p>
            <p className="indent2 code-green">
              "AI", "Machine Learning"
            </p>
            <p className="indent">],</p>
            <p className="indent">
              passion: <span className="code-orange">true</span>
            </p>
            <p>{"}"}</p>
            <p className="code-comment">
              // Always learning something new.
            </p>
            <p className="code-cursor">_</p>
          </div>
        </div>

        <div className="floating-icon icon-one">
          <Code2 size={25} />
        </div>

        <div className="floating-icon icon-two">
          {"</>"}
        </div>
      </motion.div>

      <a href="#about" className="scroll-indicator">
        <ArrowDown size={18} />
        <span>Scroll to explore</span>
      </a>
    </section>
  );
}