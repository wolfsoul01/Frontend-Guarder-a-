import { useState } from 'react'
import { HambMenu } from '../Icons'
import { NavLink } from 'react-router-dom'

//import logo from '/logo.svg'

export function Navbar () {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <header className='inset-x-0 px-3 py-5  bg-white/40  backdrop-blur-sm shadow-md mb-5  '>
        <nav className=' mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center relative'>
          <div className='w-full flex justify-between items-center'>
            <picture className='flex items-center font-bold relative '>
              {/* <img src={logo} alt='' width={'40px'} />
            <span>LOGO</span> */}
              <a
                href='#'
                className='text-lg relative z-50 font-bold tracking-widest text-gray-900 rounded-lg focus:outline-none focus:shadow-outline'
              >
                <span className='uppercase  font-semibold'>guardy-yamy</span>
              </a>
              <svg
                className='h-11 z-40 absolute  -top-2 -left-2'
                viewBox='0 0 79 79'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M35.2574 2.24264C37.6005 -0.100501 41.3995 -0.100505 43.7426 2.24264L76.7574 35.2574C79.1005 37.6005 79.1005 41.3995 76.7574 43.7426L43.7426 76.7574C41.3995 79.1005 37.6005 79.1005 35.2574 76.7574L2.24264 43.7426C-0.100501 41.3995 -0.100505 37.6005 2.24264 35.2574L35.2574 2.24264Z'
                  fill='#65DAFF'
                />
              </svg>
            </picture>

            <div className=' flex gap-5'>
              <NavLink
                to={'/login'}
                className='w-full  mx-auto md:hidden flex justify-center flex-grow-0'
              >
                <button className='rounded-md px-5 py-2.5 text-sm font-medium  shadow group relative overflow-hidden text-black '>
                  Login
                  <span className='absolute inset-y-0 left-0 w-full bg-primary transition-all l  -z-10'></span>
                </button>
              </NavLink>
              <HambMenu handleClick={handleClick} />
            </div>
          </div>

          {/* NavBar for Destokp */}
          <div className='flex justify-between items-center gap-5  relative '>
            <nav className={` ${!isOpen ? 'hidden' : ''} md:block `}>
              <ul className='flex flex-col md:flex-row justify-around items-center gap-6 text-[#222]  [&>li]:cursor-pointer font-medium  flex-grow  text-xl '>
                <li className='relative group '>
                  Inicio
                  <span className='absolute left-0 bottom-0 bg-teal-400 w-0 group-hover:w-full h-[2px] transition-all duration-150 '></span>
                </li>
                <li className='relative group '>
                  Escuela
                  <span className='absolute left-0 bottom-0 bg-teal-400 w-0 group-hover:w-full h-[2px] transition-all duration-150 '></span>
                </li>
                <li className='relative group '>
                  Contacto
                  <span className='absolute left-0 bottom-0 bg-teal-400 w-0 group-hover:w-full h-[2px] transition-all duration-150 '></span>
                </li>
                <li className='relative group '>
                  <NavLink to={'/dashbord'}>Dashbord</NavLink>
                  <span className='absolute left-0 bottom-0 bg-teal-400 w-0 group-hover:w-full h-[2px] transition-all duration-150 '></span>
                </li>
              </ul>
            </nav>
            {/* NavBar for Destokp */}

            <div className=' gap-5 relative hidden md:flex '>
              <NavLink to={'/login'}>
                <button className='rounded-md px-5 py-2.5 text-sm font-medium text-white shadow group relative overflow-hidden hover:text-black '>
                  Login
                  <span
                    className='absolute inset-y-0 left-0 w-[2px] bg-primary transition-all group-hover:w-full group-active:bg-indigo-500 
                group-hover:opacity-100 -z-10'
                  ></span>
                </button>
              </NavLink>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}
