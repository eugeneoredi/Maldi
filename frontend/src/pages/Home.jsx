import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-screen bg-stone-900 flex items-center justify-center text-center px-6">
        <div className="max-w-3xl">
          <p className="text-amber-400 text-sm uppercase tracking-widest mb-4">Malindi, Kenya Coast</p>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            Where the Ocean Meets the Wild
          </h1>
          <p className="text-stone-300 text-lg mb-8 max-w-xl mx-auto">
            Discover handpicked experiences and stays along Kenya's most beautiful coastline.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/experiences" className="bg-amber-600 text-white px-6 py-3 rounded-full font-medium hover:bg-amber-700 transition">
              Explore Experiences
            </Link>
            <Link to="/accommodations" className="border border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-stone-900 transition">
              Find a Stay
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-stone-800 mb-4">Your Gateway to Malindi</h2>
        <p className="text-stone-500 text-lg leading-relaxed">
          From deep-sea fishing and marine park snorkeling to boutique beachfront lodges,
          Maldi connects you with the best of Kenya's coast — curated, trusted, and unforgettable.
        </p>
      </section>

      {/* Cards */}
      <section className="pb-20 px-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        <Link to="/experiences" className="group block bg-stone-100 rounded-2xl overflow-hidden hover:shadow-lg transition">
          <div className="h-48 bg-amber-200 flex items-center justify-center text-4xl">🌊</div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-stone-800 mb-2 group-hover:text-amber-600 transition">Experiences</h3>
            <p className="text-stone-500 text-sm">Fishing, snorkeling, cultural tours, and more — tailored for every traveler.</p>
          </div>
        </Link>
        <Link to="/accommodations" className="group block bg-stone-100 rounded-2xl overflow-hidden hover:shadow-lg transition">
          <div className="h-48 bg-teal-200 flex items-center justify-center text-4xl">🏡</div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-stone-800 mb-2 group-hover:text-amber-600 transition">Accommodations</h3>
            <p className="text-stone-500 text-sm">Beachfront cottages, boutique hotels, and private villas along the coast.</p>
          </div>
        </Link>
      </section>
    </div>
  )
}

export default Home
