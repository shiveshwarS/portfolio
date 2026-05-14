import { skills } from '../data/portfolioData'
import { HiCode, HiServer, HiCloud, HiShieldCheck, HiDatabase, HiCube, HiDeviceMobile } from 'react-icons/hi'

const categoryIcons = {
  Frontend: HiCode,
  Backend: HiServer,
  Mobile: HiDeviceMobile,
  Databases: HiDatabase,
  'Cloud & DevOps': HiCloud,
  Cybersecurity: HiShieldCheck,
  Programming: HiCode,
  'Tools & Others': HiCube,
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          Skills & <span className="text-accent">Expertise</span>
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Technologies and tools I work with across different domains
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skills.map((group) => {
            const Icon = categoryIcons[group.category] || HiCube
            return (
              <div key={group.category} className="bg-dark-800/50 border border-dark-600 rounded-2xl p-6 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-accent/10 rounded-xl text-accent group-hover:bg-accent/20 transition-colors">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-semibold text-lg">{group.category}</h3>
                </div>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-gray-400 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
