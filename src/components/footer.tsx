import { Instagram } from 'lucide-react';
import { KnightHelmetIcon } from './icons/knight-helmet-icon';

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border/20">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <KnightHelmetIcon className="w-5 h-5 text-accent" />
          <p className="text-sm text-foreground/60">
            © {new Date().getFullYear()} Designer Knight. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://instagram.com/imdesignerknight" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-foreground/60 hover:text-accent transition-colors">
            <Instagram className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}
