import React from 'react';
import { Link } from 'wouter';

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background p-6">
      <div className="max-w-2xl w-full brutal-border bg-card p-12 text-center brutal-shadow flex flex-col items-center gap-8">
        <h1 className="text-8xl md:text-[120px] font-black text-secondary">
          404
        </h1>
        <div className="bg-foreground h-4 w-full brutal-border"></div>
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
          PAGE NOT FOUND
        </h2>
        <p className="text-xl font-mono font-bold bg-muted p-4 brutal-border">
          ERR_BAD_URL
        </p>
        <Link 
          href="/" 
          className="font-mono text-2xl font-bold bg-primary text-foreground brutal-border px-8 py-4 hover:bg-secondary hover:text-background transition-colors duration-0 brutal-shadow mt-4"
        >
          RETURN HOME
        </Link>
      </div>
    </div>
  );
}