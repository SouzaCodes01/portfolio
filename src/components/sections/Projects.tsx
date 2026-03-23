import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

const projects = [
  {
    title: 'TaskFlow API',
    description: 'API RESTful para gerenciamento de tarefas com autenticação JWT, CRUD completo e documentação Swagger.',
    tech: ['Node.js', 'Express', 'PostgreSQL', 'JWT', 'Docker'],
    github: 'https://github.com/SouzaCodes01/taskflow-api',
    category: 'Backend',
  },
  {
    title: 'DevFinance',
    description: 'Dashboard de finanças pessoais com gráficos interativos, gestão de transações e relatórios.',
    tech: ['Next.js', 'TypeScript', 'TailwindCSS', 'Prisma', 'Chart.js'],
    github: 'https://github.com/SouzaCodes01/devfinance',
    category: 'Full-Stack',
  },
  {
    title: 'Vibe Chat AI',
    description: 'Interface de chat com IA usando streaming, markdown e múltiplos modelos. Feito com Vibe Coding.',
    tech: ['React', 'Node.js', 'OpenAI', 'SSE', 'TypeScript'],
    github: 'https://github.com/SouzaCodes01/vibe-chat-ai',
    category: 'Vibe Coding',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-container">
      <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="section-title">
        Meus <span className="gradient-text">Projetos</span>
      </motion.h2>
      <p className="section-subtitle">Alguns dos projetos que construí para demonstrar minhas habilidades.</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-white dark:bg-dark-card rounded-xl border dark:border-dark-border overflow-hidden hover:border-primary dark:hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/5 group"
          >
            <div className="h-2 bg-gradient-to-r from-primary to-secondary" />
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">{project.category}</span>
                <div className="flex gap-2">
                  <a href={project.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary transition-colors"><Github size={18} /></a>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-dark-bg text-gray-600 dark:text-gray-400">{t}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
