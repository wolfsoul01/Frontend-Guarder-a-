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
              <img src="" alt=""  className='absolute top-0 left-0' />
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
                  <span className='absolute left-0 bottom-0 bg-yellow-300 w-0 group-hover:w-full h-[2px] transition-all duration-150 '></span>
                </li>
                <li className='relative group '>
                  Escuela
                  <span className='absolute left-0 bottom-0 bg-yellow-300 w-0 group-hover:w-full h-[2px] transition-all duration-150 '></span>
                </li>
                <li className='relative group '>
                  Contacto
                  <span className='absolute left-0 bottom-0 bg-yellow-300 w-0 group-hover:w-full h-[2px] transition-all duration-150 '></span>
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
