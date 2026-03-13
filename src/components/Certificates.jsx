import { motion } from 'framer-motion';
import { FiAward } from 'react-icons/fi';

const certificates = [
  'Complete Machine Learning & Data Science - GFG',
  'Oracle Cloud Infrastructure 2025 Certified Data Science Professional',
  'Advanced Computer Networks - NPTEL',
  'SQL Intermediate - HackerRank',
];

export default function Certificates() {
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

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {certificates.map((item, idx) => (
          <motion.article
            key={item}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="glass-card flex items-start gap-4 p-5"
          >
            <span className="rounded-xl bg-emerald-100 p-3 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">
              <FiAward />
            </span>
            <p className="text-sm font-medium leading-6 text-slate-700 dark:text-slate-200">{item}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
