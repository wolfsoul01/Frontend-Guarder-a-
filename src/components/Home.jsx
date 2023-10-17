import { Navbar } from './Navbar'

export function Home () {
  return (
    <section>
      <Navbar />

      <picture>
        <img
          src='/fondo_home.jpg'
          alt=''
          className='w-full max-h-screen object-cover'
        />
      </picture>
    </section>
  )
}
