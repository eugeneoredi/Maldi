import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <div className="min-h-screen bg-shell flex flex-col">
      <Navbar />
      <main className="pt-20 flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
