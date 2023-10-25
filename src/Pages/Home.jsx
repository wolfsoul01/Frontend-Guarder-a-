import { Navbar } from '../components/Home/Navbar'
import { Aside } from '../components/Home/Aside'
import Hero from '../components/Home/Hero'
import Present from '../components/Home/Presenta'
import Info from '../components/Home/Activies'
import Footer from '../components/Home/Footer'
export function Home () {
  return (
    <section className='h-full '>
      <Navbar />
      <Hero />
      <Aside />
      <Present />
      <Info />
      <Footer />
    </section>
  )
}
