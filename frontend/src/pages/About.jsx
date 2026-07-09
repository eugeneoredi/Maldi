import { Waves, ShieldCheck, Users } from 'lucide-react'

const VALUES = [
  {
    icon: Waves,
    title: 'Local First',
    body: 'Every experience is run by local operators who know the coast best.',
  },
  {
    icon: ShieldCheck,
    title: 'Vetted & Trusted',
    body: 'We personally review every listing before it appears on the platform.',
  },
  {
    icon: Users,
    title: 'Community Driven',
    body: 'We reinvest in the local community through partnerships and fair pay.',
  },
]

function About() {
  return (
    <div>
      <section className="bg-ocean text-warm-white">
        <div className="max-w-4xl mx-auto px-6 py-20 lg:py-24 text-center">
          <p className="text-gold text-[12px] tracking-[0.2em] uppercase mb-4">Our Story</p>
          <h1 className="font-display text-[38px] lg:text-[48px] text-balance">About Maldi</h1>
          <p className="mt-5 text-warm-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Born from a love of the Kenya coast, Maldi exists to connect
            travelers with the most authentic experiences Malindi has to
            offer.
          </p>
        </div>
      </section>

      <section className="bg-shell px-6 py-16 lg:py-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14">
          <div>
            <h2 className="font-display text-[24px] text-charcoal mb-4">Who We Are</h2>
            <p className="text-stone leading-relaxed mb-4">
              Maldi is a local travel platform based in Malindi, Kenya. We
              work directly with trusted local guides, boat operators, lodge
              owners, and cultural experts to bring you experiences that go
              beyond the ordinary.
            </p>
            <p className="text-stone leading-relaxed">
              Every listing on our platform is personally vetted — we only
              recommend what we would confidently show our own guests.
            </p>
          </div>
          <div>
            <h2 className="font-display text-[24px] text-charcoal mb-4">Why Malindi</h2>
            <p className="text-stone leading-relaxed mb-4">
              Malindi is one of Kenya's oldest coastal towns, with a history
              stretching back to the 14th century. Today it blends Swahili
              heritage, Italian influence, and natural wonders into a
              destination unlike anywhere else on the continent.
            </p>
            <p className="text-stone leading-relaxed">
              From the coral reefs of the Marine National Park to the
              ancient Gede Ruins, there is always something new to
              discover.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-sand px-6 py-16 lg:py-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {VALUES.map(({ icon: Icon, title, body }) => (
            <div key={title} className="bg-shell rounded-2xl p-8 text-center">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-ocean text-gold mb-5">
                <Icon size={22} strokeWidth={1.5} />
              </span>
              <h3 className="font-display text-[19px] text-charcoal mb-2">{title}</h3>
              <p className="text-stone text-[14px] leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default About
