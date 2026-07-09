import { useState } from 'react'
import { X, PartyPopper } from 'lucide-react'
import { bookExperience } from '../services/api'

function ExperienceBookingModal({ experience, onClose }) {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    date: '',
    numberOfGuests: 1,
    specialRequests: '',
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(null)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit() {
    setLoading(true)
    setError(null)
    try {
      await bookExperience(experience.id, form)
      setSuccess(true)
    } catch {
      setError('Failed to submit booking. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const inputClass =
    'border border-charcoal/15 rounded-xl px-4 py-3 text-sm outline-none focus:border-gold transition-colors'

  return (
    <div className="fixed inset-0 bg-ocean/60 backdrop-blur-sm z-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl w-full max-w-md p-8 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-stone hover:text-charcoal transition-colors">
          <X size={20} />
        </button>

        {success ? (
          <div className="text-center py-8">
            <PartyPopper size={36} className="mx-auto text-gold" />
            <h3 className="font-display text-[22px] text-charcoal mt-4 mb-2">Booking Confirmed!</h3>
            <p className="text-stone text-sm mb-6">We'll be in touch shortly to confirm your experience.</p>
            <button
              onClick={onClose}
              className="bg-ocean text-warm-white px-6 py-2.5 rounded-full text-[13px] font-semibold hover:bg-ocean-2 transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h2 className="font-display text-[22px] text-charcoal mb-1">Book Experience</h2>
            <p className="text-gold text-sm mb-6">{experience.title}</p>

            <div className="flex flex-col gap-4">
              <input name="fullName" placeholder="Full name" value={form.fullName} onChange={handleChange} className={inputClass} />
              <input name="email" type="email" placeholder="Email address" value={form.email} onChange={handleChange} className={inputClass} />
              <input name="phone" placeholder="Phone number" value={form.phone} onChange={handleChange} className={inputClass} />
              <input name="date" type="date" value={form.date} onChange={handleChange} className={inputClass} />
              <input name="numberOfGuests" type="number" min="1" placeholder="Number of guests" value={form.numberOfGuests} onChange={handleChange} className={inputClass} />
              <textarea name="specialRequests" placeholder="Special requests (optional)" rows={3} value={form.specialRequests} onChange={handleChange} className={`${inputClass} resize-none`} />

              {error && <p className="text-terracotta text-sm">{error}</p>}

              <button
                onClick={handleSubmit}
                disabled={loading}
                className="bg-gold text-ocean px-6 py-3.5 rounded-full font-semibold text-[13px] hover:bg-gold-soft transition-colors disabled:opacity-50"
              >
                {loading ? 'Submitting...' : 'Confirm Booking'}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default ExperienceBookingModal
