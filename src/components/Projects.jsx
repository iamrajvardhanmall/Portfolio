import { motion } from 'framer-motion';
import { FiArrowUpRight, FiGithub } from 'react-icons/fi';

const projects = [
  {
    title: 'Music Streaming Integration Platform',
    image: '/projects/music.svg',
    description:
      'Full-stack web application enabling API-driven client-server communication with authentication and third-party API integration.',
    tech: ['Django REST Framework', 'React', 'Tailwind CSS'],
  },
  {
    title: 'Play Store App Rating Predictor',
    image: '/projects/playstore.svg',
    description:
      'Machine learning application built on 10k+ Play Store apps using PCA, Random Forest, and K-Means for rating prediction with interactive data exploration.',
    tech: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Streamlit'],
  },
  {
    title: 'Car Loan Calculator',
    image: '/projects/Car Loan.png',
    description:
      'Full-stack financial tool with amortization calculations, authentication, AI car value estimator, and downloadable reports.',
    tech: ['Django', 'JavaScript', 'Bootstrap'],
  },
  {
    title: 'Airline Customer Analytics Dashboard',
    image: '/projects/airline.svg',
    description:
      'Interactive analytics dashboard built on 400K+ records to identify customer churn and loyalty insights.',
    tech: ['Power BI'],
  },
  {
    title: 'Coffee Shop Sales Analysis',
    image: '/projects/coffee.svg',
    description:
      'Interactive Excel dashboard analyzing 149K transactions to identify top products and peak sales hours.',
    tech: ['Excel'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-shell py-20">
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
      >
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          Selected work blending full-stack engineering, machine learning, and business analytics.
        </p>
      </motion.div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, idx) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: idx * 0.08 }}
            className="glass-card group overflow-hidden"
          >
            <img src={project.image} alt={project.title} className="h-44 w-full object-cover" />
            <div className="p-5">
              <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">{project.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{project.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <li
                    key={`${project.title}-${item}`}
                    className="rounded-full border border-cyan-300/60 bg-cyan-100/70 px-2.5 py-1 text-xs font-semibold text-cyan-700 dark:border-cyan-500/40 dark:bg-cyan-500/10 dark:text-cyan-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex gap-3">
                <a
                  href="https://github.com/iamrajvardhanmall"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:border-cyan-500 hover:text-cyan-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-cyan-400"
                >
                  <FiGithub />
                  GitHub 
                </a>
                {/* <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-3 py-2 text-xs font-semibold text-white transition hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
                >
                  <FiArrowUpRight />
                  Live Demo
                </a> */}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
