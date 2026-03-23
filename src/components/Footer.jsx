import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className="border-t border-slate-200/60 bg-white/70 py-16 transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950/60">
      <motion.div
        className="section-shell grid gap-12 md:grid-cols-3 lg:gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Brand Column */}
        <motion.div variants={itemVariants}>
          <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-2">Rajvardhan Mall</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Full Stack Developer & Data Science Enthusiast
          </p>
        </motion.div>

        {/* Quick Navigation Column */}
        <motion.div variants={itemVariants}>
          <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-slate-600 dark:text-slate-400 mb-4">
            Quick Navigation
          </h4>
          <ul className="flex flex-col gap-2">
            {quickLinks.map((item) => (
              <motion.li key={item.href} whileHover={{ x: 4 }}>
                <a
                  href={item.href}
                  className="text-sm text-slate-600 transition-colors hover:text-sky-600 dark:text-slate-300 dark:hover:text-teal-300"
                >
                  {item.label}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Social Links Column */}
        <motion.div variants={itemVariants}>
          <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-slate-600 dark:text-slate-400 mb-4">
            Connect
          </h4>
          <div className="flex gap-4">
            <motion.a
              href="https://github.com/iamrajvardhanmall"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.2, y: -4 }}
              whileTap={{ scale: 0.9 }}
              className="social-github inline-flex items-center justify-center h-10 w-10 rounded-lg border border-slate-300 text-slate-700 transition dark:border-slate-700 dark:text-slate-200 hover:border-sky-500 hover:text-sky-600 dark:hover:border-teal-400 dark:hover:text-teal-300"
              aria-label="GitHub"
            >
              <FiGithub size={18} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/rajvardhanmall"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.2, y: -4 }}
              whileTap={{ scale: 0.9 }}
              className="social-linkedin inline-flex items-center justify-center h-10 w-10 rounded-lg border border-slate-300 text-slate-700 transition dark:border-slate-700 dark:text-slate-200 hover:border-sky-500 hover:text-sky-600 dark:hover:border-teal-400 dark:hover:text-teal-300"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={18} />
            </motion.a>
            <motion.a
              href="mailto:rajvardhanmall@gmail.com"
              whileHover={{ scale: 1.2, y: -4 }}
              whileTap={{ scale: 0.9 }}
              className="social-email inline-flex items-center justify-center h-10 w-10 rounded-lg border border-slate-300 text-slate-700 transition dark:border-slate-700 dark:text-slate-200 hover:border-sky-500 hover:text-sky-600 dark:hover:border-teal-400 dark:hover:text-teal-300"
              aria-label="Email"
            >
              <FiMail size={18} />
            </motion.a>
          </div>
        </motion.div>
      </motion.div>

      {/* Divider */}
      <div className="section-shell mt-12 border-t border-slate-200/80 pt-6 dark:border-slate-800" />

      {/* Copyright */}
      <motion.div
        className="section-shell text-center text-xs text-slate-500 dark:text-slate-400"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <p>
          © {new Date().getFullYear()} Rajvardhan Mall. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
}
