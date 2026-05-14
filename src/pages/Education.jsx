import { HiAcademicCap } from 'react-icons/hi'
import { education } from '../data/portfolioData'

export default function EducationPage() {
  return (
    <section className="py-24 px-4 min-h-screen bg-dark-800/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          <span className="text-accent">Education</span>
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Academic background and qualifications
        </p>
        <div className="space-y-6">
          {education.map((item, index) => (
            <div key={index} className="bg-dark-700/50 border border-dark-500 rounded-xl p-6 hover:border-accent/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-xl text-accent shrink-0">
                  <HiAcademicCap size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{item.degree}</h3>
                  <p className="text-accent text-sm">{item.school}</p>
                  <p className="text-gray-500 text-xs mt-1">{item.year}</p>
                  <p className="text-gray-400 text-sm mt-2">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
