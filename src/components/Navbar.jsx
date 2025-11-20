import { useEffect, useState } from 'react'
import { Menu, X, Instagram, BadgePercent } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Behandelingen', href: '#treatments' },
  { label: 'Afspraak maken', href: '#booking' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#d03e30]" />
          <span className="font-semibold tracking-tight text-[#d03e30]">The Beauty House</span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-slate-700 hover:text-[#d03e30] transition-colors">
              {item.label}
            </a>
          ))}
          <a href="#booking" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#d03e30] text-white text-sm shadow-sm hover:shadow md:transition transform hover:-translate-y-0.5">
            <BadgePercent className="w-4 h-4" /> Afspraak maken
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="p-2 rounded-full hover:bg-slate-100 text-slate-700">
            <Instagram className="w-5 h-5" />
          </a>
        </div>

        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white/90 backdrop-blur-md">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block py-2 text-slate-700 hover:text-[#d03e30]">
              {item.label}
            </a>
          ))}
          <a href="#booking" onClick={() => setOpen(false)} className="block text-center px-4 py-2 rounded-full bg-[#d03e30] text-white">Afspraak maken</a>
        </div>
      )}
    </header>
  )
}
