const faqs = [
  { q: 'Hoe kan ik een afspraak verzetten of annuleren?', a: 'Neem minimaal 24 uur van tevoren contact op via WhatsApp of e-mail.' },
  { q: 'Werk je op afspraak?', a: 'Ja, we werken alleen op afspraak.' },
  { q: 'Welke betaalmethodes zijn er?', a: 'Pin en betaalverzoek.' },
  { q: 'Is er parkeergelegenheid?', a: 'Ja, er zijn meerdere parkeeropties dichtbij.' },
]

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-[#fff6f9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="font-serif text-4xl md:text-5xl text-slate-900 mb-3" style={{ fontFamily: 'Magiona Display, serif' }}>Veelgestelde vragen</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((f, i) => (
            <details key={i} className="rounded-2xl bg-white p-5 shadow-sm border border-slate-100">
              <summary className="cursor-pointer font-medium text-slate-800">{f.q}</summary>
              <p className="mt-2 text-slate-600" style={{ fontFamily: 'Poppins, system-ui, sans-serif' }}>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
