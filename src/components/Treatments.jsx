import { Sparkles, Hand, Footprints, Eye, HeartHandshake, Plus } from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
  {
    icon: Hand,
    title: 'Manicure',
    desc: 'Van natural nails tot bold gel colors. Strakke vormen, glanzende finish.',
    price: 'vanaf €35',
    duration: '45–75 min',
    image: 'https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?q=80&w=1200&auto=format&fit=crop'
  },
  {
    icon: Footprints,
    title: 'Pedicure',
    desc: 'Verzorgde voeten en zachte huid. Perfect voor een fresh feeling.',
    price: 'vanaf €32',
    duration: '45–60 min',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop'
  },
  {
    icon: Eye,
    title: 'Lashes',
    desc: 'Lash lifts en natuurlijke extensions voor een open, frisse blik zonder mascara.',
    price: 'vanaf €45',
    duration: '45–90 min',
    image: 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=1200&auto=format&fit=crop'
  },
  {
    icon: HeartHandshake,
    title: 'Cupping & Wellness',
    desc: 'Ontspannende cupping en massages om spieren los te maken.',
    price: 'vanaf €40',
    duration: '30–60 min',
    image: 'https://images.unsplash.com/photo-1598555748505-ccca0d9b9f7b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDdXBwaW5nJTIwJTI2JTIwV2VsbG5lc3N8ZW58MHwwfHx8MTc2MzY3Mzg1OXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  },
  {
    icon: Plus,
    title: 'Add-ons',
    desc: 'Nail art, extra care, maskers en meer.',
    price: 'vanaf €10',
    duration: '10–20 min',
    image: 'https://images.unsplash.com/photo-1760783544237-47ccc083a6c7?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBZGQtb25zfGVufDB8MHx8fDE3NjM2NzM4NTl8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  },
]

export default function Treatments() {
  return (
    <section id="treatments" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ebb3cb]/30 text-[#d03e30] text-xs font-medium mb-3">
            <Sparkles className="w-4 h-4" /> Behandelingen
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-slate-900 mb-3" style={{ fontFamily: 'Magiona Display, serif' }}>Behandelingen</h2>
          <p className="text-slate-600 max-w-2xl mx-auto" style={{ fontFamily: 'Poppins, system-ui, sans-serif' }}>
            Choose your glow. Mix & match jouw favoriete behandelingen.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc, price, duration, image }) => (
            <motion.div
              key={title}
              whileHover={{ y: -6 }}
              className="group rounded-3xl overflow-hidden bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-all"
            >
              <div className="relative h-48 overflow-hidden">
                <img src={image} alt={title} className="w-full h-full object-cover transform group-hover:scale-[1.05] transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute top-3 left-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 text-[#d03e30] text-xs font-medium shadow">
                  <Icon className="w-4 h-4" /> {title}
                </div>
              </div>
              <div className="p-5">
                <p className="text-slate-700 mb-3" style={{ fontFamily: 'Poppins, system-ui, sans-serif' }}>{desc}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#d03e30] font-semibold">{price}</span>
                  <span className="text-slate-500">{duration}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a href="#" className="text-[#d03e30] hover:underline">Bekijk volledige prijslijst</a>
        </div>
      </div>
    </section>
  )
}
