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

          <main className='maxws h-full sm:ml-52  p-5 mt-16  bg-slate-300 '>
            <Outlet />
          </main>
        </Flowbite>
      </div>
    </>
  )
}

export default Dashbord
