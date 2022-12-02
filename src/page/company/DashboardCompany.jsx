import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Row, Col, Card, Dropdown, Button } from 'react-bootstrap'
import { FaBookOpen, FaUserTie, FaBullhorn } from 'react-icons/fa'
import DashboardTopBar from '../../components/navigation/DashboardTopBar'
import Footer from '../../components/footer/Footer'
import Chart from '../../components/chart/Chart'

const linkStyle = { color: '#dc3545', fontWeight: 'bold', borderBottom: '3px solid #dc3545', backgroundColor: '#FFFFFF' }

function DashboardCompany() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {session} = useSelector( state => state.userSession );

  return (
    <>
        <Container fluid>
            <Row className='d-flex justify-content-center'>
                <section className='col-10  p-0'>
                    <DashboardTopBar/>
                    <header className='container-fluid bg-dark py-5'>
                        <Row className='d-flex justify-content-around'>
                            <Card className='col-3 p-3 border-start border-warning border-5 border-0 shadow-lg'>
                                <Row className='d-flex justify-content-start py-3'>
                                    <Col xs='3'>
                                    <FaUserTie className='fs-1 text-warning'/>
                                    </Col>
                                    <Col xs='5' >
                                    <span className='fs-2 fw-semibold'></span>
                                    </Col>
                                </Row>
                                <h5>Total Loker</h5>
                            </Card>
                            <Card className='col-3 p-3  border-start border-primary border-5 border-0 shadow-lg'>
                                <Row className='d-flex justify-content-start py-3'>
                                    <Col xs='3'>
                                    <FaBookOpen className='fs-1 text-primary'/>
                                    </Col>
                                    <Col xs='5' >
                                    <span className='fs-2 fw-semibold'></span>
                                    </Col>
                                </Row>
                                <h5>Total Beasiswa</h5>
                            </Card>
                            <Card className='col-3 p-3  border-start border-danger border-5 border-0 shadow-lg'>
                                <Row className='d-flex justify-content-start py-3'>
                                    <Col xs='3'>
                                    <FaBullhorn className='fs-1 text-danger'/>
                                    </Col>
                                    <Col xs='5' >
                                    <span className='fs-2 fw-semibold'></span>
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
  )
}

export default DashboardCompany