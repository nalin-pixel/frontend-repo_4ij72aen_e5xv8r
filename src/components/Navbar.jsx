import { useState } from 'react';
import { Menu, X, Snowflake } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 dark:bg-slate-900/70 border-b border-white/30 dark:border-slate-800/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-slate-900 dark:text-white">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 text-white shadow-sm">
              <Snowflake className="h-5 w-5" />
            </span>
            <span className="font-semibold tracking-tight">Igloo Studio</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600 dark:text-slate-300">
            <a href="#features" className="hover:text-slate-900 dark:hover:text-white transition">Features</a>
            <a href="#work" className="hover:text-slate-900 dark:hover:text-white transition">Work</a>
            <a href="#contact" className="hover:text-slate-900 dark:hover:text-white transition">Contact</a>
            <a href="#" className="inline-flex items-center rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 px-4 py-2 text-sm font-medium shadow hover:opacity-90 transition">Get Started</a>
          </nav>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="space-y-1 rounded-lg border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 p-3">
              <a href="#features" className="block rounded-md px-3 py-2 text-slate-700 dark:text-slate-200 hover:bg-slate-100/70 dark:hover:bg-slate-800/70">Features</a>
              <a href="#work" className="block rounded-md px-3 py-2 text-slate-700 dark:text-slate-200 hover:bg-slate-100/70 dark:hover:bg-slate-800/70">Work</a>
              <a href="#contact" className="block rounded-md px-3 py-2 text-slate-700 dark:text-slate-200 hover:bg-slate-100/70 dark:hover:bg-slate-800/70">Contact</a>
              <a href="#" className="block rounded-md px-3 py-2 text-white bg-slate-900 dark:bg-white dark:text-slate-900 text-center font-medium">Get Started</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
