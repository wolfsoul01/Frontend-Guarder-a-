function Info () {
  return (
    <section className='sm:flex items-center sm:space-x-8 mt-32 max-w-xl md:max-w-5xl mx-auto p-5'>
      <div className='sm:w-1/2 relative'>
        <div className='bg-yellow-500 rounded-full absolute w-12 h-12 z-0 -left-4 -top-3 animate-pulse'></div>
        <h1 className='font-semibold text-2xl relative z-50 text-darken lg:pr-10'>
          Actividades
          <span className='text-yellow-500'> Educativas</span>
        </h1>
        <p className='py-5 lg:pr-32 font-semibold'>
          En [] implementamos una gran variedad de actividades educativas
          divertidas para el desarrollo integral de los niños:
        </p>

        <aside>
          <ul className="flex flex-col gap-y-2 flex-wrap list-disc pl-6 ">
            <li>
              <h3 className="font-bold" >Talleres artísticos:</h3> Pintura, dibujo, manualidades, teatro,
              música.
            </li>
            <li>
              <h3 className="font-bold">Lectura y escritura:</h3> Cuentos, títeres, rimas, para fomentar el
              lenguaje.
            </li>
            <li>
              <h3 className="font-bold">Actividades psicomotrices:</h3> Realizamos ejercicios de motricidad
              gruesa y fina, coordinación y equilibrio.
            </li>
          </ul>
        </aside>

       

      </div>
      <div className='sm:w-1/2 relative mt-10 sm:mt-0'>
        <div className='floating w-24 h-24 absolute rounded-lg z-0 -top-3 -left-3'></div>
        <img
          className='rounded-xl z-40 relative'
          src='/img/teacher-explaining.png'
          alt=''
        />

        <div className='bg-yellow-500 w-40 h-40 floating absolute rounded-lg z-10 -bottom-3 -right-3'></div>
        <div className='bg-blue-500 w-40 h-40 floating absolute rounded-lg z-10 -top-3 -left-3'></div>
      </div>
    </section>
  )
}

export default Info
