import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { API_KEY_INFORMATION } from '../env/env';
import { Row, Form, Button } from 'react-bootstrap'
import { FaPlus, FaWindowClose } from 'react-icons/fa'
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const MySwal = withReactContent(Swal)

function FormCompany({handleAdd, addDisability}) {

    const { isLogin } = useSelector( state => state.userSession );

    const [company_id, setCompany_id] = useState(isLogin.company_id);
    const [namaPerusahaan, setNamaPerusahaan] = useState(isLogin.company_name);
    const [name, setName] = useState();
    const [logo, setLogo] = useState();
    const [lokasi, setLokasi] = useState();
    const [type, setType] = useState('Job Seeker');
    const [gaji, setGaji] = useState('undefined');
    const [kualifikasi, setKualifikasi] = useState();
    const [deskripsi, setDeskripsi] = useState();
    const [kontak, setKontak] = useState(isLogin.company_email);


    const handleSubmit = (e) => {
        e.preventDefault();
            const formulir = createForm(company_id, namaPerusahaan, name, logo, lokasi, type, gaji, kualifikasi, deskripsi, kontak)
            sendFormulir(API_KEY_INFORMATION, formulir, e.target);
        }
    
    
    const createForm = (company_id, namaPerusahaan, name, logo, lokasi, type, gaji, kualifikasi, deskripsi, kontak) => {
        return {
            company_id,
            namaPerusahaan,
            name,
            logo,
            lokasi,
            type,
            gaji,
            kualifikasi,
            deskripsi,
            kontak,
        }
    }

    const sendFormulir = async (api, formulir, form) => {
        const response = await axios.post(api, formulir);
        form.reset();
        console.log(response);
        MySwal.fire({
        icon: 'success',
        title: 'Data berhasil Dipublish',
    })
    }

  return (
    <Row className='col-6 mx-auto my-3'>
                    <Form.Group className='mb-3'>
                        <Button variant='danger' onClick={ () => handleAdd()} className='w-100'> { addDisability ? (<FaWindowClose/>) : (<><FaPlus/> Tambah Postingan Baru</>) }</Button>
                    </Form.Group>
                    <Form onSubmit={handleSubmit} className={ addDisability ? 'd-block' : 'd-none' }>
                        <Form.Group className='mb-3'>
                            <Form.Label className='fw-semibold'>Nama Bantuan</Form.Label>
                            <Form.Control onChange={(e) => setName(e.target.value)} type='text' />
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
    </Row>
  )
}

export default FormCompany
