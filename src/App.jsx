import Dashbord from './Pages/Dashbord'
import { Home } from './Pages/Home'
import { Routes, Route } from 'react-router-dom'
import Login from './Pages/Login'
import { DashElemet } from './components/Dasbord/DashElemet'
import { KidsDashTab } from './components/Dasbord/Kids/KidsDashTab'
import { EmployDasTab } from './components/Dasbord/Master/EmployDasTab'
import { FatherDasTab } from './components/Dasbord/Fathers/FatherDasTab'

function App () {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/dashbord' element={<Dashbord />}>
          <Route path='kids' element={<DashElemet Component={KidsDashTab} />} />
          <Route
            path='employ'
            element={<DashElemet Component={EmployDasTab} />}
          />
          
          <Route
            path='father'
            element={<DashElemet Component={FatherDasTab} />}
          />

        </Route>
        <Route path='/login' element={<Login />} />

        <Route path='*' element={<div>404</div>} />
      </Routes>
    </>
  )
}

export default App
