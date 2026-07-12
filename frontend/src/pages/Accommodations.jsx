import { useEffect, useState } from 'react'
import { MapPin, Users } from 'lucide-react'
import { getAccommodations } from '../services/api'
import AccommodationBookingModal from '../components/AccommodationBookingModal'
import cottageImg from '../assets/images/accommodation-cottage.jpg'
import villaImg from '../assets/images/accommodation-villa.jpg'
import lodgeImg from '../assets/images/accommodation-lodge.jpg'

const PHOTOS = [cottageImg, villaImg, lodgeImg]

function Accommodations() {
  const [accommodations, setAccommodations] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    getAccommodations()
      .then(res => setAccommodations(res.data))
      .catch(() => setError('Failed to load accommodations'))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div>
      <section className="bg-ocean text-warm-white">
        <div className="max-w-4xl mx-auto px-6 py-16 lg:py-20 text-center">
          <p className="text-gold text-[12px] tracking-[0.2em] uppercase mb-4">Where to Stay</p>
          <h1 className="font-display text-[36px] lg:text-[44px] text-balance">Accommodations in Malindi</h1>
          <p className="mt-4 text-warm-white/70 max-w-xl mx-auto">
            From beachfront cottages to heritage Swahili houses — find your
            perfect stay on the Kenya coast.
          </p>
        </div>
      </section>

      <section className="bg-shell px-6 py-16 lg:py-20">
        <div className="max-w-6xl mx-auto">
          {loading && (
            <div className="text-center py-20 text-stone">Loading accommodations…</div>
          )}
          {error && (
            <div className="text-center py-20 text-terracotta">{error}</div>
          )}

          {!loading && !error && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {accommodations.map((acc, i) => (
                <div
                  key={acc.id}
                  className="bg-white border border-charcoal/10 rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all"
                >
                  <div className="h-40 relative overflow-hidden">
                    <img
                      src={PHOTOS[i % PHOTOS.length]}
                      alt={acc.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ocean/50 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-[19px] text-charcoal mb-1">{acc.name}</h3>
                    <p className="flex items-center gap-1.5 text-gold text-[12.5px] mb-3">
                      <MapPin size={13} /> {acc.location}
                    </p>
                    <p className="text-stone text-[14px] mb-4 leading-relaxed">{acc.description}</p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {acc.tags.map((tag) => (
                        <span key={tag} className="bg-sand text-charcoal/70 text-[11.5px] px-2.5 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between text-[13px] mb-5">
                      <span className="flex items-center gap-1.5 text-stone">
                        <Users size={14} /> Up to {acc.guests} guests
                      </span>
                      <span className="font-semibold text-gold">
                        KES {acc.price.toLocaleString()} / night
                      </span>
                    </div>
                    <button
                      onClick={() => setSelected(acc)}
                      className="w-full bg-ocean text-warm-white py-2.5 rounded-full text-[13px] font-semibold hover:bg-ocean-2 transition-colors"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {selected && (
        <AccommodationBookingModal
          accommodation={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  )
}

export default Accommodations
