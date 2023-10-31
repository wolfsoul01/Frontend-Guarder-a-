/* eslint-disable react/prop-types */
import { Button, Modal } from 'flowbite-react'
import { Label, TextInput } from 'flowbite-react'

export default function ModalCreate ({ openModal, handleModal, setKids,kids }) {
  function handleCreate (e) {
    e.preventDefault()

    const info =Object.fromEntries( new FormData(e.target))

    const newKid={
        id: new Date,
        nombre: info.name,
        apellidos: info.apellido,
        fechaNacimiento: info.fechaNacimiento,
        edad: info.edad,
        aula: info.aula,
        estado: false,
        alergias: info.alergias,
        contactoEmergencia: {
          nombre: info.contactoSOS,
          telefono: info.contactoTelefono,
          parentesco: info.contactoParentesco
        }
    }

    setKids([...kids,newKid])
    handleModal()
  }

  return (
    <>
      <Modal show={openModal} onClose={handleModal}>
        <Modal.Header>Editar Informacion</Modal.Header>
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
                name='apellido'
              />
              <Label htmlFor='fechaNacimientoInput'>Fecha de nacimiento</Label>
              <TextInput
                placeholder='Ingresa la fecha de nacimiento'
                type='text'
                id='fechaNacimientoInput'
                name='fechaNacimiento'
              />
              <Label htmlFor='aulaInput'>Aula</Label>
              <TextInput
                placeholder='Ingresa el aula'
                type='text'
                id='aulaInput'
                name='aula'
              />
            </div>
            <div className='flex max-w-md flex-col gap-2'>
              <Label htmlFor='edadInput'>Edad</Label>
              <TextInput
                placeholder='Ingresa la edad'
                type='text'
                id='edadInput'
                name='edad'
              />
              <Label htmlFor='alergiasInput'>Alergias</Label>
              <TextInput
                placeholder='Ingresa las alergias'
                type='text'
                id='alergiasInput'
                name='alergias'
              />
              <aside className='flex flex-col justify-end mt-2'>
                <h1 className='font-bold dark:text-white/90'>
                  Contacto Emergencia
                </h1>
                <div className='grid grid-cols-2 gap-x-2'>
                  <Label htmlFor='contactoNombreInput'>
                    Nombre
                    <TextInput
                      placeholder='Ingresa el nombre del contacto de emergencia'
                      type='text'
                      id='contactoNombreInput'
                      name='contactoSOS'
                    />
                  </Label>
                  <Label htmlFor='contactoParentescoInput'>
                    Parentesco
                    <TextInput
                      placeholder='Ingresa el parentesco del contacto de emergencia'
                      type='text'
                      id='contactoParentescoInput'
                      name='contactoParentesco'
                    />
                  </Label>
                  <Label htmlFor='contactoTelefonoInput' className='col-span-2'>
                    Telefono
                    <TextInput
                      placeholder='Ingresa el teléfono del contacto de emergencia'
                      readOnly
                      type='text'
                      id='contactoTelefonoInput'
                      name='contactoTelefono'
                    />
                  </Label>
                </div>
              </aside>
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
