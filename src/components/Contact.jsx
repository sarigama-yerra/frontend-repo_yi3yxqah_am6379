import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Kontak Panitia</h2>
          <p className="mt-3 text-gray-600">Hubungi kami untuk informasi lebih lanjut</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { label: 'Alamat', value: 'Kampus PKN STAN, Bintaro Sektor V, Tanggerang Selatan, 1522' },
            { label: 'Telepon', value: '+6281212472803' },
            { label: 'Email', value: 'integritydayfestival2023@gmail.com' },
          ].map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-xl border border-gray-100 p-6 shadow"
            >
              <p className="text-sm uppercase tracking-wide text-gray-500">{item.label}</p>
              <p className="mt-2 font-semibold text-gray-900">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
