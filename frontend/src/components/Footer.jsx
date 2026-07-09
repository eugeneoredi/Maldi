import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'
import WaveDivider from './WaveDivider'

function Footer() {
  return (
    <footer className="bg-ocean text-warm-white">
      <WaveDivider color="#faf7f0" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl text-warm-white">Maldi</p>
          <p className="mt-4 text-[14px] leading-relaxed text-warm-white/60 max-w-xs">
            Curated experiences and stays along Malindi, Kenya's most storied
            stretch of coastline.
          </p>
        </div>

        <div>
          <p className="text-[12px] tracking-[0.2em] text-gold font-semibold mb-4">EXPLORE</p>
          <ul className="space-y-2.5 text-[14px] text-warm-white/70">
            <li><Link to="/experiences" className="hover:text-gold transition-colors">Experiences</Link></li>
            <li><Link to="/accommodations" className="hover:text-gold transition-colors">Stays</Link></li>
            <li><Link to="/about" className="hover:text-gold transition-colors">About</Link></li>
            <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-[12px] tracking-[0.2em] text-gold font-semibold mb-4">GET IN TOUCH</p>
          <ul className="space-y-3 text-[14px] text-warm-white/70">
            <li className="flex items-start gap-2.5">
              <Mail size={15} className="mt-0.5 text-gold shrink-0" />
              hellomaldi003@gmail.com
            </li>
            <li className="flex items-start gap-2.5">
              <Phone size={15} className="mt-0.5 text-gold shrink-0" />
              +254 741 157 181
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin size={15} className="mt-0.5 text-gold shrink-0" />
              Malindi Town, Kilifi County, Kenya
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 text-center text-[12px] text-warm-white/45">
          © {new Date().getFullYear()} Maldi. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
