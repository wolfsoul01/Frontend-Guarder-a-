import { ChildrentDash } from './Kids/KidsDashContainer'
export function KidsDash () {
  return (
    <>
      <main className='sm:ml-52  p-5 mt-16  bg-slate-300   '>
        <header className=' grid grid-cols-3 gap-6 text-white '>
          <article className='bg-slate-800 rounded-md grid place-content-center p-3'>
            <h1>Info</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </article>
          <article className='bg-slate-800 rounded-md grid place-content-center p-3'>
            <h1>Info</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </article>
          <article className='bg-slate-800 rounded-md grid place-content-center p-3'>
            <h1>Info</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </article>
        </header>

        <section >
          <ChildrentDash />
        </section>
      </main>
    </>
  )
}
