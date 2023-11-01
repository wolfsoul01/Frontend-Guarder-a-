import { useState } from 'react'
import { AsideBar } from './SideBar/Aside'
import { Nav } from './SideBar/Nav'

function Sidebar () {
  const [isOpen, setisOpne] = useState(false)

  function handleClick () {
    setisOpne(!isOpen)
  }

  return (
    <>
      <Nav handleClick={handleClick}></Nav>

      <AsideBar isOpen={isOpen}></AsideBar>
    </>
  )
}

export default Sidebar
