import { useEffect, useRef } from 'react'

const skillCategories = [
  {
    title: 'Languages',
    icon: 'fa-code',
    color: 'from-amber-500 to-orange-600',
    skills: [
      { name: 'Python', icon: 'devicon-python-plain colored', level: 85 },
      { name: 'Java', icon: 'devicon-java-plain colored', level: 85 },
      { name: 'JavaScript', icon: 'devicon-javascript-plain colored', level: 85 },
      { name: 'C', icon: 'devicon-c-plain colored', level: 72 },
    ],
  },
  {
    title: 'Frontend & Backend',
    icon: 'fa-layer-group',
    color: 'from-indigo-500 to-violet-600',
    skills: [
      { name: 'React.js', icon: 'devicon-react-original colored', level: 82 },
      { name: 'FastAPI', icon: 'devicon-fastapi-plain colored', level: 80 },
      { name: 'Node.js', icon: 'devicon-nodejs-plain colored', level: 80 },
      { name: 'Express.js', icon: 'devicon-express-original', level: 78 },
    ],
  },
  {
    title: 'Data & AI',
    icon: 'fa-brain',
    color: 'from-emerald-500 to-green-600',
    skills: [
      { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored', level: 80 },
      { name: 'MongoDB', icon: 'devicon-mongodb-plain colored', level: 80 },
      { name: 'Machine Learning', icon: 'fas fa-robot', level: 75 },
      { name: 'Predictive Analytics', icon: 'fas fa-chart-line', level: 70 },
    ],
  },
  {
    title: 'Tools & Concepts',
    icon: 'fa-wrench',
    color: 'from-rose-500 to-pink-600',
    skills: [
      { name: 'Git & GitHub', icon: 'devicon-github-original', level: 85 },
      { name: 'Linux', icon: 'devicon-linux-plain', level: 75 },
      { name: 'WebSockets', icon: 'fas fa-network-wired', level: 80 },
      { name: 'Data Structures', icon: 'fas fa-sitemap', level: 78 },
    ],
  },
]

function SkillBar({ level }) {
  const barRef = useRef(null)
  useEffect(() => {
    const el = barRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.style.width = level + '%'; obs.disconnect() } },
      { threshold: 0.3 }
    )
    obs.observe(el.parentElement)
    return () => obs.disconnect()
  }, [level])

  return (
    <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-gray-700 overflow-hidden">
      <div
        ref={barRef}
        style={{ width: '0%', transition: 'width 1.2s ease' }}
        className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400"
      ></div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-gray-950 transition-colors">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="section-title text-slate-900 dark:text-white">
          My <span className="gradient-text">Skills</span>
        </h2>
        <p className="section-subtitle">Technologies I work with</p>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map(cat => (
            <div key={cat.title} className="glass-card p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center`}>
                  <i className={`fas ${cat.icon} text-white text-sm`}></i>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{cat.title}</h3>
              </div>

              {/* Skills list */}
              <div className="space-y-4">
                {cat.skills.map(skill => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <i className={`${skill.icon} text-xl`}></i>
                        <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{skill.name}</span>
                      </div>
                      <span className="text-xs font-mono text-slate-500 dark:text-slate-400">{skill.level}%</span>
                    </div>
                    <SkillBar level={skill.level} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
