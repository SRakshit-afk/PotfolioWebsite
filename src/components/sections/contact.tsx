import React from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';
import { FaGithub as Github, FaInstagram as Instagram, FaLinkedin as Linkedin } from 'react-icons/fa6';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-secondary text-foreground relative overflow-hidden">
      
      {/* Background tape */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-foreground -z-0 skew-y-3 origin-bottom-left"></div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col min-h-[50vh]">
        <div className="flex items-center gap-6 mb-16">
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter">CONTACT_</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-24">
          <div className="lg:w-1/2">
            <h3 className="text-5xl md:text-7xl font-black leading-none mb-8">
              LET'S BUILD <br/>SOMETHING <br/>RAW.
            </h3>
            
            <a 
              href="mailto:srijitrakshit@gmail.com" 
              className="inline-flex items-center gap-4 bg-background text-foreground brutal-border px-8 py-6 text-2xl md:text-4xl font-black hover:bg-primary transition-colors duration-0 brutal-shadow mt-4 break-all"
            >
              srijitrakshit@gmail.com
              <ArrowUpRight size={48} className="hidden md:block" />
            </a>
          </div>

          <div className="lg:w-1/2 flex flex-col gap-6 justify-end font-mono">
            <a 
              href="https://linkedin.com/in/srijit-rakshit" 
              target="_blank" 
              rel="noreferrer"
              className="group flex items-center justify-between bg-background p-6 brutal-border text-2xl font-bold hover:bg-foreground hover:text-background transition-colors duration-0 brutal-shadow"
            >
              <div className="flex items-center gap-4">
                <Linkedin size={32} />
                <span>LINKEDIN</span>
              </div>
              <ArrowUpRight size={32} className="group-hover:rotate-45 transition-transform" />
            </a>
            
            <a 
              href="https://github.com/SRakshit-afk" 
              target="_blank" 
              rel="noreferrer"
              className="group flex items-center justify-between bg-background p-6 brutal-border text-2xl font-bold hover:bg-foreground hover:text-background transition-colors duration-0 brutal-shadow"
            >
              <div className="flex items-center gap-4">
                <Github size={32} />
                <span>GITHUB</span>
              </div>
              <ArrowUpRight size={32} className="group-hover:rotate-45 transition-transform" />
            </a>

            <a 
              href="https://instagram.com/ek.engineer_/" 
              target="_blank" 
              rel="noreferrer"
              className="group flex items-center justify-between bg-background p-6 brutal-border text-2xl font-bold hover:bg-foreground hover:text-background transition-colors duration-0 brutal-shadow"
            >
              <div className="flex items-center gap-4">
                <Instagram size={32} />
                <span>INSTAGRAM</span>
              </div>
              <ArrowUpRight size={32} className="group-hover:rotate-45 transition-transform" />
            </a>
          </div>
        </div>

        <div className="mt-auto pt-12 border-t-8 border-background text-background flex flex-col md:flex-row justify-between items-center font-mono font-bold gap-4 text-xl">
          <p>© {new Date().getFullYear()} SRIJIT RAKSHIT</p>
          <div className="flex items-center gap-4">
            <span className="bg-background text-foreground px-3 py-1 brutal-border">SYS.READY</span>
            <a href="#top" className="hover:underline underline-offset-4 decoration-4">BACK TO TOP ↑</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;