import React, { useEffect, useState } from 'react'
import { KEY_SESSION, API_KEY_INFORMATION } from '../../env/env'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logOut } from '../../redux/action/userSession'
import { Container, Row, Card, Table, Button, Badge, ToggleButton } from 'react-bootstrap'
import { BsFillBriefcaseFill } from 'react-icons/bs'
import { FaBars, FaEdit, FaSignOutAlt, FaTrash } from 'react-icons/fa'
import Navigation from '../../components/Navigation'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import axios from 'axios'

const MySwal = withReactContent(Swal)

function Dashboard() {
const navigate = useNavigate();
const dispatch = useDispatch();
const [ information, setInformation ] = useState([]);

useEffect( () => {
    getApiInformation(API_KEY_INFORMATION).then( data => {
        setInformation(data);
    } )
}, [] )

const getApiInformation = async (api) => {
    const response = await axios.get(api);
    const result = response.data;
    return result;
}

const logout = () => {
    MySwal.fire({
        title: 'Yakin ingin keluar?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ya, keluar!'
    }).then((result) => {
        if (result.isConfirmed) {
        dispatch(logOut());
        localStorage.removeItem(KEY_SESSION);
        MySwal.fire(
            'Berhasil Logout!',
        )
        navigate('/login');
        console.log(state);
        }
    })

}

  return (
   <>
        <Container fluid >
        <Row className='d-flex justify-content-between'>
            <aside className='col-2 border py-5' style={{ height: '100vh' }}>
                <ul className='list-group'>
                    <li className='my-3 w-100' >
                        <FaBars className='me-2'/>
                        <span>Data LoKer</span>
                    </li>
                    <li className='mb-3 w-100'>
                        <FaBars className='me-2'/>
                        <span>Data Beasiswa</span>
                    </li>
                </ul>
            </aside>
            <aside className='col-10 mx-auto p-5'>
            <header className='d-flex justify-content-between mb-3'>
                <h1>Dashboard</h1>
                <Button onClick={ () => logout() } className='btn-sm border-0 bg-light text-dark'><FaSignOutAlt className='me-1' /> Logout</Button>
            </header>
                <Row className='d-flex justify-content-around'>
                    <Card className='col-3 shadow-lg p-3'>
                        <span className='fs-1'>5</span>
                        <span className='fs-5'>Loker</span>
                    </Card>
                    <Card className='col-3 shadow-lg p-3'>
                        <span className='fs-1'>5</span>
                        <span className='fs-5'>Beasiswa</span>
                    </Card>
                    <Card className='col-3 shadow-lg p-3'>
                        <span className='fs-1'>5</span>
                        <span className='fs-5'>Jumlah Kasus</span>
                    </Card>
                </Row>
                <Row className='card table-responsive mt-3 p-3'>
                    <h5 className='text-dark fw-semibold'>Tracking Information</h5>
                <Table responsive striped bordered hover>
                    <thead>
                        <tr>
                        <th>No.</th>
                        <th>Bantuan</th>
                        <th>Kualifikasi</th>
                        <th>Jenis Pekerjaan</th>
                        <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        { information.map( (item, index) => {
                              return  (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.nama}</td>
                                    <td>{item.kualifikasi}</td>
                                    <td>{item.jenisPekerjaan}</td>
                                    <td className='d-flex py-4'>
                                        <Button variant='warning' className=' me-2'><FaEdit/></Button>
                                        <Button variant='danger'><FaTrash/></Button>
                                    </td>
                                </tr>
                            )
                        } ) }
                    </tbody>
                    </Table>
                </Row>
            </aside>
        </Row>
        </Container>
   </>
  )
}

export default Dashboard
