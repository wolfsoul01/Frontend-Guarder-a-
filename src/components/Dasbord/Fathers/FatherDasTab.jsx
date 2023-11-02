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
          <Table.HeadCell className='bg-zinc-500 text-white'>
            Nombre
          </Table.HeadCell>
          <Table.HeadCell className='bg-zinc-500 text-white'>
            Telefono
          </Table.HeadCell>
          <Table.HeadCell className='bg-zinc-500 text-white'>
            Niño Nombre
          </Table.HeadCell>
          <Table.HeadCell className='bg-zinc-500 text-white'>
            Aula
          </Table.HeadCell>
          <Table.HeadCell className='bg-zinc-500 text-white'>
            Parentesco
          </Table.HeadCell>
          <Table.HeadCell className='bg-zinc-500 text-white'>
            Status
          </Table.HeadCell>
          <Table.HeadCell className='bg-zinc-500 text-white'>
            More..
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className=''>
          {fater.map((ele, i) => {
            return (
              <Table.Row
                key={ele.id}
                className={`${
                  i % 2 === 0 ? 'bg-gray-700 text-white' : 'text-black'
                } hover: `}
              >
                <Table.Cell>{ele.nombrePadre}</Table.Cell>
                <Table.Cell>{ele.telefonoPadre}</Table.Cell>
                <Table.Cell>{`${ele.nombreNino} ${ele.apellidosNino}`}</Table.Cell>
                <Table.Cell>{ele.aulaNino}</Table.Cell>
                <Table.Cell>{ele.parentescoPadre}</Table.Cell>
                <Table.Cell>
                  <span
                    className={`${
                      ele.estadoNino ? 'bg-green-500 ' : 'bg-red-500'
                    } p-2 rounded-lg text-white`}
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
