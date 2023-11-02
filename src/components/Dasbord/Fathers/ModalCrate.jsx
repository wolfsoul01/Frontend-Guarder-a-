/* eslint-disable react/prop-types */
import { Button, Modal } from 'flowbite-react'
import { Label, TextInput } from 'flowbite-react'

export default function ModalCreate ({ openModal, handleModal, setFather, father }) {
  function handleCreate (e) {
    e.preventDefault()

    const info = Object.fromEntries(new FormData(e.target))

    const newFather = {
      id: new Date(),
      nombrePadre: info.name,
      apellidos: info.apellido,
      telefonoPadre: info.telefonoPadre,
      edad: info.edad,
      aulaNino: info.aula,
      parentescoPadre:info.parentescoPadre,
      nombreNino:info.nombreNino,
      apellidosNino:info.apellidosNino
    }

    setFather([...father, newFather])
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
              <Label htmlFor='telefonoPadre'>Telefono</Label>
              <TextInput
                placeholder='Ingresa la fecha de nacimiento'
                type='number'
                id='telefonoPadre'
                name='telefonoPadre'
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
              <Label htmlFor='edadInput' className=''>Parentesco</Label>
              <TextInput
                placeholder='Ingresa la edad'
                type='text'
                id='edadInput'
                name='parentescoPadre'
                required
              />
            <Label htmlFor='disabledInput2' className='text-center font-bold'>Hijo</Label>
            <TextInput
              placeholder='Ingrese el nombre '
              type='text'
              defaultValue={''}
              name='nombreNino'
              required
            />
            <Label htmlFor='disabledInput2' >Apellido</Label>
            <TextInput
              placeholder='Ingrese el apellido '
              type='text'
              defaultValue={''}
              name='apellidosNino'
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
