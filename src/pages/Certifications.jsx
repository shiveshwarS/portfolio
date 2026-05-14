import { HiDownload } from 'react-icons/hi'
import { certifications } from '../data/portfolioData'

const certUrl = (file) => `/certs/${encodeURI(file)}`

export default function Certifications() {
  return (
    <section className="py-16 sm:py-24 px-4 min-h-screen bg-dark-800/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          Certifications & <span className="text-accent">Credentials</span>
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Professional certifications across development, security, cloud, and more
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-dark-700/50 border border-dark-500 rounded-xl overflow-hidden hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 group flex flex-col">
              <div className="relative w-full h-36 sm:h-52 bg-dark-900">
                <embed
                  src={certUrl(cert.file)}
                  type="application/pdf"
                  className="w-full h-full pointer-events-none opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-700/60 via-transparent to-dark-900/20" />
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="font-semibold text-sm leading-tight mb-1">{cert.name}</h3>
                <p className="text-xs text-gray-500 mb-3">{cert.issuer}</p>
                <div className="mt-auto flex gap-2">
                  <a href={certUrl(cert.file)} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs px-3 py-1.5 bg-accent/10 text-accent rounded-lg hover:bg-accent/20 transition-colors">
                    View Full
                  </a>
                  <a href={certUrl(cert.file)} download className="flex items-center gap-1.5 text-xs px-3 py-1.5 bg-dark-600 text-gray-300 rounded-lg hover:bg-dark-500 transition-colors">
                    <HiDownload size={14} />
                    Download
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
