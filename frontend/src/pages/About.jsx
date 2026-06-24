function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <p className="text-amber-600 text-sm uppercase tracking-widest mb-2">Our Story</p>
        <h1 className="text-4xl font-bold text-stone-800 mb-4">About Maldi</h1>
        <p className="text-stone-500 text-lg max-w-2xl mx-auto">
          Born from a love of the Kenya coast, Maldi exists to connect travelers with
          the most authentic experiences Malindi has to offer.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold text-stone-800 mb-4">Who We Are</h2>
          <p className="text-stone-500 leading-relaxed mb-4">
            Maldi is a local travel platform based in Malindi, Kenya. We work directly
            with trusted local guides, boat operators, lodge owners, and cultural
            experts to bring you experiences that go beyond the ordinary.
          </p>
          <p className="text-stone-500 leading-relaxed">
            Every listing on our platform is personally vetted — we only recommend
            what we would confidently show our own guests.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-stone-800 mb-4">Why Malindi</h2>
          <p className="text-stone-500 leading-relaxed mb-4">
            Malindi is one of Kenya's oldest coastal towns, with a history stretching
            back to the 14th century. Today it blends Swahili heritage, Italian influence,
            and natural wonders into a destination unlike anywhere else on the continent.
          </p>
          <p className="text-stone-500 leading-relaxed">
            From the coral reefs of the Marine National Park to the ancient Gede Ruins,
            there is always something new to discover.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 text-center">
        <div className="bg-stone-50 rounded-2xl p-8">
          <div className="text-4xl mb-4">🌊</div>
          <h3 className="text-xl font-bold text-stone-800 mb-2">Local First</h3>
          <p className="text-stone-500 text-sm">Every experience is run by local operators who know the coast best.</p>
        </div>
        <div className="bg-stone-50 rounded-2xl p-8">
          <div className="text-4xl mb-4">✅</div>
          <h3 className="text-xl font-bold text-stone-800 mb-2">Vetted & Trusted</h3>
          <p className="text-stone-500 text-sm">We personally review every listing before it appears on the platform.</p>
        </div>
        <div className="bg-stone-50 rounded-2xl p-8">
          <div className="text-4xl mb-4">🤝</div>
          <h3 className="text-xl font-bold text-stone-800 mb-2">Community Driven</h3>
          <p className="text-stone-500 text-sm">We reinvest in the local community through partnerships and fair pay.</p>
        </div>
      </div>
    </div>
  )
}

export default About
