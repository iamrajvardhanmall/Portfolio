import { motion } from 'framer-motion';
import { FiBookOpen } from 'react-icons/fi';

export default function About() {
  return (
    <section id="about" className="section-shell py-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card p-6 sm:p-8"
      >
        <h2 className="section-title">About</h2>
        <div className="mt-6 space-y-4 text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base">
          <p>
            I am a Computer Science student passionate about building scalable web applications and solving
            real-world problems using data. I work across full-stack development and data science,
            combining backend engineering with machine learning and analytics.
          </p>
          <p>
            I have experience developing web applications using Django, React, and Tailwind CSS, and
            building machine learning models using Python, Pandas, NumPy, and Scikit-learn.
          </p>
          <p>
            I also enjoy transforming complex datasets into meaningful insights through dashboards and
            analytics tools like Power BI, Streamlit, and Excel.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white/70 p-5 dark:border-slate-800 dark:bg-slate-900/70">
            <div className="flex items-center gap-3">
              <span className="rounded-lg bg-cyan-100 p-2 text-cyan-700 dark:bg-cyan-500/10 dark:text-cyan-300">
                <FiBookOpen />
              </span>
              <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">Education</h3>
            </div>
            <p className="mt-3 text-sm text-slate-700 dark:text-slate-300">B.Tech in Computer Science and Engineering</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">Lovely Professional University</p>
            <p className="mt-2 text-sm font-semibold text-cyan-700 dark:text-cyan-300">CGPA: 7.99</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white/70 p-5 dark:border-slate-800 dark:bg-slate-900/70">
            <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">Student Journey</h3>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
              Focused on mastering core CS fundamentals, building production-style projects, and improving problem-solving through consistent coding practice.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
