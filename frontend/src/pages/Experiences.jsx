import { useEffect, useState } from 'react'
import { Clock } from 'lucide-react'
import { getExperiences } from '../services/api'
import ExperienceBookingModal from '../components/ExperienceBookingModal'
import fishingImg from '../assets/images/experience-fishing.jpg'
import snorkelImg from '../assets/images/experience-snorkel.jpg'
import sunsetImg from '../assets/images/experience-sunset.jpg'

const PHOTOS = [fishingImg, snorkelImg, sunsetImg]

function Experiences() {
  const [experiences, setExperiences] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    getExperiences()
      .then(res => setExperiences(res.data))
      .catch(() => setError('Failed to load experiences'))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div>
      <section className="bg-ocean text-warm-white">
        <div className="max-w-4xl mx-auto px-6 py-16 lg:py-20 text-center">
          <p className="text-gold text-[12px] tracking-[0.2em] uppercase mb-4">What to Do</p>
          <h1 className="font-display text-[36px] lg:text-[44px] text-balance">Experiences in Malindi</h1>
          <p className="mt-4 text-warm-white/70 max-w-xl mx-auto">
            Handpicked activities that showcase the best of Kenya's coast —
            ocean, culture, and nature.
          </p>
        </div>
      </section>

      <section className="bg-shell px-6 py-16 lg:py-20">
        <div className="max-w-6xl mx-auto">
          {loading && (
            <div className="text-center py-20 text-stone">Loading experiences…</div>
          )}
          {error && (
            <div className="text-center py-20 text-terracotta">{error}</div>
          )}

          {!loading && !error && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {experiences.map((exp, i) => (
                <div
                  key={exp.id}
                  className="bg-white border border-charcoal/10 rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all"
                >
                  <div className="h-40 relative overflow-hidden">
                    <img
                      src={PHOTOS[i % PHOTOS.length]}
                      alt={exp.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ocean/50 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-[19px] text-charcoal mb-2">{exp.title}</h3>
                    <p className="text-stone text-[14px] mb-5 leading-relaxed">{exp.description}</p>
                    <div className="flex items-center justify-between text-[13px] mb-5">
                      <span className="flex items-center gap-1.5 text-stone">
                        <Clock size={14} /> {exp.duration}
                      </span>
                      <span className="font-semibold text-gold">
                        KES {exp.price.toLocaleString()}
                      </span>
                    </div>
                    <button
                      onClick={() => setSelected(exp)}
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
        <ExperienceBookingModal
          experience={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  )
}

export default Experiences
