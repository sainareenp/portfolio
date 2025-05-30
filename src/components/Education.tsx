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
      id="education-certifications"
      className="py-16 bg-white dark:bg-secondary-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2  className="section-title mb-16">
          Education & Certifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* -------- Education Section -------- */}
          <div className="space-y-10">
            <div className="flex items-center gap-3 text-primary-700 dark:text-primary-300">
              <GraduationCap size={30} />
              <h3 className="text-xxl font-semibold">Education</h3>
            </div>

            {/* Master’s Degree */}
            <div>
              <h4 className="text-lg font-medium text-primary-700 dark:text-primary-300">
                Master's in Information Science/Studies
              </h4>
              <p className="text-sm text-secondary-600 dark:text-secondary-400 mt-1 flex items-center gap-2">
                <MapPin size={14} /> University at Albany, SUNY — Albany, NY
              </p>
              <p className="text-sm text-secondary-600 dark:text-secondary-400 mt-1 flex items-center gap-2">
                <Calendar size={14} /> January 2024 – December 2025 (Expected)
              </p>
              <ul className="list-disc list-inside text-sm text-secondary-600 dark:text-secondary-400 mt-3 space-y-1">
                <li>Specialization: Information Management & Technology</li>
                <li>Relevant Coursework: Data Analytics, Database Systems, Architecture</li>
                <li>Tools: Python, SQL, Power BI, Tableau, Unity</li>
              </ul>
            </div>

            {/* Bachelor’s Degree */}
            <div>
              <h4 className="text-lg font-medium text-primary-700 dark:text-primary-300">
                B.Tech in Mechanical Engineering
              </h4>
              <p className="text-sm text-secondary-600 dark:text-secondary-400 mt-1 flex items-center gap-2">
                <MapPin size={14} /> VNR Vignana Jyothi Institute of Technology — Hyderabad, India
              </p>
              <p className="text-sm text-secondary-600 dark:text-secondary-400 mt-1 flex items-center gap-2">
                <Calendar size={14} /> July 2018 – June 2022
              </p>
              <ul className="list-disc list-inside text-sm text-secondary-600 dark:text-secondary-400 mt-3 space-y-1">
                <li>Focus: Mechanical Design, Robotics, Energy Systems</li>
                <li>Capstone: Electric Solar Vehicle Design</li>
                <li>Tools: CATIA, AutoCAD, Python</li>
              </ul>
            </div>
          </div>

          {/* -------- Certifications Section -------- */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-primary-700 dark:text-primary-300">
              <Award size={30} />
              <h3 className="text-xxl font-semibold">Certifications</h3>
            </div>

            <div className="bg-primary-700 dark:bg-secondary-800 p-6 rounded-lg shadow-sm space-y-6">
              {/* Certificate 1 */}
              <div>
                <h4 className="text-lg font-bold text-white dark:text-primary-300" style={{ display: 'flex', alignItems: 'center' }}>
                  <Award className="mr-2 " size={18} />
                 Python fo Machine learning & Data Science Masterclass
                </h4>
              
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary-100 mx-7 dark:text-primary-400 flex items-center gap-1 mt-1 hover:underline"
                >
                  <ExternalLink size={14} /> View Certificate
                </a>
              </div>

              {/* Certificate 2 */}
             <div>
                <h4 className="text-lg font-bold text-white dark:text-primary-300" style={{ display: 'flex', alignItems: 'center' }}>
                  <Award className="mr-2 " size={18} />
                 AI For Everyone
                </h4>
              
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary-100 mx-7 dark:text-primary-400 flex items-center gap-1 mt-1 hover:underline"
                >
                  <ExternalLink size={14} /> View Certificate
                </a>
              </div>

              {/* Certificate 3 */}
              <div>
                <h4 className="text-lg font-bold text-white dark:text-primary-300" style={{ display: 'flex', alignItems: 'center' }}>
                  <Award className="mr-2 " size={18} />
                 Programming for Everybody (Getting started with Python)
                </h4>
              
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary-100 mx-7 dark:text-primary-400 flex items-center gap-1 mt-1 hover:underline"
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
