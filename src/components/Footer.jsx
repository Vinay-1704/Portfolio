export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 pb-10 border-b border-gray-800">

          {/* Brand */}
          <div>
            <a href="#hero" className="font-mono text-2xl font-bold text-white hover:opacity-80 transition-opacity">
              <span className="text-indigo-500">&lt;</span>DV<span className="text-indigo-500">/&gt;</span>
            </a>
            <p className="text-slate-400 text-sm mt-3 leading-relaxed max-w-52">
              Aspiring MERN Stack Developer passionate about building scalable, real-world web applications.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                ['About', '#about'],
                ['Skills', '#skills'],
                ['Projects', '#projects'],
                ['Education', '#education'],
                ['Achievements', '#achievements'],
                ['Contact', '#contact'],
              ].map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="text-slate-400 hover:text-indigo-400 text-sm transition-colors duration-200">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Find me on */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">Find Me On</h4>
            <div className="flex gap-3 flex-wrap">
              {[
                { icon: 'fab fa-github', href: 'https://github.com/Vinay-1704', label: 'GitHub', color: 'hover:bg-gray-700' },
                { icon: 'fab fa-linkedin-in', href: 'https://www.linkedin.com/in/dasari-vinay1704', label: 'LinkedIn', color: 'hover:bg-blue-600' },
                { icon: 'fas fa-envelope', href: 'mailto:dasarinavya1704@gmail.com', label: 'Email', color: 'hover:bg-indigo-600' },
                { icon: 'fab fa-twitter', href: 'https://twitter.com/dasari_vinay', label: 'Twitter', color: 'hover:bg-sky-500' },
              ].map(s => (
                <a key={s.label} href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className={`w-10 h-10 rounded-xl border border-gray-700 bg-gray-900 flex items-center justify-center text-slate-400 hover:text-white ${s.color} hover:border-transparent hover:-translate-y-1 transition-all duration-300`}>
                  <i className={s.icon}></i>
                </a>
              ))}
            </div>
            <p className="text-slate-500 text-xs mt-6">
              📍 Visakhapatnam, Andhra Pradesh, India
            </p>
          </div>

        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6">
          <p className="text-slate-500 text-sm">
            © {year} <span className="text-indigo-400 font-semibold">Dasari Vinay</span>. Crafted with
            <i className="fas fa-heart text-rose-500 mx-1"></i>
            and lots of ☕
          </p>
          <a href="#hero" aria-label="Back to top"
            className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center text-white hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300">
            <i className="fas fa-arrow-up text-sm"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}
