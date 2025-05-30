import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Calendar } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  period: string;
  link?: string;
  github?: string;
}

const Projects: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProject, setActiveProject] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('projects');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const projects: Project[] = [
    {
      title: 'Secure Online Marketplace Web Application',
      description: 'Developed a secure online marketplace platform with facial recognition, two-factor authentication, and AI-powered fraud detection, enhancing user trust and transaction security. Built responsive user interfaces using React and Next.js, implemented protected routes via middleware, and collaborated on backend APIs for task management and image uploads, improving system reliability and scalability.',
      technologies: ['Next.js', 'React', 'Node.js', 'Firebase'],
      image: 'https://images.pexels.com/photos/6169659/pexels-photo-6169659.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      period: 'Jan 2025 – May 2025',
      github: 'https://github.com/sainareenp/onlinemarketplace'
    },
    {
      title: 'Automated Industrial Line Tracer Vehicle',
      description: 'Developed a software-controlled autonomous vehicle with line tracing capabilities using Python for embedded systems, optimizing control processes and improving operational efficiency by 20%. Integrated a robotic arm to perform automated object manipulation tasks (picking and placing), and utilized Power BI for performance data visualization, enhancing precision and operational efficiency in industrial automation.',
      technologies: ['Python', 'Power BI', 'Embedded systems'],
      image: 'https://images.pexels.com/photos/8728556/pexels-photo-8728556.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      period: 'Jan 2022 – May 2022'
    },
    {
      title: 'Electric Solar Vehicle Development',
      description: 'Contributed to the design of a solar-powered electric vehicle using CATIA, enhancing the vehicle\'s structural efficiency and aerodynamics. Utilized Python for data-driven analysis and energy consumption modeling, boosting system performance and energy efficiency by 15%.',
      technologies: ['Python', 'CATIA', 'Data Analysis'],
      image: 'https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      period: 'Mar 2019 – Mar 2020'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-secondary-950 overflow-hidden">
      <div className="section-container">
        <h2 className="section-title mb-16">Featured Projects</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`card group overflow-hidden transform transition-all duration-500 ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setActiveProject(index)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-primary-950/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-accent-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <div className="flex items-center text-sm text-secondary-200 mb-3">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{project.period}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="badge bg-white/10 text-white text-xs py-1">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <p className={`text-secondary-600 dark:text-secondary-300 duration-500 transition-all ${
                  activeProject === index ? 'max-h-96 opacity-100' : 'max-h-24 overflow-hidden opacity-90'
                }`}>
                  {project.description}
                </p>
                
                <div className="flex justify-between items-center pt-4">
                  {project.github && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-800 dark:text-accent-400 dark:hover:text-accent-300 flex items-center transition-colors"
                    >
                      <Github className="w-5 h-5 mr-1" />
                      <span>View Code</span>
                    </a>
                  )}
                  
                  {project.link && (
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-800 dark:text-accent-400 dark:hover:text-accent-300 flex items-center transition-colors"
                    >
                      <ExternalLink className="w-5 h-5 mr-1" />
                      <span>View Project</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;