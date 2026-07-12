import { Link } from 'react-router-dom'
import { ArrowRight, Compass, ShieldCheck, Heart, Waves, Home as HomeIcon } from 'lucide-react'
import WaveDivider from '../components/WaveDivider'
import heroCoast from '../assets/images/hero-coast.jpg'

const REASONS = [
  {
    icon: Compass,
    title: 'Locally Guided',
    body: 'Every experience is run by operators who know this coastline, not a call center.',
  },
  {
    icon: ShieldCheck,
    title: 'Personally Vetted',
    body: 'We visit and review every listing ourselves before it ever appears here.',
  },
  {
    icon: Heart,
    title: 'Community First',
    body: 'Bookings support local guides, boat operators, and family-run stays directly.',
  },
]

function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ocean text-warm-white">
        <img
          src={heroCoast}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div
          className="absolute inset-0 opacity-90"
          style={{
            background:
              'linear-gradient(180deg, rgba(14,47,60,0.75), rgba(14,47,60,0.55)), radial-gradient(ellipse at 85% 75%, rgba(185,138,79,0.25), transparent 50%)',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-32 lg:pt-36 lg:pb-40 text-center">
          <p className="text-gold text-[12px] tracking-[0.25em] uppercase mb-6">
            Malindi, Kenya Coast
          </p>
          <h1 className="font-display text-balance text-[42px] sm:text-[58px] lg:text-[72px] leading-[1.08] max-w-4xl mx-auto">
            Where the Ocean Meets<br />
            <span className="italic text-gold-soft">the Wild</span>
          </h1>
          <p className="mt-7 text-warm-white/70 text-lg max-w-xl mx-auto leading-relaxed">
            Discover handpicked experiences and stays along Kenya's most
            storied stretch of coastline.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link
              to="/experiences"
              className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-[13px] font-semibold tracking-wide text-ocean hover:bg-gold-soft transition-colors"
            >
              Explore Experiences
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              to="/accommodations"
              className="inline-flex items-center gap-2 rounded-full border border-warm-white/30 px-7 py-3.5 text-[13px] font-semibold tracking-wide text-warm-white hover:border-gold hover:text-gold transition-colors"
            >
              Find a Stay
            </Link>
          </div>
        </div>
        <WaveDivider color="#fbf8f2" />
      </section>

      {/* Intro */}
      <section className="bg-shell py-20 lg:py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-[30px] lg:text-[38px] text-charcoal text-balance">
            Your Gateway to Malindi
          </h2>
          <p className="mt-5 text-stone text-lg leading-relaxed">
            From deep-sea fishing and marine-park snorkeling to boutique
            beachfront lodges, Maldi connects you with the best of Kenya's
            coast — curated, trusted, and unforgettable.
          </p>
        </div>
      </section>

      {/* Two pillars */}
      <section className="relative grid lg:grid-cols-2 bg-ocean">
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent hidden lg:block" />

        <Link
          to="/experiences"
          className="group px-8 lg:px-16 py-20 border-b lg:border-b-0 border-white/10 hover:bg-white/[0.03] transition-colors"
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 text-gold mb-6">
            <Waves size={24} />
          </span>
          <h3 className="font-display text-[28px] text-warm-white">Experiences</h3>
          <p className="mt-3 text-warm-white/60 leading-relaxed max-w-sm">
            Fishing, snorkeling, cultural tours, and more — tailored for every
            kind of traveler.
          </p>
          <span className="mt-8 inline-flex items-center gap-2 text-[13px] font-semibold text-gold group-hover:gap-3 transition-all">
            Explore Experiences <ArrowRight size={16} />
          </span>
        </Link>

        <Link
          to="/accommodations"
          className="group px-8 lg:px-16 py-20 bg-ocean-2 hover:bg-ocean-2/70 transition-colors"
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 text-gold mb-6">
            <HomeIcon size={24} />
          </span>
          <h3 className="font-display text-[28px] text-warm-white">Stays</h3>
          <p className="mt-3 text-warm-white/60 leading-relaxed max-w-sm">
            Beachfront cottages, boutique hotels, and private villas along the
            coast.
          </p>
          <span className="mt-8 inline-flex items-center gap-2 text-[13px] font-semibold text-gold group-hover:gap-3 transition-all">
            Find a Stay <ArrowRight size={16} />
          </span>
        </Link>
      </section>

      {/* Why Maldi */}
      <section className="bg-shell py-20 lg:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-gold text-[12px] tracking-[0.2em] uppercase mb-4">Why Maldi</p>
            <h2 className="font-display text-[30px] lg:text-[36px] text-charcoal text-balance">
              Built on trust with the coast, not just a listings page
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {REASONS.map(({ icon: Icon, title, body }) => (
              <div key={title} className="text-center px-4">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-sand text-gold mb-5">
                  <Icon size={22} strokeWidth={1.5} />
                </span>
                <h3 className="font-display text-[20px] text-charcoal">{title}</h3>
                <p className="mt-2.5 text-stone text-[14.5px] leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-lagoon text-warm-white">
        <div className="max-w-3xl mx-auto px-6 py-20 text-center">
          <h2 className="font-display text-[28px] lg:text-[34px] text-balance">
            Ready to see Malindi the way locals do?
          </h2>
          <p className="mt-4 text-warm-white/75 max-w-lg mx-auto">
            Browse curated experiences and stays, or get in touch and we'll
            help you plan the trip.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link
              to="/experiences"
              className="rounded-full bg-gold px-7 py-3.5 text-[13px] font-semibold text-ocean hover:bg-gold-soft transition-colors"
            >
              Browse Experiences
            </Link>
            <Link
              to="/contact"
              className="rounded-full border border-warm-white/30 px-7 py-3.5 text-[13px] font-semibold hover:border-gold hover:text-gold transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
