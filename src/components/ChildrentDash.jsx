import { Table } from 'flowbite-react'
export function ChildrentDash () {
  return (
    <Table>
      <Table.Head>
        <Table.HeadCell>Nombre</Table.HeadCell>
        <Table.HeadCell>Apellido</Table.HeadCell>
        <Table.HeadCell>Edad</Table.HeadCell>
        <Table.HeadCell>Sala</Table.HeadCell>
        <Table.HeadCell>Fecha de ingreso</Table.HeadCell>
        <Table.HeadCell>
          <span className='sr-only'>t</span>
        </Table.HeadCell>
        <Table.HeadCell/>
        <Table.HeadCell/>
      </Table.Head>
      <Table.Body className='divide-y'>
        <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
          <Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
           Juanito
          </Table.Cell>
          <Table.Cell>Juares</Table.Cell>
          <Table.Cell>2</Table.Cell>
          <Table.Cell>1A</Table.Cell>
          <Table.Cell>10/10/23</Table.Cell>
          <Table.Cell>
            <a
              className='font-medium text-cyan-600 hover:underline dark:text-cyan-500'
            >
              <p>Edit</p>
            </a>
          </Table.Cell>
          <Table.Cell>
            <a
              className='font-medium text-cyan-600 hover:underline dark:text-cyan-500'
            >
              <p>Delet</p>
            </a>
          </Table.Cell>
          <Table.Cell>
            <a
              className='font-medium text-cyan-600 hover:underline dark:text-cyan-500'
            >
              <p>More</p>
            </a>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  )
}
