import { motion } from 'framer-motion';

const skills = {
  Frontend: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'TailwindCSS', 'HTML5', 'CSS3', 'Framer Motion'],
  Backend: ['Node.js', 'Express', 'Python', 'Java', 'REST APIs', 'JWT Auth'],
  Database: ['PostgreSQL', 'MongoDB', 'MySQL', 'Prisma'],
  'Tools & DevOps': ['Git', 'Docker', 'Linux', 'VS Code', 'Windsurf', 'Figma', 'Jest'],
};

export default function TechStack() {
  return (
    <section id="techstack" className="section-container bg-gray-50 dark:bg-dark-card/30">
      <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="section-title">
        Tech <span className="gradient-text">Stack</span>
      </motion.h2>
      <p className="section-subtitle">Tecnologias que uso para construir soluções completas.</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Object.entries(skills).map(([category, items], catIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: catIndex * 0.1 }}
            className="bg-white dark:bg-dark-card rounded-xl p-6 border dark:border-dark-border"
          >
            <h3 className="font-semibold text-primary mb-4">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <span key={skill} className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}