import { HiMail, HiLocationMarker } from 'react-icons/hi'
import { FiGithub, FiLinkedin, FiSend } from 'react-icons/fi'
import { personalInfo } from '../data/portfolioData'

export default function ContactPage() {
  return (
    <section className="py-24 px-4 min-h-screen bg-dark-800/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          Get In <span className="text-accent">Touch</span>
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Have a project in mind or just want to say hi? Let's connect!
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-center gap-4 p-4 bg-dark-700/50 border border-dark-500 rounded-xl">
              <div className="p-3 bg-accent/10 rounded-xl text-accent">
                <HiMail size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <a href={`mailto:${personalInfo.email}`} className="text-gray-200 hover:text-accent transition-colors">
                  {personalInfo.email}
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-dark-700/50 border border-dark-500 rounded-xl">
              <div className="p-3 bg-accent/10 rounded-xl text-accent">
                <HiLocationMarker size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="text-gray-200">{personalInfo.location}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-dark-700/50 border border-dark-500 rounded-xl text-gray-400 hover:text-accent hover:border-accent/30 transition-all">
                <FiGithub size={20} />
              </a>
              <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-dark-700/50 border border-dark-500 rounded-xl text-gray-400 hover:text-accent hover:border-accent/30 transition-all">
                <FiLinkedin size={20} />
              </a>
            </div>
          </div>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full px-4 py-3 bg-dark-700/50 border border-dark-500 rounded-xl text-gray-200 placeholder-gray-500 focus:outline-none focus:border-accent/50 transition-colors" />
            <input type="email" placeholder="Your Email" className="w-full px-4 py-3 bg-dark-700/50 border border-dark-500 rounded-xl text-gray-200 placeholder-gray-500 focus:outline-none focus:border-accent/50 transition-colors" />
            <textarea rows={4} placeholder="Your Message" className="w-full px-4 py-3 bg-dark-700/50 border border-dark-500 rounded-xl text-gray-200 placeholder-gray-500 focus:outline-none focus:border-accent/50 transition-colors resize-none" />
            <button type="submit" className="flex items-center gap-2 px-6 py-3 bg-accent text-dark-900 font-semibold rounded-xl hover:bg-accent-dark transition-colors shadow-lg shadow-accent/25">
              <FiSend size={16} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
