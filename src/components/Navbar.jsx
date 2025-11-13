import { Menu, ShieldCheck } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-emerald-100/60 backdrop-blur bg-white/70">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-bold text-emerald-700">
          <ShieldCheck size={22} /> ID Fest • PKN STAN
        </a>
        <nav className="hidden md:flex items-center gap-6 text-gray-700">
          <a className="hover:text-emerald-700" href="#events">Acara</a>
          <a className="hover:text-emerald-700" href="#seminar">Seminar</a>
          <a className="hover:text-emerald-700" href="#contact">Kontak</a>
        </nav>
        <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-emerald-200 text-emerald-700">
          <Menu size={18} />
        </button>
      </div>
    </header>
  )
}
