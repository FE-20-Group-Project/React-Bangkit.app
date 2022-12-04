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
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)


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
  }, [setIsLoading] )

  const getAPI = async (api) => {
    const token = getCookie('token');
    const response = await axios.get(api, {
        headers: { authorization: `Bearer ${token}` }
    });
    const result = response.data.data;
    return result;
  }

  const handleDeleteScholarship = (id) => {
        Swal.fire({
            title: 'Yakin ingin menghapus Beasiswa berikut?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya, hapus!'
        }).then((result) => {
            if (result.isConfirmed) {
                const token = getCookie('token');
                axios({
                    url: `${API_KEY_SCHOLARSHIP}/${id}`,
                    method: "DELETE",
                    headers: {  
                        authorization: `Bearer ${token}`
                    }
                }).then( data => {
                    console.log(data);
                    if(data.data) {
                        Swal.fire(
                        'Terhapus!',
                        'Beasiswa berhasil dihapus.',
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
            <>
                <Container fluid>
                    <Row className='d-flex justify-content-center'>
                        <NavSide/>
                        <section className='dashboard-content col-10  px-0'>
                            <DashboardTopBar/>
                    
                            <main className='my-3 p-3'>
                            <Card className='table-responsive'>
                                        <Card.Header>
                                            <Link to='/dashboard-company/scholarship/add-scholarship' className='btn btn-primary btn-sm'><FaPlus/> Tambah Beasiswa</Link>
                                        </Card.Header>
                                    <Table className='table-bordered'>
                                        <thead>
                                            <tr align='center'>
                                                <th className='text-category'>No</th>
                                                <th className='text-category'>Gambar Artikel</th>
                                                <th className='text-category'>Judul Artikel</th>
                                                <th className='text-category'>Publisher</th>
                                                <th className='text-category'>Aksi</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            { scholarship?.map( (item, index )=> (
                                                <tr key={index} align='center'>
                                                    <td className='text-category'>{index+1}</td>
                                                    <td className='text-category'>{item.name}</td>
                                                    <td className='text-category'>{item.kuota}</td>
                                                    <td className='text-category'>{item.date}</td>
                                                    <td className='text-category'>
                                                        <Link className='btn btn-sm btn-warning btn-sm w-100 mb-2'>
                                                        <FaEdit/>
                                                        </Link>
                                                        <Button variant='danger' onClick={ () => handleDeleteScholarship(item._id) } className='btn-sm w-100'>
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