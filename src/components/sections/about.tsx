import React from 'react';
import { motion } from 'framer-motion';

// Use the assets mapping requested
import profilePic from '@assets/srijit-profile.webp';
import aboutPic from '@assets/srijit-about.webp';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 brutal-border-b bg-background relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-6 mb-16">
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter">ABOUT_</h2>
          <div className="h-4 flex-grow bg-foreground"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-4 relative group">
            <div className="absolute inset-0 bg-primary translate-x-4 translate-y-4 brutal-border -z-10 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-200 ease-out"></div>
            <img 
              src={profilePic} 
              alt="Srijit Rakshit" 
              className="w-full h-auto aspect-[3/4] object-cover brutal-border filter grayscale hover:grayscale-0 transition-all duration-0"
              onError={(e) => {
                // Fallback if image not found
                e.currentTarget.src = "https://via.placeholder.com/600x800.png?text=NO+IMAGE+FOUND";
              }}
            />
            <div className="absolute top-0 right-0 bg-secondary text-background font-mono font-bold px-4 py-2 brutal-border translate-x-4 -translate-y-4 rotate-12">
              HELLO WORLD
            </div>
          </div>

          <div className="lg:col-span-8 flex flex-col justify-between h-full">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-foreground text-background p-8 md:p-12 brutal-border mb-12 relative"
            >
              {/* Decorative tape */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-8 bg-primary opacity-80 rotate-2 mix-blend-difference pointer-events-none"></div>

              <p className="text-xl md:text-3xl font-bold leading-relaxed mb-8">
                "I'm a third-year Computer Science and Engineering undergraduate at Jadavpur University with a strong foundation in Data Structures, Algorithms, and Object-Oriented Programming. 
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-muted font-medium mb-8">
                While my technical expertise is rooted in languages like Java and Python, I specialize in Frontend Development and UI/UX design, bridging the gap between clean code and compelling aesthetics. My experience as a photographer provides me with a unique eye for composition and visual storytelling, allowing me to craft intuitive digital experiences that are as functional as they are beautiful."
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 font-mono font-bold brutal-border">
              {/* Education block */}
              <div className="bg-primary p-8 relative overflow-hidden border-r-4 border-foreground">
                <div className="text-foreground/60 text-xs uppercase tracking-widest mb-6">// EDUCATION</div>
                <div className="text-5xl md:text-6xl font-black uppercase leading-none mb-1 text-foreground">B.E. CS</div>
                <div className="mt-6 border-t-4 border-foreground pt-4">
                  <div className="text-lg uppercase tracking-tight">Jadavpur University</div>
                  <div className="text-sm text-foreground/70 mt-1">Kolkata, India</div>
                </div>
                <div className="absolute bottom-6 right-6 text-right">
                  <div className="text-xs text-foreground/50 uppercase">Batch</div>
                  <div className="text-3xl font-black">2023 - 2027</div>
                </div>
              </div>

              {/* Focus Areas block */}
              <div className="bg-foreground text-background p-8 relative overflow-hidden">
                <div className="text-background/50 text-xs uppercase tracking-widest mb-6">// FOCUS_AREAS</div>
                <div className="flex flex-col gap-3">
                  {["Software\nDev", "Frontend\nPrototyping", "UI/UX\nDesign", "Data Analyst"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="text-primary font-black text-lg">{"→"}</span>
                      <span className="text-base md:text-lg uppercase tracking-tight whitespace-pre-line leading-tight">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="absolute bottom-6 right-6 text-background/10 text-8xl font-black select-none pointer-events-none">
                  ./
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;