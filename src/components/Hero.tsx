import React from 'react';
import { ArrowRight, Github as GitHub, Linkedin, Mail } from 'lucide-react';
import img1 from "../../R5C_6743.jpg";
const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-white dark:from-primary-950 dark:to-secondary-950 -z-10"></div>
      
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h4 className="text-primary-600 dark:text-accent-400 font-medium animate-slide-up animate-delay-100">
              Hello, I'm
            </h4>
            <h1 className="font-bold animate-slide-up animate-delay-200">
              Sai Nareen Purimetla
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-secondary-600 dark:text-secondary-300 animate-slide-up animate-delay-300">
              {/* Information Science Graduate Student & <br /> */}
              <span className="text-primary-600 dark:text-accent-400">Student Assistant Intern - NYS ITS</span>
            </h2>
            {/* <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-xl animate-slide-up animate-delay-400">
              Specializing in data management, process automation, and immersive technologies. Currently pursuing an MS in Information Science/Studies at University at Albany, SUNY.
            </p> */}
            
            <div className="flex flex-wrap gap-4 animate-slide-up animate-delay-500">
              <a href="#contact" className="btn btn-primary">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#projects" className="btn btn-outline">
                View Projects
              </a>
            </div>
            
            <div className="flex space-x-4 pt-4 animate-slide-up animate-delay-500">
              <a 
                href="https://github.com/sainareenp/onlinemarketplace" 
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
          
          <div className="hidden md:block animate-slide-in-right">
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-tr from-primary-600 to-primary-400 dark:from-accent-600 dark:to-accent-400 opacity-90 shadow-xl"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white text-5xl font-bold">
                <img src={img1} style={{height:"100%", objectFit: "cover"}}  />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-accent-400 dark:bg-primary-600"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-primary-200 dark:bg-accent-800"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;