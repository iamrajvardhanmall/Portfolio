import { useEffect, useState } from 'react';
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem('theme');
    if (stored) {
      return stored === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      return;
    }
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }, [darkMode]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fade-in-down sticky top-0 z-50 border-b border-slate-200/70 bg-white/75 backdrop-blur-lg transition-all duration-300 dark:border-slate-800/70 dark:bg-ink-950/70">
      <nav className="section-shell flex h-16 items-center justify-between">
        <a href="#home" className="font-display text-lg font-bold tracking-wide text-slate-900 dark:text-white">
          Rajvardhan Mall
        </a>

        <ul className="hidden items-center gap-6 lg:flex">
          {navLinks.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="text-sm font-medium text-slate-700 transition hover:text-sky-600 dark:text-slate-300 dark:hover:text-teal-300"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setDarkMode((prev) => !prev)}
            className="rounded-lg border border-slate-300 p-2 text-slate-700 transition hover:border-sky-500 hover:text-sky-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-teal-400 dark:hover:text-teal-300"
            aria-label="Toggle theme"
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="rounded-lg border border-slate-300 p-2 text-slate-700 lg:hidden dark:border-slate-700 dark:text-slate-300"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-slate-200 bg-white/95 px-4 py-3 dark:border-slate-800 dark:bg-ink-900/95 lg:hidden">
          <ul className="space-y-2">
            {navLinks.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={closeMenu}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
