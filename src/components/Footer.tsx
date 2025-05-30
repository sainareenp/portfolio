import React from 'react';
import { ArrowUp, Linkedin, Github, Mail } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Footer: React.FC = () => {
  const { isDarkMode } = useTheme();
  
  return (
    <footer className="bg-secondary-100 dark:bg-secondary-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold text-primary-600 dark:text-accent-400">
              Sai Nareen Purimetla
            </h3>
            <p className="text-secondary-600 dark:text-secondary-400 mt-1">
              Information Science & Technology Professional
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a
                href="https://www.linkedin.com/in/sai-nareen-purimtla/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white dark:bg-secondary-800 text-secondary-600 hover:text-primary-600 dark:text-secondary-300 dark:hover:text-accent-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/sainareenp/onlinemarketplace"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white dark:bg-secondary-800 text-secondary-600 hover:text-primary-600 dark:text-secondary-300 dark:hover:text-accent-400 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="mailto:psainareen@gmail.com"
                className="p-2 rounded-full bg-white dark:bg-secondary-800 text-secondary-600 hover:text-primary-600 dark:text-secondary-300 dark:hover:text-accent-400 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            
            <a
              href="#hero"
              className="p-2 rounded-full bg-primary-600 dark:bg-accent-400 text-white hover:bg-primary-700 dark:hover:bg-accent-500 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-secondary-200 dark:border-secondary-800 mt-8 pt-8 text-center text-secondary-600 dark:text-secondary-400 text-sm">
          <p>© {new Date().getFullYear()} Sai Nareen Purimetla. All rights reserved.</p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;