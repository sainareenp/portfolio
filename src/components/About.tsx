import React from 'react';
import { GraduationCap, MapPin, Award } from 'lucide-react';
import img1 from "../../R5C_6743.jpg";
const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-secondary-50 dark:bg-secondary-900">
      <div className="section-container">
        <h2 className="section-title mb-16">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">    
            <p className="text-lg text-secondary-700 dark:text-secondary-300 leading-relaxed text-justify">
              I am an emerging data professional with over 4 years of experience in data analytics, business intelligence, and IT operations across public, academic, and business environments. I have a strong foundation in SQL, Python, Power BI, Tableau, and data workflows, and I am currently pursuing a Master’s in Information Science at the University at Albany, SUNY, with a focus on Information Management and Technology.
            </p>
            
            <p className="text-lg text-secondary-700 dark:text-secondary-300 leading-relaxed text-justify">
              My background includes supporting public sector data operations at NYS ITS, contributing to immersive technology research with user-centered design components, and managing data-driven business operations. I am passionate about using data and technology to inform decisions, improve systems, and deliver meaningful, user-centered outcomes.
            </p>
            
 
              
              
          </div>
          
          <div className="relative rounded-lg overflow-hidden h-full min-h-[400px]">
<div className="absolute inset-0 bg-black/10 z-10"></div>
           <div className="absolute inset-0 flex items-center justify-center text-white text-5xl font-bold">
                <img src={img1} style={{height:"100%", objectFit: "cover"}}  />
              </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary-950/80 to-transparent p-6 z-20">
              <p className="text-white text-lg font-medium">
                "Creating impactful solutions through data-driven insights and innovative technology."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;