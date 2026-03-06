import { useRef, useEffect } from 'react'

// Simple hook: add a class when element enters viewport
function useReveal(cls = 'opacity-100 translate-y-0') {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { el.classList.add(...cls.split(' ')); obs.disconnect() }
    }, { threshold: 0.15 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [cls])
  return ref
}

export default function About() {
  const ref = useReveal()
  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="section-title text-slate-900 dark:text-white">
          About <span className="gradient-text">Me</span>
        </h2>
        <p className="section-subtitle">Get to know me better</p>

        <div ref={ref} className="opacity-0 translate-y-8 transition-all duration-700 grid md:grid-cols-2 gap-12 items-start">

          {/* Bio text */}
          <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
            <p>
              Hi! I'm <span className="font-semibold text-slate-900 dark:text-white">Dasari Vinay</span>, a 3rd-year CSE student at{' '}
              <span className="text-indigo-500 font-semibold">Vignan's Institute of Information Technology, Visakhapatnam</span>.
              I'm deeply passionate about creating impactful, scalable web applications using the{' '}
              <span className="font-semibold text-slate-800 dark:text-slate-200">MERN stack</span>.
            </p>
            <p>
              My journey in software development started with curiosity about how websites work and quickly
              evolved into building full-stack applications with real-time features the most exciting being{' '}
              <span className="text-indigo-500 font-semibold">CargoMate</span>, a logistics platform I built from scratch.
            </p>
            <p>
              I believe great software is built at the intersection of clean code, user empathy, and
              problem-solving. My goal is to join a forward-thinking team where I can ship meaningful
              products and grow as an engineer.
            </p>

            {/* Quick facts */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              {[
                { icon: 'fa-graduation-cap', label: 'Degree', value: 'B.Tech – CSE' },
                { icon: 'fa-university', label: 'College', value: 'VIIT, Vizag' },
                { icon: 'fa-calendar-alt', label: 'Year', value: '3rd Year, Sem 2' },
                { icon: 'fa-map-marker-alt', label: 'Location', value: 'Visakhapatnam, AP' },
                { icon: 'fa-briefcase', label: 'Status', value: 'Open to Opportunities' },
                { icon: 'fa-code', label: 'Focus', value: 'MERN Stack' },
              ].map(f => (
                <div key={f.label} className="flex items-start gap-3 glass-card p-3 shadow-sm">
                  <i className={`fas ${f.icon} text-indigo-500 mt-0.5 w-4 flex-shrink-0`}></i>
                  <div>
                    <p className="text-xs text-slate-400 dark:text-slate-500 font-medium">{f.label}</p>
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 leading-tight">{f.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stat cards */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { num: '12+', label: 'Technologies', icon: 'fa-layer-group', color: 'from-indigo-500 to-violet-600' },
              { num: '1', label: 'Major Project', icon: 'fa-rocket', color: 'from-cyan-500 to-blue-600' },
              { num: '8.9', label: 'B.Tech CGPA', icon: 'fa-graduation-cap', color: 'from-amber-400 to-orange-500' },
              { num: '2027', label: 'Graduation', icon: 'fa-graduation-cap', color: 'from-rose-500 to-pink-600' },
            ].map(s => (
              <div key={s.label} className="glass-card p-6 flex flex-col items-center text-center gap-3 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${s.color}`}>
                  <i className={`fas ${s.icon} text-white`}></i>
                </div>
                <span className="text-3xl font-extrabold gradient-text">{s.num}</span>
                <span className="text-sm font-medium text-slate-500 dark:text-slate-400">{s.label}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
