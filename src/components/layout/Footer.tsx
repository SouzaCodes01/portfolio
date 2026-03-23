import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-dark-card border-t dark:border-dark-border">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Souza. Feito com ❤️ e muito código.
          </p>
          <div className="flex items-center space-x-4">
            <a href="https://github.com/SouzaCodes01" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors"><Github size={20} /></a>
            <a href="#" className="hover:text-primary transition-colors"><Linkedin size={20} /></a>
            <a href="mailto:" className="hover:text-primary transition-colors"><Mail size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}