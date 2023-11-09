import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Dasbord/Sidebar'
import { Flowbite } from 'flowbite-react'
function Dashbord () {
  return (
    <>
      <div className=''>
        <Flowbite>
          <header>
            <Sidebar />
          </header>

          <main className=' h-full sm:ml-44  p-5 mt-16  bg-dashboard-100 '>
            <Outlet />
          </main>
        </Flowbite>
      </div>
    </>
  )
}

export default Dashbord
