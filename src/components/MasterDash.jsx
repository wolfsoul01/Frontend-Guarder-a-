import { Table } from 'flowbite-react'
export function MasterDash () {
  return (
    <section className='max-w-[100vw] overflow-x-auto  p-5'>
    <Table>
      <Table.Head>
        <Table.HeadCell>Nombre</Table.HeadCell>
        <Table.HeadCell>Edad</Table.HeadCell>
        <Table.HeadCell>Asing.</Table.HeadCell>
        <Table.HeadCell></Table.HeadCell>
        <Table.HeadCell>
          <span className='sr-only'>Edit</span>
        </Table.HeadCell>
      </Table.Head>
      <Table.Body className='divide-y'>
        <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
          <Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
           Juanito
          </Table.Cell>
          <Table.Cell>Juares</Table.Cell>
          <Table.Cell>Calculo Diferencia avz.</Table.Cell>
          <Table.Cell></Table.Cell>
          <Table.Cell>
            <a
              className='font-medium text-cyan-600 hover:underline dark:text-cyan-500'
              href='/tables'
            >
              <p>Edit</p>
            </a>
          </Table.Cell>
        </Table.Row>
        <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
          <Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
            <p>Microsoft Surface Pro</p>
          </Table.Cell>
          <Table.Cell>White</Table.Cell>
          <Table.Cell>Laptop PC</Table.Cell>
          <Table.Cell>$1999</Table.Cell>
          <Table.Cell>
            <a
              className='font-medium text-cyan-600 hover:underline dark:text-cyan-500'
              href='/tables'
            >
              <p>Edit</p>
            </a>
          </Table.Cell>
        </Table.Row>
        <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
          <Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
            Magic Mouse 2
          </Table.Cell>
          <Table.Cell>Black</Table.Cell>
          <Table.Cell>Accessories</Table.Cell>
          <Table.Cell>$99</Table.Cell>
          <Table.Cell>
            <a
              className='font-medium text-cyan-600 hover:underline dark:text-cyan-500'
              href='/tables'
            >
              <p>Edit</p>
            </a>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
    </section>
  )
}
