import React, { useState, useEffect } from 'react'
import { Container, Row, Table, Card, Button } from 'react-bootstrap'
import DashboardTopBar from '../../components/navigation/DashboardTopBar'
import Loading from '../../components/loader/Loading'
import { Link } from 'react-router-dom'
import { FaBookOpen, FaCheck, FaEdit, FaTimes, FaTrash, FaUser } from 'react-icons/fa'
import axios from 'axios'
import { API_KEY_INSTANSI } from '../../env/env'
import { getCookie } from '../../cookie/cookie'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import NavSide from '../../components/navigation/NavSide'
import Footer from '../../components/footer/Footer'
const MySwal = withReactContent(Swal)

function DataCompany() {

    const [company, setCompany] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect( () => {
        getAPI(API_KEY_INSTANSI).then( data => {
            setCompany(data);
            setIsLoading(false);
        } )
    }, [isLoading] );

    const getAPI = async (api) => {
        const token = getCookie('token');
        const response = await axios.get(api, {
            headers: { authorization: `Bearer ${token}` }
        });
        const result = response.data.data;
        return result;
    }

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Yakin ingin menghapus Artikel berikut?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya, hapus!'
          }).then((result) => {
            if (result.isConfirmed) {
                const token = getCookie('token');
                axios({
                    url: `${API_KEY_COMPANY}/${id}`,
                    method: "DELETE",
                    headers: {  
                        authorization: `Bearer ${token}`
                    }
                }).then( data => {
                    console.log(data);
                    if(data.data) {
                        Swal.fire(
                          'Terhapus!',
                          'Artikel berhasil dihapus.',
                          'success'
                        )
                        setIsLoading(true);
                    }
                } )
            }
          })
    }

  return (
    <>
        { isLoading ? (
            <Loading/>
        ) : (
        <Container fluid>
            <Row>
              <NavSide/>
              <section className='col-10 px-0'>
                  <DashboardTopBar/>
                        <main className='my-3 p-3'>
                            <Card className='table-responsive'>
                                <Card.Header>
                                </Card.Header>
                            <Table className='table-bordered'>
                                <thead>
                                    <tr>
                                        <th>No .</th>
                                        <th>Profile</th>
                                        <th>Nama Instansi</th>
                                        <th>Email</th>
                                        <th>Verifikasi</th>
                                        <th>Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { company.map( (item, index) => {
                                    return (  
                                        <tr key={item._id}>
                                            <td>{index + 1}</td>
                                            <td>
                                                <img src={'https://api-bangkit.up.railway.app/'+item.image} width='80' />
                                            </td>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{ item.status==='accept' ? 
                                            <span className='badge bg-success'><FaCheck/> Accept</span> : <span className='badge bg-danger'><FaTimes/> Pending</span> }</td>
                                            <td>
                                                <Link to='' className='btn btn-warning btn-sm mx-2'>
                                                    <FaEdit/>
                                                </Link>
                                                <Button variant='danger' onClick={ () => handleDelete(item._id) } className='btn-sm'>
                                                    <FaTrash/>
                                                </Button>
                                            </td>
                                        </tr>
                                        )
                                        } ) }
                                </tbody>
                            </Table>
                            </Card>
                        </main>
                        <Footer/>
              </section>
            </Row>
        </Container>
        ) }
    </>
  )
}

export default DataCompany
