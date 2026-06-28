import { useEffect, useState } from 'react'
import { getExperiences } from '../services/api'

function Experiences() {
  const [experiences, setExperiences] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getExperiences()
      .then(res => setExperiences(res.data))
      .catch(() => setError('Failed to load experiences'))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <div className="text-center py-20 text-stone-500">Loading experiences...</div>
  if (error) return <div className="text-center py-20 text-red-500">{error}</div>

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
                <span className="font-semibold text-amber-600">KES {exp.price.toLocaleString()}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experiences
