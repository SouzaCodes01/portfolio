import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="section-container">
      <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="section-title">
        Vamos <span className="gradient-text">Conversar</span>
      </motion.h2>
      <p className="section-subtitle">Tem um projeto em mente? Vamos trabalhar juntos!</p>

      <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
          <h3 className="text-xl font-semibold">Entre em contato</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
              <Mail size={20} className="text-primary" />
              <span>contato@souza.dev</span>
            </div>
            <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
              <MapPin size={20} className="text-primary" />
              <span>São Paulo, Brasil</span>
            </div>
          </div>
          <div className="flex gap-3 pt-4">
            <a href="https://github.com/SouzaCodes01" target="_blank" rel="noreferrer" className="p-3 bg-gray-100 dark:bg-dark-card rounded-lg hover:bg-primary/10 transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="p-3 bg-gray-100 dark:bg-dark-card rounded-lg hover:bg-primary/10 transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input
            type="text"
            placeholder="Seu nome"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 bg-gray-100 dark:bg-dark-card rounded-lg border dark:border-dark-border focus:border-primary focus:outline-none transition-colors"
            required
          />
          <input
            type="email"
            placeholder="Seu email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 bg-gray-100 dark:bg-dark-card rounded-lg border dark:border-dark-border focus:border-primary focus:outline-none transition-colors"
            required
          />
          <textarea
            placeholder="Sua mensagem"
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-3 bg-gray-100 dark:bg-dark-card rounded-lg border dark:border-dark-border focus:border-primary focus:outline-none transition-colors resize-none"
            required
          />
          <button
            type="submit"
            className="w-full px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
          >
            {sent ? 'Enviado! ✓' : <><Send size={18} /> Enviar Mensagem</>}
          </button>
        </motion.form>
      </div>
    </section>
  );
}