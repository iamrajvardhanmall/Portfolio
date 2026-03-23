import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/60 bg-white/70 py-10 transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950/60">
      <div className="section-shell grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">Rajvardhan Mall</h3>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Quick Navigation</h4>
          <ul className="mt-3 flex flex-wrap gap-3 text-sm">
            {quickLinks.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-slate-600 transition-colors hover:text-sky-600 dark:text-slate-300 dark:hover:text-teal-300">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Social Links</h4>
          <div className="mt-3 flex gap-3">
            <a href="https://github.com/iamrajvardhanmall" target="_blank" rel="noreferrer" className="rounded-full border border-slate-300 p-2 text-slate-700 transition-colors hover:border-sky-400 hover:text-sky-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-teal-400 dark:hover:text-teal-300">
              <FiGithub />
            </a>
            <a href="https://linkedin.com/in/rajvardhanmall" target="_blank" rel="noreferrer" className="rounded-full border border-slate-300 p-2 text-slate-700 transition-colors hover:border-sky-400 hover:text-sky-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-teal-400 dark:hover:text-teal-300">
              <FiLinkedin />
            </a>
            <a href="mailto:rajvardhanmall@gmail.com" className="rounded-full border border-slate-300 p-2 text-slate-700 transition-colors hover:border-sky-400 hover:text-sky-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-teal-400 dark:hover:text-teal-300">
              <FiMail />
            </a>
          </div>
        </div>
      </div>

      <div className="section-shell mt-8 border-t border-slate-200/80 pt-5 text-xs text-slate-500 dark:border-slate-800 dark:text-slate-400">
        Copyright © {new Date().getFullYear()} Rajvardhan Mall. All rights reserved.
      </div>
    </footer>
  );
}
