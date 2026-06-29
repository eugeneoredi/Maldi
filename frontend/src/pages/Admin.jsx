import { useState } from 'react'
import { adminLogin, getAdminBookings } from '../services/api'

function Admin() {
  const [password, setPassword] = useState('')
  const [token, setToken] = useState(null)
  const [bookings, setBookings] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [activeTab, setActiveTab] = useState('experiences')

  async function handleLogin() {
    setLoading(true)
    setError(null)
    try {
      const res = await adminLogin(password)
      const t = res.data.token
      setToken(t)
      const bookingsRes = await getAdminBookings(t)
      setBookings(bookingsRes.data)
    } catch {
      setError('Invalid password. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  function handleLogout() {
    setToken(null)
    setBookings(null)
    setPassword('')
  }

  if (!token) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="bg-white border border-stone-200 rounded-2xl p-10 w-full max-w-sm text-center">
          <div className="text-4xl mb-4">🔐</div>
          <h1 className="text-2xl font-bold text-stone-800 mb-2">Admin Panel</h1>
          <p className="text-stone-500 text-sm mb-6">Enter your password to continue</p>
          <input
            type="password"
            placeholder="Admin password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleLogin()}
            className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-amber-400 mb-4"
          />
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full bg-amber-600 text-white py-3 rounded-full font-medium hover:bg-amber-700 transition disabled:opacity-50">
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-3xl font-bold text-stone-800">Admin Panel</h1>
          <p className="text-stone-500 text-sm mt-1">All bookings from Maldi</p>
        </div>
        <button onClick={handleLogout} className="text-sm text-stone-500 hover:text-red-500 transition">
          Logout
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-8 border-b border-stone-200">
        <button
          onClick={() => setActiveTab('experiences')}
          className={`pb-3 text-sm font-medium border-b-2 transition ${activeTab === 'experiences' ? 'border-amber-600 text-amber-600' : 'border-transparent text-stone-500 hover:text-stone-800'}`}>
          Experience Bookings ({bookings?.experienceBookings?.length || 0})
        </button>
        <button
          onClick={() => setActiveTab('accommodations')}
          className={`pb-3 text-sm font-medium border-b-2 transition ${activeTab === 'accommodations' ? 'border-amber-600 text-amber-600' : 'border-transparent text-stone-500 hover:text-stone-800'}`}>
          Accommodation Bookings ({bookings?.accommodationBookings?.length || 0})
        </button>
      </div>

      {/* Experience Bookings */}
      {activeTab === 'experiences' && (
        <div className="flex flex-col gap-4">
          {bookings?.experienceBookings?.length === 0 && (
            <p className="text-stone-400 text-sm">No experience bookings yet.</p>
          )}
          {bookings?.experienceBookings?.map(b => (
            <div key={b.id} className="bg-white border border-stone-200 rounded-2xl p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-bold text-stone-800">{b.fullName}</h3>
                  <p className="text-amber-600 text-sm">{b.experience.title}</p>
                </div>
                <span className="text-xs text-stone-400">{new Date(b.createdAt).toLocaleDateString()}</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-stone-600">
                <div><span className="text-stone-400 block text-xs">Email</span>{b.email}</div>
                <div><span className="text-stone-400 block text-xs">Phone</span>{b.phone}</div>
                <div><span className="text-stone-400 block text-xs">Date</span>{new Date(b.date).toLocaleDateString()}</div>
                <div><span className="text-stone-400 block text-xs">Guests</span>{b.numberOfGuests}</div>
              </div>
              {b.specialRequests && (
                <p className="text-stone-500 text-sm mt-4 bg-stone-50 rounded-xl px-4 py-2">
                  📝 {b.specialRequests}
                </p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Accommodation Bookings */}
      {activeTab === 'accommodations' && (
        <div className="flex flex-col gap-4">
          {bookings?.accommodationBookings?.length === 0 && (
            <p className="text-stone-400 text-sm">No accommodation bookings yet.</p>
          )}
          {bookings?.accommodationBookings?.map(b => (
            <div key={b.id} className="bg-white border border-stone-200 rounded-2xl p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-bold text-stone-800">{b.fullName}</h3>
                  <p className="text-amber-600 text-sm">{b.accommodation.name}</p>
                </div>
                <span className="text-xs text-stone-400">{new Date(b.createdAt).toLocaleDateString()}</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-stone-600">
                <div><span className="text-stone-400 block text-xs">Email</span>{b.email}</div>
                <div><span className="text-stone-400 block text-xs">Phone</span>{b.phone}</div>
                <div><span className="text-stone-400 block text-xs">Check-in</span>{new Date(b.checkIn).toLocaleDateString()}</div>
                <div><span className="text-stone-400 block text-xs">Check-out</span>{new Date(b.checkOut).toLocaleDateString()}</div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-stone-600 mt-3">
                <div><span className="text-stone-400 block text-xs">Guests</span>{b.numberOfGuests}</div>
                <div><span className="text-stone-400 block text-xs">Maid Service</span>{b.maidService ? 'Yes' : 'No'}</div>
              </div>
              {b.specialRequests && (
                <p className="text-stone-500 text-sm mt-4 bg-stone-50 rounded-xl px-4 py-2">
                  📝 {b.specialRequests}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Admin
