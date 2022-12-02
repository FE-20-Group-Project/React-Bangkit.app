import React from 'react'
import { NavLink, useNavigate, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Row, Table, Card } from 'react-bootstrap'
import { FaUserTie, FaPlus } from 'react-icons/fa'
import Sidebar from '../../components/navigation/sidebar'
import DashboardTopBar from '../../components/navigation/DashboardTopBar'
import Footer from '../../components/footer/Footer'
import Chart from '../../components/chart/Chart'


function DataScholarship() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {session} = useSelector( state => state.userSession );

 
  return (
    <>
        <Container fluid>
            <Row className='d-flex justify-content-center'>
                <Sidebar/>
                <section className='col-10  p-0'>
                    <DashboardTopBar/>
              
                    <main className='p-5'>
                    <Card className='table-responsive'>
                                <Card.Header>
                                    <Link to='/dashboard-admin/article/add-article' className='btn btn-primary btn-sm'><FaPlus/> Tambah Beasiswa</Link>
                                </Card.Header>
                            <Table className='table-bordered'>
                                <thead>
                                    <tr>
                                        <th>No .</th>
                                        <th>Gambar Artikel</th>
                                        <th>Judul Artikel</th>
                                        <th>Publisher</th>
                                        <th>Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                      
                                </tbody>
                            </Table>
                            </Card>
                    </main>
                    <Footer/>
                </section>
            </Row>
        </Container>
    </>
  )
}

export default DataScholarship