import { Navbar } from './Navbar'

export function Home () {
  return (
    <section className=''>
      <Navbar />

        <picture className=''>
          <img
            src='/fondo_home.jpg'
            alt=''
            className=' absolute top-0 left-0 -z-10 w-full h-full object-cover '
          />
        </picture>
      <header className='p-3 '>

        <section className='flex flex-col gap-3 justify-center items-center max-w-xl md:max-w-2xl my-0 mx-auto backdrop-blur-sm p-5'>
          <header className='mt-10'>
            <h1 className='text-4xl md:text-6xl lg:text-6xl text-primary  font-bold text-center'>
              Guarderia Matanzas
            </h1>
          </header>
          <p className='text-yellow-300 text-base max-w-sm text-center md:text-2xl relative'>
            Guardando risas y construyendo sonrisas, ¡donde la infancia brilla!
          </p>

          <button className='py-2 px-6 text-2xl bg-amber-300 relative hover:translate-x-5 transition-all duration-150  font-semibold'>
            <span className='absolute top-0 left-0 inset-0 border-amber-400 border'></span>
            Button
          </button>
        </section>
      </header>
    </section>
  )
}
