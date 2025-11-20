import { Instagram, Music2 } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#fff6f9] border-t border-[#ebb3cb]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-[#d03e30]" />
              <span className="font-semibold text-[#d03e30]">The Beauty House</span>
            </div>
            <p className="text-slate-600 text-sm">Selfcare, nails & glow moments in Rotterdam area.</p>
          </div>

          <nav className="flex flex-wrap gap-4 text-sm justify-center">
            <a href="#home" className="hover:text-[#d03e30]">Home</a>
            <a href="#treatments" className="hover:text-[#d03e30]">Behandelingen</a>
            <a href="#booking" className="hover:text-[#d03e30]">Afspraak maken</a>
            <a href="#contact" className="hover:text-[#d03e30]">Contact</a>
            <a href="#" className="hover:text-[#d03e30]">Instagram</a>
          </nav>

          <div className="flex md:justify-end gap-3">
            <a href="#" aria-label="Instagram" className="p-2 rounded-full hover:bg-white">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" aria-label="TikTok" className="p-2 rounded-full hover:bg-white">
              <Music2 className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="pt-6 mt-6 border-t text-sm text-slate-500">
          © The Beauty House — All rights reserved.
        </div>
      </div>
    </footer>
  )
}
