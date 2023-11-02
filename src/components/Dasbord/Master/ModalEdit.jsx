/* eslint-disable react/prop-types */
import { Button, Modal } from 'flowbite-react'

import { Label, TextInput } from 'flowbite-react'

// eslint-disable-next-line react/prop-types
// eslint-disable-next-line react/prop-types
export default function ModalEdit ({
  openModal,
  handleModal,
  selectEmploy = {},
}) {
  const {
    nombre = '',
    apellidos = '',
    fechaContratacion = '',
    edad = '',
    aula='' ,
    sueldo=''
  } = selectEmploy


  return (
    <>
      <Modal show={openModal} onClose={handleModal}>
        <Modal.Header>Editar Informacion </Modal.Header>
        <Modal.Body className='grid grid-cols-2 gap-x-3'>
          <div className='flex max-w-md flex-col gap-2'>
            <Label htmlFor='disabledInput1'>Nombre</Label>
            <TextInput
              placeholder='Nombre'
              type='text'
              value={nombre}
              defaultValue={''}
            />
            <Label htmlFor='disabledInput2'>Apellido</Label>
            <TextInput
              placeholder='Disabled readonly input'
              type='text'
              value={apellidos ?? ''}
              defaultValue={''}
            />
            <Label htmlFor='disabledInput2'>Fecha de Contratacion </Label>
            <TextInput
              placeholder='Disabled readonly input'
              type='date'
              value={fechaContratacion ?? ''}
              defaultValue={''}
            />
            <Label htmlFor='disabledInput2'>
              Aula
              <TextInput
                placeholder='Disabled readonly input'
                type='text'
                value={aula ?? ''}
                defaultValue={''}
              />
            </Label>
          </div>
          <div className='flex max-w-md flex-col gap-2'>
            <Label htmlFor='disabledInput2'>Edad</Label>
            <TextInput
              placeholder='Disabled readonly input'
              type='text'
              value={edad}
              defaultValue={''}
            />
            <Label htmlFor='disabledInput2'>Sueldo</Label>
            <TextInput
              placeholder='Disabled readonly input'
              type='text'
              value={sueldo}
              defaultValue={''}
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
