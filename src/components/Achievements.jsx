import { motion } from 'framer-motion';

const achievements = [
  { label: 'LeetCode Rating', value: '1525' },
  { label: 'CodeChef Rating', value: '1248' },
  { label: 'Problems Solved across Platforms', value: '330+' },
];

export default function Achievements() {
  return (
    <section id="achievements" className="section-shell py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
      >
        <h2 className="section-title">Achievements</h2>
        <p className="section-subtitle">Competitive coding milestones and consistency in problem solving.</p>
      </motion.div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((item, idx) => (
          <motion.article
            key={item.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: idx * 0.1 }}
            className="glass-card relative overflow-hidden p-6"
          >
            <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-cyan-500 via-sky-400 to-emerald-400" />
            <p className="text-3xl font-bold text-slate-900 dark:text-white">{item.value}</p>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{item.label}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
