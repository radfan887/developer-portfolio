import { motion } from "framer-motion";
import {
  Code2,
  ExternalLink,
  FolderCode,
} from "lucide-react";

export default function Projects({ t }) {
  return (
    <section className="section" id="projects">
      <div className="section-heading">
        <span className="section-label">03 / PROJECTS</span>
        <h2>{t.projects.title}</h2>
        <p>{t.projects.subtitle}</p>
      </div>

      <div className="projects-grid">
        {t.projects.items.map((project, index) => (
          <motion.article
            className="project-card"
            key={project.title}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.12 }}
            whileHover={{ y: -8 }}
          >
            <div className="project-top">
              <FolderCode size={32} className="project-icon" />

              <span className="project-category">
                {project.category}
              </span>
            </div>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="project-tech">
              {project.tech.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <div className="project-links">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="View source code"
                >
                  <Code2 size={19} />
                  GitHub
                </a>
              )}

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="View live demo"
                >
                  <ExternalLink size={19} />
                  Live Demo
                </a>
              )}

              {!project.github && !project.demo && (
                <span className="coming-soon">
                  Project details coming soon
                </span>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}