import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const Hero = () => {
  const { scrollYProgress } = useScroll()
  // Slight darkening on scroll to keep contrast as user moves down
  const darken = useTransform(scrollYProgress, [0, 0.6, 1], [0.35, 0.55, 0.7])

  return (
    <section className="group relative min-h-[92vh] w-full overflow-hidden bg-black">
      {/* Gold background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            `radial-gradient(1200px 600px at 20% 10%, rgba(255,255,255,0.15), rgba(255,255,255,0) 60%),
             radial-gradient(900px 500px at 80% 30%, rgba(0, 255, 255, 0.12), rgba(0,0,0,0) 55%),
             linear-gradient(135deg, #D4AF37 0%, #C49C2F 25%, #B8891F 50%, #8F6B10 75%, #D4AF37 100%)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Brushed gold texture (subtle) */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20 mix-blend-overlay"
        style={{
          backgroundImage:
            `repeating-linear-gradient(100deg, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 4px)`,
          filter: 'blur(0.3px)'
        }}
      />

      {/* Subtle animated shimmer over the gold (intensifies on hover) */}
      <div
        className="pointer-events-none absolute inset-0 opacity-25 transition-opacity duration-700 group-hover:opacity-40"
        style={{
          backgroundImage: 'linear-gradient(115deg, rgba(255,255,255,0) 30%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0) 70%)',
          backgroundSize: '200% 100%',
          animation: 'shimmer 8s ease-in-out infinite',
        }}
      />

      {/* Fine grain overlay for luxury feel */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-overlay"
        style={{
          backgroundImage:
            `radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)`,
          backgroundSize: '2px 2px'
        }}
      />

      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Darkening overlay for contrast that reacts with scroll */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0.85))', opacity: darken }}
      />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block rounded-full border border-white/10 bg-black/30 px-4 py-1 text-xs font-medium tracking-wide text-white/80 backdrop-blur"
          >
            XAU/USD • Institutional-grade Intelligence
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mx-auto max-w-4xl text-5xl font-semibold leading-tight text-white md:text-6xl"
          >
            La Ventaja de la Confluencia. Deja de adivinar el Oro.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
            className="mx-auto max-w-3xl text-lg text-white/85"
          >
            MIDAS fusiona Análisis Fundamental (P1), Técnico-Institucional (P2) y un modelo de ML (P3) en una sola señal precisa y accionable.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="mt-4 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a href="#pricing" className="group inline-flex items-center gap-2 rounded-xl bg-[#D4AF37] px-6 py-3 text-sm font-semibold text-black shadow-[0_0_40px_rgba(212,175,55,0.35)] transition-transform hover:scale-[1.02]">
              Ver Planes
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 20 20" fill="currentColor"><path d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L13.586 10H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z"/></svg>
            </a>
            <a href="#bento" className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-black/30 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-black/40">
              Explorar los 3 Pasos
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Ambient cyan lines */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-full w-[1px] -translate-x-1/2 bg-gradient-to-b from-cyan-400/20 via-cyan-400/0 to-cyan-400/20" />
        <div className="absolute left-[20%] top-0 h-full w-px bg-gradient-to-b from-cyan-400/10 via-transparent to-cyan-400/10" />
        <div className="absolute left-[80%] top-0 h-full w-px bg-gradient-to-b from-cyan-400/10 via-transparent to-cyan-400/10" />
      </div>

      {/* Keyframes for shimmer */}
      <style>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          50% { background-position: 0% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </section>
  )
}

export default Hero
