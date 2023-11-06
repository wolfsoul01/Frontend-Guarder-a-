import { useLocation } from 'react-router-dom'
import { useDate } from '../../hooks/useDate'

// eslint-disable-next-line react/prop-types
export function DashElemet ({ Component }) {
  const { pathname } = useLocation()
  const info = useDate(pathname)

  return (
    <>
      <section>
        <aside className=' grid grid-cols-2 gap-6 text-black '>
          <article className='bg-dashboard-200 rounded-md grid  p-3 col-span-2 relative pb-36'>
            <header className='flex flex-col'>
              <h1 className='font-semibold text-gray-600 text-xl'>Bienevendio de Vuelta</h1>
            </header>
            <aside>
            <input type="date" value={new Date().toISOString().slice(0,10)} className=' rounded-lg bg-violet-600 text-white' />

            </aside>

            <img
              src='/img/dasbord.png'
              alt=''
              className='absolute right-0 -top-16 '
              width={300}
            />
          </article>
        </aside>

        <Component info={info} />
      </section>
    </>
  )
}
