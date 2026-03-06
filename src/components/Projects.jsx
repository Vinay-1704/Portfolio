const features = [
  'Shipment posting and bidding system',
  'Real-time driver and shipment tracking',
  'Real-time WebSocket-based chat',
  'Driver ratings and performance analytics',
  'JWT-secured authentication',
  'Responsive dashboards',
  'Dark / light theme toggle',
  'Toast notifications and modals',
]

const techStack = {
  Frontend: ['React.js', 'React Router', 'CSS'],
  Backend: ['Node.js', 'Express.js'],
  Database: ['MongoDB', 'Mongoose'],
  Other: ['JWT Auth', 'REST APIs', 'WebSocket'],
}

const stackColors = {
  Frontend: 'from-indigo-500 to-violet-600',
  Backend: 'from-cyan-500 to-blue-600',
  Database: 'from-emerald-500 to-green-600',
  Other: 'from-amber-500 to-orange-600',
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="section-title text-slate-900 dark:text-white">
          Featured <span className="gradient-text">Project</span>
        </h2>
        <p className="section-subtitle">What I've built</p>

        <div className="glass-card overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">

          {/* Card banner */}
          <div className="relative h-48 md:h-56 bg-gradient-to-br from-indigo-600 via-violet-600 to-cyan-500 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0xLjEuOS0yIDItMnMyIDkuOSAyIDJ2MmMwIDEuMS0uOSAyLTIgMnMtMi0uOS0yLTJ2LTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>
            <div className="text-center z-10">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-3 border border-white/30">
                <i className="fas fa-truck text-4xl text-white"></i>
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">CargoMate</h3>
              <p className="text-white/75 text-sm mt-1">Logistics & Transportation Platform</p>
            </div>
            {/* Action links */}
            <div className="absolute top-4 right-4 flex gap-2">
              <a href="https://github.com/dasari-vinay/cargomate" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 bg-white/20 hover:bg-white/40 border border-white/30 rounded-xl flex items-center justify-center text-white transition-colors">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 bg-white/20 hover:bg-white/40 border border-white/30 rounded-xl flex items-center justify-center text-white transition-colors">
                <i className="fas fa-external-link-alt text-sm"></i>
              </a>
            </div>
          </div>

          {/* Card body */}
          <div className="p-6 md:p-8 grid md:grid-cols-2 gap-8">

            {/* Left: Description + Features */}
            <div>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                CargoMate is a full-stack logistics platform connecting <strong className="text-slate-800 dark:text-slate-200">shippers and drivers</strong> for efficient freight transportation.
                Shippers can post shipments; drivers can bid on them. The platform features real-time tracking,
                in-app chat, driver ratings, and analytics dashboards, all wrapped in a clean,
                responsive UI with dark/light mode support.
              </p>

              <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-widest mb-3">
                Key Features
              </h4>
              <ul className="space-y-2">
                {features.map(f => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <i className="fas fa-check-circle text-indigo-500 mt-0.5 flex-shrink-0"></i>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Tech Stack */}
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-widest mb-4">
                Tech Stack
              </h4>
              <div className="space-y-4">
                {Object.entries(techStack).map(([cat, items]) => (
                  <div key={cat}>
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`w-1 h-4 rounded bg-gradient-to-b ${stackColors[cat]}`}></div>
                      <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{cat}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {items.map(t => (
                        <span key={t} className="skill-tag">{t}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Tools used */}
              <div className="mt-6 pt-6 border-t border-slate-200 dark:border-gray-700">
                <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-3">Tools Used</h4>
                <div className="flex flex-wrap gap-2">
                  {['VS Code', 'MongoDB Compass', 'Postman', 'Browser DevTools'].map(t => (
                    <span key={t} className="px-2 py-1 text-xs rounded-md bg-slate-100 dark:bg-gray-800 text-slate-600 dark:text-slate-400 font-medium">{t}</span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
