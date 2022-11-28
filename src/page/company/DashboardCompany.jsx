import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Row, Col, Dropdown, Button } from 'react-bootstrap'
import { FaUser, FaBars, FaSignOutAlt } from 'react-icons/fa'
import Sidebar from '../../components/navigation/sidebar'
import DashboardTopBar from '../../components/navigation/DashboardTopBar'
import Footer from '../../components/footer/Footer'

const linkStyle = { color: '#dc3545', fontWeight: 'bold', borderBottom: '3px solid #dc3545', backgroundColor: '#FFFFFF' }

function DashboardCompany() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {session} = useSelector( state => state.userSession );

 
  return (
    <>
        <Container fluid>
            <Row className='d-flex justify-content-center'>
                <Sidebar/>
                <section className='col-10 border'>
                    <DashboardTopBar/>
                    <nav>
                      <Row className='d-flex justify-content-around'>
                          <Col xs='3' className='p-3 text-center'>
                              <NavLink>Data Loker</NavLink>
                          </Col>
                          <Col xs='3' className='p-3 text-center'>
                            <NavLink>Data Beasiswa</NavLink>
                          </Col>
                          <Col xs='3' className='p-3 text-center'>
                              <NavLink>Laporan</NavLink>
                          </Col>
                      </Row>
                    </nav>
                    <main>

                    </main>
                </section>
            </Row>
        </Container>
    </>
  )
}

export default DashboardCompany