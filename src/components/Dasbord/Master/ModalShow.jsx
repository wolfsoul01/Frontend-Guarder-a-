/* eslint-disable react/prop-types */
import { Button, Modal } from 'flowbite-react'

import { Label, TextInput } from 'flowbite-react'

// eslint-disable-next-line react/prop-types
export default function ModalShow ({ openModal, handleModal, selectEmploy }) {
  // eslint-disable-next-line react/prop-types
  const {
    nombre,
    apellidos,
    fechaContratacion,
    edad,
    aula ,
    sueldo  
  } = selectEmploy

  const campos = Object.keys(selectEmploy)
  

  return (
    <>
      <Modal show={openModal} onClose={handleModal}>
        <Modal.Header>More Info </Modal.Header>
        <Modal.Body className='grid grid-cols-2 gap-x-3'>
            <ul>
              {campos.map(ele=>{
                return  <li key={nombre} className='text-xl font-semibold my-1'>{ele}:{selectEmploy[ele]}</li>
              })}
            </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleModal}>Aceptar </Button>
          <Button color='gray' onClick={handleModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
