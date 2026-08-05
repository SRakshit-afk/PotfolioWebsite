import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'wouter';
import { X, ArrowLeft, ArrowRight } from 'lucide-react';
import { link } from 'node:fs';

// Photography categories and shots.
// The `image` field is just a FILENAME — drop a matching file into
// src/assets/photography/ and it is picked up automatically (see
// `imageMap` below). No file yet? It falls back to the color placeholder.
const categories = ['ALL', 'STREET', 'PORTRAIT', 'LANDSCAPE', 'ABSTRACT & ARCHITECTURE'];

const photos = [
  { id: 1, category: 'STREET',    title: 'Two Motions',         location: 'Kolkata, India',   year: '2025', aspect: 'tall',   image: 'Two Motions.webp' },
  { id: 2, category: 'STREET',    title: 'Maa Durga',           location: 'Kolkata, India',  year: '2025', aspect: 'tall',   image: 'singles-2.webp' },
  { id: 3, category: 'PORTRAIT', title: 'The Lines of Light',      location: 'Kolkata, India',   year: '2025', aspect: 'square',   image: 'singles-3.webp' },
  { id: 4, category: 'STREET',  title: 'The Creator',        location: 'Durgapur, India',            year: '2025', aspect: 'tall', image: 'singles-4.webp' },
  { id: 5, category: 'STREET',    title: 'Mesmerized in Devotion',      location: 'Benaras, India',   year: '2025', aspect: 'wide',   image: 'singles-5.webp' },
  { id: 6, category: 'STREET',  title: 'Fierce Racing',     location: 'Canning, India',  year: '2025', aspect: 'tall',   image: 'singles-6.webp' },
  { id: 7, category: 'ABSTRACT & ARCHITECTURE',  title: 'Walls of Devotion',    location: 'Kolkata, India',            year: '2025', aspect: 'square', image: 'singles-7.webp' },
  { id: 8, category: 'LANDSCAPE', title: 'Sunset at the Mountains',  location: 'Dhanaulti, Uttarakhand, India',   year: '2025', aspect: 'wide',   image: 'singles-8.webp' },
];

