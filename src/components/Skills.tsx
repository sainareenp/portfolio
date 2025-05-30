import React, { useEffect, useState } from 'react';
import { Code, Database, Terminal, Cpu, BarChart, Link as Line, Layers, GitBranch } from 'lucide-react';

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  skills: string[];
  color: string;
}

const Skills: React.FC = () => {
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

    const section = document.getElementById('skills');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const skillCategories: SkillCategory[] = [
    {
      name: 'Programming Languages',
      icon: <Code className="h-6 w-6" />,
      skills: ['C', 'Python', 'HTML', 'CSS', 'JavaScript', 'MySQL', 'SQL'],
      color: 'from-blue-500 to-indigo-600',
    },
    {
      name: 'Data Management',
      icon: <Database className="h-6 w-6" />,
      skills: ['Data Analytics', 'Database Management', 'Database Management Systems (DBMS)'],
      color: 'from-emerald-500 to-teal-600',
    },
    {
      name: 'Technical Tools',
      icon: <Terminal className="h-6 w-6" />,
      skills: ['Microsoft Office Suite', 'Power BI', 'Tableau', 'AutoCAD', 'CATIA', 'Unity', 'Meta Quest Developer Hub'],
      color: 'from-purple-500 to-fuchsia-600',
    },
    {
      name: 'Project Management',
      icon: <GitBranch className="h-6 w-6" />,
      skills: ['Process Automation', 'Project Management', 'Inventory Management Systems', 'CRM systems', 'POS systems'],
      color: 'from-amber-500 to-orange-600',
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-secondary-950 overflow-hidden">
      <div className="section-container">
        <h2 className="section-title mb-16">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.name}
              className={`card p-6 transform transition-all duration-500 ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`p-3 rounded-xl mb-4 bg-gradient-to-r ${category.color} w-fit text-white`}>
                {category.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
              
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary-500 dark:bg-accent-400 mr-2"></div>
                    <span className="text-secondary-700 dark:text-secondary-300">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8">Technical Proficiency</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Programming', percentage: 85, icon: <Cpu className="h-5 w-5" /> },
              { name: 'Data Analysis', percentage: 90, icon: <BarChart className="h-5 w-5" /> },
              { name: 'Project Management', percentage: 80, icon: <Layers className="h-5 w-5" /> },
              { name: 'UI/UX Design', percentage: 75, icon: <Line className="h-5 w-5" /> },
              { name: 'Database Management', percentage: 85, icon: <Database className="h-5 w-5" /> },
              { name: 'Software Development', percentage: 80, icon: <Code className="h-5 w-5" /> },
            ].map((skill, index) => (
              <div 
                key={skill.name} 
                className={`p-4 bg-secondary-50 dark:bg-secondary-900 rounded-lg transition-all duration-500 ${
                  isVisible 
                    ? 'translate-x-0 opacity-100' 
                    : index % 2 === 0 ? 'translate-x-10 opacity-0' : '-translate-x-10 opacity-0'
                }`}
                style={{ transitionDelay: `${(index + 4) * 100}ms` }}
              >
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <div className="mr-2 text-primary-600 dark:text-accent-400">
                      {skill.icon}
                    </div>
                    <span className="font-medium">{skill.name}</span>
                  </div>
                  <span className="text-sm font-medium text-primary-600 dark:text-accent-400">
                    {skill.percentage}%
                  </span>
                </div>
                
                <div className="w-full bg-secondary-200 dark:bg-secondary-700 rounded-full h-2.5">
                  <div 
                    className="bg-gradient-to-r from-primary-500 to-primary-600 dark:from-accent-500 dark:to-accent-400 h-2.5 rounded-full"
                    style={{ 
                      width: isVisible ? `${skill.percentage}%` : '0%',
                      transition: 'width 1s ease-in-out',
                      transitionDelay: `${(index + 4) * 100 + 300}ms`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;