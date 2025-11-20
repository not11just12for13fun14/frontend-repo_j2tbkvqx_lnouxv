import { Mail, PhoneCall, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl text-slate-900 mb-3" style={{ fontFamily: 'Magiona Display, serif' }}>Contact & Locatie</h2>
            <p className="text-slate-600 mb-6" style={{ fontFamily: 'Poppins, system-ui, sans-serif' }}>We staan voor je klaar om je vragen te beantwoorden.</p>

            <div className="space-y-3 text-slate-700">
              <p><strong>The Beauty House</strong></p>
              <p>Vlaardingen, omgeving Rotterdam</p>
              <p className="flex items-center gap-2"><Mail className="w-4 h-4" /> info@thebeautyhouse.nl</p>
              <p className="flex items-center gap-2"><PhoneCall className="w-4 h-4" /> WhatsApp / Telefoon: 06 00000000</p>
            </div>

            <form className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input placeholder="Naam" className="p-3 rounded-xl border border-slate-200" />
              <input placeholder="E-mail" type="email" className="p-3 rounded-xl border border-slate-200" />
              <input placeholder="Onderwerp" className="p-3 rounded-xl border border-slate-200 sm:col-span-2" />
              <textarea placeholder="Bericht" rows={4} className="p-3 rounded-xl border border-slate-200 sm:col-span-2" />
              <button className="px-6 py-3 rounded-full bg-[#d03e30] text-white font-medium sm:col-span-2">Verstuur bericht</button>
            </form>
          </div>

          <div className="rounded-3xl border border-slate-100 overflow-hidden">
            <div className="aspect-video w-full bg-[#fff6f9] flex items-center justify-center text-slate-500">
              <MapPin className="w-6 h-6 mr-2" />
              <span>Locatiekaart weergave (mockup)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
