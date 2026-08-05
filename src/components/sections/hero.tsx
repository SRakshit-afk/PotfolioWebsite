import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDownRight, Download } from 'lucide-react';
import { FaGithub as Github, FaInstagram as Instagram, FaLinkedin as Linkedin } from 'react-icons/fa6';

const Hero = () => {
  return (
    <section id="top" className="min-h-[100dvh] pt-32 pb-16 px-6 md:px-12 flex flex-col justify-center relative overflow-hidden">
      
      {/* Background brutalist elements */}
      <div className="absolute top-1/4 right-10 md:right-32 w-64 h-64 bg-primary brutal-border z-0 -rotate-6 hidden md:block"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-secondary brutal-border z-0 rotate-12 hidden md:block"></div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <div className="font-mono text-xs sm:text-base md:text-2xl font-bold bg-foreground text-background inline-block px-3 md:px-4 py-2 mb-6 brutal-border border-foreground break-words max-w-full">
              CS UNDERGRAD / FRONTEND DEVELOPER / PHOTOGRAPHER
            </div>
            
            <h1 className="text-[15vw] sm:text-7xl md:text-[120px] lg:text-[160px] font-black leading-[0.85] tracking-tighter uppercase break-words w-full">
              <span className="block hover:text-primary transition-colors duration-0">SRIJIT</span>
              <span className="block hover:text-secondary transition-colors duration-0">RAKSHIT</span>
            </h1>
          </div>
          
          <div className="font-mono text-lg md:text-xl md:text-right font-bold flex flex-col items-start md:items-end gap-2 border-l-4 md:border-l-0 md:border-r-4 border-foreground pl-4 md:pl-0 md:pr-4 py-2">
            <span>JADAVPUR UNIVERSITY</span>
            <span className="bg-primary px-2 brutal-border">2023–2027</span>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 md:mt-24 flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center"
        >
          <div className="flex flex-wrap gap-4 w-full md:w-auto">
            <a 
              href="/SrijitRakshit.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex-1 md:flex-none flex items-center justify-center gap-3 bg-primary text-foreground brutal-border brutal-shadow px-8 py-5 text-xl font-bold font-mono hover:bg-secondary hover:text-secondary-foreground transition-colors duration-0 whitespace-nowrap"
            >
              Open CV
            </a>
            <a 
              href="#contact" 
              className="group flex-1 md:flex-none flex items-center justify-center gap-3 bg-foreground text-background brutal-border brutal-shadow px-8 py-5 text-xl font-bold font-mono hover:bg-background hover:text-foreground transition-colors duration-0 whitespace-nowrap"
            >
              CONTACT ME
              <ArrowDownRight size={24} className="group-hover:rotate-45 transition-transform" />
            </a>
          </div>

          <div className="flex items-center gap-4 mt-6 md:mt-0 w-full md:w-auto border-t-4 md:border-t-0 md:border-l-4 border-foreground pt-6 md:pt-0 md:pl-6">
            <a href="https://linkedin.com/in/srijit-rakshit" target="_blank" rel="noreferrer" className="p-4 bg-background brutal-border hover:bg-primary transition-colors duration-0 brutal-shadow">
              <Linkedin size={32} />
            </a>
            <a href="https://github.com/SRakshit-afk" target="_blank" rel="noreferrer" className="p-4 bg-background brutal-border hover:bg-secondary hover:text-secondary-foreground transition-colors duration-0 brutal-shadow">
              <Github size={32} />
            </a>
            <a href="https://instagram.com/ek.engineer_/" target="_blank" rel="noreferrer" className="p-4 bg-background brutal-border hover:bg-foreground hover:text-background transition-colors duration-0 brutal-shadow">
              <Instagram size={32} />
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 w-full overflow-hidden whitespace-nowrap border-y-4 border-foreground bg-primary py-3 left-0">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className="flex font-mono font-bold text-2xl"
        >
          <span className="mx-4">AVAILABLE FOR HIRE</span>
          <span className="mx-4">+++</span>
          <span className="mx-4">FRONTEND PROTOTYPING</span>
          <span className="mx-4">+++</span>
          <span className="mx-4">UI/UX DESIGN</span>
          <span className="mx-4">+++</span>
          <span className="mx-4">DATA ANALYST</span>
          <span className="mx-4">+++</span>
          <span className="mx-4">AVAILABLE FOR HIRE</span>
          <span className="mx-4">+++</span>
          <span className="mx-4">FRONTEND PROTOTYPING</span>
          <span className="mx-4">+++</span>
          <span className="mx-4">UI/UX DESIGN</span>
          <span className="mx-4">+++</span>
          <span className="mx-4">DATA ANALYST</span>
          <span className="mx-4">+++</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;