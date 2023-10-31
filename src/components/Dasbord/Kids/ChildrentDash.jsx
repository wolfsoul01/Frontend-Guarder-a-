import { Table } from 'flowbite-react'
import { Delet, Edit, More } from '../../Icons'
import ModalEdit from './ModalEdit'
import { useState } from 'react'
import ModalShow from './ModalShow'
import { ButtonDef } from '../../ui'
import ModalCreate from './ModalCrate'
const info = [
  {
    id: 1,
    nombre: 'Juan',
    apellidos: 'Gómez García',
    fechaNacimiento: '2018-05-02',
    edad: 4,
    aula: 'Azul',
    estado: true,
    alergias: ['cacahuates'],
    contactoEmergencia: {
      nombre: 'Maria Gómez',
      telefono: '5544332211',
      parentesco: 'madre'
    }
  },
  {
    id: 2,
    nombre: 'María',
    apellidos: 'Hernández López',
    fechaNacimiento: '2019-03-25',
    edad: 3,
    nivelEducativo: 'maternal',
    aula: 'Verde',
    estado: false,
    alergias: null,
    contactoEmergencia: {
      nombre: 'Pedro Hernández',
      telefono: '5543215678',
      parentesco: 'padre'
    }
  },
  {
    id: 3,
    nombre: 'Luis',
    apellidos: 'Sánchez Ramírez',
    fechaNacimiento: '2020-01-15',
    edad: 2,
    nivelEducativo: 'maternal',
    aula: 'Amarillo',
    estado: true,
    alergias: ['nueces'],
    contactoEmergencia: {
      nombre: 'Clara Sánchez',
      telefono: '5587452136',
      parentesco: 'madre'
    }
  },
  {
    id: 4,
    nombre: 'Daniela',
    apellidos: 'Martínez Torres',
    fechaNacimiento: '2020-08-30',
    edad: 2,
    nivelEducativo: 'maternal',
    aula: 'Morado',
    estado: true,
    alergias: null,
    contactoEmergencia: {
      nombre: 'Alberto Martínez',
      telefono: '5566543219',
      parentesco: 'padre'
    }
  },
  {
    id: 5,
    nombre: 'Sofía',
    apellidos: 'Díaz Flores',
    fechaNacimiento: '2019-11-12',
    edad: 3,
    nivelEducativo: 'preescolar',
    aula: 'Naranja',
    estado: true,
    alergias: ['fresas'],
    contactoEmergencia: {
      nombre: 'Elisa Díaz',
      telefono: '5544332211',
      parentesco: 'madre'
    }
  },
  {
    id: 6,
    nombre: 'Mateo',
    apellidos: 'González Ortíz',
    fechaNacimiento: '2018-03-19',
    edad: 4,
    nivelEducativo: 'preescolar',
    aula: 'Rojo',
    estado: false,
    alergias: ['gluten'],
    contactoEmergencia: {
      nombre: 'Roberto González',
      telefono: '5559871265',
      parentesco: 'padre'
    }
  },
  {
    id: 7,
    nombre: 'Emilia',
    apellidos: 'Ruíz Cervantes',
    fechaNacimiento: '2017-12-02',
    edad: 5,
    nivelEducativo: 'preescolar',
    aula: 'Rosa',
    estado: true,
    alergias: null,
    contactoEmergencia: {
      nombre: 'Jimena Ruíz',
      telefono: '5587452136',
      parentesco: 'madre'
    }
  },
  {
    id: 8,
    nombre: ' Samuel',
    apellidos: 'Soto Ríos',
    fechaNacimiento: '2017-09-30',
    edad: 5,
    nivelEducativo: 'preescolar',
    aula: 'Azul',
    estado: false,
    alergias: ['mariscos'],
    contactoEmergencia: {
      nombre: 'Alan Soto',
      telefono: '5544332211',
      parentesco: 'padre'
    }
  },
  {
    id: 9,
    nombre: 'Valeria',
    apellidos: 'Reyes Cruz',
    fechaNacimiento: '2016-07-25',
    edad: 6,
    nivelEducativo: 'preescolar',
    aula: 'Verde',
    estado: true,
    alergias: null,
    contactoEmergencia: {
      nombre: 'Patricia Reyes',
      telefono: '5556633225',
      parentesco: 'madre'
    }
  },
  {
    id: 10,
    nombre: 'Diego',
    apellidos: 'Luna Medina',
    fechaNacimiento: '2016-02-11',
    edad: 6,
    nivelEducativo: 'preescolar',
    aula: 'Amarillo',
    estado: false,
    alergias: ['polen'],
    contactoEmergencia: {
      nombre: 'Enrique Luna',
      telefono: '5532165498',
      parentesco: 'padre'
    }
  }
]
export function ChildrentDash () {
  const [openModalEdit, setModalEdit] = useState(false)
  const [openModalShow, setModalShow] = useState(false)
  const [openModalCreate, setModalCreate] = useState(false)

  const [kids, setKids] = useState(info)

  const [selectKid, setSelectKid] = useState()

  return (
    <section className=' overflow-x-auto mt-4'>
      <header>
        <ButtonDef handleclick={() => setModalCreate(true)}>Add</ButtonDef>
      </header>

      {/* Modales  */}
      {openModalEdit && (
        <ModalEdit
          handleModal={() => setModalEdit(false)}
          selectKid={selectKid}
          openModal={openModalEdit}
        />
      )}
      {openModalCreate && (
        <ModalCreate
          handleModal={() => setModalCreate(false)}
          selectKid={selectKid}
          openModal={openModalCreate}
          setKids={setKids}
          kids={kids}
        />
      )}
      {openModalShow && (
        <ModalShow
          handleModal={() => setModalShow(false)}
          selectKid={selectKid}
          openModal={openModalShow}
        />
      )}
      {/* Modales  */}

      <Table className=''>
        <Table.Head>
          <Table.HeadCell>Nombre</Table.HeadCell>
          <Table.HeadCell>Apellido</Table.HeadCell>
          <Table.HeadCell>Edad</Table.HeadCell>
          <Table.HeadCell>Sala</Table.HeadCell>
          <Table.HeadCell>Fecha de ingreso</Table.HeadCell>
          <Table.HeadCell>Status</Table.HeadCell>
          <Table.HeadCell>More..</Table.HeadCell>
        </Table.Head>
        <Table.Body className='divide-y'>
          {kids.map((kid, i) => {
            return (
              <Table.Row
                key={kid.id}
                className={`${
                  i % 2 === 0
                    ? 'bg-slate-600 text-white'
                    : 'bg-slate-200 text-black'
                }`}
              >
                <Table.Cell>{kid.nombre}</Table.Cell>
                <Table.Cell>{kid.apellidos}</Table.Cell>
                <Table.Cell>{kid.edad}</Table.Cell>
                <Table.Cell>{kid.aula}</Table.Cell>
                <Table.Cell>{kid.fechaNacimiento}</Table.Cell>
                <Table.Cell>
                  <span
                    className={`${
                      kid.estado ? 'bg-green-500 ' : 'bg-red-500'
                    } p-2 rounded-lg text-white`}
                  >
                    condicion
                  </span>
                </Table.Cell>
                <Table.Cell className='flex gap-5'>
                  <button
                    className='cursor-pointer'
                    onClick={() => {
                      setSelectKid(kid)
                      setModalShow(true)
                    }}
                  >
                    <More />
                  </button>
                  <button
                    className='cursor-pointer'
                    onClick={() => {
                      setSelectKid(kid)
                      setModalEdit(true)
                    }}
                  >
                    <Edit />
                  </button>
                  <button className='cursor-pointer'>
                    <Delet />
                  </button>
                </Table.Cell>
              </Table.Row>
            )
          })}
        </Table.Body>
      </Table>
    </section>
  )
}
