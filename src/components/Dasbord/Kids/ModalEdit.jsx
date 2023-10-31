/* eslint-disable react/prop-types */
import { Button, Modal } from 'flowbite-react'

import { Label, TextInput } from 'flowbite-react'

// eslint-disable-next-line react/prop-types
// eslint-disable-next-line react/prop-types
export default function ModalEdit ({
  openModal,
  handleModal,
  selectKid = {},
}) {
  const {
    nombre = '',
    apellidos = '',
    fechaNacimiento = '',
    edad = '',
    alergias = '',
    contactoEmergencia = '',
    aula = ''
  } = selectKid

  const alerg = alergias ? alergias.join(' ') : 'Ninguna'

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
            />
            <Label htmlFor='disabledInput2'>Apellido</Label>
            <TextInput
              placeholder='Disabled readonly input'
              type='text'
              value={apellidos ?? ''}
            />
            <Label htmlFor='disabledInput2'>Fecha de nacimiento </Label>
            <TextInput
              placeholder='Disabled readonly input'
              type='text'
              value={fechaNacimiento ?? ''}
            />
            <Label htmlFor='disabledInput2'>
              Aula
              <TextInput
                placeholder='Disabled readonly input'
                type='text'
                value={aula ?? ''}
              />
            </Label>
          </div>
          <div className='flex max-w-md flex-col gap-2'>
            <Label htmlFor='disabledInput2'>Edad</Label>
            <TextInput
              placeholder='Disabled readonly input'
              type='text'
              value={edad}
            />
            <Label htmlFor='disabledInput2'>Alerjias</Label>
            <TextInput
              placeholder='Disabled readonly input'
              type='text'
              value={alerg ?? ''}
            />
            <aside className=' flex flex-col justify-end mt-2 '>
              <h1 className='font-bold dark:text-white/90'>
                Contacto Emergencia
              </h1>
              <div className='grid grid-cols-2 gap-x-2 '>
                <Label htmlFor='disabledInput2'>
                  Nombre
                  <TextInput
                    placeholder='Disabled readonly input'
                    type='text'
                    value={contactoEmergencia.nombre ?? ''}
                  />
                </Label>
                <Label htmlFor='disabledInput2'>
                  Parentesco
                  <TextInput
                    placeholder='Disabled readonly input'
                    type='text'
                    value={contactoEmergencia.parentesco ?? ''}
                  />
                </Label>
                <Label htmlFor='disabledInput2' className='col-span-2'>
                  Telefono
                  <TextInput
                    placeholder='Disabled readonly input'
                    readOnly
                    type='text'
                    value={contactoEmergencia.telefono ?? ''}
                  />
                </Label>
              </div>
            </aside>
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
