import React from 'react';
import {
  Code, Database, Terminal, Cpu, BarChart, Layers, Link as Line, GitBranch
} from 'lucide-react';

import {
  SiPython, SiHtml5, SiCss3, SiMysql, SiJavascript,
  SiPowers, SiTableau, SiAutodesk, SiGit, SiGithub, SiUnity
} from 'react-icons/si';
import { FaProjectDiagram, FaUserCog, FaTasks, FaLayerGroup, FaTools } from 'react-icons/fa';

// DATA: All skills and categories
const skillCategories = [
  {
    name: 'Programming Languages',
    icon: <Code className="h-6 w-6 text-primary-600" />,
    skills: [
      { name: 'Python', icon: <SiPython className="h-5 w-5 text-yellow-400" /> },
      { name: 'SQL', icon: <Database className="h-5 w-5 text-brown-700" /> },
      { name: 'HTML', icon: <SiHtml5 className="h-5 w-5 text-orange-500" /> },
      { name: 'CSS', icon: <SiCss3 className="h-5 w-5 text-blue-500" /> },
      { name: 'JavaScript', icon: <SiJavascript className="h-5 w-5 text-yellow-300" /> },
    ]
  },
  {
    name: 'Data Skills',
    icon: <Database className="h-6 w-6 text-primary-600" />,
    skills: [
      { name: 'Data Modelling', icon: <FaLayerGroup className="h-5 w-5 text-blue-400" /> },
      { name: 'ETL Processes', icon: <FaTasks className="h-5 w-5 text-green-500" /> },
      { name: 'Database Management', icon: <Database className="h-5 w-5 text-purple-500" /> },
      { name: 'Data Quality Validation', icon: <FaUserCog className="h-5 w-5 text-blue-500" /> },
      { name: 'Data Governance Support', icon: <FaProjectDiagram className="h-5 w-5 text-indigo-500" /> }
    ]
  },
  {
    name: 'Tools & Databases',
    icon: <Terminal className="h-6 w-6 text-primary-600" />,
    skills: [
      { name: 'Power BI', icon: <SiPowers className="h-5 w-5 text-yellow-500" /> },
      { name: 'Tableau', icon: <SiTableau className="h-5 w-5 text-blue-500" /> },
      { name: 'MySQL', icon: <SiMysql className="h-5 w-5 text-blue-700" /> },
      { name: 'Microsoft Office 365', icon: <FaTools className="h-5 w-5 text-orange-500" /> },
      { name: 'Git', icon: <SiGit className="h-5 w-5 text-red-500" /> },
      { name: 'GitHub', icon: <SiGithub className="h-5 w-5 text-gray-900" /> },
      { name: 'IT Service Management (ITSM)', icon: <FaTools className="h-5 w-5 text-gray-500" /> },
      { name: 'AutoCAD', icon: <SiAutodesk className="h-5 w-5 text-blue-500" /> },
      { name: 'CATIA', icon: <SiAutodesk className="h-5 w-5 text-blue-500" /> },
      { name: 'Unity', icon: <SiUnity className="h-5 w-5 text-gray-900" /> },
      { name: 'Meta Quest Developer Hub', icon: <FaTools className="h-5 w-5 text-indigo-500" /> }
    ]
  },
  {
    name: 'Enterprise Systems & Platforms',
    icon: <GitBranch className="h-6 w-6 text-primary-600" />,
    skills: [
      { name: 'CRM Systems', icon: <FaUserCog className="h-5 w-5 text-blue-500" /> },
      { name: 'POS Systems', icon: <FaTools className="h-5 w-5 text-gray-500" /> },
      { name: 'Inventory Management Systems', icon: <FaLayerGroup className="h-5 w-5 text-indigo-400" /> },
      { name: 'Process Automation Tools', icon: <FaTasks className="h-5 w-5 text-green-600" /> },
      { name: 'Project Management Platforms', icon: <FaProjectDiagram className="h-5 w-5 text-purple-500" /> }
    ]
  }
];

// ✅ Modified Proficiency array with icons stored as component references
const proficiencies = [
  { name: 'Programming', percentage: 85, icon: Cpu },
  { name: 'Data Analysis', percentage: 90, icon: BarChart },
  { name: 'Project Management', percentage: 80, icon: Layers },
  { name: 'UI/UX Design', percentage: 75, icon: Line },
  { name: 'Database Management', percentage: 85, icon: Database },
  { name: 'Software Development', percentage: 80, icon: Code },
]

// Main reusable component
const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="section-title mb-10 text-4xl font-bold text-center">Skills & Expertise</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          {skillCategories.map((category) => (
            <div key={category.name} className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md">
              <SkillCategoryBlock category={category} />
            </div>
          ))}
        </div>

        <h3 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
          Technical Proficiency
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {proficiencies.map((skill) => (
            <ProficiencyBlock key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Skill Category Block
type Skill = {
  name: string;
  icon: React.ReactNode;
};

type SkillCategory = {
  name: string;
  icon: React.ReactNode;
  skills: Skill[];
};

const SkillCategoryBlock = ({ category }: { category: SkillCategory }) => (
  <div>
    <div className="flex items-center mb-4">
      {category.icon}
      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white ml-3">{category.name}</h3>
    </div>
    <ul className="grid grid-cols-2 gap-3 text-gray-700 dark:text-gray-300 text-base">
      {category.skills.map((skill) => (
        <li key={skill.name} className="flex items-center gap-3">
          {skill.icon} {skill.name}
        </li>
      ))}
    </ul>
  </div>
);

// ✅ Proficiency Block updated fully for dynamic dark/light mode
type Proficiency = {
  name: string;
  percentage: number;
  icon: any;
};

const ProficiencyBlock = ({ skill }: { skill: Proficiency }) => {
  const Icon = skill.icon;

  return (
    <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <div className="text-primary-600 dark:text-accent-400">
            <Icon className="h-5 w-5" />
          </div>
          <span className="font-medium">{skill.name}</span>
        </div>
        <span className="text-sm font-medium text-primary-600 dark:text-accent-400">
          {skill.percentage}%
        </span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div
          className="bg-gradient-to-r from-primary-500 to-primary-600 dark:from-accent-500 dark:to-accent-400 h-2.5 rounded-full"
          style={{ width: `${skill.percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Skills;
