import { personalInfo } from '../data/portfolioData'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { HiHeart } from 'react-icons/hi'

export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-dark-600">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-gray-500 text-sm flex items-center gap-1">
          Built with <HiHeart className="text-red-500" size={14} /> by {personalInfo.name}
        </p>
        <p className="text-gray-500 text-xs">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
        <div className="flex gap-3">
          <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-accent transition-colors">
            <FiGithub size={18} />
          </a>
          <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-accent transition-colors">
            <FiLinkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
