import React, { useState } from 'react'
import { motion } from 'framer-motion'

const plans = [
  {
    name: 'Pro',
    priceMonthly: 129,
    priceYearly: 129 * 12 * 0.8,
    features: [
      'Señal P3 diaria + score de convicción',
      'Acceso a P1 y P2 resumidos',
      'Alertas en tiempo real',
      'Soporte prioritario'
    ],
    cta: 'Empezar Ahora',
  },
  {
    name: 'Quant',
    priceMonthly: 349,
    priceYearly: 349 * 12 * 0.8,
    features: [
      'Data API + Webhooks',
      'Breakdowns completos P1/P2/P3',
      'Acceso anticipado a modelos',
      'Canal privado con el equipo'
    ],
    cta: 'Contactar',
  }
]

const format = (n) => n.toLocaleString('es-ES', { minimumFractionDigits: 0 })

const Pricing = () => {
  const [yearly, setYearly] = useState(true)

  return (
    <section id="pricing" className="relative w-full bg-black py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">Planes</h2>
            <p className="mt-2 text-white/70">Selecciona el plan que se ajusta a tu operación.</p>
          </div>

          {/* Billing toggle */}
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur">
            <button
              onClick={() => setYearly(false)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${!yearly ? 'bg-black text-white' : 'text-white/70 hover:text-white'}`}
            >
              Mensual
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${yearly ? 'bg-black text-white' : 'text-white/70 hover:text-white'}`}
            >
              Anual <span className="ml-1 rounded bg-emerald-400/20 px-2 py-0.5 text-[10px] font-semibold text-emerald-300">Ahorra 20%</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {plans.map((plan, i) => {
            const price = yearly ? plan.priceYearly : plan.priceMonthly
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
              >
                {/* Gold focus ring on hover */}
                <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 ring-2 ring-[#D4AF37]/60 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative z-10">
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
                    {plan.name === 'Quant' && (
                      <span className="rounded-full border border-amber-400/20 bg-amber-400/10 px-2 py-0.5 text-xs font-medium text-amber-300">Elite</span>
                    )}
                  </div>
                  <div className="mb-6 flex items-end gap-2">
                    <span className="text-4xl font-bold text-white">${format(price)}</span>
                    <span className="text-sm text-white/60">{yearly ? '/año' : '/mes'}</span>
                  </div>

                  <ul className="mb-6 space-y-2 text-sm text-white/80">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-cyan-400" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between">
                    <a
                      href={plan.name === 'Quant' ? 'mailto:contacto@midas.ai?subject=Plan%20Quant' : '#'}
                      className={`inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition ${plan.name === 'Quant' ? 'border border-white/15 bg-white/5 text-white hover:bg-white/10' : 'bg-[#D4AF37] text-black shadow-[0_0_40px_rgba(212,175,55,0.25)] hover:scale-[1.01]'}`}
                    >
                      {plan.cta}
                    </a>
                    <span className="text-xs text-white/50">Sin compromiso</span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Pricing
