
// eslint-disable-next-line react/prop-types
export function DashElemet ({ info, Component }) {
  return (
    <>
      <section>
        <aside className=' grid grid-cols-3 gap-6 text-white '>
          <article className='bg-slate-800 rounded-md grid place-content-center p-3'>
            <h1>Info</h1>
            <p>{} </p>
          </article>
          <article className='bg-slate-800 rounded-md grid place-content-center p-3'>
            <h1>Info</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </article>
          <article className='bg-slate-800 rounded-md grid place-content-center p-3'>
            <h1>Info</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </article>
        </aside>

        <Component info={info} />
      </section>
    </>
  )
}
