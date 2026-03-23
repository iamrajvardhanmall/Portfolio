import { motion } from 'framer-motion';
import { FiGithub } from 'react-icons/fi';

const projects = [
  {
    title: 'Car Loan Calculator',
    image: '/projects/Car Loan.png',
    description:
      'A secure full-stack financial platform with loan amortization tools, AI-powered car valuation, user authentication, and downloadable reports, built for scalability and performance.',
    tech: ['Django', 'JavaScript', 'Bootstrap'],
    github: 'https://github.com/iamrajvardhanmall/Car-loan-calculator',
  },
  // {
  //   title: 'Smart Attendance System',
  //   image: '/projects/attendance.svg', // You'll need to create/add this image
  //   description:
  //     'Django-based attendance system with webcam face recognition (OpenCV LBPH), multi-role dashboards (Admin/Faculty/Student), remedial class scheduling, and real-time notifications.',
  //   tech: ['Django', 'OpenCV', 'JavaScript', 'Bootstrap', 'Chart.js'],
  // },
  {
    title: 'Opportunity Extraction Module',
    image: '/projects/Ivy League Tracker.png', // You'll need to create/add this image
    description:
      'Automated web scraping system using Django and APScheduler to monitor university websites for internships/scholarships, featuring change detection, smart classification, and analytics dashboards.',
    tech: ['Django', 'Python', 'BeautifulSoup', 'APScheduler', 'Chart.js'],
    github: 'https://github.com/iamrajvardhanmall/Real-Time-Opportunity-Extraction-Module',
  },
  {
    title: 'AutoLeet - AI LeetCode Solver',
    image: '/projects/LeetCode Auto Solver.png', 
    description:
      'AI-powered full-stack app that scrapes, solves, and submits LeetCode problems using Groq Llama 3.3 and Selenium automation, featuring a React frontend and Django backend.',
    tech: ['Django', 'React', 'Groq AI', 'Selenium', 'JavaScript'],
    github: 'https://github.com/iamrajvardhanmall/AutoLeet-AI-Powered-LeetCode-Problem-Solver',
  },
  {
    title: 'Play Store App Rating Predictor',
    image: '/projects/ML.png',
    description:
      'Machine learning application built on 10k+ Play Store apps using PCA, Random Forest, and K-Means for rating prediction with interactive data exploration.',
    tech: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Streamlit'],
    github: 'https://github.com/iamrajvardhanmall/PlaystoreratingPredictor',
  },
  {
    title: 'Airline Customer Analytics Dashboard',
    image: '/projects/Power BI.png',
    description:
      'Interactive analytics dashboard built on 400K+ records to identify customer churn and loyalty insights.',
    tech: ['Power BI'],
    github: 'https://github.com/iamrajvardhanmall/Power-BI-Dashboard-Project',
  },
  {
    title: 'Coffee Shop Sales Analysis',
    image: '/projects/Dashboard.png',
    description:
      'Interactive Excel dashboard analyzing 149K transactions to identify top products and peak sales hours.',
    tech: ['Excel'],
    github: 'https://github.com/iamrajvardhanmall/MS-Excel',
  },
  
  
];

export default function Projects() {
  return (
    <section id="projects" className="section-shell py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          Selected work blending full-stack engineering, machine learning, and business analytics.
        </p>
        <div className="section-accent" />
      </motion.div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, idx) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            whileHover={{ y: -8 }}
            className="glass-card group flex h-full flex-col overflow-hidden transition-shadow hover:shadow-2xl"
          >
            <div className="relative overflow-hidden h-44 bg-slate-200 dark:bg-slate-800">
              <motion.img 
                src={project.image} 
                alt={project.title} 
                className="h-44 w-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">{project.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{project.description}</p>
              <motion.ul 
                className="mt-4 flex flex-wrap gap-2"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                    },
                  },
                }}
              >
                {project.tech.map((item) => (
                  <motion.li
                    key={`${project.title}-${item}`}
                    className="rounded-full border border-sky-300/60 bg-sky-100/70 px-2.5 py-1 text-xs font-semibold text-sky-700 dark:border-teal-500/40 dark:bg-teal-500/10 dark:text-teal-300"
                    variants={{
                      hidden: { opacity: 0, y: 5 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
              <div className="mt-auto flex gap-3 pt-5">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:border-sky-500 hover:text-sky-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-teal-400 dark:hover:text-teal-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiGithub />
                  GitHub 
                </motion.a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
