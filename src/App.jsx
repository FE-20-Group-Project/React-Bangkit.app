import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from 'react-router-dom'
import Login from './page/authenticate/Login'
import Register from './page/authenticate/Register'
import RegisterCompany from './page/authenticate/RegisterCompany'
import Homepage from './page/homepage/Homepage'

function App() {


  return (
    <div className="App">

          <Routes>
              <Route path='/' element={<Homepage/>} />
              <Route path='/login' element={<Login/>} />
              <Route path='/register' element={<Register/>} />
              <Route path='/register-company' element={<RegisterCompany/>} />
          </Routes>
    </div>
  )
}

export default App
