import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/NavbarDashbord'

function Dashbord () {
  return (
    <>
      <Navbar />

      <div className='bg-slate-600  w-full min-h-screen pt-5 flex justify-center '>
        <main className='max-w-3xl overflow-hidden min-w-fit'>
          <Outlet />
        </main>
      </div>
    </>
  )
}

export default Dashbord
