import { motion } from 'framer-motion';
import { Code, Coffee, Rocket, Sparkles } from 'lucide-react';

const highlights = [
  { icon: Code, title: 'Full-Stack', desc: 'Frontend e Backend com tecnologias modernas' },
  { icon: Rocket, title: 'Performance', desc: 'Apps rápidos, otimizados e escaláveis' },
  { icon: Sparkles, title: 'Vibe Coding', desc: 'Desenvolvimento com AI e criatividade' },
  { icon: Coffee, title: 'Aprendizado', desc: 'Sempre evoluindo e aprendendo novas techs' },
];

export default function About() {
  return (
    <section id="about" className="section-container">
      <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="section-title">
        Sobre <span className="gradient-text">Mim</span>
      </motion.h2>
      <p className="section-subtitle">
        Desenvolvedor Full-Stack apaixonado por transformar ideias em código funcional e elegante.
      </p>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-4">
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Sou um desenvolvedor Full-Stack Junior baseado em São Paulo, com experiência em React, Node.js, Next.js, TypeScript e bancos de dados SQL/NoSQL.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Pratico <strong className="text-primary">Vibe Coding</strong> — uma abordagem que combina ferramentas de IA com intuição técnica para criar soluções de forma rápida, criativa e eficiente.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Meu foco é construir aplicações com código limpo, boa arquitetura e experiências de usuário incríveis.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-4 bg-white dark:bg-dark-card rounded-xl border dark:border-dark-border hover:border-primary dark:hover:border-primary transition-colors"
            >
              <item.icon className="text-primary mb-2" size={24} />
              <h3 className="font-semibold text-sm text-gray-900 dark:text-white">{item.title}</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
