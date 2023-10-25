import { Button, Modal } from 'flowbite-react'

import { Label, TextInput } from 'flowbite-react'

// eslint-disable-next-line react/prop-types
export default function DefaultModal ({ openModal, handleModal, selectKid }) {
  // eslint-disable-next-line react/prop-types
  const {
    nombre,
    apellidos,
    fechaNacimiento,
    edad,
    alergias=[],
    contactoEmergencia={}
  } = selectKid

  const sos = Object.values(contactoEmergencia).join(' ')
  const alerg = alergias ? alergias.join(' ') : 'Ninguna'
  return (
    <>
      <Modal show={openModal} onClose={handleModal}>
        <Modal.Header>Mas Informacion </Modal.Header>
        <Modal.Body className='grid grid-cols-2 gap-x-3'>
          <div className='flex max-w-md flex-col gap-4'>
            <Label htmlFor='disabledInput1'>Nombre</Label>
            <TextInput
              disabled
              id='disabledInput1'
              placeholder='Disabled input'
              type='text'
              value={nombre}
            />
            <Label htmlFor='disabledInput2'>Apellido</Label>
            <TextInput
              disabled
              id='disabledInput2'
              placeholder='Disabled readonly input'
              readOnly
              type='text'
              value={apellidos}
            />
            <Label htmlFor='disabledInput2'>Fecha de nacimiento </Label>
            <TextInput
              disabled
              id='disabledInput2'
              placeholder='Disabled readonly input'
              readOnly
              type='text'
              value={fechaNacimiento}
            />
          </div>
          <div className='flex max-w-md flex-col gap-4'>
            <Label htmlFor='disabledInput2'>Edad</Label>
            <TextInput
              disabled
              id='disabledInput2'
              placeholder='Disabled readonly input'
              readOnly
              type='text'
              value={edad}
            />
            <Label htmlFor='disabledInput2'>Alerjias</Label>
            <TextInput
              disabled
              id='disabledInput2'
              placeholder='Disabled readonly input'
              readOnly
              type='text'
              // eslint-disable-next-line react/prop-types
              value={alerg}
            />
            <Label htmlFor='disabledInput2'>Contacto Emergencia </Label>
            <TextInput
              disabled
              id='disabledInput2'
              placeholder='Disabled readonly input'
              readOnly
              type='text'
              value={sos}
            />
          </div>
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
