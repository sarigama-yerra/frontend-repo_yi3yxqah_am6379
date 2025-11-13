import { motion } from 'framer-motion'
import { Megaphone, Trophy, Crown, GraduationCap } from 'lucide-react'

const events = [
  {
    icon: Megaphone,
    title: 'Public Campaign',
    desc: 'Gerakan bersama untuk menyuarakan antikorupsi kepada masyarakat luas.',
    color: 'from-sky-500 to-emerald-500',
  },
  {
    icon: Trophy,
    title: 'Lomba',
    desc: 'Kompetisi kreatif untuk menyalurkan ide dan bakat generasi antikorupsi.',
    color: 'from-amber-500 to-rose-500',
  },
  {
    icon: Crown,
    title: 'Pemilihan Duta Anti Korupsi',
    desc: 'Mencari figur inspiratif yang mewakili nilai integritas.',
    color: 'from-violet-500 to-sky-500',
  },
  {
    icon: GraduationCap,
    title: 'Seminar Antikorupsi',
    desc: 'Wawasan tentang SPI, pengawasan, dan budaya integritas di kampus.',
    color: 'from-emerald-500 to-cyan-500',
  },
]

export default function Events() {
  return (
    <section id="events" className="relative py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Rangkaian Acara</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Aktivitas utama dalam Integrity Day Festival (ID Fest)
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative bg-white rounded-xl border border-gray-100 shadow-md overflow-hidden"
            >
              <div className={`absolute -top-16 -right-16 h-32 w-32 bg-gradient-to-br ${item.color} opacity-20 rounded-full blur-2xl`} />
              <div className="p-6">
                <div className="h-12 w-12 rounded-lg bg-gray-50 flex items-center justify-center mb-4">
                  <item.icon className="text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-gray-600">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
