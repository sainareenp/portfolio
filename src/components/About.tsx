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
            <p className="text-lg text-secondary-700 dark:text-secondary-300 leading-relaxed">
              I'm a graduate student specializing in Information Management and Technology at the 
              University at Albany, SUNY, with a background in Mechanical Engineering. My professional 
              journey spans roles in research, library management, and hospitality operations.
            </p>
            
            <p className="text-lg text-secondary-700 dark:text-secondary-300 leading-relaxed">
              My technical expertise includes programming, data management, and process automation. I'm passionate 
              about leveraging technology to solve complex problems and improve operational efficiency.
            </p>
            
            <div className="flex flex-col space-y-4 mt-6">
              <div className="flex items-start">
                <div className="mt-1 mr-4 p-2 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium">Education</h4>
                  <p className="text-secondary-600 dark:text-secondary-400">
                    MS in Information Science/Studies at University at Albany, SUNY (Expected Dec 2025)
                    <br />
                    BTech in Mechanical Engineering from VNR Vignana Jyothi Institute of Technology
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-4 p-2 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-secondary-600 dark:text-secondary-400">
                    New York, USA
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-4 p-2 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium">Academic Achievement</h4>
                  <p className="text-secondary-600 dark:text-secondary-400">
                    Maintaining a 3.86 GPA in Master's program
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative rounded-lg overflow-hidden h-full min-h-[400px]">
            <div className="absolute inset-0 bg-primary-950/10 dark:bg-primary-950/50 z-10"></div>
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