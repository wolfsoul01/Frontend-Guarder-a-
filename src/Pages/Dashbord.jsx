import { Outlet } from 'react-router-dom'
// import { Navbar } from '../components/Dasbord/NavbarDashbord'
import Sidebar from '../components/Dasbord/Sidebar'
import {  Flowbite } from 'flowbite-react';
function Dashbord () {
  return (
    <>
    <Flowbite>

      {/* <Navbar /> */}
      <Sidebar/>

      <div className='dark'>
          <Outlet />
      </div>
    </Flowbite>
    </>
  )
}

export default Dashbord
