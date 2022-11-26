import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from 'react-router-dom'
import Login from './page/authenticate/Login'
import Register from './page/authenticate/Register'
import RegisterCompany from './page/authenticate/RegisterCompany'
import Homepage from './page/homepage/Homepage'
import Article from './page/information/pandemic/Article'
import Jobs from './page/information/jobs/Jobs'
import Scholarship from './page/information/scholarship/Scholarship'
import Dashboard from './page/company/Dashboard'
import Footer from './components/footer/Footer'
import Aboutpage from './page/about/Aboutpage'
import DetailJobs from './page/information/jobs/DetailJobs'
import DetailScolarship from './page/information/scholarship/DetailScolarship'
import Navigation from './components/navigation/Navigation'
import Report from './page/report/Report'
import ReportList from './page/report/ReportList'
import ProfileUser from './page/profile_user/ProfileUser'
import EditProfile from './page/profile_user/EditProfile'

function App() {


  return (
    <div className="App">
        <Navigation/>
          <Routes>
              <Route path='/' element={<Homepage/>} />
              <Route path='/dashboard' element={<Dashboard/>} />
              <Route path='/login' element={<Login/>} />
              <Route path='/register' element={<Register/>} />
              <Route path='/register-company' element={<RegisterCompany/>} />
              <Route path='/about-us' element={<Aboutpage/>} />
              <Route path='/article' element={<Article/>} />
              <Route path='/report' element={<Report/>} />
              <Route path='/report/:id' element={<ReportList/>} />
              <Route path='/jobs' element={<Jobs/>} />
              <Route path='/jobs/:id' element={<DetailJobs/>} />
              <Route path='/scholarship' element={<Scholarship/>} />
              <Route path='/scholarship/:id' element={<DetailScolarship/>} />
              <Route path='/user/profile' element={<ProfileUser/>} />
              <Route path='/user/edit/'>
                    <Route path=':editOption' index element={<EditProfile/>} />
              </Route>
          </Routes>
          <Footer/>
    </div>
  )
}

export default App
