import { useState } from 'react'
import {HambMenu} from './Icons'
import {NavLink} from 'react-router-dom'

import logo from '/logo.svg'

export function Navbar () {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <header className='inset-x-0 px-3 py-3 flex flex-col md:flex-row justify-between items-center bg-white/40  backdrop-blur-sm shadow-md mb-5  '>
        <div className='w-full flex justify-between items-center'>
          <picture className='flex items-center font-bold  '>
            <img src={logo} alt='' width={'40px'} />
            <span>LOGO</span>
          </picture>

          <HambMenu handleClick={handleClick} />
        </div>

        {/* NavBar for Destokp */}
        <div className='flex justify-between items-center gap-5 '>
          <nav className={` ${!isOpen ? 'hidden' : ''} md:block`}>
            <ul className='flex flex-col md:flex-row justify-around gap-6 text-[#222]  [&>li]:cursor-pointer font-medium  flex-grow  text-xl '>
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
            <button className='rounded-md px-5 py-2.5 text-sm font-medium text-white shadow group relative overflow-hidden hover:text-black '>
              <NavLink to={'/login'}>
              Login

              </NavLink>
              <span
                className='absolute inset-y-0 left-0 w-[2px] bg-primary transition-all group-hover:w-full group-active:bg-indigo-500 
            group-hover:opacity-100 -z-10'
              ></span>
            </button>
            <button className='rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-black hover:bg-gray-300 '>
              Registrarte
            </button>
          </div>
        </div>
      </header>
    </>
  )
}
