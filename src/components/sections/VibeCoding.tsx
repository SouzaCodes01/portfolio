import { motion } from 'framer-motion';
import { Music, Brain, Zap, Repeat } from 'lucide-react';

const principles = [
  { icon: Music, title: 'Flow State', desc: 'Codar no estado de flow, com foco total e criatividade máxima. Como um músico tocando sua melhor música.' },
  { icon: Brain, title: 'AI-Assisted Dev', desc: 'Uso ferramentas como Windsurf/Cascade para acelerar o desenvolvimento e tomar decisões técnicas melhores.' },
  { icon: Zap, title: 'Rapid Prototyping', desc: 'Transformo ideias em protótipos funcionais rapidamente, iterando até chegar na solução ideal.' },
  { icon: Repeat, title: 'Iteração Contínua', desc: 'Feedback loops curtos com IA. Código → Teste → Refine → Repita.' },
];

export default function VibeCoding() {
  return (
    <section id="vibecoding" className="section-container bg-gradient-to-br from-primary/5 via-transparent to-secondary/5">
      <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="section-title">
        Vibe <span className="gradient-text">Coding</span> 🎵
      </motion.h2>
      <p className="section-subtitle">
        Minha abordagem de desenvolvimento: combinar intuição criativa com ferramentas de IA para criar software de forma fluida e eficiente.
      </p>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {principles.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="flex gap-4 p-6 bg-white dark:bg-dark-card rounded-xl border dark:border-dark-border hover:border-primary dark:hover:border-primary transition-colors"
          >
            <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <item.icon className="text-primary" size={24} />
            </div>
            <div>
              <h3 className="font-semibold mb-1">{item.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-12 max-w-2xl mx-auto text-center"
      >
        <blockquote className="text-lg italic text-gray-500 dark:text-gray-400 border-l-4 border-primary pl-4">
          "O melhor código não é apenas funcional — ele flui naturalmente, como uma boa música."
        </blockquote>
      </motion.div>
    </section>
  );
}