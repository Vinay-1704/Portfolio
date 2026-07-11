const internships = [
  {
    period: 'Oct 2024 – Dec 2024',
    role: 'Web Full Stack Developer Virtual Internship',
    company: 'AICTE EduSkills',
    detail: 'Developed full-stack web applications using modern front-end and back-end technologies, implementing responsive user interfaces and RESTful APIs. Integrated databases, performed application testing, and followed industry-standard software development practices.',
    tags: ['Full Stack', 'REST APIs', 'Frontend', 'Backend'],
    color: 'from-indigo-500 to-violet-600',
    icon: 'fa-laptop-code',
  },
  {
    period: 'May 2026 – Jun 2026',
    role: 'AI-Machine Learning Internship',
    company: 'CSC India (APSCHE)',
    detail: 'Applied machine learning techniques including data preprocessing, feature engineering, model training, and performance evaluation using Python. Worked on AI-driven solutions and gained practical experience in predictive modeling, data analysis, and machine learning workflows.',
    tags: ['Python', 'Machine Learning', 'Data Analysis'],
    color: 'from-emerald-500 to-green-600',
    icon: 'fa-robot',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="section-title text-slate-900 dark:text-white">
          My <span className="gradient-text">Experience</span>
        </h2>
        <p className="section-subtitle">Internships and Work</p>

        <div className="relative pl-8 border-l-2 border-slate-200 dark:border-gray-700 space-y-10">
          {internships.map((item, i) => (
            <div key={i} className="relative">
              <div className={`absolute -left-[41px] top-5 w-5 h-5 rounded-full bg-gradient-to-br ${item.color} ring-4 ring-white dark:ring-gray-900 shadow`}></div>

              <div className="glass-card p-6 shadow-sm hover:-translate-x-1 hover:shadow-md transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0`}>
                      <i className={`fas ${item.icon} text-white text-xs`}></i>
                    </div>
                    <span className="text-sm font-mono text-cyan-500 dark:text-cyan-400">{item.period}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{item.role}</h3>
                <h4 className="text-sm text-slate-600 dark:text-slate-400 flex items-center gap-2 mb-3">
                  <i className="fas fa-building text-indigo-500"></i>
                  {item.company}
                </h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4">{item.detail}</p>

                <div className="flex flex-wrap gap-2">
                  {item.tags.map(t => (
                    <span key={t} className="skill-tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
