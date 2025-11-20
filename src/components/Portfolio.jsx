import { motion } from 'framer-motion'

const images = [
  'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1596461404969-9ae70b2a3b6c?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600428853876-e9f9d9f7a3f9?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop'
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-[#fff6f9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-serif text-4xl md:text-5xl text-slate-900 mb-3" style={{ fontFamily: 'Magiona Display, serif' }}>Portfolio</h2>
          <p className="text-slate-600" style={{ fontFamily: 'Poppins, system-ui, sans-serif' }}>Close-ups, before/after en favoriete looks.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <motion.div key={i} whileHover={{ scale: 1.02 }} className="overflow-hidden rounded-2xl shadow-sm">
              <img src={src} alt="Portfolio" className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-slate-700">Volg ons op Instagram voor meer looks: <span className="font-semibold">@thebeautyhouse.rdm</span></p>
          <a href="#" className="inline-block mt-3 px-5 py-2 rounded-full border-2 border-[#d03e30] text-[#d03e30] hover:bg-[#d03e30] hover:text-white transition">Bekijk meer op Instagram</a>
        </div>
      </div>
    </section>
  )
}
