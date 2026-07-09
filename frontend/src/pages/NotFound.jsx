import { Link } from 'react-router-dom'
import { Compass } from 'lucide-react'

function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-shell px-6">
      <div className="text-center">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-sand text-gold mb-6">
          <Compass size={28} strokeWidth={1.5} />
        </span>
        <h1 className="font-display text-[36px] text-charcoal mb-3">Lost at Sea</h1>
        <p className="text-stone mb-8">This page drifted off somewhere — let's get you back on course.</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full bg-ocean text-warm-white px-7 py-3.5 text-[13px] font-semibold hover:bg-ocean-2 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}

export default NotFound
