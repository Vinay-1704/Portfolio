import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'

// EmailJS credentials
const SERVICE_ID = 'service_2thd0m8'
const TEMPLATE_ID = 'template_wnk81rr'
const PUBLIC_KEY = 'TA7z65qqAapOL2VxY'

const contactLinks = [
  {
    icon: 'fas fa-envelope',
    label: 'Email',
    value: 'dasarinavya1704@gmail.com',
    href: 'mailto:dasarinavya1704@gmail.com',
    color: 'from-indigo-500 to-violet-600',
  },
  {
    icon: 'fab fa-linkedin-in',
    label: 'LinkedIn',
    value: 'linkedin.com/in/dasari-vinay1704',
    href: 'https://www.linkedin.com/in/dasari-vinay1704',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: 'fab fa-github',
    label: 'GitHub',
    value: 'github.com/Vinay-1704',
    href: 'https://github.com/Vinay-1704',
    color: 'from-gray-700 to-gray-900',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  // Initialise EmailJS once on mount
  useEffect(() => {
    emailjs.init({ publicKey: PUBLIC_KEY })
  }, [])

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required.'
    if (!form.email.trim()) e.email = 'Email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email.'
    if (!form.subject.trim()) e.subject = 'Subject is required.'
    if (form.message.trim().length < 10) e.message = 'Message must be at least 10 characters.'
    return e
  }

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
    setErrors(er => ({ ...er, [e.target.name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setStatus('sending')
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        }
      )
      setStatus('sent')
      setForm({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setStatus('idle'), 7000)
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('idle')
      alert('Failed to send message. Please try again or email me directly at dasarinavya1704@gmail.com')
    }
  }

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-gray-950 transition-colors">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="section-title text-slate-900 dark:text-white">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <p className="section-subtitle">I would love to hear from you</p>

        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* Left – contact info */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Let's Connect</h3>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-8">
              Whether you have a job opportunity, a project idea, or simply want to say hi — feel free to
              reach out. I typically respond within <span className="text-indigo-500 font-semibold">24 hours</span>.
            </p>

            <div className="space-y-4">
              {contactLinks.map(c => (
                <a key={c.label} href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 glass-card p-4 shadow-sm hover:-translate-x-1 hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-600 transition-all duration-300 group">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${c.color} flex items-center justify-center flex-shrink-0 shadow group-hover:scale-110 transition-transform duration-300`}>
                    <i className={`${c.icon} text-white`}></i>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{c.label}</p>
                    <p className="text-sm font-semibold text-slate-700 dark:text-slate-200 mt-0.5">{c.value}</p>
                  </div>
                  <i className="fas fa-arrow-right ml-auto text-slate-300 dark:text-gray-600 group-hover:text-indigo-500 group-hover:translate-x-1 transition-all duration-300"></i>
                </a>
              ))}
            </div>
          </div>

          {/* Right – contact form */}
          <div className="glass-card p-6 md:p-8 shadow-sm">
            {status === 'sent' ? (
              <div className="flex flex-col items-center justify-center py-12 gap-4 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-lg animate-bounce">
                  <i className="fas fa-check text-white text-2xl"></i>
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white">Message Sent!</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm max-w-xs">
                  Thank you for reaching out. I will get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  {[
                    { name: 'name', type: 'text', label: 'Your Name', placeholder: 'John Doe' },
                    { name: 'email', type: 'email', label: 'Your Email', placeholder: 'john@example.com' },
                  ].map(f => (
                    <div key={f.name}>
                      <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">{f.label}</label>
                      <input
                        type={f.type} name={f.name} value={form[f.name]} onChange={handleChange} placeholder={f.placeholder}
                        className={`w-full px-4 py-3 rounded-xl text-sm border bg-white dark:bg-gray-900 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-600 outline-none transition-all duration-200
                          focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500
                          ${errors[f.name] ? 'border-rose-400' : 'border-slate-200 dark:border-gray-700'}`}
                      />
                      {errors[f.name] && <p className="text-xs text-rose-500 mt-1">{errors[f.name]}</p>}
                    </div>
                  ))}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Subject</label>
                  <input
                    type="text" name="subject" value={form.subject} onChange={handleChange} placeholder="Job Opportunity / Collaboration"
                    className={`w-full px-4 py-3 rounded-xl text-sm border bg-white dark:bg-gray-900 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-600 outline-none transition-all duration-200
                      focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500
                      ${errors.subject ? 'border-rose-400' : 'border-slate-200 dark:border-gray-700'}`}
                  />
                  {errors.subject && <p className="text-xs text-rose-500 mt-1">{errors.subject}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Message</label>
                  <textarea
                    name="message" rows={5} value={form.message} onChange={handleChange} placeholder="Write your message here..."
                    className={`w-full px-4 py-3 rounded-xl text-sm border bg-white dark:bg-gray-900 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-600 outline-none transition-all duration-200 resize-none
                      focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500
                      ${errors.message ? 'border-rose-400' : 'border-slate-200 dark:border-gray-700'}`}
                  />
                  {errors.message && <p className="text-xs text-rose-500 mt-1">{errors.message}</p>}
                </div>

                <button type="submit" disabled={status === 'sending'}
                  className="w-full btn-primary justify-center disabled:opacity-60 disabled:cursor-not-allowed">
                  {status === 'sending'
                    ? <><i className="fas fa-spinner animate-spin"></i> Sending...</>
                    : <><i className="fas fa-paper-plane"></i> Send Message</>}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
