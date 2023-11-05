import { Table } from 'flowbite-react'
import { useState } from 'react'

import { Add, Delet, Edit, More } from '../../Icons'
import ModalEdit from './ModalEdit'
import ModalShow from './ModalShow'
import ModalCreate from './ModalCrate'
import { Navigate } from './Navigate'

// eslint-disable-next-line react/prop-types
export function FatherDasTab ({ info }) {
  const [openModalEdit, setModalEdit] = useState(false)
  const [openModalShow, setModalShow] = useState(false)
  const [openModalCreate, setModalCreate] = useState(false)

  const [fater, setFather] = useState(info)
  const [selectFather, setSelectFather] = useState()

  return (
    <section className=' overflow-x-auto mt-4'>
      <header className='my-2'>
        <h2>Todos los usuarios </h2>

        <div className=' flex items-center gap-2'>
          <input
            type='text'
            name='search'
            id='users-search'
            className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  focus:border-sdasbg-dashboard-300 block  p-2.5 w-1/2'
            placeholder='Search for users'
            onChange={null}
          />

          <aside className='flex gap-2 border-l border-gray-400 py-2 px-3'>
            <button className='flex ' onClick={() => setModalCreate(true)}>
              <Add />
              Add User
            </button>
          </aside>

          <div></div>
        </div>
      </header>

      {/* Modales  */}
      <div>
        {openModalEdit && (
          <ModalEdit
            handleModal={() => setModalEdit(false)}
            selectFather={selectFather}
            openModal={openModalEdit}
          />
        )}
        {openModalCreate && (
          <ModalCreate
            handleModal={() => setModalCreate(false)}
            selectFather={selectFather}
            openModal={openModalCreate}
            setFather={setFather}
            father={fater}
          />
        )}
        {openModalShow && (
          <ModalShow
            handleModal={() => setModalShow(false)}
            selection={selectFather}
            openModal={openModalShow}
          />
        )}
      </div>
      {/* Modales  */}

      <Table className='shadow-lg'>
        <Table.Head className=' [&>div]:bg-black'>
          <Table.HeadCell className='bg-dashboard-300 dark:text-white font-bold'>
            Nombre
          </Table.HeadCell>
          <Table.HeadCell className='bg-dashboard-300 dark:text-white font-bold'>
            Telefono
          </Table.HeadCell>
          <Table.HeadCell className='bg-dashboard-300 dark:text-white font-bold'>
            Niño Nombre
          </Table.HeadCell>
          <Table.HeadCell className='bg-dashboard-300 dark:text-white font-bold'>
            Aula
          </Table.HeadCell>
          <Table.HeadCell className='bg-dashboard-300 dark:text-white font-bold'>
            Parentesco
          </Table.HeadCell>
          <Table.HeadCell className='bg-dashboard-300 dark:text-white font-bold'>
            Status
          </Table.HeadCell>
          <Table.HeadCell className='bg-dashboard-300 dark:text-white font-bold'>
            More..
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className=''>
          {fater.map((ele, i) => {
            return (
              <Table.Row
                key={ele.id}
                className={`${
                  i % 2 === 0 ? 'bg-dashboard-200 ' : 'text-black'
                } hover: text-black`}
              >
                <Table.Cell>{ele.nombrePadre}</Table.Cell>
                <Table.Cell>{ele.telefonoPadre}</Table.Cell>
                <Table.Cell>{`${ele.nombreNino} ${ele.apellidosNino}`}</Table.Cell>
                <Table.Cell>{ele.aulaNino}</Table.Cell>
                <Table.Cell>{ele.parentescoPadre}</Table.Cell>
                <Table.Cell>
                  <span
                    className={`${
                      ele.estadoNino ? 'bg-gdasbg-dashboard-300 ' : 'bgdasbg-dashboard-300'
                    } p-2 rounded-lg text-black`}
                  >
                    condicion
                  </span>
                </Table.Cell>
                <Table.Cell className='flex gap-5'>
                  <button
                    className='cursor-pointer'
                    onClick={() => {
                      setSelectFather(ele)
                      setModalShow(true)
                    }}
                  >
                    <More />
                  </button>
                  <button
                    className='cursor-pointer'
                    onClick={() => {
                      setSelectFather(ele)
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
