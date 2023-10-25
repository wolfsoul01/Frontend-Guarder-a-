import { Outlet } from 'react-router-dom'
// import { Navbar } from '../components/Dasbord/NavbarDashbord'
import Sidebar from '../components/Dasbord/Sidebar'
function Dashbord () {
  return (
    <>
      {/* <Navbar /> */}
      <Sidebar/>

      <div className='bg-slate-600  w-full min-h-screen pt-5  '>
        <main className=' overflow-hidden min-w-fit'>
          <Outlet />
        </main>
      </div>
    </>
  )
}

export default Dashbord
