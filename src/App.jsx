import Dashbord from './Pages/Dashbord'
import { Home } from './Pages/Home'
import { Routes, Route } from 'react-router-dom'
import Login from './Pages/Login'
import { DashElemet } from './components/Dasbord/KidsDash'
import { KidsDashTab } from './components/Dasbord/Kids/KidsDashTab'

const info = [
  {
    id: 1,
    nombre: 'Juan',
    apellidos: 'Gómez García',
    fechaNacimiento: '2018-05-02',
    edad: 4,
    aula: 'Azul',
    estado: true,
    alergias: ['cacahuates'],
    contactoEmergencia: {
      nombre: 'Maria Gómez',
      telefono: '5544332211',
      parentesco: 'madre'
    }
  },
  {
    id: 2,
    nombre: 'María',
    apellidos: 'Hernández López',
    fechaNacimiento: '2019-03-25',
    edad: 3,
    nivelEducativo: 'maternal',
    aula: 'Verde',
    estado: false,
    alergias: null,
    contactoEmergencia: {
      nombre: 'Pedro Hernández',
      telefono: '5543215678',
      parentesco: 'padre'
    }
  },
  {
    id: 3,
    nombre: 'Luis',
    apellidos: 'Sánchez Ramírez',
    fechaNacimiento: '2020-01-15',
    edad: 2,
    nivelEducativo: 'maternal',
    aula: 'Amarillo',
    estado: true,
    alergias: ['nueces'],
    contactoEmergencia: {
      nombre: 'Clara Sánchez',
      telefono: '5587452136',
      parentesco: 'madre'
    }
  },
  {
    id: 4,
    nombre: 'Daniela',
    apellidos: 'Martínez Torres',
    fechaNacimiento: '2020-08-30',
    edad: 2,
    nivelEducativo: 'maternal',
    aula: 'Morado',
    estado: true,
    alergias: null,
    contactoEmergencia: {
      nombre: 'Alberto Martínez',
      telefono: '5566543219',
      parentesco: 'padre'
    }
  },
  {
    id: 5,
    nombre: 'Sofía',
    apellidos: 'Díaz Flores',
    fechaNacimiento: '2019-11-12',
    edad: 3,
    nivelEducativo: 'preescolar',
    aula: 'Naranja',
    estado: true,
    alergias: ['fresas'],
    contactoEmergencia: {
      nombre: 'Elisa Díaz',
      telefono: '5544332211',
      parentesco: 'madre'
    }
  },
  {
    id: 6,
    nombre: 'Mateo',
    apellidos: 'González Ortíz',
    fechaNacimiento: '2018-03-19',
    edad: 4,
    nivelEducativo: 'preescolar',
    aula: 'Rojo',
    estado: false,
    alergias: ['gluten'],
    contactoEmergencia: {
      nombre: 'Roberto González',
      telefono: '5559871265',
      parentesco: 'padre'
    }
  },
  {
    id: 7,
    nombre: 'Emilia',
    apellidos: 'Ruíz Cervantes',
    fechaNacimiento: '2017-12-02',
    edad: 5,
    nivelEducativo: 'preescolar',
    aula: 'Rosa',
    estado: true,
    alergias: null,
    contactoEmergencia: {
      nombre: 'Jimena Ruíz',
      telefono: '5587452136',
      parentesco: 'madre'
    }
  },
  {
    id: 8,
    nombre: ' Samuel',
    apellidos: 'Soto Ríos',
    fechaNacimiento: '2017-09-30',
    edad: 5,
    nivelEducativo: 'preescolar',
    aula: 'Azul',
    estado: false,
    alergias: ['mariscos'],
    contactoEmergencia: {
      nombre: 'Alan Soto',
      telefono: '5544332211',
      parentesco: 'padre'
    }
  },
  {
    id: 9,
    nombre: 'Valeria',
    apellidos: 'Reyes Cruz',
    fechaNacimiento: '2016-07-25',
    edad: 6,
    nivelEducativo: 'preescolar',
    aula: 'Verde',
    estado: true,
    alergias: null,
    contactoEmergencia: {
      nombre: 'Patricia Reyes',
      telefono: '5556633225',
      parentesco: 'madre'
    }
  },
  {
    id: 10,
    nombre: 'Diego',
    apellidos: 'Luna Medina',
    fechaNacimiento: '2016-02-11',
    edad: 6,
    nivelEducativo: 'preescolar',
    aula: 'Amarillo',
    estado: false,
    alergias: ['polen'],
    contactoEmergencia: {
      nombre: 'Enrique Luna',
      telefono: '5532165498',
      parentesco: 'padre'
    }
  }
]
function App () {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/dashbord' element={<Dashbord />}>
          <Route path='' element={<DashElemet info={info} Component={KidsDashTab} />} />
          <Route path='employ' element={<DashElemet info={info} Component={KidsDashTab} />} />
        </Route>
        <Route path='/login' element={<Login />} />

        <Route path='*' element={<div>404</div>} />
      </Routes>
    </>
  )
}

export default App
