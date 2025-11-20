import { useMemo, useState } from 'react'
import { CalendarDays, Clock, User, Phone, Mail, CheckCircle2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const SERVICES = [
  { id: 'manicure', name: 'Manicure', duration: 60 },
  { id: 'pedicure', name: 'Pedicure', duration: 60 },
  { id: 'lashes', name: 'Lashes', duration: 75 },
  { id: 'cupping', name: 'Cupping & Wellness', duration: 45 },
]

export default function Booking() {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({ service: '', date: '', time: '', name: '', email: '', phone: '', notes: '' })
  const selectedService = useMemo(() => SERVICES.find(s => s.id === form.service), [form.service])

  const times = ['10:00', '11:30', '13:00', '14:30', '16:00', '18:00']

  const canNext1 = !!form.service
  const canNext2 = !!form.date && !!form.time
  const canConfirm = canNext1 && canNext2 && form.name && form.email

  const handleConfirm = () => {
    setStep(4)
  }

  return (
    <section id="booking" className="py-20 bg-[#fff6f9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl text-slate-900 mb-3" style={{ fontFamily: 'Magiona Display, serif' }}>Afspraak maken</h2>
          <p className="text-slate-600 max-w-2xl mx-auto" style={{ fontFamily: 'Poppins, system-ui, sans-serif' }}>
            Plan hier eenvoudig jouw behandeling. Kies een service, datum en tijd die bij jou past.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="rounded-3xl bg-white p-6 shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm ${step >= 1 ? 'bg-[#d03e30]' : 'bg-slate-300'}`}>1</div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm ${step >= 2 ? 'bg-[#d03e30]' : 'bg-slate-300'}`}>2</div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm ${step >= 3 ? 'bg-[#d03e30]' : 'bg-slate-300'}`}>3</div>
              </div>

              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div key="step1" initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }} transition={{ duration: 0.3 }}>
                    <h3 className="text-lg font-semibold mb-4">Stap 1: Kies behandeling</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {SERVICES.map((s) => (
                        <button key={s.id} onClick={() => setForm({ ...form, service: s.id })} className={`p-4 border rounded-2xl text-left hover:shadow transition ${form.service === s.id ? 'border-[#d03e30] bg-[#ebb3cb]/20' : 'border-slate-200 bg-white'}`}>
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{s.name}</span>
                            <Clock className="w-4 h-4 text-slate-500" />
                          </div>
                          <p className="text-sm text-slate-500 mt-1">Duur: {s.duration} min</p>
                        </button>
                      ))}
                    </div>
                    <div className="mt-6 flex justify-end">
                      <button disabled={!canNext1} onClick={() => setStep(2)} className={`px-5 py-2 rounded-full text-white ${canNext1 ? 'bg-[#d03e30] hover:opacity-90' : 'bg-slate-300 cursor-not-allowed'}`}>Volgende</button>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div key="step2" initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }} transition={{ duration: 0.3 }}>
                    <h3 className="text-lg font-semibold mb-4">Stap 2: Kies datum en tijd</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="p-4 border rounded-2xl border-slate-200">
                        <label className="text-sm text-slate-600">Datum</label>
                        <div className="mt-2 flex items-center gap-2">
                          <CalendarDays className="w-5 h-5 text-slate-500" />
                          <input type="date" className="w-full outline-none" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
                        </div>
                      </div>
                      <div className="p-4 border rounded-2xl border-slate-200">
                        <label className="text-sm text-slate-600">Tijd</label>
                        <div className="mt-2 grid grid-cols-3 gap-2">
                          {times.map((t) => (
                            <button key={t} onClick={() => setForm({ ...form, time: t })} className={`px-3 py-2 rounded-full text-sm border ${form.time === t ? 'bg-[#d03e30] text-white border-[#d03e30]' : 'border-slate-200 hover:border-[#d03e30] hover:text-[#d03e30]'}`}>{t}</button>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 flex justify-between">
                      <button onClick={() => setStep(1)} className="px-5 py-2 rounded-full border border-slate-300">Terug</button>
                      <button disabled={!canNext2} onClick={() => setStep(3)} className={`px-5 py-2 rounded-full text-white ${canNext2 ? 'bg-[#d03e30] hover:opacity-90' : 'bg-slate-300 cursor-not-allowed'}`}>Volgende</button>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div key="step3" initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }} transition={{ duration: 0.3 }}>
                    <h3 className="text-lg font-semibold mb-4">Stap 3: Gegevens</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="p-4 border rounded-2xl border-slate-200 flex items-center gap-2">
                        <User className="w-5 h-5 text-slate-500" />
                        <input placeholder="Naam" className="w-full outline-none" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                      </div>
                      <div className="p-4 border rounded-2xl border-slate-200 flex items-center gap-2">
                        <Mail className="w-5 h-5 text-slate-500" />
                        <input placeholder="E-mail" className="w-full outline-none" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                      </div>
                      <div className="p-4 border rounded-2xl border-slate-200 flex items-center gap-2">
                        <Phone className="w-5 h-5 text-slate-500" />
                        <input placeholder="Telefoon (optioneel)" className="w-full outline-none" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                      </div>
                      <div className="p-4 border rounded-2xl border-slate-200 sm:col-span-2">
                        <textarea placeholder="Notities (optioneel)" className="w-full outline-none" rows={3} value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} />
                      </div>
                    </div>

                    <div className="mt-6 rounded-2xl bg-[#fff6f9] p-4 text-sm">
                      <p><span className="font-medium">Jouw afspraak:</span> {selectedService?.name || '-'} — {form.date || '-'} om {form.time || '-'}</p>
                    </div>

                    <div className="mt-6 flex justify-between">
                      <button onClick={() => setStep(2)} className="px-5 py-2 rounded-full border border-slate-300">Terug</button>
                      <button disabled={!canConfirm} onClick={handleConfirm} className={`px-5 py-2 rounded-full text-white ${canConfirm ? 'bg-[#d03e30] hover:opacity-90' : 'bg-slate-300 cursor-not-allowed'}`}>Bevestig afspraak</button>
                    </div>
                  </motion.div>
                )}

                {step === 4 && (
                  <motion.div key="step4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
                    <CheckCircle2 className="w-12 h-12 text-[#d03e30] mx-auto mb-4" />
                    <h3 className="text-2xl font-semibold mb-2">Afspraak bevestigd!</h3>
                    <p className="text-slate-600">Je ontvangt een bevestiging per e-mail. Tot snel bij The Beauty House ✨</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl bg-white p-6 shadow-sm border border-slate-100">
              <h4 className="font-semibold mb-2">Openingstijden</h4>
              <ul className="space-y-1 text-sm text-slate-700">
                <li>Maandag – Gesloten</li>
                <li>Dinsdag – 10:00–18:00</li>
                <li>Woensdag – 10:00–20:00</li>
                <li>Donderdag – 10:00–20:00</li>
                <li>Vrijdag – 10:00–18:00</li>
                <li>Zaterdag – 10:00–16:00</li>
                <li>Zondag – Gesloten</li>
              </ul>
              <p className="text-xs text-slate-500 mt-3">Openingstijden kunnen afwijken tijdens feestdagen.</p>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-sm border border-slate-100">
              <h4 className="font-semibold mb-2">Jouw selectie</h4>
              <p className="text-sm text-slate-700">{selectedService?.name || 'Geen behandeling gekozen'}</p>
              <p className="text-sm text-slate-700">{form.date && form.time ? `${form.date} om ${form.time}` : 'Geen datum/tijd'}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
