import {
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  ExternalLink,
  AwardIcon} from 'lucide-react';
import React from 'react';

export default function Education() {
  return (
    <section
      id="Education"
        aria-label="Academic Background"
      className="py-16 bg-white dark:bg-secondary-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2  className="section-title mb-16">
          Academic Background
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* -------- Education Section -------- */}
          <div className="space-y-10">
            <div className="flex items-center gap-3 text-primary-700 dark:text-accent-400">
              <GraduationCap size={30} />
              <h3 className="text-xxl font-bold">Education</h3>
            </div>

            {/* Master’s Degree */}
            <div className="card p-6 bg-secondary-50 dark:bg-secondary-800 rounded-lg shadow-sm">
              <h4 className="text-lg font-bold text-primary-700 dark:text-accent-400">
                Master of Science in Information Science/Studies
              </h4>
              <p className="text-sm font-bold text-secondary-700 dark:text-secondary-200 mt-1 flex items-center gap-2">
                <MapPin size={14} /> <b>University at Albany, SUNY - Albany, New York </b> 
              </p>
              <p className="text-sm text-secondary-600 dark:text-secondary-400 mt-1 flex items-center gap-2">
                <Calendar size={14} /> January 2024 – December 2025 (Expected)
              </p>
              <ul className="list-disc list-inside text-sm text-secondary-600 dark:text-secondary-400 mt-3 space-y-1">
                {/* <li>Specialization: Information Management & Technology</li> */}
             
  <span className="text-secondary-800 font-bold dark:text-amber-200">Relevant Coursework:</span>
  <div className="flex flex-wrap gap-2 mt-2">
    
    <span className="badge dark:bg-teal-600 dark:text-white text-xs py-1">
      Data Analytics
    </span>
    
    <span className="badge dark:bg-teal-600 dark:text-white text-xs py-1">
      Database Systems
    </span>
    
    <span className="badge dark:bg-teal-600 dark:text-white text-xs py-1">
      Information Systems
    </span>

     <span className="badge dark:bg-teal-600 dark:text-white text-xs py-1">
      Information Storage & Retrieval
    </span>

    <span className="badge dark:bg-teal-600 dark:text-white text-xs py-1">
    Research Methods
    </span>
  </div>


              </ul>
            </div>

            {/* Bachelor’s Degree */}
            <div className="card p-6 bg-secondary-50 dark:bg-secondary-800 rounded-lg shadow-sm">
              <h4 className="text-lg font-medium text-primary-700 dark:text-accent-400">
                Bachelor of Technology in Mechanical Engineering
              </h4>
              <p className="text-sm text-secondary-700 dark:text-secondary-200 mt-1 flex items-center gap-2">
                <MapPin size={14} /> <b>VNR Vignana Jyothi Institute of Technology - Hyderabad, India </b>
              </p>
              <p className="text-sm text-secondary-600 dark:text-secondary-400 mt-1 flex items-center gap-2">
                <Calendar size={14} /> June 2018 – July 2022
              </p>
              <ul className="list-disc list-inside text-sm text-secondary-600 dark:text-secondary-400 mt-3 space-y-1"></ul>
            <span className="text-secondary-800 font-bold dark:text-amber-200">Relevant Coursework:</span>
  <div className="flex flex-wrap gap-2 mt-2">
    
    <span className="badge dark:bg-teal-600 dark:text-white text-xs py-1">
    Applied Mathematics
    </span>
    
    <span className="badge dark:bg-teal-600 dark:text-white text-xs py-1">
    Operational Research    
    </span>
    
    <span className="badge dark:bg-teal-600 dark:text-white text-xs py-1">
    Instrumetaion & Control Systems
    </span>

    <span className="badge dark:bg-teal-600 dark:text-white text-xs py-1">
    Manufacturing Processes
    </span>

    <span className="badge dark:bg-teal-600 dark:text-white text-xs py-1">
    Industrial Engineering & Management
    </span>
    </div>
            </div>
          </div>

          {/* -------- Certifications Section -------- */}
          <div className="space-y-11">
            <div className="flex items-center gap-3 text-primary-700 dark:text-accent-400">
              <Award size={30} />
              <h3 className="text-xxl font-bold">Certifications</h3>
            </div>

            <div className="bg-primary-700 dark:bg-accent-700 p-4 rounded-lg shadow-sm space-y-6">
              {/* Certificate 1 */}
              <div>
                <h4 className="text-lg font-bold text-white dark:text-white" style={{ display: 'flex', alignItems: 'center' }}>
                  <Award className="mr-2 " size={18} />
                 Excel: Managing and Analyzing Data
                </h4>
              
                <a
                  href="https://drive.google.com/file/d/1boOpb8gFL_9IH1HJoMHecaz4180BEjpF/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-sky-200 mx-7 font-semibold dark:text-amber-200 flex items-center gap-1 mt-1 hover:underline"
                >
                  <ExternalLink size={14} /> View Certificate
                </a>
              </div>
              
              {/* Certificate 2 */}
              <div>
                <h4 className="text-lg font-bold text-white dark:text-white" style={{ display: 'flex', alignItems: 'center' }}>
                  <Award className="mr-2 " size={18} />
                 Python fo Machine learning & Data Science Masterclass
                </h4>
              
                <a
                  href="https://drive.google.com/file/d/1FmTGffCF5BWqtQjRT5fyPuBT5wnJ-rug/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-sky-200 mx-7 font-semibold dark:text-amber-200 flex items-center gap-1 mt-1 hover:underline"
                >
                  <ExternalLink size={14} /> View Certificate
                </a>
              </div>

              {/* Certificate 3 */}
             <div>
                <h4 className="text-lg font-bold text-white dark:text-white" style={{ display: 'flex', alignItems: 'center' }}>
                  <Award className="mr-2 " size={18} />
                 AI For Everyone
                </h4>
              
                <a
                  href="https://drive.google.com/file/d/1eCPNJpc8hJYBSLNjuWboBDVXtT9qhAJO/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-sky-200 mx-7 dark:text-amber-200 flex items-center gap-1 mt-1 hover:underline"
                >
                  <ExternalLink size={14} /> View Certificate
                </a>
              </div>

              {/* Certificate 4 */}
              <div>
                <h4 className="text-lg font-bold text-white dark:text-white" style={{ display: 'flex', alignItems: 'center' }}>
                  <Award className="mr-2 " size={18} />
                 Programming for Everybody (Getting started with Python)
                </h4>
              
                <a
                  href="https://drive.google.com/file/d/1gVeQVZTV_RASsEkcWaOkhGzFYXYIlJiM/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-sky-200 mx-7 dark:text-amber-200 flex items-center gap-1 mt-1 hover:underline"
                >
                  <ExternalLink size={14} /> View Certificate
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
