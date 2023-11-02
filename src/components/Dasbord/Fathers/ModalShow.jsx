/* eslint-disable react/prop-types */
import { Button, Modal } from 'flowbite-react'


// eslint-disable-next-line react/prop-types
export default function ModalShow ({ openModal, handleModal, selection }) {
  // eslint-disable-next-line react/prop-types
 
console.log(selection);
  const campos = Object.keys(selection)
  console.log(campos);
  

  return (
    <>
      <Modal show={openModal} onClose={handleModal}>
        <Modal.Header>More Info </Modal.Header>
        <Modal.Body className='grid grid-cols-2 gap-x-3'>
            {/* <ul>
              {campos.map((ele,i)=>{
                return  <li key={i} className='text-xl font-semibold my-1'>{ele}:{selection[ele] ?? ' '}</li>
              })}
            </ul> */}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleModal}>Aceptar </Button>
          <Button color='gray' onClick={handleModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
