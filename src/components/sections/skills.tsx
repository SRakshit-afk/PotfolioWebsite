import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const coreSkills = [
    "Java", "Python", "C / C++", "Data Structures", "OOP", "DBMS", "Computer Organization", "Computer Networks", "OS", 
  ];
  
  const webTools = [
    "HTML / CSS / JS", "React JS", "Node JS", "Streamlit", "Git & GitHub", "Figma & Wix"
  ];

  return (
    <section id="skills" className="py-24 px-6 md:px-12 brutal-border-b bg-primary relative z-10 overflow-hidden">
      {/* Background massive text */}
      <div className="absolute -left-10 top-10 opacity-20 pointer-events-none select-none">
        <h2 className="text-[20vw] font-black leading-none whitespace-nowrap text-background text-outline">
          TOOLKIT
        </h2>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex items-center gap-6 mb-16 justify-end">
          <div className="h-4 flex-grow bg-foreground hidden md:block"></div>
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-right">SKILLS_</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <div className="bg-foreground text-background py-4 px-6 brutal-border mb-8 inline-block self-start">
              <h3 className="text-3xl font-black uppercase">Languages & Core</h3>
            </div>
            
            <div className="flex flex-wrap gap-4">
              {coreSkills.map((skill, index) => (
                <div 
                  key={index}
                  className="font-mono text-xl md:text-2xl font-bold bg-background text-foreground brutal-border px-6 py-4 hover:bg-secondary hover:text-background transition-colors duration-0 brutal-shadow cursor-default"
                >
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <div className="bg-foreground text-background py-4 px-6 brutal-border mb-8 inline-block self-start">
              <h3 className="text-3xl font-black uppercase">Web & Tools</h3>
            </div>
            
            <div className="flex flex-wrap gap-4">
              {webTools.map((skill, index) => (
                <div 
                  key={index}
                  className="font-mono text-xl md:text-2xl font-bold bg-background text-foreground brutal-border px-6 py-4 hover:bg-foreground hover:text-background transition-colors duration-0 brutal-shadow cursor-default"
                >
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Skills;