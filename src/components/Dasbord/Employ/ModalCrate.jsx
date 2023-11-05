/* eslint-disable react/prop-types */
import { Button, Modal } from 'flowbite-react'
import { Label, TextInput } from 'flowbite-react'

export default function ModalCreate ({ openModal, handleModal, setEmploy, employ }) {
  function handleCreate (e) {
    e.preventDefault()

    const info = Object.fromEntries(new FormData(e.target))

    const newKid = {
      id: new Date(),
      nombre: info.name,
      apellidos: info.apellido,
      fechaContratacion: info.fechaContratacion,
      edad: info.edad,
      aula: info.aula,
      sueldo:info.sueldo
    }

    setEmploy([...employ, newKid])
    handleModal()
  }

  return (
    <>
      <Modal show={openModal} onClose={handleModal}>
        <Modal.Header>Add</Modal.Header>
        <form action='' onSubmit={handleCreate}>
          <Modal.Body className='grid grid-cols-2 gap-x-3'>
            <div className='flex max-w-md flex-col gap-2'>
              <Label htmlFor='nombreInput'>Nombre</Label>
              <TextInput
                placeholder='Ingresa el nombre'
                type='text'
                id='nombreInput'
                required
                name='name'
              />
              <Label htmlFor='apellidoInput'>Apellido</Label>
              <TextInput
                placeholder='Ingresa el apellido'
                type='text'
                id='apellidoInput'
                required
                name='apellido'
              />
              <Label htmlFor='fechaNacimientoInput'>Fecha de Contatacion</Label>
              <TextInput
                placeholder='Ingresa la fecha de nacimiento'
                type='date'
                id='fechaNacimientoInput'
                name='fechaContratacion'
                required
              />
              <Label htmlFor='aulaInput'>Aula</Label>

              <TextInput
                placeholder='Ingresa el aula'
                type='text'
                id='aulaInput'
                name='aula'
                required
                list='opciones'
              />
      <datalist id="opciones">
        <option value="Opción 1" />
        <option value="Opción 2" />
        <option value="Opción 3" />
      </datalist>
            </div>
            <div className='flex max-w-md flex-col gap-2'>
              <Label htmlFor='edadInput'>Edad</Label>
              <TextInput
                placeholder='Ingresa la edad'
                type='number'
                id='edadInput'
                name='edad'
                required
              />
            <Label htmlFor='disabledInput2'>Sueldo</Label>
            <TextInput
              placeholder='Ingrese el sueldo '
              type='text'
              defaultValue={''}
              name='sueldo'
              required
            />
             
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button type='submit'>Crear</Button>
            <Button color='gray' onClick={handleModal}>
              Cerrar
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  )
}
