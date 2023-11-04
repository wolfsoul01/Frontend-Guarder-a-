import { AsistenciaG } from './Asistencia'
import { GastosG, IngresosG } from './Gastos'
import { RadiosEdad } from './RadioEdad'

export function GrapiElemant () {
  return (
    <>
      <section className='mt-3 grid  grid-cols-1 md:grid-cols-2 gap-3 '>
        <article className=' bg-slate-200 rounded-xl p-2'>
          <h1 className='w-full text-center font-bold text-xl'>% Por Edades</h1>
          <RadiosEdad />
        </article>

        <article className='bg-slate-200 rounded-xl p-2'>
          <h1 className='w-full text-center font-bold text-xl '>Asistencias </h1>
          <AsistenciaG />
        </article>
        <article className='bg-slate-200 rounded-xl p-2'>
          <h1 className='w-full text-center font-bold text-xl '>Gastos </h1>
          <GastosG />
        </article>
        <article className='bg-slate-200 rounded-xl p-2'>
          <h1 className='w-full text-center font-bold text-xl '>Ingresos </h1>
          <IngresosG />
        </article>
      </section>
    </>
  )
}
