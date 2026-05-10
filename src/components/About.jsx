import { motion } from 'framer-motion';
import { FiBookOpen } from 'react-icons/fi';

export default function About() {
  return (
    <section id="about" className="section-shell py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">About</h2>
        <p className="section-subtitle">Driven by curiosity and a passion for building impactful solutions.</p>
        <div className="section-accent" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-8 glass-card p-6 sm:p-8"
      >
        <div className="mt-6 space-y-4 text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base">
          <p>
            I am Rajvardhan Mall, a B.Tech Computer Science student at Lovely Professional University,
            focused on building practical software solutions that solve real user and business problems.
          </p>
          <p>
            Through hands-on projects in web development, machine learning, and analytics, I have built
            experience in turning ideas into working products with clean code, structured workflows,
            and clear documentation.
          </p>
          <p>
            I am continuously improving my technical depth, problem-solving ability, and communication
            skills to contribute effectively in collaborative engineering teams.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card rounded-2xl border border-slate-200 bg-white/70 p-6 dark:border-slate-800 dark:bg-slate-900/70"
          >
            <div className="flex items-center gap-3">
              <span className="rounded-lg bg-sky-100 p-2 text-sky-700 dark:bg-teal-500/10 dark:text-teal-300">
                <FiBookOpen />
              </span>
              <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">Education</h3>
            </div>
            <p className="mt-3 text-sm text-slate-700 dark:text-slate-300">B.Tech in Computer Science and Engineering</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">Lovely Professional Unversity</p>
            <p className="mt-2 text-sm font-semibold text-sky-700 dark:text-teal-300">CGPA: 8.02</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-card rounded-2xl border border-slate-200 bg-white/70 p-6 dark:border-slate-800 dark:bg-slate-900/70"
          >
            <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">Learning Next</h3>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
              Technologies I am currently learning to strengthen modern engineering and deployment skills.
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {['Cloud Computing', 'AWS'].map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-sky-300/60 bg-sky-100/70 px-2.5 py-1 text-xs font-semibold text-sky-700 dark:border-teal-500/40 dark:bg-teal-500/10 dark:text-teal-300"
                >
                  {tech}
                </li>
              ))}    
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
