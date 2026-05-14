import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { HiMenu, HiX } from 'react-icons/hi'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Certifications', to: '/certifications' },
  { label: 'Projects', to: '/projects' },
  { label: 'Experience', to: '/experience' },
  { label: 'Education', to: '/education' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-dark-900/95 backdrop-blur-sm shadow-lg shadow-black/20' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold text-accent tracking-tight">
            Shiveshwar S.
          </Link>
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 text-sm transition-colors rounded-lg hover:bg-dark-600/50 ${
                  location.pathname === link.to ? 'text-accent bg-accent/10' : 'text-gray-300 hover:text-accent'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-300 hover:text-accent p-2">
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-dark-800/95 backdrop-blur-sm border-t border-dark-600">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block px-4 py-2 text-sm transition-colors rounded-lg ${
                  location.pathname === link.to ? 'text-accent bg-accent/10' : 'text-gray-300 hover:text-accent'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
