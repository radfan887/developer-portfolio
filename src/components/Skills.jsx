import { motion } from "framer-motion";

export default function Skills({ t }) {
  return (
    <section className="section" id="skills">
      <div className="section-heading">
        <span className="section-label">02 / SKILLS</span>
        <h2>{t.skills.title}</h2>
        <p>{t.skills.subtitle}</p>
      </div>

      <div className="skills-grid">
        {t.skills.categories.map((category, index) => (
          <motion.div
            className="skill-card"
            key={category.name}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="skill-number">
              0{index + 1}
            </div>

            <h3>{category.name}</h3>

            <div className="skill-tags">
              {category.items.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}