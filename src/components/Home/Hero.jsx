export default function Hero () {
  return (
    <section>
      <img
        src='/fondo_home.jpg'
        alt=''
        className=' absolute top-0 left-0 -z-10 w-full h-[500px] max-h-fit object-cover  '
      />

      <header className='p-3 m-3 '>
        <section className='flex flex-col gap-3 justify-center items-center max-w-xl md:max-w-2xl my-0 mx-auto backdrop-blur-sm p-5 '>
          <header className='mt-10'>
            <h1 className=' relative text-4xl md:text-6xl lg:text-6xl text-transparent bg-gradient-to-r to-yellow-200 from-amber-500 bg-clip-text  font-bold text-center bg-transparent '>
              Guarderia Matanzas
             
            </h1>
          </header>
          <p className='text-yellow-300 text-base max-w-sm text-center md:text-2xl relative'>
            Guardando risas y construyendo sonrisas, ¡donde la infancia brilla!
          </p>

          <button className='cursor-pointer font-semibold overflow-hidden relative z-100 border border-yellow-400 group px-8 py-2 rounded-md'>
            <span className='relative z-10 text-yellow-300 group-hover:text-black text-xl duration-500 '>
              Contactanos
            </span>
            <span className='absolute w-full h-full bg-yellow-300 -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500 rounded-sm'></span>
            <span className='absolute w-full h-full  bg-yellow-300 -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500 rounded-sm'></span>
          </button>
        </section>
      </header>
    </section>
  )
}
