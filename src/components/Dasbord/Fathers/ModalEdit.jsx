/* eslint-disable react/prop-types */
import { Button, Modal } from 'flowbite-react'

import { Label, TextInput } from 'flowbite-react'

// eslint-disable-next-line react/prop-types
// eslint-disable-next-line react/prop-types
export default function ModalEdit ({
  openModal,
  handleModal,
  selectFather = {},
}) {
  const {
    nombrePadre,
    telefonoPadre,
    parentescoPadre,
    nombreKid=`${selectFather.nombreNino} ${selectFather.apellidosNino}`,
    aulaNino,

  } = selectFather


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
              value={nombrePadre}
              defaultValue={''}
            />
            <Label htmlFor='disabledInput2'>Telefono</Label>
            <TextInput
              placeholder='Disabled readonly input'
              type='text'
              value={telefonoPadre ?? ''}
              defaultValue={''}
            />
            <Label htmlFor='disabledInput2'>Parentesco </Label>
            <TextInput
              placeholder='Disabled readonly input'
              type='text'
              value={parentescoPadre ?? ''}
              defaultValue={''}
            />
          </div>
          <div className='flex max-w-md flex-col gap-2'>
              <Label htmlFor='disabledInput2'>Nombre Niño</Label>
              <TextInput
                placeholder='Disabled readonly input'
                type='text'
                value={nombreKid}
                defaultValue={''}
              />
            <Label htmlFor='disabledInput2'>
              Aula
              <TextInput
                placeholder='Disabled readonly input'
                type='text'
                value={aulaNino ?? ''}
                defaultValue={''}
                />
                </Label>
           
           
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
