import { Navbar } from '../components/Navbar'
import {Aside} from '../components/Aside'
import Hero from '../components/Hero'
import Present from '../components/Presenta'
import Info from '../components/Info'
import Footer from '../components/Footer'
export function Home () {
  return (
    <section className='h-full '>
      <Navbar />
      <Hero/>
      <Aside/>
      <Present/>
      <Info/>
      <Footer/>
    </section>
  )
}
