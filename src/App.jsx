import Dashbord from './Pages/Dashbord'
import { Home } from './Pages/Home'
import {Routes,Route} from 'react-router-dom'
import Login from './Pages/Login'

function App () {
  return (
    <>
    <Routes>
    <Route path='/' element={<Home/>}/>

    <Route path='/dashbord' element={<Dashbord/>}>
    </Route>
    <Route path='/login' element={<Login/>}/>


    </Routes>
    </>
  )
}

export default App
