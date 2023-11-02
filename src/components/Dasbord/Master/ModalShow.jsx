/* eslint-disable react/prop-types */
import { Button, Modal } from 'flowbite-react'

import { Label, TextInput } from 'flowbite-react'

// eslint-disable-next-line react/prop-types
export default function ModalShow ({ openModal, handleModal, selectKid }) {
  // eslint-disable-next-line react/prop-types
  const {
    nombre,
    apellidos,
    fechaNacimiento,
    edad,
    alergias = [],
    contactoEmergencia,
    aula = {}
  } = selectKid

  return (
    <>
      <Modal show={openModal} onClose={handleModal}>
        <Modal.Header>More Info </Modal.Header>
        <Modal.Body className='grid grid-cols-2 gap-x-3'>
            <h1>{nombre}</h1>
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
