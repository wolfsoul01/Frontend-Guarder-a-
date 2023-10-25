
import { Footer } from 'flowbite-react';

export default function DefaultFooter() {
  return (
    <Footer container className='rounded-none '>
      <Footer.Copyright
        by=" ™Hecho con ❤️ "
        href="#"
        year={2023}
      />
      <Footer.LinkGroup>
        <Footer.Link href="#">
          Sobre Nosotros
        </Footer.Link>
        <Footer.Link href="#">
          Licencia
        </Footer.Link>
        <Footer.Link href="#">
          Contacto
        </Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  )
}


