import { HiBriefcase, HiAcademicCap } from 'react-icons/hi'
import { experience } from '../data/portfolioData'

export default function ExperiencePage() {
  return (
    <section className="py-16 sm:py-24 px-4 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          <span className="text-accent">Experience</span>
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Professional journey and internships
        </p>
        <div className="relative">
          <div className="absolute left-5 sm:left-6 top-0 bottom-0 w-px bg-dark-500" />
          <div className="space-y-8">
            {experience.map((item, index) => (
              <div key={index} className="relative pl-14 sm:pl-16">
                <div className="absolute left-3 sm:left-4 top-1 p-2 bg-dark-700 border border-dark-500 rounded-full text-accent">
                  {item.type === 'Internship' ? <HiBriefcase size={18} /> : <HiAcademicCap size={18} />}
                </div>
                <div className="bg-dark-800/50 border border-dark-600 rounded-xl p-6 hover:border-accent/30 transition-all duration-300">
                  <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                    <h3 className="font-semibold text-lg">{item.role}</h3>
                    <span className="text-xs px-2.5 py-1 bg-accent/10 text-accent rounded-full">{item.type}</span>
                  </div>
                  {item.company && <p className="text-sm text-gray-400 mb-2">{item.company}</p>}
                  {item.period && <p className="text-xs text-gray-500 mb-3">{item.period}</p>}
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
