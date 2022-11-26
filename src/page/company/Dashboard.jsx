import React, { useEffect, useState } from 'react'
import { KEY_SESSION } from '../../env/env'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProgram, removeProgram } from '../../redux/action/programAction'
import { logOut } from '../../redux/action/userSession'
import { Container, Row, Card, Table, Button } from 'react-bootstrap'
import { FaEdit, FaTrash, } from 'react-icons/fa'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import FormCompany from '../../components/form/FormCompany'
import Loading from '../../components/loader/Loading'

const MySwal = withReactContent(Swal)

function Dashboard() {
const navigate = useNavigate();
const dispatch = useDispatch();
const {isLogin} = useSelector( state => state.userSession );
const {companyProgram, isLoading} = useSelector( state => state.companyProgram );
const [ addDisability, setAddDisability ] = useState(false);
const [ editVisibility, setEditVisibility ] = useState(false);
const [ currentProgram, setCurrentProgram ] = useState({
    nama: '',
    logo: '',
    lokasi: '',
    kualifikasi: '',
    kategori: '',
    type:'',
    gaji: '',
    deskripsi: '',
});

useEffect( () => {
    dispatch(getProgram(isLogin.company_id));
}, [] )

const handleAdd = () => {
    setAddDisability(!addDisability);
    // setEditVisibility(false);
}

const handleEditVisibility = (item) => {
    setEditVisibility(true);
    setAddDisability(!addDisability);
    setCurrentProgram(item);
}

const handleDelete = (id) => {

     MySwal.fire({
        title: 'Yakin ingin menghapus data berikut?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ya, hapus!'
    }).then((result) => {
        if(result.isConfirmed) {
        dispatch(removeProgram(id, isLogin.company_id));
        MySwal.fire(
            'Data berhasil dihapus!',
        )
        }
    })
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
        <Container className='p-3'>
        <Row className='d-flex justify-content-between'>
            <header className='d-flex justify-content-between mb-3'>
                <h1>Dashboard - Company</h1>
            </header>
            <section>
                <Row className='d-flex justify-content-around'>
                    <Card className='col-8 col-md-3 m-3 shadow-lg p-3'>
                        <span className='fs-1'>{companyProgram.length}</span>
                        <span className='fs-5'>Program</span>
                    </Card>
                </Row>
                <FormCompany handleAdd={handleAdd} addDisability={addDisability} handleEditVisibility={editVisibility} currentProgram={currentProgram} setCurrentProgram={setCurrentProgram} />
                <Row className='card table-responsive mt-3 p-3'>
                    <h5 className='text-dark fw-semibold'>Tracking Information</h5>
                    { isLoading ? (
                        <Loading/>
                    ) : (
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
                            { companyProgram.map( (item, index) => {
                                return  (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.nama}</td>
                                        <td>{item.kualifikasi}</td>
                                        <td>{item.jenisPekerjaan}</td>
                                        <td className='d-flex py-4'>
                                            <Button onClick={ () => handleEditVisibility(item) } variant='warning' className=' me-2'><FaEdit/></Button>
                                            <Button onClick={() => handleDelete(item.id)} variant='danger'><FaTrash/></Button>
                                        </td>
                                    </tr>
                                )
                            } ) }
                        </tbody>
                        </Table>
                    ) }
                </Row>
            </section>
        </Row>
        </Container>
   </>
  )
}

export default Dashboard
