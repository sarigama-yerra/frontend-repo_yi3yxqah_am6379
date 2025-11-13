import { motion } from 'framer-motion'
import { Shield, FileSearch, Building2 } from 'lucide-react'

export default function SeminarSection() {
  const points = [
    'Peran strategis Satuan Pemeriksaan Internal (SPI)',
    'Penguatan sistem pengawasan dan pencegahan korupsi',
    'Menumbuhkan budaya integritas, transparansi, akuntabilitas',
  ]

  return (
    <section className="relative py-20 bg-gradient-to-br from-emerald-50 to-sky-50">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="order-2 md:order-1"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Seminar Antikorupsi</h2>
          <p className="mt-3 text-gray-700">
            Seminar memberikan wawasan bagi civitas academica PKN STAN untuk memperkuat tata kelola kampus yang berintegritas.
          </p>

          <ul className="mt-6 space-y-3">
            {points.map((p, i) => (
              <motion.li
                key={p}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-start gap-3"
              >
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  ✓
                </span>
                <span className="text-gray-700">{p}</span>
              </motion.li>
            ))}
          </ul>

          <div className="mt-6 flex gap-3">
            <span className="inline-flex items-center gap-2 text-emerald-700 bg-white border border-emerald-100 px-3 py-1 rounded-full text-sm">
              <Shield size={16} /> Integritas
            </span>
            <span className="inline-flex items-center gap-2 text-sky-700 bg-white border border-sky-100 px-3 py-1 rounded-full text-sm">
              <FileSearch size={16} /> Pengawasan
            </span>
            <span className="inline-flex items-center gap-2 text-amber-700 bg-white border border-amber-100 px-3 py-1 rounded-full text-sm">
              <Building2 size={16} /> Tata Kelola
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="order-1 md:order-2"
        >
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg bg-white">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-sky-500/10" />
            <div className="absolute inset-4 rounded-lg border-2 border-dashed border-emerald-300/60" />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="h-40 w-40 rounded-full border-4 border-emerald-400/50 border-t-transparent"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
