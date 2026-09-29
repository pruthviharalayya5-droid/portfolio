import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Highlights', href: '#highlights' },
  { label: 'Contact', href: '#contact' },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="#top"
          className="text-lg font-bold tracking-tight text-slate-100 transition hover:text-cyan-300"
        >
          Pruthvi<span className="text-cyan-400">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-400 transition hover:text-slate-100"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop Social Links */}
        <div className="hidden items-center gap-2 md:flex">
          <a
            href="https://github.com/pruthviharalayya5-droid"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 text-slate-400 transition hover:border-slate-600 hover:text-slate-100"
          >
            <span className="text-xs font-bold">GH</span>
          </a>

          <a
            href="https://www.linkedin.com/in/prithvijagannathharalayya/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 text-slate-400 transition hover:border-slate-600 hover:text-slate-100"
          >
            <span className="text-xs font-bold">in</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="inline-flex items-center justify-center rounded-lg border border-slate-800 p-2 text-slate-300 transition hover:border-slate-600 md:hidden"
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-slate-800/80 bg-slate-950 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-4 py-4 sm:px-6">

            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="border-b border-slate-900 px-2 py-3 text-sm font-medium text-slate-400 transition hover:text-slate-100"
              >
                {item.label}
              </a>
            ))}

            {/* Mobile Social Links */}
            <div className="flex gap-3 pt-4">

              <a
                href="https://github.com/pruthviharalayya5-droid"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-800 px-3 py-2 text-sm text-slate-300 transition hover:border-slate-600 hover:text-white"
              >
                <span className="text-xs font-bold">GH</span>
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/prithvijagannathharalayya/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-800 px-3 py-2 text-sm text-slate-300 transition hover:border-slate-600 hover:text-white"
              >
                <span className="text-xs font-bold">in</span>
                LinkedIn
              </a>

            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;