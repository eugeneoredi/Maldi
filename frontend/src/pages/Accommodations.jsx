const accommodations = [
  {
    id: 1,
    name: 'Beachfront Cottage',
    location: 'Silversands Beach, Malindi',
    description: 'A cozy private cottage steps from the beach, ideal for couples and small families.',
    price: 'KES 8,000 / night',
    guests: 4,
    emoji: '🏡',
    tags: ['Beach', 'Private', 'Wifi'],
  },
  {
    id: 2,
    name: 'Coral Reef Villa',
    location: 'Casuarina Beach, Malindi',
    description: 'Spacious villa with private pool, ocean views, and a dedicated house manager.',
    price: 'KES 25,000 / night',
    guests: 8,
    emoji: '🏊',
    tags: ['Pool', 'Villa', 'Ocean View'],
  },
  {
    id: 3,
    name: 'Watamu Beach Lodge',
    location: 'Watamu, Kilifi County',
    description: 'Boutique lodge surrounded by indigenous gardens, minutes from Watamu Marine Park.',
    price: 'KES 12,000 / night',
    guests: 6,
    emoji: '🌴',
    tags: ['Garden', 'Lodge', 'Marine Park'],
  },
  {
    id: 4,
    name: 'Old Town Swahili House',
    location: 'Malindi Old Town',
    description: 'Restored historic Swahili architecture with authentic decor and rooftop terrace.',
    price: 'KES 10,000 / night',
    guests: 5,
    emoji: '🕌',
    tags: ['Heritage', 'Rooftop', 'Cultural'],
  },
  {
    id: 5,
    name: 'Driftwood Beach Club Room',
    location: 'Malindi Town',
    description: 'Classic Malindi accommodation with direct beach access, restaurant, and pool.',
    price: 'KES 7,500 / night',
    guests: 2,
    emoji: '🏖️',
    tags: ['Beach Club', 'Restaurant', 'Pool'],
  },
  {
    id: 6,
    name: 'Mangrove Eco Camp',
    location: 'Mida Creek, Watamu',
    description: 'Off-grid eco tents on the edge of Mida Creek, perfect for nature lovers.',
    price: 'KES 5,000 / night',
    guests: 2,
    emoji: '⛺',
    tags: ['Eco', 'Nature', 'Creek'],
  },
]

function Accommodations() {
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
              <div className="flex items-center justify-between text-sm">
                <span className="text-stone-400">👥 Up to {acc.guests} guests</span>
                <span className="font-semibold text-amber-600">{acc.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Accommodations
