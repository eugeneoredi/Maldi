const experiences = [
  {
    id: 1,
    title: 'Deep Sea Fishing',
    description: 'Head out into the Indian Ocean for marlin, sailfish, and tuna with experienced local captains.',
    duration: 'Full day',
    price: 'KES 15,000',
    emoji: '🎣',
  },
  {
    id: 2,
    title: 'Marine Park Snorkeling',
    description: 'Explore the vibrant coral reefs of Malindi Marine National Park teeming with tropical fish.',
    duration: 'Half day',
    price: 'KES 3,500',
    emoji: '🤿',
  },
  {
    id: 3,
    title: 'Gede Ruins Cultural Tour',
    description: 'Walk through the ancient Swahili ruins of Gede and learn about the rich coastal heritage.',
    duration: '3 hours',
    price: 'KES 2,000',
    emoji: '🏛️',
  },
  {
    id: 4,
    title: 'Sunset Dhow Cruise',
    description: 'Sail along the coast on a traditional dhow as the sun sets over the Indian Ocean.',
    duration: '2 hours',
    price: 'KES 4,500',
    emoji: '⛵',
  },
  {
    id: 5,
    title: 'Watamu Turtle Watch',
    description: 'Visit the Kenya Sea Turtle Conservation Program and witness nesting sea turtles up close.',
    duration: 'Half day',
    price: 'KES 2,500',
    emoji: '🐢',
  },
  {
    id: 6,
    title: 'Arabuko-Sokoke Forest Walk',
    description: 'Trek through one of East Africa\'s last remaining coastal forests, home to rare birds and elephants.',
    duration: 'Half day',
    price: 'KES 3,000',
    emoji: '🌿',
  },
]

function Experiences() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <p className="text-amber-600 text-sm uppercase tracking-widest mb-2">What to Do</p>
        <h1 className="text-4xl font-bold text-stone-800 mb-4">Experiences in Malindi</h1>
        <p className="text-stone-500 max-w-xl mx-auto">
          Handpicked activities that showcase the best of Kenya's coast — ocean, culture, and nature.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {experiences.map((exp) => (
          <div key={exp.id} className="bg-white border border-stone-200 rounded-2xl overflow-hidden hover:shadow-md transition">
            <div className="h-40 bg-stone-100 flex items-center justify-center text-5xl">
              {exp.emoji}
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-stone-800 mb-2">{exp.title}</h3>
              <p className="text-stone-500 text-sm mb-4">{exp.description}</p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-stone-400">⏱ {exp.duration}</span>
                <span className="font-semibold text-amber-600">{exp.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experiences
