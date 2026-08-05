import React from 'react';
import { Link, useLocation } from 'wouter';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [location] = useLocation();
  const isHome = location === '/' || location === '';

  const navLinks = [
    { label: 'ABOUT', href: '#about' },
    { label: 'SKILLS', href: '#skills' },
    { label: 'PROJECTS', href: '#projects' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background brutal-border-b flex items-center justify-between px-6 py-4 md:px-12 md:py-6">
      <div className="flex items-center">
        <Link
          href="/"
          className="font-mono font-bold text-xl md:text-2xl tracking-tighter uppercase brutal-border px-3 py-1 bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground transition-colors duration-0"
        >
          SR_
        </Link>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-6">
        {isHome && navLinks.map((link, idx) => (
          <a
            key={link.label}
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
            className="font-mono text-base font-bold tracking-tight hover:bg-foreground hover:text-background px-3 py-1 transition-colors duration-0 border-2 border-transparent hover:border-foreground"
          >
            {`[0${idx + 1}] ${link.label}`}
          </a>
        ))}
        {/* Photography link — always visible, highlighted when active */}
        <Link
          href="/photography"
          className={`font-mono text-base font-bold tracking-tight px-4 py-2 brutal-border transition-colors duration-0
            ${!isHome
              ? 'bg-foreground text-background'
              : 'hover:bg-foreground hover:text-background'
            }`}
        >
          [05] PHOTOGRAPHY
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden brutal-border p-2 bg-background hover:bg-primary transition-colors duration-0"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-background brutal-border-b flex flex-col items-stretch p-6 gap-4 md:hidden">
          {isHome && navLinks.map((link, idx) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="font-mono text-xl font-bold tracking-tight brutal-border p-4 hover:bg-primary transition-colors duration-0"
            >
              {`[0${idx + 1}] ${link.label}`}
            </a>
          ))}
          <Link
            href="/photography"
            onClick={() => setIsOpen(false)}
            className="font-mono text-xl font-bold tracking-tight brutal-border p-4 bg-foreground text-background hover:bg-primary hover:text-foreground transition-colors duration-0"
          >
            [05] PHOTOGRAPHY
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;