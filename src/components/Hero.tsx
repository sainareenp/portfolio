import React from 'react';
import { Github as GitHub, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-16 overflow-hidden relative text-center"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-white dark:from-primary-950 dark:to-secondary-950 -z-10" />

      <div className="section-container">
        <div className="max-w-2xl mx-auto space-y-6 animate-fade-in">
          <h4 className="text-primary-600 dark:text-accent-400 font-medium animate-slide-up animate-delay-100">
            Hello, I'm
          </h4>
          <h1 className="text-4xl md:text-5xl font-bold animate-slide-up animate-delay-200">
            Sai Nareen Purimetla
          </h1>

          {/* Scroll animated subtitle */}
          <h2 className="text-2xl md:text-3xl font-medium text-secondary-600 dark:text-secondary-300 flex items-center justify-center gap-2 animate-slide-up animate-delay-700">
            <span className="text-primary-600 dark:text-accent-400">I am a</span>
            <span className="h-[1.5em] overflow-hidden relative inline-block">
              <span className="block animate-scroll-words">
                <span className="block">Data Explorer</span>
                <span className="block">Data Professional</span>
                <span className="block">Tech Enthusiast</span>
                <span className="block">BI Analyst</span>
                <span className="block">UI/UX Designer</span>
              </span>
            </span>
          </h2>

          <div className="flex justify-center flex-wrap gap-4 animate-slide-up animate-delay-400">
            <a href="#" className="btn btn-primary">
              Resume
            </a>
            <a href="#projects" className="btn btn-outline">
              View Projects
            </a>
          </div>

          <div className="flex justify-center space-x-4 pt-4 animate-slide-up animate-delay-500">
            <a
              href="https://github.com/sainareenp"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-secondary-600 hover:text-primary-600 dark:text-secondary-300 dark:hover:text-accent-400 transition-colors"
              aria-label="GitHub"
            >
              <GitHub className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/sai-nareen-purimetla/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-secondary-600 hover:text-primary-600 dark:text-secondary-300 dark:hover:text-accent-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:psainareen@gmail.com"
              className="p-2 text-secondary-600 hover:text-primary-600 dark:text-secondary-300 dark:hover:text-accent-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
