import HambMenu from './ui/HamburguerMenu'

import logo from '/logo.svg'


export function Navbar () {
  return (
    <header className='inset-x-0 px-3 py-3 flex justify-between items-center bg-white/40  backdrop-blur-sm shadow-md mb-5  '>
      <picture className='flex items-center font-bold '>
        <img src={logo} alt='' width={'40px'} />
        <span>LOGO</span>
      </picture>
      <nav>
        <ul className='flex justify-around gap-6 text-[#222]  [&>li]:cursor-pointer font-medium  flex-grow  text-xl '>
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
            Matricula
            <span className='absolute left-0 bottom-0 bg-teal-400 w-0 group-hover:w-full h-[2px] transition-all duration-150 '></span>
          </li>
        </ul>
      </nav>
       <HambMenu/>
      <div className=' gap-5 relative hidden md:flex '>
        

        <button className='rounded-md px-5 py-2.5 text-sm font-medium text-white shadow group relative overflow-hidden hover:text-black '>
          Login
          <span
            className='absolute inset-y-0 left-0 w-[2px] bg-primary transition-all group-hover:w-full group-active:bg-indigo-500 
            group-hover:opacity-100 -z-10'
          ></span>
        </button>
        <button className='rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-black hover:bg-gray-300 '>
          Registrarte
        </button>
      </div>
    </header>
  )
}
