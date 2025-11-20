export default function OpeningHours() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="font-serif text-4xl md:text-5xl text-slate-900 mb-3" style={{ fontFamily: 'Magiona Display, serif' }}>Openingstijden</h2>
          <p className="text-slate-600" style={{ fontFamily: 'Poppins, system-ui, sans-serif' }}>Plan je bezoek – we zien je graag!</p>
        </div>
        <div className="max-w-xl mx-auto rounded-3xl bg-[#fff6f9] p-6 shadow-sm border border-[#ebb3cb]/50">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-700">
            <li className="flex justify-between"><span>Maandag</span><span>Gesloten</span></li>
            <li className="flex justify-between"><span>Dinsdag</span><span>10:00–18:00</span></li>
            <li className="flex justify-between"><span>Woensdag</span><span>10:00–20:00</span></li>
            <li className="flex justify-between"><span>Donderdag</span><span>10:00–20:00</span></li>
            <li className="flex justify-between"><span>Vrijdag</span><span>10:00–18:00</span></li>
            <li className="flex justify-between"><span>Zaterdag</span><span>10:00–16:00</span></li>
            <li className="flex justify-between sm:col-span-2"><span>Zondag</span><span>Gesloten</span></li>
          </ul>
          <p className="text-xs text-slate-500 mt-4 text-center">Openingstijden kunnen afwijken tijdens feestdagen.</p>
        </div>
      </div>
    </section>
  )
}
