import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "JUPC Website",
      desc: "Full-stack website for international photography exhibition 'Montage 2026' managing 1000+ submissions.",
      link: "https://jupconline.in/",
      linkText: "→ VIEW LIVE",
      tags: ["Full-stack", "Web"],
      accent: "bg-primary"
    },
    {
      title: "Habit / Study Tracker",
      desc: "Web-based study tracking tool with streak detection and Matplotlib interactive charts.",
      link: "https://github.com/SRakshit-afk/Study-Tracker",
      linkText: "→ GITHUB",
      tags: ["Python", "Web", "Data"],
      accent: "bg-secondary"
    },
    {
      title: "2D Java Adventure Game",
      desc: "Tile-based adventure game utilizing OOP, collision detection, and item collection.",
      link: "https://github.com/SRakshit-afk/Adventures-of-Pirate-Srijit",
      linkText: "→ GITHUB",
      tags: ["Java", "OOP", "Game"],
      accent: "bg-muted"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 md:px-12 brutal-border-b bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-6 mb-16">
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter">WORK_</h2>
          <div className="h-4 flex-grow bg-foreground"></div>
        </div>

        <div className="grid grid-cols-1 gap-16">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`relative flex flex-col lg:flex-row brutal-border bg-background group`}
            >
              {/* Massive Number Index */}
              <div className={`lg:w-32 flex-shrink-0 border-b-4 lg:border-b-0 lg:border-r-4 border-foreground flex items-center justify-center p-8 ${project.accent} transition-colors duration-0 group-hover:bg-foreground group-hover:text-background`}>
                <span className="text-6xl md:text-8xl font-black font-mono">
                  0{idx + 1}
                </span>
              </div>

              {/* Content */}
              <div className="flex-grow p-8 md:p-12 flex flex-col justify-between gap-8">
                <div>
                  <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 group-hover:underline decoration-8 underline-offset-8">
                    {project.title}
                  </h3>
                  <p className="text-xl md:text-2xl font-medium max-w-3xl leading-relaxed">
                    {project.desc}
                  </p>
                </div>
                
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pt-8 border-t-4 border-foreground">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map(tag => (
                      <span key={tag} className="font-mono font-bold px-3 py-1 bg-muted brutal-border uppercase text-sm md:text-base group-hover:bg-primary transition-colors duration-0">
                        [{tag}]
                      </span>
                    ))}
                  </div>
                  
                  {/* Link */}
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="font-mono text-xl md:text-2xl font-bold bg-foreground text-background px-6 py-3 brutal-border hover:bg-secondary hover:text-background transition-colors duration-0 inline-flex items-center gap-2 whitespace-nowrap brutal-shadow"
                  >
                    {project.linkText}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;