import { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  // Add scrolled class + detect active section
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = document.querySelectorAll('section[id]')
      sections.forEach(sec => {
        const top = sec.offsetTop - 90
        if (window.scrollY >= top) setActiveLink('#' + sec.id)
      })
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${scrolled ? 'bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl shadow-lg shadow-black/5' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand */}
        <a href="#hero" className="font-mono text-xl font-bold text-slate-900 dark:text-white hover:opacity-75 transition-opacity">
          <span className="text-indigo-500">&lt;</span>DV<span className="text-indigo-500">/&gt;</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`relative text-sm font-medium transition-colors duration-200
                  after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:rounded after:bg-indigo-500 after:transition-all after:duration-300
                  ${activeLink === link.href
                    ? 'text-indigo-500 after:w-full'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white after:w-0 hover:after:w-full'}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          {/* LeetCode profile link */}
          <a href="https://leetcode.com/u/Vinaydasari_553" target="_blank" rel="noopener noreferrer"
            aria-label="LeetCode Profile"
            className="hidden md:flex w-10 h-10 rounded-full items-center justify-center border border-slate-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:bg-orange-500 hover:border-orange-500 hover:scale-110 transition-all duration-200 group">
            <svg className="w-4 h-4 fill-orange-400 group-hover:fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
            </svg>
          </a>

          {/* CodeChef profile link */}
          <a href="https://www.codechef.com/users/vinaydasari" target="_blank" rel="noopener noreferrer"
            aria-label="CodeChef Profile"
            className="hidden md:flex w-10 h-10 rounded-full items-center justify-center border border-slate-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:bg-amber-600 hover:border-amber-600 hover:scale-110 transition-all duration-200 group">
            <img
              src="https://cdn.simpleicons.org/codechef/5B4638"
              alt="CodeChef"
              className="w-5 h-5 group-hover:brightness-0 group-hover:invert transition-all duration-200"
            />
          </a>

          {/* Dark/Light toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-10 h-10 rounded-full flex items-center justify-center border border-slate-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-slate-700 dark:text-yellow-400 hover:scale-110 transition-transform duration-200"
          >
            <i className={`fas ${isDark ? 'fa-sun' : 'fa-moon'}`}></i>
          </button>

          {/* Resume button (desktop) */}
          <a href="/Dasari_Vinay_Resume.pdf" download
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-white text-sm font-semibold hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-200">
            <i className="fas fa-download text-xs"></i> Resume
          </a>

          {/* Hamburger (mobile) */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
            className="md:hidden w-10 h-10 rounded-full flex flex-col items-center justify-center gap-[5px] border border-slate-200 dark:border-gray-700 bg-white dark:bg-gray-900"
          >
            <span className={`block w-5 h-0.5 bg-slate-700 dark:bg-slate-300 rounded transition-all duration-300 ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`}></span>
            <span className={`block w-5 h-0.5 bg-slate-700 dark:bg-slate-300 rounded transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-5 h-0.5 bg-slate-700 dark:bg-slate-300 rounded transition-all duration-300 ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile menu drawer */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-96 border-t border-slate-200 dark:border-gray-800' : 'max-h-0'}`}>
        <ul className="px-6 py-4 flex flex-col gap-4 bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl">
          {navLinks.map(link => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setMenuOpen(false)}
                className="block text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
                {link.label}
              </a>
            </li>
          ))}
          <li><a href="https://leetcode.com/u/Vinaydasari_553" target="_blank" rel="noopener noreferrer"
            className="block text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-orange-500 transition-colors">
            <i className="fas fa-code mr-2 text-orange-400"></i>LeetCode Profile
          </a></li>
          <li><a href="https://www.codechef.com/users/vinaydasari" target="_blank" rel="noopener noreferrer"
            className="block text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-amber-500 transition-colors">
            <i className="fas fa-utensils mr-2 text-amber-500"></i>CodeChef Profile
          </a></li>
          <li>
            <a href="/Dasari_Vinay_Resume.pdf" download
              className="btn-primary w-full justify-center text-sm">
              <i className="fas fa-download text-xs"></i> Download Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
