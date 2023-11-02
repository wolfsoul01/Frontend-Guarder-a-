import Dashbord from './Pages/Dashbord'
import { Home } from './Pages/Home'
import { Routes, Route } from 'react-router-dom'
import Login from './Pages/Login'
import { DashElemet } from './components/Dasbord/DashElemet'
import { KidsDashTab } from './components/Dasbord/Kids/KidsDashTab'


function App () {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/dashbord' element={<Dashbord />}>
          <Route path='' element={<DashElemet  Component={KidsDashTab} />} />
          <Route path='employ' element={<DashElemet  Component={KidsDashTab} />} />
        </Route>
        <Route path='/login' element={<Login />} />

        <Route path='*' element={<div>404</div>} />
      </Routes>
    </>
  )
}

export default App
