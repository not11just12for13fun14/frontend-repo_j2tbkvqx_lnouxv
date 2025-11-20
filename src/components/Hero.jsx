import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'

export default function Hero() {
  const ref = useRef(null)
  const prefersReduced = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })

  // Subtle 3D-like parallax/tilt controlled by scroll
  const tilt = useSpring(useTransform(scrollYProgress, [0, 1], [0, 10]), { stiffness: 120, damping: 20 })
  const rise = useSpring(useTransform(scrollYProgress, [0, 1], [0, -40]), { stiffness: 120, damping: 20 })
  const shineShift = useTransform(scrollYProgress, [0, 1], ['0%', '80%'])
  const rotate = useSpring(useTransform(scrollYProgress, [0, 1], [0, 6]), { stiffness: 120, damping: 20 })

  return (
    <section id="home" className="relative overflow-hidden pt-24" ref={ref}>
      <div className="absolute inset-0 bg-[#fff6f9]" />

      {/* Decorative accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#ebb3cb] rounded-full blur-3xl opacity-40" />
        <div className="absolute top-1/3 -right-20 w-80 h-80 bg-[#d03e30] rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-10 left-10 w-24 h-24 rotate-12 border-2 border-[#d03e30]/30 rounded-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="py-10"
          >
            <p className="inline-flex items-center px-3 py-1 rounded-full bg-white text-[#d03e30] text-xs font-medium shadow-sm mb-4">Beauty & Wellness in Vlaardingen</p>
            <h1 className="font-serif text-5xl md:text-6xl text-slate-900 leading-tight tracking-tight mb-4" style={{ fontFamily: 'Magiona Display, serif' }}>
              The Beauty House
            </h1>
            <p className="text-lg md:text-xl text-slate-700 mb-6" style={{ fontFamily: 'Poppins, system-ui, sans-serif' }}>
              Modern beauty studio in omgeving Rotterdam. Nails, lashes & selfcare with a playful, feminine touch.
            </p>
            <p className="text-slate-600 mb-8 max-w-xl" style={{ fontFamily: 'Poppins, system-ui, sans-serif' }}>
              Bij The Beauty House draait alles om selfcare, mooie details en een good feeling. Van manicure tot cupping: we create your glow moment.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a href="#booking" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#d03e30] text-white font-medium shadow-lg shadow-[#d03e30]/20 hover:shadow-xl hover:-translate-y-0.5 transition">Afspraak maken</a>
              <a href="#treatments" className="inline-flex items-center justify-center px-6 py-3 rounded-full border-2 border-[#d03e30] text-[#d03e30] font-medium hover:bg-[#d03e30] hover:text-white transition">Bekijk behandelingen</a>
            </div>
          </motion.div>

          {/* 3D-like Red Nails Illustration replacing perfume Spline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="h-[520px] lg:h-[620px] rounded-3xl overflow-hidden relative bg-gradient-to-b from-[#ffe9f1] to-[#fbe3ec]"
            style={!prefersReduced ? { rotate: rotate.get() } : undefined}
          >
            <div className="absolute inset-0 rounded-3xl pointer-events-none" />

            {/* Parallax group */}
            <motion.div
              className="absolute inset-0"
              style={!prefersReduced ? { y: rise } : undefined}
            >
              {/* Soft backdrop circle */}
              <div className="absolute -right-12 top-10 w-72 h-72 bg-[#d03e30]/20 blur-2xl rounded-full" />
              <div className="absolute -left-10 bottom-10 w-80 h-80 bg-[#ebb3cb]/40 blur-2xl rounded-full" />

              {/* Hand silhouette with nails - layered SVG for depth */}
              <motion.div
                className="absolute inset-x-0 bottom-0 mx-auto w-[92%] md:w-[86%] drop-shadow-xl"
                style={!prefersReduced ? { rotate: tilt } : undefined}
              >
                <svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                  <defs>
                    <linearGradient id="skinGrad" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#f7d9d2" />
                      <stop offset="100%" stopColor="#f1bdb3" />
                    </linearGradient>
                    <radialGradient id="shine" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(400 260) rotate(45) scale(520 260)">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.55"/>
                      <stop offset="35%" stopColor="#ffffff" stopOpacity="0.22"/>
                      <stop offset="100%" stopColor="#ffffff" stopOpacity="0"/>
                    </radialGradient>
                    <linearGradient id="nailRed" x1="0" x2="1" y1="0" y2="0">
                      <stop offset="0%" stopColor="#c23427"/>
                      <stop offset="50%" stopColor="#d03e30"/>
                      <stop offset="100%" stopColor="#e24a3a"/>
                    </linearGradient>
                    <linearGradient id="nailHighlight" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8"/>
                      <stop offset="100%" stopColor="#ffffff" stopOpacity="0"/>
                    </linearGradient>
                    <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur in="SourceAlpha" stdDeviation="6" result="blur" />
                      <feOffset dx="0" dy="6" result="offset" />
                      <feComponentTransfer>
                        <feFuncA type="linear" slope="0.25" />
                      </feComponentTransfer>
                      <feMerge>
                        <feMergeNode in="offset" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Palm/hand base */}
                  <g filter="url(#soft)">
                    <path d="M160,370 C180,310 260,260 330,250 C380,245 420,250 440,280 C470,325 520,350 560,370 C610,395 640,430 640,470 C640,520 600,560 540,560 L300,560 C230,560 170,520 160,470 C155,445 150,410 160,370 Z" fill="url(#skinGrad)"/>
                  </g>

                  {/* Fingers */}
                  <g filter="url(#soft)">
                    <path d="M300,260 C290,220 300,200 320,200 C340,200 350,220 350,245 C350,280 330,300 315,300 C305,300 298,290 300,260 Z" fill="url(#skinGrad)"/>
                    <path d="M350,255 C340,215 350,195 370,195 C390,195 398,215 398,240 C398,275 380,295 365,295 C355,295 348,285 350,255 Z" fill="url(#skinGrad)"/>
                    <path d="M400,260 C392,220 403,200 422,200 C442,200 450,220 450,245 C450,280 432,300 418,300 C408,300 401,290 400,260 Z" fill="url(#skinGrad)"/>
                    <path d="M447,275 C440,235 452,215 470,215 C488,215 496,235 496,258 C496,292 480,310 467,310 C458,310 451,300 447,275 Z" fill="url(#skinGrad)"/>
                  </g>

                  {/* Red nails */}
                  <g>
                    <path d="M305,205 C320,198 338,198 350,206 C352,220 340,244 318,255 C306,246 301,226 305,205 Z" fill="url(#nailRed)"/>
                    <path d="M356,200 C372,192 390,193 400,202 C402,216 392,240 368,252 C356,243 352,223 356,200 Z" fill="url(#nailRed)"/>
                    <path d="M406,205 C422,198 440,199 450,208 C452,222 442,246 420,258 C408,249 404,229 406,205 Z" fill="url(#nailRed)"/>
                    <path d="M455,220 C470,212 488,214 498,224 C500,236 492,258 470,270 C458,261 454,242 455,220 Z" fill="url(#nailRed)"/>

                    {/* Gloss highlights */}
                    <g opacity="0.85">
                      <path d="M325,205 C338,202 344,204 349,210 C340,208 332,212 320,222" fill="url(#nailHighlight)"/>
                      <path d="M378,198 C392,196 398,198 402,204 C394,202 386,206 374,216" fill="url(#nailHighlight)"/>
                      <path d="M430,204 C444,202 450,204 454,210 C446,208 438,212 426,222" fill="url(#nailHighlight)"/>
                      <path d="M482,220 C494,218 500,221 504,228 C496,226 488,230 476,240" fill="url(#nailHighlight)"/>
                    </g>
                  </g>

                  {/* Moving light sweep for extra gloss */}
                  <motion.rect x="-200" y="0" height="600" width="300" fill="url(#shine)" style={!prefersReduced ? { x: shineShift } : undefined} />
                </svg>
              </motion.div>
            </motion.div>

            {/* Foreground specular glints */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute right-12 top-16 w-24 h-24 bg-white/50 blur-2xl rounded-full opacity-40" />
              <div className="absolute left-8 bottom-10 w-16 h-16 bg-white/40 blur-xl rounded-full opacity-40" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
