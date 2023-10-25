import { Footer } from 'flowbite-react'

export default function DefaultFooter () {
  return (
    <Footer container className='rounded-none '>
        <footer className='max-w-7xl mx-auto'>
        <Footer.Copyright by=' ™Hecho con ❤️ ' href='#' year={2023} />
        <Footer.LinkGroup className='flex gap-x-3'>
          <Footer.Link href='#'>Sobre Nosotros</Footer.Link>
          <Footer.Link href='#'>Licencia</Footer.Link>
          <Footer.Link href='#'>Contacto</Footer.Link>
        </Footer.LinkGroup>
    </footer>
      </Footer>
  )
}
