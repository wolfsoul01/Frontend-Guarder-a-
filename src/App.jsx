import Dashbord from './Pages/Dashbord'
import { Home } from './Pages/Home'
import { Routes, Route } from 'react-router-dom'
import Login from './Pages/Login'
//import { ChildrentDash } from './components/Dasbord/ChildrentDash'
import { KidsDash } from './components/Dasbord/KidsDash'
import { MasterDash } from './components/Dasbord/Master/MasterDash'

function App () {
  return (
    <>

      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/dashbord' element={<Dashbord />}>
          <Route path='' element={<KidsDash />} />
          <Route path='maestro' element={<>
           <MasterDash/>
          </>} />
        </Route>
        <Route path='/login' element={<Login />} />

        <Route path='*' element={<div>404</div>} />
      </Routes>
    </>
  )
}

export default App
