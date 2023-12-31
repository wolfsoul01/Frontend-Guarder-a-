import { Table } from 'flowbite-react'
import { useState } from 'react'
import { AddIcon,  DeletIcon,  EditIcon,  MoreIcon } from '../../Icons'
import ModalEdit from './ModalEdit'
import ModalShow from './ModalShow'
import ModalCreate from './ModalCrate'
import { Navigate } from './Navigate'

// eslint-disable-next-line react/prop-types
export function EmployDasTab ({ info }) {
  const [openModalEdit, setModalEdit] = useState(false)
  const [openModalShow, setModalShow] = useState(false)
  const [openModalCreate, setModalCreate] = useState(false)

  const [employ, setEmploy] = useState(info)
  const [selectEmploy, setSelectEmploy] = useState()

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
              <AddIcon  styles='text-green-500 mx-1' />
              Add User
            </button>
          </aside>

          <div></div>
        </div>
      </header>

      {/* Modales  */}
      {openModalEdit && (
        <ModalEdit
          handleModal={() => setModalEdit(false)}
          selectEmploy={selectEmploy}
          openModal={openModalEdit}
        />
      )}
      {openModalCreate && (
        <ModalCreate
          handleModal={() => setModalCreate(false)}
          selectEmploy={selectEmploy}
          openModal={openModalCreate}
          setEmploy={setEmploy}
          employ={employ}
        />
      )}
      {openModalShow && (
        <ModalShow
          handleModal={() => setModalShow(false)}
          selectEmploy={selectEmploy}
          openModal={openModalShow}
        />
      )}
      {/* Modales  */}

      <Table className='shadow-lg'>
        <Table.Head className=' [&>div]:bg-black'>
          <Table.HeadCell className='bg-dashboard-300 dark:text-white font-bold '>
            Nombre
          </Table.HeadCell>
          <Table.HeadCell className='bg-dashboard-300 dark:text-white font-bold '>
            Apellido
          </Table.HeadCell>
          <Table.HeadCell className='bg-dashboard-300 dark:text-white font-bold '>
            Edad
          </Table.HeadCell>
          <Table.HeadCell className='bg-dashboard-300 dark:text-white font-bold '>
            Sala
          </Table.HeadCell>
          <Table.HeadCell className='bg-dashboard-300 dark:text-white font-bold '>
            Fecha de Contra
          </Table.HeadCell>
          <Table.HeadCell className='bg-dashboard-300 dark:text-white font-bold '>
            Sueldo
          </Table.HeadCell>
          <Table.HeadCell className='bg-dashboard-300 dark:text-white font-bold '>
            Status
          </Table.HeadCell>
          <Table.HeadCell className='bg-dashboard-300 dark:text-white font-bold '>
            More..
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className=''>
          {employ.map((kid, i) => {
            return (
              <Table.Row
                key={kid.id}
                className={`${
                  i % 2 === 0 ? 'bg-dashboard-200' : 'text-black'
                } hover:  text-black`}
              >
                <Table.Cell>{kid.nombre}</Table.Cell>
                <Table.Cell>{kid.apellidos}</Table.Cell>
                <Table.Cell>{kid.edad}</Table.Cell>
                <Table.Cell>{kid.aula}</Table.Cell>
                <Table.Cell>{kid.fechaContratacion}</Table.Cell>
                <Table.Cell>{kid.sueldo}$</Table.Cell>
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
                      setSelectEmploy(kid)
                      setModalShow(true)
                    }}
                  >
                    <MoreIcon styles={'hover:scale-110 hover:brightness-110'}/>
                  </button>
                  <button
                    className='cursor-pointer'
                    onClick={() => {
                      setSelectEmploy(kid)
                      setModalEdit(true)
                    }}
                  >
                    <EditIcon styles={'text-yellow-500 hover:scale-110 hover:brightness-110'}/>
                  </button>
                  <button className='cursor-pointer'>
                  <DeletIcon styles={'text-red-500 hover:scale-110 hover:brightness-110'} />
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
