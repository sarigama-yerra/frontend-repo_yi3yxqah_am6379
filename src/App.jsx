import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Events from './components/Events'
import SeminarSection from './components/SeminarSection'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-sky-50 text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <div id="seminar"><SeminarSection /></div>
        <Events />
        <Contact />
      </main>
      <footer className="border-t border-emerald-100/60 bg-white/60 backdrop-blur py-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Integrity Day Festival • PKN STAN. Semua hak dilindungi.
      </footer>
    </div>
  )
}

export default App
