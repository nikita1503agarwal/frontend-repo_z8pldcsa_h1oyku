import React from 'react'
import { motion } from 'framer-motion'

const FinalCTA = () => {
  return (
    <section className="relative w-full bg-black py-20">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-6 max-w-3xl text-3xl font-semibold text-white"
        >
          Precisión que inspira confianza. Convierte incertidumbre en ventaja.
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mx-auto mb-8 max-w-2xl text-white/70"
        >
          Únete a operadores que exigen rigor, contexto y transparencia. MIDAS no promete milagros: entrega edge cuantificable.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          href="#pricing"
          className="inline-flex items-center gap-2 rounded-xl bg-[#D4AF37] px-6 py-3 text-sm font-semibold text-black shadow-[0_0_40px_rgba(212,175,55,0.35)] transition-transform hover:scale-[1.02]"
        >
          Ver Planes
        </motion.a>
      </div>

      {/* subtle top border glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-300/40 to-transparent" />
    </section>
  )
}

export default FinalCTA
