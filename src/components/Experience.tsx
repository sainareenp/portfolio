import React, { useEffect, useState } from 'react';
import { Calendar, MapPin, Building } from 'lucide-react';

interface WorkExperience {
  title: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
}

const Experience: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('experience');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const experiences: WorkExperience[] = [
     {
      title: 'Student Assistant - Intern',
      company: 'New York State Office of Information Technology Services',
      location: 'Albany, New York',
      period: 'May 2025 - Present',
      responsibilities: [
        'Develop and maintain internal tools using SQL and Power BI to automate data processing, reporting, and operational dashboards.',
        'Assist with CRM data entry, quality validation, and reporting by managing data accuracy within ITSM systems and supporting governance initiatives.',
        'Utilize Microsoft 365, ITSM Self-Service Portal, and MDM tools for secure, efficient service management.',
        'Assist with service reporting, implementing data quality checks and supporting governance initiatives for process improvement.'
      ]
    
    },
    
    {
      title: 'Graduate Student Assistant',
      company: 'State of New York - University Libraries at University at Albany - SUNY',
      location: 'Albany, New York',
      period: 'Feb 2024 – Present',
      responsibilities: [
        'Managed and optimized data entry processes, enhancing administrative efficiency and data accuracy by 30%.',
        'Supervised 10+ undergraduate students, delegating tasks effectively while honing organizational and multitasking skills, increasing team productivity.',
        'Analyzed library usage data to streamline services, while providing strong customer service and problem-solving assistance to diverse library users, boosting user satisfaction by 25%.'
      ]
    },
    {
      title: 'Graduate Research Assistant',
      company: 'UX & Immersive Technologies Lab, University at Albany - SUNY',
      location: 'Albany, New York',
      period: 'Aug 2024 - May 2025',
      responsibilities: [
        'Mastered Unity\'s tools and features for VR development, enhancing the lab\'s project outputs.',
        'Collaborated effectively with interdisciplinary teams to bridge UX research and VR development.'
      ]
    },
    {
      title: 'Assistant General Manager',
      company: 'Sree Krishna Vilas',
      location: 'Hyderabad, India',
      period: 'May 2021 – Dec 2023',
      responsibilities: [
        'Spearheaded the implementation and integration of CRM and POS systems, improving operational efficiency by 15% and reducing service costs by 5%.',
        'Engineered custom reports and dashboards using SQL and Power BI to monitor and assess sales trends, leading to data-driven decision-making and improving productivity by 15%.',
        'Oversaw a team of 20 staff, enhancing team productivity through process automation, software training, and effective task delegation using project management tools.',
        'Implemented an advanced inventory management system, leveraging data-driven insights to optimize procurement, reducing stockouts by 30% and minimizing inventory holding costs.',
        'Provided data-driven solutions to clients, increasing customer satisfaction score by 20% over 6 months.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-secondary-50 dark:bg-secondary-900">
      <div className="section-container">
        <h2 className="section-title mb-16">Work Experience</h2>
        
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className={`timeline-item ${
                isVisible 
                  ? 'opacity-100' 
                  : 'opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms`, transition: 'opacity 0.6s ease-in-out' }}
            >
              <div className="timeline-dot"></div>
              
              <div className="pl-4">
                <div className="card p-6">
                  <h3 className="text-xl font-bold text-primary-700 dark:text-accent-400">
                    {exp.title}
                  </h3>
                  <div className="text-secondary-600 dark:text-secondary-400 mt-1 mb-4">
                    <div className="flex items-center mb-1">
                      <Building className="h-4 w-4 mr-1" />
                      <span className="font-semibold text-secondary-800 dark:text-secondary-100">{exp.company}</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-x-6">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>            
                  <ul className="space-y-2 mt-4">
                    {exp.responsibilities.map((item, i) => (
                      <li key={i} className="flex">
                        <span className="mr-2 text-primary-600 dark:text-accent-400">•</span>
                        <span className="text-secondary-800 dark:text-secondary-200">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#contact" 
            className="btn btn-outline inline-block mt-8"
          >
            Let's Work Together
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;