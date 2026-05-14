import { HiExternalLink } from 'react-icons/hi'
import { FiGithub, FiFolder } from 'react-icons/fi'
import { projects } from '../data/portfolioData'

export default function Projects() {
  const previewIcons = ['/preview/1.png', '/preview/2.png', '/preview/3.png']

  return (
    <section className="py-24 px-4 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          Featured <span className="text-accent">Projects</span>
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Some of the apps and tools I've built
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-dark-800/50 border border-dark-600 rounded-2xl overflow-hidden hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 group">
              <div className="h-40 flex items-center justify-center bg-gradient-to-br from-accent/5 to-purple-500/5">
                {previewIcons[index] ? (
                  <img
                    src={previewIcons[index]}
                    alt={`${project.title} icon`}
                    className="w-20 h-20 object-contain group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                ) : null}
                <div className="hidden items-center justify-center text-gray-600 group-hover:text-accent transition-colors" style={{ display: 'none' }}>
                  <FiFolder size={48} />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 bg-dark-600 text-gray-300 rounded-lg">{t}</span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.links.github && project.links.github !== '#' && (
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-accent transition-colors">
                      <FiGithub size={16} /> Code
                    </a>
                  )}
                  {project.links.live && project.links.live !== '#' && (
                    <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-accent transition-colors">
                      <HiExternalLink size={16} /> Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
