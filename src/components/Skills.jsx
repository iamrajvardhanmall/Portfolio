import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { createApp } from 'vue';
import SkillChart from '../vue-components/SkillChart.vue';

const groupedSkills = {
  Languages: ['Python', 'JavaScript', 'C++', 'SQL', 'HTML', 'CSS'],
  Frameworks: ['Django', 'React.js', 'Tailwind CSS', 'Bootstrap'],
  Databases: ['MySQL', 'SQLite', 'PostgreSQL'],
  Libraries: ['Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn', 'Streamlit', 'Plotly'],
  Analytics: ['Power BI', 'DAX', 'Star Schema Modeling', 'Data Visualization'],
  Tools: ['Git', 'GitHub', 'Jupyter Notebook', 'Anaconda', 'AWS', 'MS Excel', 'VS Code'],
};

const skillLevels = [
  { name: 'Python', value: 88 },
  { name: 'JavaScript', value: 82 },
  { name: 'React.js', value: 80 },
  { name: 'Tailwind CSS', value: 83 },
  { name: 'Django', value: 84 },
  { name: 'MySQL', value: 76 },
  { name: 'Scikit-learn', value: 78 },
  { name: 'Power BI', value: 80 },
  { name: 'AWS', value: 70 },
  { name: 'Git', value: 81 },
  
];

export default function Skills() {
  const vueMountRef = useRef(null);

  useEffect(() => {
    if (!vueMountRef.current) {
      return undefined;
    }

    const app = createApp(SkillChart, {
      title: 'Skill Progress',
      items: skillLevels,
    });
    app.mount(vueMountRef.current);

    return () => {
      app.unmount();
    };
  }, []);

  return (
    <section id="skills" className="section-shell py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">
          A balanced stack from full-stack web development to data science and analytics.
        </p>
        <div className="section-accent" />
      </motion.div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="grid gap-4 sm:grid-cols-2">
          {Object.entries(groupedSkills).map(([group, items], index) => (
            <motion.article
              key={group}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="glass-card p-6"
            >
              <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">{group}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {items.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-sky-300/60 bg-sky-100/70 px-3 py-1 text-xs font-medium text-sky-700 dark:border-teal-500/40 dark:bg-teal-500/10 dark:text-teal-300"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-card p-6"
        >
          <div ref={vueMountRef} />
        </motion.div>
      </div>
    </section>
  );
}
