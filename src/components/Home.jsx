import { Navbar } from './Navbar'

export function Home () {
  return (
    <section>
      <Navbar />

      <picture>
        <img
          src='/fondo_home.jpg'
          alt=''
          className=' absolute top-0 left-0 -z-10 w-full max-h-screen object-cover'
        />
      </picture>

      <section className='flex flex-col gap-3 justify-center items-center max-w-5xl my-0 mx-auto' >
        <header className='mt-10'>
        <h1 className=' text-8xl text-yellow-300 font-bold'>Guarderia Matanzas</h1>
        </header>
        <p className='text-yellow-300 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo facilis nihil culpa aliquam molestias laudantium in eum obcaecati officiis velit tempore laboriosam asperiores sequi alias nesciunt, laborum nobis. Illum, sapiente.</p>
        
        <button className='py-2 px-6 text-2xl bg-amber-300 relative hover:translate-x-5 transition-all duration-150  font-semibold'>
            <span className='absolute top-0 left-0 inset-0 border-amber-400 border'></span>
            Button
        </button>
      </section>
    </section>
  )
}
