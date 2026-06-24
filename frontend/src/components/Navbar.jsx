import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm px-6 py-4 flex items-center justify-between">
      <Link to="/" className="text-xl font-bold tracking-tight text-stone-800">
        Maldi
      </Link>
      <div className="flex items-center gap-6 text-sm font-medium text-stone-600">
        <NavLink to="/" end className={({ isActive }) => isActive ? 'text-amber-600' : 'hover:text-amber-600'}>
          Home
        </NavLink>
        <NavLink to="/experiences" className={({ isActive }) => isActive ? 'text-amber-600' : 'hover:text-amber-600'}>
          Experiences
        </NavLink>
        <NavLink to="/accommodations" className={({ isActive }) => isActive ? 'text-amber-600' : 'hover:text-amber-600'}>
          Accommodations
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'text-amber-600' : 'hover:text-amber-600'}>
          About
        </NavLink>
        <NavLink to="/contact" className="bg-amber-600 text-white px-4 py-2 rounded-full hover:bg-amber-700 transition">
          Contact
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
