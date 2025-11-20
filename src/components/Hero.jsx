import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-24">
      <div className="absolute inset-0 bg-[#fff6f9]" />

      {/* Decorative accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#ebb3cb] rounded-full blur-3xl opacity-40" />
        <div className="absolute top-1/3 -right-20 w-80 h-80 bg-[#d03e30] rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-10 left-10 w-24 h-24 rotate-12 border-2 border-[#d03e30]/30 rounded-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="py-10"
          >
            <p className="inline-flex items-center px-3 py-1 rounded-full bg-white text-[#d03e30] text-xs font-medium shadow-sm mb-4">Beauty & Wellness in Vlaardingen</p>
            <h1 className="font-serif text-5xl md:text-6xl text-slate-900 leading-tight tracking-tight mb-4" style={{ fontFamily: 'Magiona Display, serif' }}>
              The Beauty House
            </h1>
            <p className="text-lg md:text-xl text-slate-700 mb-6" style={{ fontFamily: 'Poppins, system-ui, sans-serif' }}>
              Modern beauty studio in omgeving Rotterdam. Nails, lashes & selfcare with a playful, feminine touch.
            </p>
            <p className="text-slate-600 mb-8 max-w-xl" style={{ fontFamily: 'Poppins, system-ui, sans-serif' }}>
              Bij The Beauty House draait alles om selfcare, mooie details en een good feeling. Van manicure tot cupping: we create your glow moment.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a href="#booking" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#d03e30] text-white font-medium shadow-lg shadow-[#d03e30]/20 hover:shadow-xl hover:-translate-y-0.5 transition">Afspraak maken</a>
              <a href="#treatments" className="inline-flex items-center justify-center px-6 py-3 rounded-full border-2 border-[#d03e30] text-[#d03e30] font-medium hover:bg-[#d03e30] hover:text-white transition">Bekijk behandelingen</a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="h-[520px] lg:h-[620px] rounded-3xl overflow-hidden relative"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-transparent to-[#ebb3cb]/30 pointer-events-none" />
            <Spline scene="https://prod.spline.design/c1w2QYixcPkptHWE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
