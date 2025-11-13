import { motion } from 'framer-motion'
import { ShieldCheck, Scale, Megaphone, Sparkles } from 'lucide-react'

const icons = [
  { Icon: ShieldCheck, color: 'text-emerald-500', delay: 0 },
  { Icon: Scale, color: 'text-amber-500', delay: 0.2 },
  { Icon: Megaphone, color: 'text-sky-500', delay: 0.4 },
  { Icon: Sparkles, color: 'text-rose-500', delay: 0.6 },
]

export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* gradient blobs */}
      <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-emerald-400/20 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-rose-400/20 blur-3xl" />
      <div className="absolute top-1/3 -right-20 h-72 w-72 rounded-full bg-amber-400/20 blur-3xl" />

      {/* floating icons */}
      <div className="absolute inset-0">
        {icons.map(({ Icon, color, delay }, idx) => (
          <motion.div
            key={idx}
            className="absolute"
            initial={{ y: 20, opacity: 0 }}
            animate={{
              y: [0, -20, 0],
              opacity: 1,
              x: [0, 15, -10, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay,
              ease: 'easeInOut',
            }}
            style={{
              top: `${20 + idx * 18}%`,
              left: `${10 + (idx % 3) * 25}%`,
            }}
          >
            <Icon className={`${color}`} size={40} />
          </motion.div>
        ))}
      </div>

      {/* dotted grid overlay */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="2" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>
    </div>
  )
}
