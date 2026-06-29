import { useEffect, useState } from 'react'
import { getAccommodations } from '../services/api'
import AccommodationBookingModal from '../components/AccommodationBookingModal'

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

  if (loading) return <div className="text-center py-20 text-stone-500">Loading accommodations...</div>
  if (error) return <div className="text-center py-20 text-red-500">{error}</div>

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <p className="text-amber-600 text-sm uppercase tracking-widest mb-2">Where to Stay</p>
        <h1 className="text-4xl font-bold text-stone-800 mb-4">Accommodations in Malindi</h1>
        <p className="text-stone-500 max-w-xl mx-auto">
          From beachfront cottages to heritage Swahili houses — find your perfect stay on the Kenya coast.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {accommodations.map((acc) => (
          <div key={acc.id} className="bg-white border border-stone-200 rounded-2xl overflow-hidden hover:shadow-md transition">
            <div className="h-40 bg-stone-100 flex items-center justify-center text-5xl">
              {acc.emoji}
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-stone-800 mb-1">{acc.name}</h3>
              <p className="text-amber-600 text-xs mb-3">📍 {acc.location}</p>
              <p className="text-stone-500 text-sm mb-4">{acc.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {acc.tags.map((tag) => (
                  <span key={tag} className="bg-stone-100 text-stone-600 text-xs px-2 py-1 rounded-full">{tag}</span>
                ))}
              </div>
              <div className="flex items-center justify-between text-sm mb-4">
                <span className="text-stone-400">👥 Up to {acc.guests} guests</span>
                <span className="font-semibold text-amber-600">KES {acc.price.toLocaleString()} / night</span>
              </div>
              <button
                onClick={() => setSelected(acc)}
                className="w-full bg-amber-600 text-white py-2 rounded-full text-sm font-medium hover:bg-amber-700 transition">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>

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
