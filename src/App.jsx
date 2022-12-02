import React, { useState, useEffect } from 'react'
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
import DashboardCompany from './page/company/DashboardCompany'
import Footer from './components/footer/Footer'
import { getSession } from './redux/action/userSession'
import Aboutpage from './page/about/Aboutpage'
import DetailJobs from './page/information/jobs/DetailJobs'
import DetailScolarship from './page/information/scholarship/DetailScolarship'
import Navigation from './components/navigation/Navigation'
import Report from './page/report/Report'
import ReportList from './page/report/ReportList'
import ProfileUser from './page/profile_user/ProfileUser'
import EditProfile from './page/profile_user/EditProfile'
import { useSelector, useDispatch } from 'react-redux'
import DashboardAdmin from './page/admin/DashboardAdmin'
import DetailReport from './page/report/DetailReport'
import MyReport from './page/report/MyReport'
import { getCookie } from './cookie/cookie'
import DataArticle from './page/admin/DataArticle'
import AddArticle from './page/admin/AddArticle'
import Loading from './components/loader/Loading'
import DataJobs from './page/company/DataJobs'
import DataScholarship from './page/company/DataScholarship'
import AddJobs from './page/company/AddJobs'

function App() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

useEffect( () => {
  const token = getCookie('token');
  if(token) {
    dispatch(getSession(token, setIsLoading));
  }else {
    setIsLoading(false);
  }
},[] )

   return (     
    <>
      { isLoading ? (
        <Loading/>
      ) : (
        <div className="App bg-soft-light">
              <Routes>
                  <Route path='/login' element={<Login/>} />
                  <Route path='/register' element={<Register/>} />
                  <Route path='/register-company' element={<RegisterCompany/>} />

                  <Route path='/' element={<Homepage/>} />
                  <Route path='/about-us' element={<Aboutpage/>} />
                  <Route path='/jobs' element={<Jobs/>} />
                  <Route path='/jobs/:id' element={<DetailJobs/>} />
                  <Route path='/scholarship' element={<Scholarship/>} />
                  <Route path='/scholarship/:id' element={<DetailScolarship/>} />
                  <Route path='/article' element={<Article/>} />
                  <Route path='/report' element={<Report/>} />
                  <Route path='/report/my-report' element={<MyReport/>} />
                  <Route path='/report/:subcategory' element={<ReportList/>} />
                  <Route path='/report/detail-report/:id' element={<DetailReport/>} />
                  <Route path='/user/profile' element={<ProfileUser/>} />
                  <Route path='/user/edit/'>
                        <Route path=':editOption' index element={<EditProfile/>} />
                  </Route>


                  <Route path='/dashboard-company/' element={<DashboardCompany/>}/>
                  <Route path='/dashboard-company/jobs' element={<DataJobs/>}/>
                  <Route path='/dashboard-company/jobs/add-jobs' element={<AddJobs/>} />
                  <Route path='/dashboard-company/scholarship' element={<DataScholarship/>}/>
                  <Route path='/dashboard-admin/' element={<DashboardAdmin/>}/>
                  <Route path='/dashboard-admin/article' element={<DataArticle/>} />
                  <Route path='/dashboard-admin/article/add-article' element={<AddArticle/>} />
              </Routes>
        </div>
      ) }
    </>
  )
            
        
}

export default App
