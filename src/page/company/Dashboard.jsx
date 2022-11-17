import React from 'react'
import { KEY_SESSION } from '../../env/env'
import { useNavigate } from 'react-router-dom'
import { logOut } from '../../redux/action/userSession'
import { Container, Row, Card, Table, Button } from 'react-bootstrap'
import { BsFillBriefcaseFill } from 'react-icons/bs'
import { FaBars } from 'react-icons/fa'
import Navigation from '../../components/Navigation'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

function Dashboard() {
const navigate = useNavigate();

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
            'Deleted!',
            'Your file has been deleted.',
            'success'
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
                <Button variant='danger' onClick={ () => logout() } className='btn-sm' >Logout</Button>
            </header>
                <Row className='d-flex justify-content-around'>
                    <Card className='col-3 text-center shadow-lg p-3'>
                        <BsFillBriefcaseFill className='fs-1' />
                        <span>Pengajuan Loker</span>
                    </Card>
                    <Card className='col-3 shadow-lg p-3'>
                        <BsFillBriefcaseFill className='fs-1' />
                        <span>Pengajuan Beasiswa</span>
                    </Card>
                    <Card className='col-3 text-center shadow-lg p-3'>
                        <BsFillBriefcaseFill className='fs-1' />
                        <span>Jumlah Kasus Covid</span>
                    </Card>
                </Row>
                <Row className='card mt-3 p-3'>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                        </tr>
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
