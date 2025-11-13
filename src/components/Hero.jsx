import { motion } from 'framer-motion'
import AnimatedBackground from './AnimatedBackground'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 backdrop-blur text-emerald-700 text-sm font-medium shadow-sm"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          Integrity Day Festival • PKN STAN
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900"
        >
          Rayakan Integritas, Lawan Korupsi
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-4 text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto"
        >
          Festival untuk memperingati Hari Antikorupsi Dunia pada 9 Desember. Bangun
          kesadaran, semangat, dan budaya integritas bersama komunitas PKN STAN.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#events" className="px-6 py-3 rounded-lg bg-emerald-600 text-white font-semibold shadow hover:bg-emerald-700 transition-colors">
            Lihat Rangkaian Acara
          </a>
          <a href="#contact" className="px-6 py-3 rounded-lg bg-white text-emerald-700 font-semibold shadow border border-emerald-200 hover:bg-emerald-50 transition-colors">
            Hubungi Panitia
          </a>
        </motion.div>
      </div>
    </section>
  )
}
