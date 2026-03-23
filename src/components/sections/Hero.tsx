import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
      <div className="section-container text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-primary font-mono text-sm mb-4"
        >
          Olá! Eu sou
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          <span className="gradient-text">Souza</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8"
        >
          Desenvolvedor Full-Stack &bull; Vibe Coder
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-gray-500 dark:text-gray-400 max-w-lg mx-auto mb-10"
        >
          Construo aplicações web modernas, escaláveis e com experiências incríveis para o usuário.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex items-center justify-center gap-4"
        >
          <a href="#projects" className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors">Ver Projetos</a>
          <a href="#contact" className="px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-colors">Contato</a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex justify-center gap-4 mt-8"
        >
          <a href="https://github.com/SouzaCodes01" target="_blank" rel="noreferrer" className="p-3 rounded-full text-gray-400 hover:text-primary hover:bg-gray-200 dark:hover:bg-dark-card transition-colors"><Github size={22} /></a>
          <a href="https://www.linkedin.com/in/gabriel-rodrigues-de-souza-83943332b" target="_blank" rel="noreferrer" className="p-3 rounded-full text-gray-400 hover:text-primary hover:bg-gray-200 dark:hover:bg-dark-card transition-colors"><Linkedin size={22} /></a>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <ArrowDown className="text-gray-400" />
        </motion.div>
      </div>
    </section>
  );
}
