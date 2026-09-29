import { Globe } from 'lucide-react';

function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/90">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-center sm:px-6 lg:flex-row lg:text-left lg:px-8">
        <div>
          <p className="text-sm text-slate-400">© 2026 Pruthvi Jagannath Haralayya</p>
          <p className="mt-1 text-sm text-slate-500">
            Computer Science Engineering Student • Developer • Problem Solver
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/pruthviharalayya5-droid"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300"
          >
            <Globe size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/prithvijagannathharalayya/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300"
          >
            <Globe size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
