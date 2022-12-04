import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Row, Table, Card, Button } from 'react-bootstrap'
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa'
import { API_KEY_SCHOLARSHIP } from '../../env/env'
import DashboardTopBar from '../../components/navigation/DashboardTopBar'
import Footer from '../../components/footer/Footer'
import NavSide from '../../components/navigation/NavSide'
import axios from 'axios'
import { getCookie } from '../../cookie/cookie'
import Loading from '../../components/loader/Loading'


function DataScholarship() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {session} = useSelector( state => state.userSession );
  const [ isLoading, setIsLoading ] = useState(true);
  const [ scholarship, setScholarship ] = useState([]);

  useEffect( () => {
        getAPI(`${API_KEY_SCHOLARSHIP}/instansi`).then( data => {
            setScholarship(data);
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
                        <section className='col-10  p-0'>
                            <DashboardTopBar/>
                    
                            <main className='p-5'>
                            <Card className='table-responsive'>
                                        <Card.Header>
                                            <Link to='/dashboard-company/scholarship/add-scholarship' className='btn btn-primary btn-sm'><FaPlus/> Tambah Beasiswa</Link>
                                        </Card.Header>
                                    <Table className='table-bordered'>
                                        <thead>
                                            <tr align='center'>
                                                <th>No .</th>
                                                <th>Gambar Artikel</th>
                                                <th>Judul Artikel</th>
                                                <th>Publisher</th>
                                                <th>Aksi</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            { scholarship.map( (item, index )=> (
                                                <tr key={index} align='center'>
                                                    <td>{index+1}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.kuota}</td>
                                                    <td>{item.date}</td>
                                                    <td>
                                                        <Link className='btn btn-sm btn-warning btn-sm mx-2'>
                                                        <FaEdit/>
                                                        </Link>
                                                        <Button variant='danger' className='btn-sm'>
                                                            <FaTrash/>
                                                        </Button>
                                                    </td>
                                                </tr>
                                            ) ) }
                                        </tbody>
                                    </Table>
                                    </Card>
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

export default DataScholarship