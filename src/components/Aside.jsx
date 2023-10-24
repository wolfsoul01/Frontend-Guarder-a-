export function Aside () {
  return (
    <>
      <section className='max-w-5xl mx-auto mt-40 md:mt-32 p-5 my-9'>
        <header className="mx-auto w-full ">
          <h1 className="text-center text-2xl font-bold ">El lugar ideal para el <span className="text-yellow-500 uppercase">aprendizaje</span> divertido de tu <span  className="text-yellow-500 uppercase">hijo</span></h1>
        </header>

        <aside className='flex  justify-center items-center flex-wrap gap-y-4 gap-x-3 [&>article]:max-w-xs   [&>article]:min-h-[400px]'>
          <article className='p-3 flex flex-col items-center justify-center shadow-lg  '>
            <img src='/img/educacion_divertida.png' alt='' />
            <h4 className='font-semibold text-xl [&>span]:text-primary'>
              La <span>EDUCACIÓN</span> debe ser <span>DIVERTIDA</span>
            </h4>
            <p className='p-2 border-t-2 '>
              Metodologías innovadoras que hagan el desarrollo de las
              actividades ameno y provechoso.
            </p>
          </article>

          <article className='p-3 flex flex-col items-center justify-center shadow-lg   '>
            <img src='/img/conocimientos.png' alt='' />
            <h4 className='font-semibold text-xl [&>span]:text-primary'>
              Desarrolla todos los <span>CONOCIMIENTOS</span>
            </h4>
            <p className='p-2 border-t-2 '>
              La escuela infantil no es un mero lugar donde estar, en estas
              edades comienzan a aprender y a formarse.
            </p>
          </article>

          <article className='p-3 flex flex-col items-center justify-center shadow-lg  '>
            <img src='/img/instalaciones.png' alt='' />
            <h4 className='font-semibold text-xl [&>span]:text-primary'>
              Las mejores <span>INSTALACIONES</span>
            </h4>
            <p className='p-2 border-t-2 '>
              Lo último en seguridad infantil y materiales docentes para
              nuestros alumnos. En un entorno privilegiado.
            </p>
          </article>
        </aside>
      </section>
    </>
  )
}
