import { Outlet } from 'react-router-dom'
// import { Navbar } from '../components/Dasbord/NavbarDashbord'
import Sidebar from '../components/Dasbord/Sidebar'
function Dashbord () {
  return (
    <>
      {/* <Navbar /> */}
      <Sidebar/>

      <div className='  '>
          <Outlet />
      </div>
    </>
  )
}

export default Dashbord
