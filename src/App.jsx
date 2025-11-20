import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Treatments from './components/Treatments'
import Booking from './components/Booking'
import OpeningHours from './components/OpeningHours'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 scroll-smooth" style={{ fontFamily: 'Poppins, system-ui, sans-serif' }}>
      <Navbar />
      <Hero />
      <Treatments />
      <Booking />
      <OpeningHours />
      <About />
      <Portfolio />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
