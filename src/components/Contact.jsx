import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiMapPin } from 'react-icons/fi';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ type: 'idle', message: '' });

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSending(true);
    setStatus({ type: 'idle', message: '' });

    try {
      const response = await fetch('https://formsubmit.co/ajax/rajvardhanmall@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `Portfolio message from ${form.name}`,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      setStatus({ type: 'success', message: 'Message sent successfully. I will get back to you soon.' });
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Unable to send right now. Please use the email link on the right panel.',
      });
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section id="contact" className="section-shell py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">Contact</h2>
        <p className="section-subtitle">Reach out for internships, collaborations, or project opportunities.</p>
        <div className="section-accent" />
      </motion.div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-card space-y-4 p-6"
        >
          <input
            type="text"
            placeholder="Name"
            required
            value={form.name}
            onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-sky-500 dark:border-slate-700 dark:bg-slate-900"
          />
          <input
            type="email"
            placeholder="Email"
            required
            value={form.email}
            onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-sky-500 dark:border-slate-700 dark:bg-slate-900"
          />
          <textarea
            placeholder="Message"
            required
            rows={5}
            value={form.message}
            onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-sky-500 dark:border-slate-700 dark:bg-slate-900"
          />
          <button
            type="submit"
            disabled={isSending}
            className="rounded-xl bg-gradient-to-r from-sky-600 to-teal-600 px-5 py-3 text-sm font-semibold text-white transition hover:from-sky-500 hover:to-teal-500"
          >
            {isSending ? 'Sending...' : 'Send Message'}
          </button>
          {status.type !== 'idle' && (
            <p
              className={`text-sm ${
                status.type === 'success'
                  ? 'text-emerald-600 dark:text-emerald-400'
                  : 'text-rose-600 dark:text-rose-400'
              }`}
            >
              {status.message}
            </p>
          )}
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="glass-card relative overflow-hidden p-6"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-amber-400/10" />
          <div className="absolute right-5 top-5 rounded-lg border border-slate-300/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500 dark:border-slate-700 dark:text-slate-400">
            Location
          </div>
          <div className="relative space-y-4">
            <div className="rounded-2xl border border-slate-200/60 bg-radial-grid bg-[length:16px_16px] p-4 dark:border-slate-800/80">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
                <FiMapPin /> India
              </div>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Available for internships and collaboration</p>
            </div>

            <a href="mailto:rajvardhanmall@gmail.com" className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-200">
              <FiMail /> rajvardhanmall@gmail.com
            </a>
            <a href="tel:+918423510751" className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-200">
              <FiPhone /> +91 8423510751
            </a>
            <a href="https://github.com/iamrajvardhanmall" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-200">
              <FiGithub /> github.com/iamrajvardhanmall
            </a>
            <a href="https://linkedin.com/in/rajvardhanmall" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-200">
              <FiLinkedin /> linkedin.com/in/rajvardhanmall
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
