import { NavLink } from 'react-router-dom'
import react from '../../../assets/react.svg'
import { DarkThemeToggle } from 'flowbite-react'
import { useState } from 'react'
import { Avatar } from '../../Icons'
// eslint-disable-next-line react/prop-types
export function Nav ({ handleClick }) {
  const [isOpen, setisOpen] = useState(false)

  return (
    <>
      <nav className='fixed top-0 z-50 w-full bg-gray-50 border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700'>
        <div className='px-3 py-3 lg:px-5 lg:pl-3'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center justify-start relative'>
              <button
                type='button'
                className='inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
                onClick={handleClick}
              >
                <svg
                  className='w-6 h-6'
                  aria-hidden='true'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    clipRule='evenodd'
                    fillRule='evenodd'
                    d='M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z'
                  ></path>
                </svg>
              </button>
              <NavLink to={'/'} className='flex ml-2 md:mr-24'>
                <span className='self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white'>
                  Logo
                </span>
              </NavLink>
            </div>
            <div className='flex items-center'>
              <div className='flex items-center ml-3 relative'>
                <div className='flex gap-3 items-center'>
                  <DarkThemeToggle></DarkThemeToggle>

                  <button
                    type='button'
                    className='flex text-sm  rounded-full  focus:ring-gray-300 dark:focus:ring-gray-600 group'
                    onClick={() => setisOpen(!isOpen)}
                  >
                    <span className='sr-only'>Open user menu</span>
                    <Avatar styles={'dark:text-white/80'}/>
                  </button>
                </div>
                <div
                  className={`z-50 absolute ${
                    isOpen ? '' : 'hidden'
                  }  top-0 -left-24 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600`}
                >
                  <div className='px-4 py-3' role='none'>
                    <p
                      className='text-sm text-gray-900 dark:text-white'
                      role='none'
                    >
                      Usurario Ramdon
                    </p>
                    <p
                      className='text-sm font-medium text-gray-900 truncate dark:text-gray-300'
                      role='none'
                    >
                      email@gmail.com
                    </p>
                  </div>
                  <ul className='py-1' role='none'>
                    <li>
                      <a
                        href='#'
                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white'
                        role='menuitem'
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white'
                        role='menuitem'
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white'
                        role='menuitem'
                      >
                        Earnings
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white'
                        role='menuitem'
                      >
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
