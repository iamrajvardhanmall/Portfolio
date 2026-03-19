import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const roles = ['Full Stack Developer', 'Data Science Enthusiast'];

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const atEnd = displayText === currentRole;
    const atStart = displayText === '';

    const timeout = window.setTimeout(
      () => {
        if (!isDeleting && atEnd) {
          setIsDeleting(true);
          return;
        }

        if (isDeleting && atStart) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          return;
        }

        const nextText = isDeleting
          ? currentRole.slice(0, Math.max(displayText.length - 1, 0))
          : currentRole.slice(0, displayText.length + 1);

        setDisplayText(nextText);
      },
      isDeleting ? 45 : atEnd ? 1200 : 85
    );

    return () => window.clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="home" className="section-shell relative overflow-hidden py-20 sm:py-28">
      <div className="absolute -left-24 top-8 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl" />

      <div className="relative grid items-center gap-10 lg:grid-cols-[1.25fr_0.75fr]">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <p className="mb-4 inline-flex rounded-full border border-cyan-300/40 bg-cyan-100/60 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-700 dark:border-cyan-400/30 dark:bg-cyan-500/10 dark:text-cyan-300">
            3rd Year B.Tech CSE Student
          </p>
          <h1 className="font-display text-4xl font-bold leading-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
            Rajvardhan Mall
          </h1>
          <p className="mt-4 text-lg font-semibold text-slate-700 dark:text-slate-200">
            Full Stack Developer & Data Science Enthusiast
          </p>
          <p className="mt-3 min-h-7 text-sm font-semibold text-cyan-700 dark:text-cyan-300 sm:text-base">
            {displayText}
            <span className="ml-1 animate-pulse">|</span>
          </p>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base">
            Computer Science student specializing in Full-Stack Development and Data Science. I build scalable web applications with Django and React, and transform complex data into actionable insights using Python, Scikit-learn, and interactive Streamlit/Power BI dashboards.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
            >
              View Projects
            </a>
            <a
              href="https://drive.google.com/drive/folders/18zTeYBSkzMBPbXFsWKf6ZnkNQisRoMMS"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-cyan-500 hover:text-cyan-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-cyan-400 dark:hover:text-cyan-300"
            >
              <FiDownload />
              Download Resume
            </a>
            <a
              href="#contact"
              className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-cyan-500 hover:text-cyan-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-cyan-400 dark:hover:text-cyan-300"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <a
              href="https://github.com/iamrajvardhanmall"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-slate-300 p-3 text-slate-700 transition hover:border-cyan-500 hover:text-cyan-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-cyan-400 dark:hover:text-cyan-300"
              aria-label="GitHub"
            >
              <FiGithub />
            </a>
            <a
              href="https://linkedin.com/in/rajvardhanmall"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-slate-300 p-3 text-slate-700 transition hover:border-cyan-500 hover:text-cyan-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-cyan-400 dark:hover:text-cyan-300"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>
            <a
              href="mailto:rajvardhanmall@gmail.com"
              className="rounded-lg border border-slate-300 p-3 text-slate-700 transition hover:border-cyan-500 hover:text-cyan-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-cyan-400 dark:hover:text-cyan-300"
              aria-label="Email"
            >
              <FiMail />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="glass-card relative overflow-hidden p-4"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-slate-200/80 dark:border-slate-800/80">
            <img
              src="/Rajvardhan_Mall_Photo.jpg"
              alt="Rajvardhan Mall"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-5">
              <p className="font-display text-lg font-semibold text-white">Rajvardhan Mall</p>
              <p className="text-xs tracking-wide text-slate-200">Full Stack Developer and Data Science Enthusiast</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
