import { Table } from 'flowbite-react'
import { useState } from 'react'

import { Add, Delet, Edit, More } from '../../Icons'
import ModalEdit from './ModalEdit'
import ModalShow from './ModalShow'
import ModalCreate from './ModalCrate'
import { Navigate } from './Navigate'

// eslint-disable-next-line react/prop-types
export function KidsDashTab ({ info }) {
  const [openModalEdit, setModalEdit] = useState(false)
  const [openModalShow, setModalShow] = useState(false)
  const [openModalCreate, setModalCreate] = useState(false)

  const [kids, setKids] = useState(info)
  const [selectKid, setSelectKid] = useState()


  return (
    <section className=' overflow-x-auto mt-4'>
      <header className='my-2'>
        <h2>Todos los usuarios </h2>

        <div className=' flex items-center gap-2'>
          <input
            type='text'
            name='search'
            id='users-search'
            className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  focus:border-slate-500 block  p-2.5 w-1/2'
            placeholder='Search for users'
            onChange={null}
          />

          <aside className='flex gap-2 border-l border-gray-400 py-2 px-3'>
            <button className='flex ' onClick={() => setModalCreate(true)}>
              <Add />
              Add User
            </button>
          </aside>
        </div>
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

      <Table className='shadow-lg'>
        <Table.Head className=' [&>div]:bg-black'>
          <Table.HeadCell className='bg-zinc-500 text-white'>Nombre</Table.HeadCell>
          <Table.HeadCell className='bg-zinc-500 text-white'>Apellido</Table.HeadCell>
          <Table.HeadCell className='bg-zinc-500 text-white'>Edad</Table.HeadCell>
          <Table.HeadCell className='bg-zinc-500 text-white'>Sala</Table.HeadCell>
          <Table.HeadCell className='bg-zinc-500 text-white'>Fecha de ingreso</Table.HeadCell>
          <Table.HeadCell className='bg-zinc-500 text-white'>Status</Table.HeadCell>
          <Table.HeadCell className='bg-zinc-500 text-white'>More..</Table.HeadCell>
        </Table.Head>
        <Table.Body className=''>
        {kids.map((kid, i) => {
            return (
              <Table.Row
                key={kid.id}
                className={`${
                  i % 2 === 0
                    ? 'bg-gray-700 text-white'
                    : 'text-black'
                } `}
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
      <Navigate />
    </section>
  )
}

