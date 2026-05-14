import { Link } from 'react-router-dom'
import { HiArrowDown, HiCode, HiDeviceMobile } from 'react-icons/hi'
import { personalInfo } from '../data/portfolioData'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-purple-500/5" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl hidden sm:block" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl hidden sm:block" />
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full text-accent text-sm font-medium mb-6 border border-accent/20">
          <HiCode size={16} />
          <span>Available for opportunities</span>
        </div>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-accent to-purple-400 bg-clip-text text-transparent">
            {personalInfo.name}
          </span>
        </h1>
        <div className="flex items-center justify-center gap-2 text-xl sm:text-2xl text-gray-300 mb-6">
          <HiDeviceMobile />
          <span>{personalInfo.title}</span>
        </div>
        <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-8">
          {personalInfo.bio}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Link to="/projects" className="px-6 py-3 bg-accent text-dark-900 font-semibold rounded-xl hover:bg-accent-dark transition-colors shadow-lg shadow-accent/25">
            View My Work
          </Link>
          <Link to="/contact" className="px-6 py-3 border border-gray-600 text-gray-300 font-semibold rounded-xl hover:border-accent hover:text-accent transition-colors">
            Get In Touch
          </Link>
        </div>
      </div>
      <Link to="/certifications" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 hover:text-accent transition-colors animate-bounce">
        <HiArrowDown size={24} />
      </Link>
    </section>
  )
}
