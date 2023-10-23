import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/NavbarDashbord'

function Dashbord () {
  return (
    <>
      <Navbar />

        <div className='bg-slate-600  w-full min-h-screen pt-5'>
      <main className='max-w-xl mx-auto' >
          <Outlet />
      </main>
        </div>
    </>
  )
}

export default Dashbord
