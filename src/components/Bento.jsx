import React from 'react'
import { motion } from 'framer-motion'
import { Brain, LineChart, Network } from 'lucide-react'

const items = [
  {
    icon: LineChart,
    title: 'P1 · Macro Fundamental',
    desc: 'Flujos macro, tasas reales, posicionamiento COT y liquidez del dólar. El contexto que mueve el oro.',
    accent: 'from-cyan-500/30 to-cyan-400/10'
  },
  {
    icon: Network,
    title: 'P2 · Técnico-Institucional',
    desc: 'Niveles de alta probabilidad, desequilibrios, order blocks y dinámica de volumen institucional.',
    accent: 'from-white/10 to-white/0'
  },
  {
    icon: Brain,
    title: 'P3 · Modelo de ML',
    desc: 'Modelo propietario de clasificación/score que sintetiza P1 y P2 en una señal accionable.',
    accent: 'from-amber-400/20 to-amber-200/0'
  }
]

const Bento = () => {
  return (
    <section id="bento" className="relative w-full bg-black py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center text-3xl font-semibold text-white md:text-4xl"
        >
          3 Pasos. Una Señal.
        </motion.h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
            >
              <div className={`pointer-events-none absolute -inset-px bg-gradient-to-br ${item.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
              <div className="relative z-10">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-black/50 text-white/90 backdrop-blur">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-white/70">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Bento
