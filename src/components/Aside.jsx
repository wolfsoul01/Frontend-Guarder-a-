export function Aside () {
  return (
    <>
      <section className="flex justify-center items-center flex-wrap gap-y-4 [&>article]:max-w-xs mx-auto mt-40 md:mt-32 p-5 my-9"> 
        <article className="p-3 flex flex-col items-center justify-center " >
          <img src='/img/educacion_divertida.png' alt='' />
          <h4 className="font-semibold text-xl [&>span]:text-primary">La <span>EDUCACIÓN</span> debe ser <span>DIVERTIDA</span></h4>
          <p className="p-2 border-t-2 ">Metodologías innovadoras que hagan el desarrollo de las actividades ameno y provechoso.</p>
        </article>

        <article  className="p-3 flex flex-col items-center justify-center  ">
          <img src='/img/conocimientos.png' alt='' />
          <h4  className="font-semibold text-xl [&>span]:text-primary">Desarrolla todos los <span>CONOCIMIENTOS</span></h4>
          <p className="p-2 border-t-2 ">La escuela infantil no es un mero lugar donde estar, en estas edades comienzan a aprender y a formarse.</p>
        </article>

        <article  className="p-3 flex flex-col items-center justify-center ">
          <img src='/img/instalaciones.png' alt='' />
          <h4  className="font-semibold text-xl [&>span]:text-primary">Las mejores <span>INSTALACIONES</span></h4>
          <p className="p-2 border-t-2 ">Lo último en seguridad infantil y materiales docentes para nuestros alumnos. En un entorno privilegiado.</p>
        </article>
      </section>
    </>
  )
}
