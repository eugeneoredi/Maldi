import { useState } from 'react'
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

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl w-full max-w-md p-8 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-stone-400 hover:text-stone-800 text-xl">✕</button>

        {success ? (
          <div className="text-center py-8">
            <div className="text-5xl mb-4">🎉</div>
            <h3 className="text-xl font-bold text-stone-800 mb-2">Booking Confirmed!</h3>
            <p className="text-stone-500 text-sm mb-6">We'll be in touch shortly to confirm your experience.</p>
            <button onClick={onClose} className="bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition">
              Close
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-xl font-bold text-stone-800 mb-1">Book Experience</h2>
            <p className="text-amber-600 text-sm mb-6">{experience.title}</p>

            <div className="flex flex-col gap-4">
              <input name="fullName" placeholder="Full name" value={form.fullName} onChange={handleChange}
                className="border border-stone-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-amber-400" />
              <input name="email" type="email" placeholder="Email address" value={form.email} onChange={handleChange}
                className="border border-stone-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-amber-400" />
              <input name="phone" placeholder="Phone number" value={form.phone} onChange={handleChange}
                className="border border-stone-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-amber-400" />
              <input name="date" type="date" value={form.date} onChange={handleChange}
                className="border border-stone-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-amber-400" />
              <input name="numberOfGuests" type="number" min="1" placeholder="Number of guests" value={form.numberOfGuests} onChange={handleChange}
                className="border border-stone-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-amber-400" />
              <textarea name="specialRequests" placeholder="Special requests (optional)" rows={3} value={form.specialRequests} onChange={handleChange}
                className="border border-stone-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-amber-400 resize-none" />

              {error && <p className="text-red-500 text-sm">{error}</p>}

              <button onClick={handleSubmit} disabled={loading}
                className="bg-amber-600 text-white px-6 py-3 rounded-full font-medium hover:bg-amber-700 transition disabled:opacity-50">
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
