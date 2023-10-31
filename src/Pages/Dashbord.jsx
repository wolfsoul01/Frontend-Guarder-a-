import { Outlet } from 'react-router-dom'
// import { Navbar } from '../components/Dasbord/NavbarDashbord'
import Sidebar from '../components/Dasbord/Sidebar'
import { Flowbite } from 'flowbite-react'
function Dashbord () {
  return (
    <>
      <div className=''>
        <Flowbite>
          {/* <Navbar /> */}
          <Sidebar />

          <div className='w-full h-full'>
            <Outlet />
          </div>
        </Flowbite>
      </div>
    </>
  )
}

export default Dashbord
