import Dashbord from './Pages/Dashbord'
import { Home } from './Pages/Home'
import { Routes, Route } from 'react-router-dom'
import Login from './Pages/Login'
import { DashElemet } from './components/Dasbord/DashElemet'
import { KidsDashTab } from './components/Dasbord/Kids/KidsDashTab'
import { EmployDasTab } from './components/Dasbord/Employ/EmployDasTab'
import { FatherDasTab } from './components/Dasbord/Fathers/FatherDasTab'
import { ErrorPage } from './Pages/404'
import { GrapiElemant } from './components/Graphi/GaphiElement'
import { ProtectedRoutes } from './components/ProtectedRoutes'

function App () {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />

        <Route
          path='/dashbord'
          element={
            <ProtectedRoutes>
              <Dashbord />
            </ProtectedRoutes>
          }
        >
          <Route path='kids' element={<DashElemet Component={KidsDashTab} />} />
          <Route
            path='employ'
            element={<DashElemet Component={EmployDasTab} />}
          />

          <Route
            path='father'
            element={<DashElemet Component={FatherDasTab} />}
          />
          <Route
            path='graphi'
            element={<DashElemet Component={GrapiElemant} />}
          />
        </Route>
        <Route path='/login' element={<Login err />} />

        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </>
  )
}

export default App
