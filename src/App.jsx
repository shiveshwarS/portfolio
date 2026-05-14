import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Certifications from './pages/Certifications'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import Education from './pages/Education'
import Contact from './pages/Contact'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-dark-900 text-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
