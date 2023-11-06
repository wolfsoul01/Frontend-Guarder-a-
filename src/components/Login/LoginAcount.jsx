import { ArrowRigth } from '../Icons'
import { NavLink } from 'react-router-dom'
// eslint-disable-next-line react/prop-types
export function LoginForm ({ hancleClik }) {
  return (
    <div className='w-full px-4 py-12 sm:px-6  lg:w-1/2 lg:px-8 '>
      <div className='mx-auto max-w-lg text-center relative'>
        <h1 className='text-2xl font-bold sm:text-3xl'>Inicia Sesion </h1>

        <p className='mt-4 text-gray-500 relative'>
          Bienvenidos a{' '}
          <span className='uppercase text-amber-500 font-semibold'>
            guardy-yamy
          </span>
          , un lugar mágico donde los niños{' '}
          <span className='text-amber-500 font-medium'>aprenden</span> y se{' '}
          <span className='text-amber-500 font-medium'>divierten</span> a
          través del juego y la imaginación. Inicia sesión para formar parte de
          nuestra comunidad educativa.
        </p>
        <button
          className=' text-center w-1/2 mx-auto class="w-[150px] bg-black h-[50px] my-3 flex items-center justify-center gap-1 rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-right-full before:w-full before:h-full before:bg-gradient-to-l before:from-yellow-200 before:to-amber-500 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:right-0 text-[#fff] hover:text-black font-semibold'
          onClick={hancleClik}
        >
          <ArrowRigth styles={'sm:rotate-180 -rotate-90'} />
          No tines una cuenta
        </button>
      </div>

      <form
        action='/dashbord/kids'
        className='mx-auto mb-0 mt-8 max-w-md space-y-4'
      >
        <label
          htmlFor='email'
          className='block text-sm font-medium mb-2 dark:text-white'
        >
         Correo
        </label>
        <div className='relative'>
          <input
            type='email'
            required
            id='email'
            className='py-3 px-4 pl-11 block w-full border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400'
            placeholder='you@site.com'
          />
          <div className='absolute inset-y-0 left-0 flex items-center pointer-events-none z-20 pl-4'>
            <svg
              className='h-4 w-4 text-gray-400'
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              viewBox='0 0 16 16'
            >
              <path d='M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z' />
            </svg>
          </div>
        </div>

        <div>
        <label
            htmlFor='password'
            className='block text-sm font-medium mb-2 dark:text-white'
          >
            Contraseña 
          </label>

          <div className='relative'>
            <input
              type='password'
              required
              id='password'
              minLength={8}
              className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm'
              placeholder='Enter password'
            />

            <span className='absolute inset-y-0 end-0 grid place-content-center px-4'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-4 w-4 text-gray-400'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                />
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                />
              </svg>
            </span>
          </div>
        </div>

        <div className='flex items-center justify-between'>
          <p className='text-sm text-gray-500'>
            <NavLink className='underline' to={'/'}>
              Volver
            </NavLink>
          </p>

          <button className='inline-block rounded-lg  px-5 py-3 text-sm font-medium bg-gradient-to-tr to-yellow-200 from-amber-500 shadow-md hover:scale-105'>
            Iniciar 
          </button>
        </div>
      </form>
    </div>
  )
}
