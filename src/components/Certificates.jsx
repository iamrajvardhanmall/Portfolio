import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiArrowLeft, FiArrowRight, FiAward, FiExternalLink } from 'react-icons/fi';

const certificates = [
  {
    title: 'Oracle Cloud Infrastructure 2025 Certified Data Science Professional',
    issuer: 'Oracle',
    image: '/certificates/Oracle Data Science eCertificate.png',
    credentialUrl: 'https://education.oracle.com/',
    year: '2025',
  },
  {
    title: 'Complete Machine Learning & Data Science',
    issuer: 'GeeksforGeeks',
    image: '/certificates/Complete Machine Learning & Data Science - Skill Up.png',
    credentialUrl: 'https://www.geeksforgeeks.org/',
    year: '2024',
  },
  {
    title: 'Advanced Computer Networks',
    issuer: 'NPTEL',
    image: '/certificates/Advanced Computer Network.png',
    credentialUrl: 'https://nptel.ac.in/',
    year: '2024',
  },
  {
    title: 'Google Data Analytics Professional',
    issuer: 'Coursera',
    image: '/certificates/Google Data Analytics Professional Certificate.png',
    credentialUrl: 'https://www.hackerrank.com/skills-verification',
    year: '2025',
  },
];

export default function Certificates() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCertificate = certificates[activeIndex];

  const showPrevious = () => {
    setActiveIndex((previous) => (previous - 1 + certificates.length) % certificates.length);
  };

  const showNext = () => {
    setActiveIndex((previous) => (previous + 1) % certificates.length);
  };

  useEffect(() => {
    const intervalId = window.setInterval(showNext, 5000);
    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section id="certificates" className="section-shell py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
      >
        <h2 className="section-title">Certificates</h2>
        <p className="section-subtitle">Recognitions validating my learning in development, ML, and data science.</p>
      </motion.div>

      <div className="mt-10">
        <div className="glass-card relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.article
              key={activeCertificate.title}
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -28 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="grid gap-0 md:grid-cols-[1.1fr_1.4fr]"
            >
              <img
                src={activeCertificate.image}
                alt={`${activeCertificate.title} cover`}
                className="h-60 w-full object-cover md:h-full"
              />

              <div className="flex flex-col justify-between p-6 sm:p-8">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/70 bg-emerald-100/60 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700 dark:border-emerald-500/40 dark:bg-emerald-500/10 dark:text-emerald-300">
                    <FiAward />
                    Certified
                  </span>
                  <h3 className="mt-4 text-xl font-semibold leading-tight text-slate-900 dark:text-white sm:text-2xl">
                    {activeCertificate.title}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-slate-600 dark:text-slate-300">
                    {activeCertificate.issuer} . {activeCertificate.year}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-3">
                  <a
                    href={activeCertificate.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
                  >
                    <FiExternalLink />
                    View Certificate
                  </a>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>

        <div className="mt-5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            {certificates.map((item, idx) => (
              <button
                key={item.title}
                type="button"
                onClick={() => setActiveIndex(idx)}
                aria-label={`Go to ${item.title}`}
                className={`h-2.5 rounded-full transition ${
                  idx === activeIndex
                    ? 'w-8 bg-cyan-500 dark:bg-cyan-400'
                    : 'w-2.5 bg-slate-300 hover:bg-slate-400 dark:bg-slate-700 dark:hover:bg-slate-600'
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={showPrevious}
              aria-label="Previous certificate"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-700 transition hover:border-cyan-500 hover:text-cyan-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-cyan-400 dark:hover:text-cyan-300"
            >
              <FiArrowLeft />
            </button>
            <button
              type="button"
              onClick={showNext}
              aria-label="Next certificate"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-700 transition hover:border-cyan-500 hover:text-cyan-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-cyan-400 dark:hover:text-cyan-300"
            >
              <FiArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
