import { useEffect, useState } from 'react'
import profileImg from '../assets/profile.png'

// Typed text hook
function useTyped(phrases) {
  const [text, setText] = useState('')
  const [pIdx, setPIdx] = useState(0)
  const [cIdx, setCIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = phrases[pIdx]
    const speed = deleting ? 55 : 100
    const timer = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, cIdx + 1))
        if (cIdx + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1800)
        } else {
          setCIdx(c => c + 1)
        }
      } else {
        setText(current.slice(0, cIdx - 1))
        if (cIdx - 1 === 0) {
          setDeleting(false)
          setPIdx(p => (p + 1) % phrases.length)
          setCIdx(0)
        } else {
          setCIdx(c => c - 1)
        }
      }
    }, speed)
    return () => clearTimeout(timer)
  }, [cIdx, deleting, pIdx, phrases])

  return text
}

export default function Hero() {
  const typed = useTyped([
    'MERN Stack Developer',
    'Problem Solver',
  ])

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Gradient orbs */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-indigo-500/20 blur-[100px] animate-float"></div>
      <div className="absolute -bottom-40 -right-40 w-[450px] h-[450px] rounded-full bg-cyan-400/20 blur-[100px] animate-float" style={{ animationDelay: '-3s' }}></div>

      <div className="relative max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center w-full">

        {/* ---- LEFT: Text content ---- */}
        <div className="animate-fade-in">
          <p className="text-cyan-500 font-semibold mb-2 text-sm tracking-widest uppercase">
            👋 Hello World, I'm
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-3 text-slate-900 dark:text-white">
            Dasari <span className="gradient-text">Vinay</span>
          </h1>

          <h2 className="text-xl md:text-2xl font-mono text-slate-500 dark:text-slate-400 mb-5 min-h-8">
            <span className="text-indigo-500">&gt;</span>&nbsp;
            <span>{typed}</span>
            <span className="animate-pulse text-indigo-400">|</span>
          </h2>

          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8 max-w-lg text-base">
            3rd year <strong className="text-slate-800 dark:text-slate-200">CSE student at VIIT, Visakhapatnam</strong> passionate about
            building scalable MERN stack applications. Currently crafting{' '}
            <span className="text-indigo-500 font-semibold">CargoMate</span> — a real-time logistics platform.
            Open to exciting internship and junior developer opportunities.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            <a href="/Dasari_Vinay_Resume.pdf" download className="btn-primary">
              <i className="fas fa-download text-sm"></i> Download Resume
            </a>
            <a href="#contact" className="btn-outline">
              <i className="fas fa-paper-plane text-sm"></i> Contact Me
            </a>
          </div>

          {/* Social icons */}
          <div className="flex gap-4">
            {[
              { icon: 'fab fa-github', href: 'https://github.com/Vinay-1704', label: 'GitHub' },
              { icon: 'fab fa-linkedin-in', href: 'https://www.linkedin.com/in/dasari-vinay1704', label: 'LinkedIn' },
              { icon: 'fas fa-envelope', href: 'mailto:dasarinavya1704@gmail.com', label: 'Email' },
            ].map(s => (
              <a key={s.label} href={s.href} target={s.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer" aria-label={s.label}
                className="w-11 h-11 rounded-full border border-slate-300 dark:border-gray-700 flex items-center justify-center
                  text-slate-600 dark:text-slate-400 hover:bg-indigo-500 hover:border-indigo-500 hover:text-white
                  hover:-translate-y-1 transition-all duration-300">
                <i className={s.icon}></i>
              </a>
            ))}
          </div>
        </div>

        {/* ---- RIGHT: Profile photo ---- */}
        <div className="flex justify-center relative">
          {/* Animated ring */}
          <div className="relative w-72 h-72 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-400 p-1 animate-spin" style={{ animationDuration: '8s' }}>
              <div className="w-full h-full rounded-full bg-slate-50 dark:bg-gray-950"></div>
            </div>
            <img
              src={profileImg}
              alt="Dasari Vinay – MERN Stack Developer"
              className="absolute inset-1 w-[calc(100%-8px)] h-[calc(100%-8px)] rounded-full object-cover border-4 border-white dark:border-gray-900 shadow-2xl"
            />
          </div>

          {/* Floating badge: Open to Work */}
          <div className="absolute top-4 -left-4 md:-left-10 flex items-center gap-2 px-4 py-2 rounded-full
            bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-700 shadow-lg text-sm font-semibold text-slate-700 dark:text-slate-200 animate-float">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Open to Work
          </div>

          {/* Floating badge: 3rd Year */}
          <div className="absolute bottom-6 -right-4 md:-right-10 flex items-center gap-2 px-4 py-2 rounded-full
            bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-700 shadow-lg text-sm font-semibold text-slate-700 dark:text-slate-200 animate-float" style={{ animationDelay: '-2s' }}>
            <i className="fas fa-graduation-cap text-indigo-500"></i>
            VIIT — CSE 2027
          </div>
        </div>

      </div>

      {/* Scroll indicator */}
      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-400 hover:text-indigo-500 transition-colors animate-bounce">
        <span className="text-xs font-medium">Scroll</span>
        <i className="fas fa-chevron-down text-sm"></i>
      </a>
    </section>
  )
}
