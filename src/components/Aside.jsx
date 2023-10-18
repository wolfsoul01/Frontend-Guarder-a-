export function Aside () {
  return (
    <>
      <section className="flex justify-center items-end flex-wrap [&>article]:max-w-xs mx-auto mt-32"> 
        <article >
          <img src='/img/educacion_divertida.png' alt='' />
          <h4>La EDUCACIÓN debe ser DIVERTIDA</h4>
          <hr />
          <p>Metodologías innovadoras que hagan el desarrollo de las actividades ameno y provechoso.</p>
        </article>

        <article>
          <img src='/img/conocimientos.png' alt='' />
          <h4>Desarrolla todos los CONOCIMIENTOS</h4>
          <hr />
          <p>La escuela infantil no es un mero lugar donde estar, en estas edades comienzan a aprender y a formarse.</p>
        </article>

        <article>
          <img src='/img/educacion_divertida.png' alt='' />
          <h4>Las mejores INSTALACIONES</h4>
          <hr />
          <p>Lo último en seguridad infantil y materiales docentes para nuestros alumnos. En un entorno privilegiado.</p>
        </article>
      </section>
    </>
  )
}
