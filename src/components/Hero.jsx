import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-cyan-50 via-white to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-950" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Cold-start ideas. Warm, delightful products.
            </h1>
            <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 max-w-2xl">
              We help startups go from napkin sketch to polished product with meticulous design, clean code, and a bias for impact.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 px-6 py-3 text-base font-medium shadow hover:opacity-90 transition">
                Start a project
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a href="#work" className="inline-flex items-center justify-center rounded-full border border-slate-300 dark:border-slate-700 px-6 py-3 text-base font-medium text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800/60 transition">
                See our work
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] w-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-gradient-to-br from-cyan-200/40 via-blue-200/30 to-indigo-200/40 dark:from-cyan-500/10 dark:via-blue-500/10 dark:to-indigo-500/10 p-2">
              <div className="h-full w-full rounded-xl bg-white/70 dark:bg-slate-900/70 backdrop-blur flex items-center justify-center text-slate-500 dark:text-slate-400">
                <span className="text-sm">Showcase placeholder</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
