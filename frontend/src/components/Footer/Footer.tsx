import React from 'react';
import { Linkedin, Github, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const {t} = useTranslation()
  return (
    <footer id='contact' className="flex flex-col items-center space-y-4 p-4 bg-gray-900 text-white">
      <div className="flex space-x-6">
        <a
          href="https://www.linkedin.com/in/guilherme-santiago-dev"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-blue-500 transition-colors duration-300"
        >
          <Linkedin size={28} />
        </a>

        <a
          href="https://github.com/guilhermesantiago18"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-gray-400 transition-colors duration-300"
        >
          <Github size={28} />
        </a>

        <a
          href="https://wa.me/5584996187958"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="hover:text-green-500 transition-colors duration-300"
        >
          <MessageCircle size={28} />
        </a>
      </div>

      <p className="text-sm text-gray-400 select-none">
        {t('footer.title')}
      </p>
    </footer>
  );
};

export default Footer;
