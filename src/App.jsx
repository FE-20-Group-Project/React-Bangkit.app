import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import Login from './page/authenticate/Login'
import Register from './page/authenticate/Register'

function App() {


  return (
    <div className="App">
          <Routes>
              <Route path='/login' element={<Login/>} />
              <Route path='/register' element={<Register/>} />
          </Routes>
    </div>
  )
}

export default App
