import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Navbar />

      <main>
        <Hero />
        <Features />

        {/* CTA section */}
        <section id="contact" className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-indigo-500/10 p-8 sm:p-12">
              <div className="max-w-2xl">
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Build with a team that sweats the details
                </h3>
                <p className="mt-3 text-slate-600 dark:text-slate-300">
                  Tell us about your product and we’ll shape a path to launch — from discovery to design to production-ready code.
                </p>
                <form className="mt-8 grid gap-3 sm:grid-cols-2">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 px-4 py-3 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 px-4 py-3 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                  <textarea
                    name="message"
                    placeholder="Tell us about your project"
                    rows={4}
                    className="sm:col-span-2 w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 px-4 py-3 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                  <div className="sm:col-span-2">
                    <button type="button" className="inline-flex items-center justify-center rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 px-6 py-3 text-base font-medium shadow hover:opacity-90 transition">
                      Request consultation
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
