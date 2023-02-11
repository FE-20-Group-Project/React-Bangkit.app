import React, { useState, useEffect } from 'react'
import { Container, Row, Table, Card, Button } from 'react-bootstrap'
import DashboardTopBar from '../../components/navigation/DashboardTopBar'
import Loading from '../../components/loader/Loading'
import { FaBookOpen, FaCheck, FaEdit, FaTimes, FaTrash, FaUser } from 'react-icons/fa'
import axios from 'axios'
import { BASE_URL } from '../../env/env'
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
        getAPI(`${BASE_URL}/api/admin/data/instansi/all`).then( data => {
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

    const handleBlock = async (id) => {
        Swal.fire({
            title: 'Yakin ingin memblock instansi berikut?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya!'
          }).then((result) => {
            if (result.isConfirmed) {
                const token = getCookie('token');
                axios({
                    url: `${BASE_URL}/api/admin/data/instansi/block/?id=${id}&isBlocked=true`,
                    method: "GET",
                    headers: {  
                        authorization: `Bearer ${token}`
                    }
                }).then( data => {
                    console.log(data);
                    if(data.data) {
                        Swal.fire(
                          'Success!',
                          'Instansi berhasil di block.',
                          'success'
                        )
                        setIsLoading(true);
                    }
                } )
            }
          })
    }
    const handleUnblock = async (id) => {
        Swal.fire({
            title: 'Yakin ingin melepas block dari instansi berikut?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya!'
          }).then((result) => {
            if (result.isConfirmed) {
                const token = getCookie('token');
                axios({
                    url: `${BASE_URL}/api/admin/data/instansi/block/?id=${id}&isBlocked=false`,
                    method: "GET",
                    headers: {  
                        authorization: `Bearer ${token}`
                    }
                }).then( data => {
                    console.log(data);
                    if(data.data) {
                        Swal.fire(
                          'Success!',
                          'Instansi berhasil di unblock.',
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
              <section className='dashboard-content col-10 px-0'>
                  <DashboardTopBar/>
                        <main className='my-3 p-3'>
                            <Card className='table-responsive'>
                                <Card.Header>
                                Data Instansi
                                </Card.Header>
                            <Table className='table-bordered'>
                                <thead>
                                    <tr>
                                        <th className='text-category'>No</th>
                                        <th className='text-category'>Profile</th>
                                        <th className='text-category'>Nama Instansi</th>
                                        <th className='text-category'>Email</th>
                                        <th className='text-category'>Verifikasi</th>
                                        <th className='text-category'>Formulir</th>
                                        <th className='text-category'>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { company.map( (item, index) => {
                                    return (  
                                        <tr key={item._id}>
                                            <td className='text-category'>{index + 1}</td>
                                            <td className='text-category'>
                                                <img src={`${BASE_URL}/${item.image}`} width='80' />
                                            </td>
                                            <td className='text-category'>{item.name}</td>
                                            <td className='text-category'>{item.email}</td>
                                            <td className='text-category'>
                                                { item.status==='accept' ? 
                                                <span className='badge bg-success'><FaCheck/> Accept</span> : <span className='badge bg-danger'><FaTimes/> Pending</span> }
                                            </td>
                                            <td className='text-category'><a href={`${BASE_URL}/${item.dokumen}`} 
                                            target='_blank' className='text-primary fw-semibold' >Dokumen</a></td>
                                            <td className='text-category'>
                                                { item.isBlocked ? 
                                                <span className='badge bg-danger' onClick={() => handleUnblock(item._id)}><FaTimes/> Is Blocked</span>
                                                : <span className='badge bg-success' onClick={ () => handleBlock(item._id)}><FaCheck/> Active</span> }
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
