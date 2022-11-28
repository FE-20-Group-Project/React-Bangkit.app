import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import DashboardTopBar from '../../components/navigation/DashboardTopBar'
import Sidebar from '../../components/navigation/sidebar'

function DashboardAdmin() {
  return (
    <Container fluid>
        <Row>
          <Sidebar/>
          <section className='col-10'>
              <DashboardTopBar/>
              <nav>
                      <Row className='d-flex justify-content-around'>
                          <Col xs='3' className='p-3 text-center'>
                              <NavLink>Data User</NavLink>
                          </Col>
                          <Col xs='3' className='p-3 text-center'>
                              <NavLink>Data Instansi</NavLink>
                          </Col>
                          <Col xs='3' className='p-3 text-center'>
                              <NavLink>Laporan</NavLink>
                          </Col>
                          <Col xs='3' className='p-3 text-center'>
                            <NavLink>Article</NavLink>
                        </Col>
                      </Row>
                    </nav>
                    <main>

                    </main>
          </section>
        </Row>
    </Container>
  )
}

export default DashboardAdmin
