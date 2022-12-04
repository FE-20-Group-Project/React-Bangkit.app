import React, { useState, useEffect } from 'react'
import { Container, Row, Table, Card, Button } from 'react-bootstrap'
import DashboardTopBar from '../../components/navigation/DashboardTopBar'
import Loading from '../../components/loader/Loading'
import { Link } from 'react-router-dom'
import { FaEdit, FaPlus, FaTrash, FaTimes, FaCheck, FaUser } from 'react-icons/fa'
import axios from 'axios'
import { API_KEY_USERS } from '../../env/env'
import { getCookie } from '../../cookie/cookie'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import NavSide from '../../components/navigation/NavSide'
import Footer from '../../components/footer/Footer'
const MySwal = withReactContent(Swal)

function DataUser() {

    const [user, setUser] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect( () => {
        getAPI(API_KEY_USERS).then( data => {
            setUser(data);
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
            title: 'Yakin ingin memblock user berikut?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya!'
          }).then((result) => {
            if (result.isConfirmed) {
                const token = getCookie('token');
                axios({
                    url: `https://api-bangkit.up.railway.app/api/admin/data/user/block/?id=${id}&isBlocked=true`,
                    method: "GET",
                    headers: {  
                        authorization: `Bearer ${token}`
                    }
                }).then( data => {
                    console.log(data);
                    if(data.data) {
                        Swal.fire(
                          'Success!',
                          'User berhasil di block.',
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
            title: 'Yakin ingin melepas block dari user berikut?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya!'
          }).then((result) => {
            if (result.isConfirmed) {
                const token = getCookie('token');
                axios({
                    url: `https://api-bangkit.up.railway.app/api/admin/data/user/block/?id=${id}&isBlocked=false`,
                    method: "GET",
                    headers: {  
                        authorization: `Bearer ${token}`
                    }
                }).then( data => {
                    console.log(data);
                    if(data.data) {
                        Swal.fire(
                          'Success!',
                          'User berhasil di unblock.',
                          'success'
                        )
                        setIsLoading(true);
                    }
                } )
            }
          })
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
                    url: `${API_KEY_USERS}/${id}`,
                    method: "DELETE",
                    headers: {  
                        authorization: `Bearer ${token}`
                    }
                }).then( data => {
                    console.log(data);
                    if(data.data) {
                        Swal.fire(
                          'Terhapus!',
                          'Userberhasil dihapus.',
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
                                    Data Pengguna
                                </Card.Header>
                            <Table className='table-bordered'>
                                <thead>
                                    <tr>
                                        <th>No .</th>
                                        <th>Profile</th>
                                        <th>Nama</th>
                                        <th>Email</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { user.map( (item, index) => {
                                    return (  
                                        <tr key={item._id}>
                                            <td>{index + 1}</td>
                                            <td>
                                                <img src={'https://api-bangkit.up.railway.app/'+item.image} width='80' />
                                            </td>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>
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

export default DataUser
