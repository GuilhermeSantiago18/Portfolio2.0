
import { Linkedin, Github, MessageCircleMore  } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="flex justify-center space-x-6 p-4 bg-gray-900 text-white">
      <a
        href="https://www.linkedin.com/in/seu-perfil"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="hover:text-blue-500 transition-colors duration-300"
      >
        <Linkedin size={28} />
      </a>

      <a
        href="https://github.com/seu-usuario"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="hover:text-gray-400 transition-colors duration-300"
      >
        <Github size={28} />
      </a>

      <a
        href="https://wa.me/seu-numero-com-ddd"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="hover:text-green-500 transition-colors duration-300"
      >
        <MessageCircleMore  size={28} />
      </a>
    </footer>
  );
};

export default Footer;
