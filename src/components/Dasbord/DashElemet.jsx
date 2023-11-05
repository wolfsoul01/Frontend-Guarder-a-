import { useLocation } from 'react-router-dom'
import { useDate } from '../../hooks/useDate'

// eslint-disable-next-line react/prop-types
export function DashElemet ({ Component }) {
  const { pathname } = useLocation()
  const info = useDate(pathname)

  return (
    <>
      <section>
        <aside className=' grid grid-cols-3 gap-6 text-black '>
          <article className='bg-dashboard-200 rounded-md grid place-content-center p-3'>
            <h1>Info</h1>
            <p>{} </p>
          </article>
          <article className='bg-dashboard-200 rounded-md grid place-content-center p-3'>
            <h1>Info</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </article>
          <article className='bg-dashboard-200 rounded-md grid place-content-center p-3'>
            <h1>Info</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </article>
        </aside>

        <Component info={info} />
      </section>
    </>
  )
}
