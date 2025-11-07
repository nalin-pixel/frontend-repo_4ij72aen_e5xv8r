export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500 dark:text-slate-400">
        <p>© {new Date().getFullYear()} Igloo Studio. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-slate-700 dark:hover:text-slate-200">Privacy</a>
          <a href="#" className="hover:text-slate-700 dark:hover:text-slate-200">Terms</a>
          <a href="#" className="hover:text-slate-700 dark:hover:text-slate-200">Contact</a>
        </div>
      </div>
    </footer>
  );
}
