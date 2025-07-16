import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
  const projects: Omit<Project, 'period'>[] = [
  
    {
      title: 'Mini ETL Pipeline Project',
      description:
        'Designed and developed a lightweight ETL pipeline to simulate a real-world data flow. It extracts 1000 rows of fake sales data using Faker, transforms the data (date formatting, revenue calculations, categorization), loads it into a SQLite database, and outputs insights via Excel reports. Included sales trends, top products, and regional distribution.',
      technologies: ['Python', 'SQLite', 'Pandas', 'OpenPyXL'],
      image:
        'https://thumbs.dreamstime.com/b/etl-process-extract-transform-load-to-extract-data-different-sources-transform-data-load-to-user-etl-302594391.jpg',
      github: 'https://github.com/sainareenp/mini-etl-pipeline',
    },
      {
      title: 'Online Marketplace Web Application',
      description: 'Developed an online marketplace platform with two-factor authentication, and AI-powered fraud detection, enhancing user trust and transaction security. Built responsive user interfaces using React and Next.js, implemented protected routes via middleware, and collaborated on backend APIs for task management and image uploads, improving system reliability and scalability.',
      technologies: ['Next.js', 'React', 'Node.js', 'Firebase'],
      image: 'https://miro.medium.com/max/1200/1*Grifgcst7t_E9eRsX0Myuw.png',
      github: 'https://github.com/sainareenp/onlinemarketplace'
    },
    {
      title: 'Automated Industrial Line Tracer Vehicle',
      description: 'Developed a software-controlled autonomous vehicle with line tracing capabilities using Python, optimizing control processes and improving operational efficiency by 20%. Integrated a robotic arm to perform automated object manipulation tasks (picking and placing), and utilized Power BI for performance data visualization, enhancing precision and operational efficiency in industrial automation.',
      technologies: ['Python', 'Power BI', 'Embedded systems'],
      image: 'https://img.freepik.com/premium-vector/electric-vehicles-production-line-isometric-illustration-with-automated-remote-controlled-robotic-arms-assembly-conveyor-system_1284-56880.jpg?w=996',
    },
    {
      title: 'Electric Solar Vehicle Development',
      description: 'Contributed to the design of a solar-powered electric vehicle using CATIA, enhancing the vehicle\'s structural efficiency and aerodynamics. Utilized Python for data-driven analysis and energy consumption modeling, boosting system performance and energy efficiency by 15%.',
      technologies: ['Python', 'CATIA', 'Data Analysis'],
      image: 'https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    }
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedProject = projects[selectedIndex];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-[#f8f9fb] to-[#e0e7ff] dark:from-secondary-900 dark:to-secondary-950">
      <div className="section-container">
        <h2 className="section-title mb-10 text-4xl font-bold text-center">🚀 Featured Projects</h2>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Side - Project List */}
          <div className="lg:col-span-1  space-y-4">
            {projects.map((project, index) => (
              <button
                key={index}
                className={`w-full text-left p-4 rounded-xl backdrop-blur-md  bg-white/60  dark:bg-white/10 transition-all border
                  ${
                    index === selectedIndex
                      ? 'border-blue-500 dark:border-accent-700 font-semibold shadow-md text-primary-700 dark:text-accent-400'
                      : 'hover:bg-white/60 hover:dark:bg-white/20 border-transparent '
                  }`}
                onClick={() => setSelectedIndex(index)}
              >
                {project.title}
              </button>
            ))}
          </div>

          {/* Right Side - Animated Project Details */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="p-6 rounded-2xl backdrop-blur-xl bg-white/40 dark:bg-white/10 shadow-lg transition-all text-justify"
              >
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-60 object-cover rounded-xl"
                  />
                </div>

                <div className="mt-6 space-y-4">
                  <h3 className="text-2xl font-bold text-primary-700 dark:text-accent-400">
                    {selectedProject.title}
                  </h3>

                  {/* <div className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                    <Calendar className="w-4 h-4 mr-2" />
                    {selectedProject.period}
                  </div> */}

                  <p className="text-gray-800 dark:text-gray-200">
                    {selectedProject.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-primary-700 text-white dark:bg-accent-700 text-sm px-3 py-1 rounded-full text-gray-800 dark:text-white backdrop-blur"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-6 pt-4">
                    {selectedProject.github && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-600 hover:text-blue-800 dark:text-accent-400"
                      >
                        <Github className="w-5 h-5 mr-1" />
                        View Code
                      </a>
                    )}
                    {selectedProject.link && (
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-600 hover:text-blue-800 dark:text-accent-400"
                      >
                        <ExternalLink className="w-5 h-5 mr-1" />
                        View Project
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
