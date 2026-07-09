import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/experiences', label: 'Experiences' },
  { to: '/accommodations', label: 'Stays' },
  { to: '/about', label: 'About' },
]

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-ocean/95 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
          <Link to="/" className="font-display text-2xl tracking-tight text-warm-white" onClick={() => setOpen(false)}>
            Maldi
          </Link>

          <div className="hidden lg:flex items-center gap-9">
            {LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                className={({ isActive }) =>
                  `text-[13px] tracking-wide font-medium transition-colors ${
                    isActive ? 'text-gold' : 'text-warm-white/80 hover:text-gold'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              className="rounded-full border border-gold bg-gold px-6 py-2.5 text-[13px] font-semibold text-ocean hover:bg-transparent hover:text-gold transition-colors"
            >
              Contact
            </NavLink>
          </div>

          <button
            className="lg:hidden text-warm-white"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Rendered as a SIBLING of <nav>, not nested inside it — nav has
          backdrop-blur, and per spec an element with backdrop-filter
          becomes the containing block for position:fixed descendants,
          which would trap this overlay inside nav's own ~80px box
          instead of the full viewport. */}
      {open && (
        <div className="lg:hidden fixed inset-0 z-[60] bg-ocean flex flex-col">
          <div className="flex items-center justify-between px-6 h-20 border-b border-white/10 shrink-0">
            <Link to="/" className="font-display text-2xl text-warm-white" onClick={() => setOpen(false)}>
              Maldi
            </Link>
            <button className="text-warm-white" onClick={() => setOpen(false)} aria-label="Close menu">
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-col px-6 py-10 gap-2 overflow-y-auto">
            {LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `py-3 text-lg font-medium border-b border-white/10 ${
                    isActive ? 'text-gold' : 'text-warm-white/85'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex justify-center rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-ocean"
            >
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
