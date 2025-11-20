import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="font-serif text-4xl md:text-5xl text-slate-900 mb-4" style={{ fontFamily: 'Magiona Display, serif' }}>Over The Beauty House</h2>
            <p className="text-slate-700 mb-4" style={{ fontFamily: 'Poppins, system-ui, sans-serif' }}>
              Welkom bij The Beauty House – jouw nieuwe beauty spot in omgeving Rotterdam. Hier combineren we moderne technieken met een warme, speelse sfeer. Je mag binnenkomen zoals je bent, en naar buiten lopen met extra confidence. We werken op afspraak, nemen de tijd voor je en focussen op detail.
            </p>
            <h3 className="text-xl font-semibold mb-2">Meet your nail artist</h3>
            <p className="text-slate-700" style={{ fontFamily: 'Poppins, system-ui, sans-serif' }}>
              Gedreven door passie voor nails, selfcare en high-quality technieken. We werken hygiënisch, zorgvuldig en met liefde voor mooie details – zodat jij wekenlang kunt genieten van jouw glow.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
            <div className="rounded-3xl overflow-hidden shadow-md border border-slate-100 max-w-md mx-auto">
              <img src="https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=1200&auto=format&fit=crop" alt="Artist" className="w-full h-80 object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
