import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { API_KEY_INFORMATION } from '../env/env';
import { Row, Form, Button } from 'react-bootstrap'
import { FaPlus, FaWindowClose } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux';
import { addProgram, updateProgram } from '../redux/action/programAction';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const MySwal = withReactContent(Swal)

function FormCompany({handleAdd, addDisability,handleEditVisibility, currentProgram}) {
    const dispatch = useDispatch();
    const { isLogin } = useSelector( state => state.userSession );

    const [company_id, setCompany_id] = useState(isLogin.company_id);
    const [namaPerusahaan, setNamaPerusahaan] = useState(isLogin.company_name);
    const [nama, setNama] = useState();
    const [logo, setLogo] = useState();
    const [lokasi, setLokasi] = useState();
    const [type, setType] = useState('Job Seeker');
    const [gaji, setGaji] = useState('undefined');
    const [kualifikasi, setKualifikasi] = useState();
    const [deskripsi, setDeskripsi] = useState();
    const [kontak, setKontak] = useState(isLogin.company_email);


    const handleSubmit = (e) => {
        e.preventDefault();
            const formulir = createForm(company_id, namaPerusahaan, nama, logo, lokasi, type, gaji, kualifikasi, deskripsi, kontak)
            dispatch(addProgram(formulir, company_id));
            e.target.reset();
            MySwal.fire({
            icon: 'success',
            title: 'Data berhasil Dipublish',
        })
        }

    const handleUpdate = (e) => {
        e.preventDefault();
            const formulir = createForm(company_id, namaPerusahaan, nama, logo, lokasi, type, gaji, kualifikasi, deskripsi, kontak);
            MySwal.fire({
                title: 'Yakin ingin keluar?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Ya, keluar!'
            }).then((result) => {
                if (result.isConfirmed) {
                    dispatch(updateProgram(formulir, currentProgram.id));
                }
            })
    }
    
    
    const createForm = (company_id, namaPerusahaan, nama, logo, lokasi, type, gaji, kualifikasi, deskripsi, kontak) => {
        return {
            company_id,
            namaPerusahaan,
            nama,
            logo,
            lokasi,
            type,
            gaji,
            kualifikasi,
            deskripsi,
            kontak,
        }
    }

 

  return (
    <Row className='col-10 col-md-6 mx-auto my-3'>
                    <Form.Group className='mb-3'>
                        <Button variant='danger' onClick={ () => handleAdd()} className='w-100'> { addDisability ? (<FaWindowClose/>) : (<><FaPlus/> Tambah Postingan Baru</>) }</Button>
                    </Form.Group>
                    { handleEditVisibility==false ? (
                    <Form onSubmit={handleSubmit} className={ addDisability ? 'd-block' : 'd-none' }>
                        <Form.Group className='mb-3'>
                            <Form.Label className='fw-semibold'>Nama Bantuan</Form.Label>
                            <Form.Control onChange={(e) => setNama(e.target.value)} type='text' />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label className='fw-semibold'>URL Image</Form.Label>
                            <Form.Control onChange={(e) => setLogo(e.target.value)} type='url' />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label className='fw-semibold'>Lokasi</Form.Label>
                            <Form.Control onChange={(e) => setLokasi(e.target.value)} type='text' />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label className='fw-semibold'>Kualifikasi</Form.Label>
                            <Form.Control onChange={(e) => setKualifikasi(e.target.value)} type='text' />
                        </Form.Group>
                        { type=='Job Seeker' &&(
                        <Form.Group className='mb-3'>
                            <Form.Label className='fw-semibold'>Gaji</Form.Label>
                            <Form.Control onChange={(e) => setGaji(e.target.value)} type='text' />
                        </Form.Group>)
                        }
                        <Form.Group className='mb-3'>
                            <Form.Label className='fw-semibold'>Kategori</Form.Label>
                            <Form.Select onChange={(e) => setType(e.target.value)} >
                                <option>Job Seeker</option>
                                <option>Beasiswa</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label className='fw-semibold'>Deskripsi</Form.Label>
                            <Form.Control
                            onChange={(e) => setDeskripsi(e.target.value)}
                            as="textarea"
                            style={{ height: '100px' }}/>
                        </Form.Group>
                        <Form.Group>
                            <Button variant='danger' type='submit' className='w-100' >Publish</Button>
                        </Form.Group>
                    </Form>
                    ) : (
                        <Form  className={ addDisability ? 'd-block' : 'd-none' }>
                        <Form.Group className='mb-3'>
                            <Form.Label className='fw-semibold'>Nama Bantuan</Form.Label>
                            <Form.Control value={currentProgram.nama || ''} onChange={(e) => setNama(e.target.value)} type='text' />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label className='fw-semibold'>URL Image</Form.Label>
                            <Form.Control value={currentProgram.logo} onChange={(e) => setLogo(e.target.value)} type='url' />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label className='fw-semibold'>Lokasi</Form.Label>
                            <Form.Control value={currentProgram.lokasi} onChange={(e) => setLokasi(e.target.value)} type='text' />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label className='fw-semibold'>Kualifikasi</Form.Label>
                            <Form.Control value={currentProgram.kualifikasi} onChange={(e) => setKualifikasi(e.target.value)} type='text' />
                        </Form.Group>
                        { currentProgram.type=='Job Seeker' &&(
                        <Form.Group className='mb-3'>
                            <Form.Label className='fw-semibold'>Gaji</Form.Label>
                            <Form.Control value={currentProgram.gaji} onChange={(e) => setGaji(e.target.value)} type='text' />
                        </Form.Group>)
                        }
                        <Form.Group className='mb-3'>
                            <Form.Label className='fw-semibold'>Kategori</Form.Label>
                            <Form.Select value={currentProgram.type} onChange={(e) => setType(e.target.value)} >
                                <option>Job Seeker</option>
                                <option>Beasiswa</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label className='fw-semibold'>Deskripsi</Form.Label>
                            <Form.Control 
                            value={currentProgram.deskripsi}
                            onChange={(e) => setDeskripsi(e.target.value)}
                            as="textarea"
                            style={{ height: '100px' }}/>
                        </Form.Group>
                        <Form.Group>
                            <Button variant='danger' type='submit' className='w-100' >Update</Button>
                        </Form.Group>
                    </Form>
                    )
                    }
    </Row>
  )
}

export default FormCompany
