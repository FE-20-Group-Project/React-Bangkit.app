import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Row, Col, Card, Dropdown, Button } from 'react-bootstrap'
import { FaBookOpen, FaUserTie, FaBullhorn } from 'react-icons/fa'
import DashboardTopBar from '../../components/navigation/DashboardTopBar'
import Footer from '../../components/footer/Footer'
import Chart from '../../components/chart/Chart'
import NavSide from '../../components/navigation/NavSide'
import axios from 'axios'
import { API_KEY_JOBS, API_KEY_SCHOLARSHIP, API_KEY_REPORT } from '../../env/env'
import { getCookie } from '../../cookie/cookie'
import Loading from '../../components/loader/Loading'

const linkStyle = { color: '#dc3545', fontWeight: 'bold', borderBottom: '3px solid #dc3545', backgroundColor: '#FFFFFF' }

function DashboardCompany() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {session} = useSelector( state => state.userSession );
  const [ isLoading, setIsLoading ] = useState(true);
  const [ totalJobs, setTotalJobs ] = useState();
  const [ totalScholarship, setTotalScholarship ] = useState();
  const [ totalReport, setTotalReport ] = useState();

  useEffect( () => {
    getAPI(`${API_KEY_JOBS}/instansi` ).then( data => {
        setTotalJobs(data.length)
    } )
    getAPI(`${API_KEY_SCHOLARSHIP}/instansi`).then( data => {
        setTotalScholarship(data.length)
    } )
    getAPI(API_KEY_REPORT).then( data => {
        setTotalReport(data.length)
        setIsLoading(false);
    } )
  }, [] )

  const getAPI = async (api) => {
        const token = getCookie('token');
        const response = await axios.get(api, { 
            headers: { authorization: `Bearer ${token}` }
         });
        const result = response.data.data;
        return result;
  }


  return (
    <>
        { isLoading ? (
            <Loading/>
        ) : (
            <>
                <Container fluid>
                    <Row className='d-flex justify-content-center'>
                        <NavSide/>
                        <section className='dashboard-content col-10  p-0'>
                            <DashboardTopBar/>
                            <header className='container-fluid bg-success py-5'>
                                <Row className='d-flex justify-content-around'>
                                    <Card className='col-10 col-md-3 m-3 p-3 border-start border-warning border-5 border-0 shadow-lg'>
                                        <Row className='d-flex justify-content-start py-3'>
                                            <Col xs='3'>
                                            <FaUserTie className='fs-1 text-warning'/>
                                            </Col>
                                            <Col xs='5' >
                                            <span className='fs-2 fw-semibold'>{totalJobs}</span>
                                            </Col>
                                        </Row>
                                        <h5>Total Loker</h5>
                                    </Card>
                                    <Card className='col-10 col-md-3 m-3 p-3  border-start border-primary border-5 border-0 shadow-lg'>
                                        <Row className='d-flex justify-content-start py-3'>
                                            <Col xs='3'>
                                            <FaBookOpen className='fs-1 text-primary'/>
                                            </Col>
                                            <Col xs='5' >
                                            <span className='fs-2 fw-semibold'>{totalScholarship}</span>
                                            </Col>
                                        </Row>
                                        <h5>Total Beasiswa</h5>
                                    </Card>
                                    <Card className='col-10 col-md-3 m-3 p-3  border-start border-danger border-5 border-0 shadow-lg'>
                                        <Row className='d-flex justify-content-start py-3'>
                                            <Col xs='3'>
                                            <FaBullhorn className='fs-1 text-danger'/>
                                            </Col>
                                            <Col xs='5' >
                                            <span className='fs-2 fw-semibold'>{totalReport}</span>
                                            </Col>
                                        </Row>
                                        <h5>Total Pelaporan</h5>
                                    </Card>
                                </Row>
                            </header>
                            <main className='p-5'>
                                <Chart/>
                            </main>
                            <Footer/>
                        </section>
                    </Row>
                </Container>
            </>
        ) }
    </>
  )
}

export default DashboardCompany