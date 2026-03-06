const timeline = [
  {
    period: '2023 – 2027',
    badge: 'B.Tech',
    degree: 'Bachelor of Technology – Computer Science & Engineering',
    institution: "Vignan's Institute of Information Technology",
    location: 'Visakhapatnam, Andhra Pradesh',
    detail: 'Currently pursuing B.Tech CSE (3rd Year, 2nd Semester) with a CGPA of 8.9. Core subjects include Data Structures, Algorithms, DBMS, Operating Systems, Computer Networks, and Web Technologies.',
    tags: ['Expected 2027', 'CGPA: 8.9', 'Visakhapatnam'],
    color: 'from-indigo-500 to-violet-600',
    icon: 'fa-graduation-cap',
  },
  {
    period: '2021 – 2023',
    badge: 'Intermediate',
    degree: 'MPC – Mathematics, Physics, Chemistry',
    institution: 'Tirumala Junior College',
    location: 'Visakhapatnam, Andhra Pradesh',
    detail: 'Completed Class XII (MPC) with a score of 931 marks at Tirumala Junior College, building a strong analytical foundation. Secured EAMCET Rank 8160.',
    tags: ['Score: 931 Marks', 'EAMCET Rank: 8160', 'Visakhapatnam'],
    color: 'from-cyan-500 to-blue-600',
    icon: 'fa-school',
  },
]

export default function Education() {
  return (
    <section id="education" className="py-24 bg-slate-50 dark:bg-gray-950 transition-colors">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="section-title text-slate-900 dark:text-white">
          My <span className="gradient-text">Education</span>
        </h2>
        <p className="section-subtitle">Academic background</p>

        {/* Timeline */}
        <div className="relative pl-8 border-l-2 border-slate-200 dark:border-gray-700 space-y-10">
          {timeline.map((item, i) => (
            <div key={i} className="relative">
              {/* Dot */}
              <div className={`absolute -left-[41px] top-5 w-5 h-5 rounded-full bg-gradient-to-br ${item.color} ring-4 ring-slate-50 dark:ring-gray-950 shadow`}></div>

              <div className="glass-card p-6 shadow-sm hover:-translate-x-1 hover:shadow-md transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0`}>
                      <i className={`fas ${item.icon} text-white text-xs`}></i>
                    </div>
                    <span className="text-sm font-mono text-cyan-500 dark:text-cyan-400">{item.period}</span>
                  </div>
                  <span className={`px-3 py-1 text-xs font-bold rounded-full bg-gradient-to-r ${item.color} text-white`}>
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{item.degree}</h3>
                <h4 className="text-sm text-slate-600 dark:text-slate-400 flex items-center gap-2 mb-3">
                  <i className="fas fa-university text-indigo-500"></i>
                  {item.institution} — {item.location}
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
