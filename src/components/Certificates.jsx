import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiAlertCircle, FiX } from 'react-icons/fi';

const certificates = [
  {
    title: 'Oracle Cloud Infrastructure 2025 Certified Data Science Professional',
    issuer: 'Oracle',
    image: '/certificates/Oracle Data Science eCertificate.png',
    credentialUrl: 'https://drive.google.com/drive/folders/1cHspj9bX_QILYjqHt0N2xFdLWysEaw80',
    year: '2025',
  },
  {
    title: 'PEP Program (DSA Module) - A+ Grade',
    issuer: 'byteXL',
    image: '/certificates/Rajvardhan Mall Pep Classes.png',
    credentialUrl: 'https://drive.google.com/drive/folders/1cHspj9bX_QILYjqHt0N2xFdLWysEaw80',
    year: '2025',
  },
  {
    title: 'Industrial Training in Data Science',
    issuer: 'InternsElite',
    image: '/certificates/Certificate of Training-Rajvardhan Mall_DS_InternsElite.png',
    credentialUrl: 'https://drive.google.com/drive/folders/1cHspj9bX_QILYjqHt0N2xFdLWysEaw80',
    year: '2023',
  },
  {
    title: 'Adobe India Hackathon Participation (Round 1)',
    issuer: 'Adobe',
    image: '/certificates/Certificate of Participation at Adobe.png',
    credentialUrl: 'https://drive.google.com/drive/folders/1cHspj9bX_QILYjqHt0N2xFdLWysEaw80',
    year: '2025',
  },
  {
    title: 'Complete Machine Learning & Data Science',
    issuer: 'GeeksforGeeks',
    image: '/certificates/Complete Machine Learning & Data Science - Skill Up.png',
    credentialUrl: 'https://drive.google.com/drive/folders/1cHspj9bX_QILYjqHt0N2xFdLWysEaw80',
    year: '2025',
  },
  {
    title: 'Advanced Computer Networks',
    issuer: 'NPTEL',
    image: '/certificates/Advanced Computer Network.png',
    credentialUrl: 'https://drive.google.com/drive/folders/1cHspj9bX_QILYjqHt0N2xFdLWysEaw80',
    year: '2025',
  },
  {
    title: 'Google Data Analytics Professional',
    issuer: 'Coursera',
    image: '/certificates/Google Data Analytics Professional Certificate.png',
    credentialUrl: 'https://drive.google.com/drive/folders/1cHspj9bX_QILYjqHt0N2xFdLWysEaw80',
    year: '2026',
  },
  {
    title: 'Python Training Program',
    issuer: 'DataFlair',
    image: '/certificates/Python.png',
    credentialUrl: 'https://drive.google.com/drive/folders/1cHspj9bX_QILYjqHt0N2xFdLWysEaw80', 
    year: '2024',
  }
];

export default function Certificates() {
  const [imageLoaded, setImageLoaded] = useState({});
  const [imageError, setImageError] = useState({});
  const [expandedId, setExpandedId] = useState(null);

  const handleImageLoad = (index) => {
    setImageLoaded((prev) => ({ ...prev, [index]: true }));
    setImageError((prev) => ({ ...prev, [index]: false }));
  };

  const handleImageError = (index) => {
    setImageError((prev) => ({ ...prev, [index]: true }));
    setImageLoaded((prev) => ({ ...prev, [index]: false }));
  };

  return (
    <section id="certificates" className="section-shell py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">Certifications</h2>
        <p className="section-subtitle">Professional credentials in development, machine learning, and data science.</p>
        <div className="section-accent" />
      </motion.div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {certificates.map((cert, index) => (
          <motion.button
            key={cert.title}
            type="button"
            onClick={() => setExpandedId(index)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="group relative flex min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white/70 transition-all duration-300 hover:border-sky-400 dark:border-slate-800 dark:bg-slate-900/70 dark:hover:border-teal-400"
          >
            {/* Certificate Image */}
            <div className="relative h-48 w-full flex-shrink-0 overflow-hidden bg-slate-100 dark:bg-slate-800">
              {!imageLoaded[index] && !imageError[index] && (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800">
                  <div className="h-6 w-6 animate-spin rounded-full border-3 border-sky-400/40 border-t-sky-500" />
                </div>
              )}
              {imageError[index] && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-800">
                  <FiAlertCircle className="mb-2 text-2xl text-slate-400" />
                  <p className="text-xs text-slate-500">Image unavailable</p>
                </div>
              )}
              <img
                src={cert.image}
                alt={cert.title}
                className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
                onLoad={() => handleImageLoad(index)}
                onError={() => handleImageError(index)}
                loading={index === 0 ? 'eager' : 'lazy'}
                decoding="async"
                style={{ opacity: imageLoaded[index] && !imageError[index] ? 1 : 0 }}
              />
            </div>

            {/* Certificate Info */}
            <div className="flex flex-1 flex-col justify-between gap-2 p-4">
              <div>
                <h3 className="line-clamp-2 text-sm font-semibold leading-snug text-slate-900 dark:text-white">
                  {cert.title}
                </h3>
                <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">{cert.issuer}</p>
              </div>
              <p className="text-xs font-medium text-sky-700 dark:text-teal-300">{cert.year}</p>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Expanded Modal */}
      {expandedId !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setExpandedId(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
            className="glass-card relative max-h-[90vh] w-full max-w-2xl overflow-auto border-slate-200 bg-white/80 dark:border-slate-700/50 dark:bg-slate-800/80"
          >
            <button
              type="button"
              onClick={() => setExpandedId(null)}
              className="absolute top-4 right-4 z-10 rounded-full border border-slate-300 bg-white/70 p-2 text-slate-700 transition hover:border-slate-400 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:border-slate-600"
              aria-label="Close"
            >
              <FiX className="h-5 w-5" />
            </button>

            <div className="relative">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                {!imageLoaded[expandedId] && !imageError[expandedId] && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-8 w-8 animate-spin rounded-full border-4 border-sky-400/40 border-t-sky-500" />
                  </div>
                )}
                {imageError[expandedId] && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <FiAlertCircle className="mb-2 text-3xl text-slate-400" />
                    <p className="text-sm text-slate-500">Image could not be loaded</p>
                  </div>
                )}
                <img
                  src={certificates[expandedId].image}
                  alt={certificates[expandedId].title}
                  className="h-full w-full object-cover"
                  onLoad={() => handleImageLoad(expandedId)}
                  onError={() => handleImageError(expandedId)}
                  loading="eager"
                  decoding="async"
                  style={{ opacity: imageLoaded[expandedId] && !imageError[expandedId] ? 1 : 0 }}
                />
              </div>
            </div>

            <div className="space-y-4 p-6 sm:p-8">
              <div className="space-y-3">
                <span className="text-xs font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-400">
                  Certification
                </span>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
                  {certificates[expandedId].title}
                </h2>
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  {certificates[expandedId].issuer} • {certificates[expandedId].year}
                </p>
              </div>
              <a
                href={certificates[expandedId].credentialUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-sky-600 to-teal-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:from-sky-500 hover:to-teal-500"
              >
                <FiExternalLink />
                View Certificate
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}