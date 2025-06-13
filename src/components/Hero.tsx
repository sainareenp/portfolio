import React, { useEffect, useState } from 'react';
import { Github as GitHub, Linkedin, Mail } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const roles = [
  'Data Explorer',
  'Data Professional',
  'Tech Enthusiast',
  'BI Analyst',
  'UI/UX Designer',
];

const Hero: React.FC = () => {
  const intro = "Hello, I'm";
  const name = 'Sai Nareen Purimetla';

  const [typedIntro, setTypedIntro] = useState('');
  const [typedName, setTypedName] = useState('');
  const [step, setStep] = useState(0); // 0: typing intro, 1: typing name, 2: done

  useEffect(() => {
    let i = 0;
    let interval: ReturnType<typeof setInterval>;

    if (step === 0) {
      interval = setInterval(() => {
        setTypedIntro(intro.slice(0, i + 1));
        i++;
        if (i === intro.length) {
          clearInterval(interval);
          setStep(1);
        }
      }, 80);
    } else if (step === 1) {
      i = 0;
      interval = setInterval(() => {
        setTypedName(name.slice(0, i + 1));
        i++;
        if (i === name.length) {
          clearInterval(interval);
          setStep(2);
        }
      }, 80);
    }

    return () => clearInterval(interval);
  }, [step]);

  const [roleIndex, setRoleIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-16 overflow-hidden relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-white dark:from-primary-950 dark:to-secondary-950 -z-10" />

      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4 animate-fade-in">
            {/* Typing animation */}
            <h1 className="font-bold text-3xl md:text-5xl leading-tight animate-slide-up animate-delay-100">
              <span className="text-primary-600 dark:text-accent-400 block mb-1">
                {typedIntro}
                {step < 1 && <span className="animate-pulse">|</span>}
              </span>
              <span className="text-black dark:text-white block mt-4">
                {typedName}
                {step === 1 && <span className="animate-pulse">|</span>}
              </span>
            </h1>

            {/* Rotating roles */}
            <h2 className="text-2xl md:text-3xl font-medium text-secondary-600 dark:text-secondary-300 flex items-center gap-2 animate-slide-up animate-delay-300">
              <span className="text-primary-600 dark:text-accent-400">I am a</span>
              <div className="relative w-[20ch] h-[1.2em] overflow-hidden ml-2">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roles[roleIndex]}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute left-0 right-0 text-primary-600 dark:text-accent-400"
                  >
                    {roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </h2>

            <div className="flex flex-wrap gap-4 animate-slide-up animate-delay-400">
              <a 
                  href="https://drive.google.com/file/d/1XhnRjU_UVVpSnvlCAnVlwHrnCD6-GttH/view?usp=sharing" 
                  className="btn btn-primary" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  View Resume
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

          {/* GIF area */}
          <div className="hidden md:block animate-slide-in-right">
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-tr from-primary-600 to-primary-400 dark:from-accent-600 dark:to-accent-400 opacity-90 shadow-xl" />
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNm1wb2x1cHhwazRpc3MwNG9veWE0YXUzencxcnUxems2YWNobG85MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gh0RRgkTXedvF0pDc0/giphy.gif"
                  alt="Animated GIF"
                  style={{ height: '100%', objectFit: 'cover' }}
                  className="rounded-2xl"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-accent-400 dark:bg-primary-600" />
              <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-primary-200 dark:bg-accent-800" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
