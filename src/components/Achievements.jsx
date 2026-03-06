const achievements = [
  {
    icon: 'fa-sitemap',
    color: 'from-indigo-500 to-violet-600',
    type: 'Technical Skill',
    title: 'Data Structures & Algorithms (Java)',
    desc: 'Solved 100+ DSA problems across arrays, linked lists, trees, graphs, dynamic programming, and sorting algorithms using Java. Consistent practice on LeetCode and CodeChef.',
    tags: ['Java', 'LeetCode', 'CodeChef'],
  },
  {
    icon: 'fa-layer-group',
    color: 'from-cyan-500 to-blue-600',
    type: 'Project Achievement',
    title: 'Full-Stack MERN Application',
    desc: 'Successfully built CargoMate, a production-grade MERN stack logistics platform featuring real-time WebSocket communication, JWT authentication, and responsive dashboards from ground up.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js'],
  },
  {
    icon: 'fa-bolt',
    color: 'from-amber-500 to-orange-500',
    type: 'Technical Achievement',
    title: 'Real-Time Systems Development',
    desc: 'Implemented live WebSocket-based chat, real-time shipment and driver tracking, and push notification systems — gaining hands-on expertise in event-driven architectures and asynchronous programming.',
    tags: ['WebSocket', 'Real-Time', 'Async JS'],
  },
  {
    icon: 'fa-graduation-cap',
    color: 'from-rose-500 to-pink-600',
    type: 'Academic',
    title: 'B.Tech Academic Excellence – 8.9 CGPA',
    desc: 'Maintaining a strong CGPA of 8.9 in B.Tech Computer Science & Engineering at Vignan\'s Institute of Information Technology, Visakhapatnam — reflecting consistent academic performance and dedication.',
    tags: ['B.Tech CSE', 'VIIT', 'CGPA 8.9'],
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="section-title text-slate-900 dark:text-white">
          Achievements & <span className="gradient-text">Highlights</span>
        </h2>
        <p className="section-subtitle">Milestones I am proud of</p>

        <div className="grid sm:grid-cols-2 gap-6">
          {achievements.map((a, i) => (
            <div key={i}
              className="glass-card p-6 flex gap-4 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group">
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${a.color} flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                <i className={`fas ${a.icon} text-white text-xl`}></i>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <span className="text-xs font-mono font-semibold text-cyan-500 dark:text-cyan-400 uppercase tracking-wider">
                  {a.type}
                </span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mt-1 mb-2 leading-tight">
                  {a.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-3">
                  {a.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {a.tags.map(t => (
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
