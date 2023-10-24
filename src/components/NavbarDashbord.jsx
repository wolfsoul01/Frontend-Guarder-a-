import { NavLink } from 'react-router-dom'
import { HambMenu } from './Icons'
import { useState } from 'react'
export function Navbar () {

  const [isOpen,setisOpen]=useState(false)

  const handleClick=()=>{
    setisOpen(!isOpen)
  }

  return (
    <>


      <nav className='bg-white  dark:bg-gray-900 dark:border-gray-700'>
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
          <header className=' flex justify-between w-full md:w-fit'>
            <a href='#' className='flex items-center'>
              <img
                src='https://flowbite.com/docs/images/logo.svg'
                className='h-8 mr-3'
                alt='Flowbite Logo'
              />
              <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
                Dashbord
              </span>
            </a>

            <HambMenu handleClick={handleClick} />
          </header>

          <div className={`${!isOpen ? 'hidden':''} md:block`}>
            <ul className='text-white flex flex-col md:flex-row gap-5  flex-grow  '>
              <li>
                <NavLink to={'children'} className=''>
                  Ninos
                </NavLink>
              </li>

              <li>
                <NavLink to={'/dashbord/master'} className=''>
                  Maestros
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
