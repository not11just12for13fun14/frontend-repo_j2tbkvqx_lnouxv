import { Star } from 'lucide-react'

const testimonials = [
  { text: 'Altijd perfect afgewerkte nagels en super fijne sfeer.' },
  { text: 'Mijn nieuwe go-to plek voor selfcare.' },
  { text: 'Rustige, nette salon en mijn BIAB blijft weken mooi.' }
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="font-serif text-4xl md:text-5xl text-slate-900 mb-3" style={{ fontFamily: 'Magiona Display, serif' }}>What clients say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="rounded-3xl bg-[#fff6f9] p-6 shadow-sm border border-[#ebb3cb]/40">
              <div className="flex gap-1 text-[#d03e30] mb-3">
                {Array.from({ length: 5 }).map((_, j) => (<Star key={j} className="w-4 h-4 fill-current" />))}
              </div>
              <p className="text-slate-700" style={{ fontFamily: 'Poppins, system-ui, sans-serif' }}>{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