// Auto-import every image dropped into src/assets/photography/, keyed by filename.
// Supports jpg/jpeg/png/webp — just match the `image` filename above to your file.
const imageFiles = import.meta.glob('../assets/photography/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

const imageMap: Record<string, string> = {};
for (const path in imageFiles) {
  const filename = path.split('/').pop()!;
  imageMap[filename] = imageFiles[path];
}

// Brutalist placeholder colors keyed by category
const placeholderColors: Record<string, string> = {
  STREET:    '#1a1a1a',
  PORTRAIT:  '#2d2d2d',
  LANDSCAPE: '#0d0d0d',
  ABSTRACT:  '#1f1f1f',
};

const aspectClasses: Record<string, string> = {
  tall:   'row-span-2',
  wide:   'col-span-2',
  square: '',
};

export default function Photography() {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeCategory === 'ALL'
    ? photos
    : photos.filter(p => p.category === activeCategory);

  const openLightbox = (idx: number) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () => setLightboxIndex(i => (i !== null ? (i - 1 + filtered.length) % filtered.length : null));
  const next = () => setLightboxIndex(i => (i !== null ? (i + 1) % filtered.length : null));

  const currentPhoto = lightboxIndex !== null ? filtered[lightboxIndex] : null;

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* ── Header ───────────────────────────────────────── */}
      <header className="brutal-border-b px-4 md:px-12 py-4 md:py-6 flex items-center justify-between gap-2 sticky top-0 bg-background z-40 overflow-hidden">
        <Link
          href="/"
          className="font-mono font-bold text-xs md:text-sm uppercase tracking-widest brutal-border px-2 md:px-3 py-2 hover:bg-primary hover:text-primary-foreground transition-colors duration-0 flex items-center gap-1 md:gap-2 shrink-0"
        >
          <ArrowLeft size={12} strokeWidth={3} />
          <span className="hidden sm:inline">BACK_TO_PORTFOLIO</span>
          <span className="sm:hidden">BACK</span>
        </Link>
        <h1 className="font-mono font-black text-sm md:text-2xl uppercase tracking-tighter truncate px-2">
          SRIJIT<span className="text-primary">.</span>PHOTOGRAPHY
        </h1>
        <a
          href="https://www.instagram.com/ek.engineer_/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono font-bold text-xs md:text-sm uppercase tracking-widest brutal-border px-2 md:px-3 py-2 hover:bg-foreground hover:text-background transition-colors duration-0 shrink-0"
        >
          <span className="hidden sm:inline">@EK.ENGINEER_</span>
          <span className="sm:hidden">IG</span>
        </a>
      </header>

      {/* ── Hero tagline ─────────────────────────────────── */}
      <section className="brutal-border-b px-6 md:px-12 py-16 md:py-24 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <div className="font-mono text-xs uppercase tracking-widest text-foreground/50 mb-6">
            // SIDE_PROJECT — PHOTOGRAPHY
          </div>
          <h2 className="text-6xl md:text-[10vw] font-black uppercase leading-none tracking-tighter mb-6">
            LIGHT<br />
            <span className="text-primary">& SHADOW</span>
          </h2>
          <p className="font-mono text-base md:text-lg max-w-xl text-foreground/70 leading-relaxed">
            Street, portrait, and landscape photography from Kolkata and beyond.
            A developer's eye trained on composition, geometry, and the quiet drama
            of everyday light.
          </p>
        </motion.div>
        {/* Decorative block */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-primary/10 border-l-4 border-foreground hidden lg:block" />
        <div className="absolute right-12 top-12 font-mono font-black text-primary text-9xl opacity-20 select-none pointer-events-none hidden md:block">
          f/
        </div>
      </section>

      {/* ── Filter bar ───────────────────────────────────── */}
      <div className="brutal-border-b px-6 md:px-12 py-4 flex items-center gap-2 flex-wrap bg-background sticky top-[73px] z-30">
        <span className="font-mono text-xs text-foreground/40 mr-2 uppercase tracking-widest">FILTER:</span>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`font-mono font-bold text-sm uppercase tracking-tight px-4 py-2 brutal-border transition-colors duration-0
              ${activeCategory === cat
                ? 'bg-foreground text-background'
                : 'hover:bg-primary hover:text-primary-foreground'
              }`}
          >
            {cat}
          </button>
        ))}
        <span className="ml-auto font-mono text-xs text-foreground/40">
          {filtered.length} FRAMES
        </span>
      </div>

      {/* ── Masonry-style grid ───────────────────────────── */}
      <section className="p-4 md:p-8">
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[220px] gap-3"
        >
          <AnimatePresence>
            {filtered.map((photo, idx) => (
              <motion.div
                key={photo.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.2 }}
                className={`brutal-border group cursor-pointer relative overflow-hidden ${aspectClasses[photo.aspect] ?? ''}`}
                onClick={() => openLightbox(idx)}
              >
                {/* Real photo if present in src/assets/photography/, else color placeholder */}
                {imageMap[photo.image] ? (
                  <img
                    src={imageMap[photo.image]}
                    alt={photo.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : (
                  <div
                    className="absolute inset-0 w-full h-full"
                    style={{ backgroundColor: placeholderColors[photo.category] }}
                  />
                )}
                {/* Grid overlay decoration */}
                <div className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: 'repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, #fff 0px, #fff 1px, transparent 1px, transparent 40px)',
                  }}
                />
                {/* Category badge */}
                <div className="absolute top-3 left-3 font-mono text-xs font-bold px-2 py-1 bg-primary text-primary-foreground brutal-border z-10">
                  {photo.category}
                </div>
                {/* Number */}
                <div className="absolute top-3 right-3 font-mono text-xs font-bold text-white/30 z-10">
                  {String(photo.id).padStart(2, '0')}
                </div>
                {/* Placeholder center text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-mono text-white/10 text-4xl font-black select-none">
                    IMG
                  </span>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-90 transition-opacity duration-0 flex flex-col justify-end p-4 z-20">
                  <div className="font-black text-foreground text-lg uppercase leading-tight">
                    {photo.title}
                  </div>
                  <div className="font-mono text-xs text-foreground/70 mt-1">
                    {photo.location} — {photo.year}
                  </div>
                  <div className="mt-3 font-mono text-xs font-bold underline">
                    → VIEW
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </section>

      {/* ── Photo Series ─────────────────────────────────── */}
      <section className="brutal-border-t px-6 md:px-12 py-16">
        <div className="flex items-center gap-6 mb-12">
          <div className="font-mono text-xs uppercase tracking-widest text-foreground/40">02</div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">SERIES</h2>
          <div className="h-1 flex-grow bg-foreground" />
        </div>

        <div className="flex flex-col gap-0">
          {[
            {
              index: '01',
              title: 'Monochrome Benaras',
              subtitle: 'Street',
              year: '2025',
              count: 6,
              description: 'बनारस... रंग एक, एहसास अनेक। Benaras... one color, countless feelings. Kashi does not need a spectrum to be beautiful. It only needs the light that has touched its stones for centuries. Here is Benaras, rendered in its most raw and honest form.',
              accent: true,
              cover: 'singles-2.webp',
              link: 'https://www.instagram.com/p/DVGwPiHDOb6/?img_index=1',
            },
            
          ].map((series) => (
            <motion.div
              key={series.index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.3 }}
              className={`brutal-border group cursor-pointer flex flex-col md:flex-row items-stretch transition-colors duration-0
                ${series.accent
                  ? 'bg-primary hover:bg-foreground hover:text-background'
                  : 'bg-background hover:bg-primary'
                }`}
            >
              {/* Index + title block */}
              <div className="md:w-2/3 p-8 md:p-10 flex flex-col justify-between border-b-4 md:border-b-0 md:border-r-4 border-foreground">
                <div>
                  <div className="font-mono text-xs uppercase tracking-widest text-foreground/40 mb-4 group-hover:text-inherit">
                    {series.index} — {series.subtitle}
                  </div>
                  <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-6">
                    {series.title}
                  </h3>
                  <p className="font-mono text-sm md:text-base leading-relaxed max-w-lg opacity-70 group-hover:opacity-90">
                    {series.description}
                  </p>
                </div>
                  <a
                    href={series.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.stopPropagation()}
                  >
                    → VIEW SERIES
                  </a>
              </div>

              {/* Stats block */}
              <div className="md:w-1/3 p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <div className="font-mono text-xs uppercase tracking-widest opacity-40 mb-2">FRAMES</div>
                  <div className="text-7xl md:text-8xl font-black leading-none">{series.count}</div>
                </div>
                <div>
                  <div className="font-mono text-xs uppercase tracking-widest opacity-40 mb-1">YEAR</div>
                  <div className="text-2xl font-black font-mono">{series.year}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Lightbox ─────────────────────────────────────── */}
      <AnimatePresence>
        {lightboxIndex !== null && currentPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-foreground/95 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative max-w-3xl w-full brutal-border bg-background"
              onClick={e => e.stopPropagation()}
            >
              {/* Real photo if present in src/assets/photography/, else color placeholder */}
              {imageMap[currentPhoto.image] ? (
                <img
                  src={imageMap[currentPhoto.image]}
                  alt={currentPhoto.title}
                  className="w-full h-[60vh] object-contain"
                />
              ) : (
                <div
                  className="w-full h-[60vh] flex items-center justify-center"
                  style={{ backgroundColor: placeholderColors[currentPhoto.category] }}
                >
                  <span className="font-mono text-white/10 text-6xl font-black select-none">
                    {String(currentPhoto.id).padStart(2, '0')}
                  </span>
                </div>
              )}

              {/* Caption bar */}
              <div className="p-6 brutal-border-b flex items-end justify-between">
                <div>
                  <div className="font-black text-2xl uppercase">{currentPhoto.title}</div>
                  <div className="font-mono text-sm text-foreground/60 mt-1">
                    {currentPhoto.location} — {currentPhoto.year}
                  </div>
                </div>
                <div className="font-mono text-xs px-3 py-1 brutal-border bg-primary">
                  {currentPhoto.category}
                </div>
              </div>

              {/* Navigation */}
              <div className="flex">
                <button
                  onClick={prev}
                  className="flex-1 font-mono font-bold text-sm uppercase py-4 brutal-border hover:bg-foreground hover:text-background transition-colors duration-0 flex items-center justify-center gap-2"
                >
                  <ArrowLeft size={14} strokeWidth={3} /> PREV
                </button>
                <button
                  onClick={closeLightbox}
                  className="font-mono font-bold text-sm uppercase px-6 py-4 brutal-border hover:bg-secondary hover:text-background transition-colors duration-0 flex items-center gap-2"
                >
                  <X size={14} strokeWidth={3} /> CLOSE
                </button>
                <button
                  onClick={next}
                  className="flex-1 font-mono font-bold text-sm uppercase py-4 brutal-border hover:bg-foreground hover:text-background transition-colors duration-0 flex items-center justify-center gap-2"
                >
                  NEXT <ArrowRight size={14} strokeWidth={3} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Footer ───────────────────────────────────────── */}
      <footer className="brutal-border-t px-6 md:px-12 py-8 font-mono text-xs text-foreground/40 flex items-center justify-between">
        <span>SRIJIT RAKSHIT — PHOTOGRAPHY</span>
        <a
          href="mailto:srijitrakshit@gmail.com"
          className="hover:text-foreground transition-colors duration-0 uppercase tracking-widest"
        >
          srijitrakshit@gmail.com
        </a>
      </footer>
    </div>
  );
}
