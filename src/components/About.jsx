import { GraduationCap, Brain, Code2 } from "lucide-react";
import { motion } from "framer-motion";

export default function About({ t }) {
  return (
    <section className="section" id="about">
      <div className="section-heading">
        <span className="section-label">01 / ABOUT</span>
        <h2>{t.about.title}</h2>
        <p>{t.about.subtitle}</p>
      </div>

      <div className="about-grid">
        <motion.div
          className="about-card main-about"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Code2 size={30} className="feature-icon" />

          <h3>{t.about.title}</h3>

          <p>{t.about.description}</p>
        </motion.div>

        <motion.div
          className="about-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          <GraduationCap size={30} className="feature-icon" />

          <h3>{t.about.education}</h3>

          <h4>{t.about.degree}</h4>

          <p>{t.about.university}</p>
        </motion.div>

        <motion.div
          className="about-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Brain size={30} className="feature-icon" />

          <h3>{t.about.focus}</h3>

          <ul className="interest-list">
            {t.about.interests.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}