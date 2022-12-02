import React, { useState } from 'react'
import { Row, Card, Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { postDataReport } from '../../redux/action/laporanAction'
import { getCookie } from '../../cookie/cookie'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useNavigate } from 'react-router-dom';

const MySwal = withReactContent(Swal)

function AddReport() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {session} = useSelector( state => state.userSession );

    const [ title, setTitle ] = useState('');
    const [ category, setCategory ] = useState('');
    const [ subCategory, setSubCategory ] = useState('');
    const [ content, setContent ] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        const token = getCookie('token');
        const form = new FormData();
        form.append('laporan', session.image);
        form.append('title', title);
        form.append('category', category);
        form.append('subcategory', subCategory);
        form.append('content', content);
        dispatch(postDataReport(token, form, MySwal, navigate));
    }


  return (
    <section className='add-report container-fluid p-5 bg-soft-light'>
        <Row className='d-flex justify-content-between'>
            <aside className='col-8'>
                <h5>Buat Topik Baru</h5>
                <Card className='p-4 shadow-lg'>
                    <Form onSubmit={ handleSubmit }>
                        <Form.Group className='mb-3'>
                            <Form.Label>Judul Topik</Form.Label>
                            <Form.Control type='text' className='rounded-0' onChange={ (e) => setTitle(e.target.value) } placeholder='Ketik disini...' />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Kategori</Form.Label>
                            <Form.Select onChange={ (e) => setCategory(e.target.value) }>
                                <option></option>
                                <option>Ekonomi</option>
                                <option>Pendidikan</option>
                                <option>Kesehatan</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className='mb-5'>
                            <Form.Label>Sub-Kategori</Form.Label>
                        <Form.Select required defaultValue='Ekonomi1' onChange={ (e) => setSubCategory(e.target.value) } >
                            { category==='Ekonomi' && (
                                <>
                                <option></option>
                                <option>bahan-pokok</option>
                                <option>kuota-internet</option>
                                </>
                            ) }
                            { category==='Pendidikan' && (
                                <>
                                <option></option>
                                <option>bantuan-biaya</option>
                                <option>kuota-internet</option>
                                </>
                            ) }
                            { category==='Kesehatan' && (
                                <>
                                <option></option>
                                <option>obat-obatan</option>
                                <option>tabung-oksigen</option>
                                <option>masker</option>
                                </>
                            ) }
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Control
                                onChange={ (e) => setContent(e.target.value) }
                                required
                                placeholder='Apa yang ingin kamu sampaikan?'
                                as="textarea"
                                style={{ height: '200px' }}/>
                        </Form.Group>
                        <Form.Group>
                        </Form.Group>
                        <Form.Group className='my-3 text-center'>
                            <Button variant='primary' type='submit' className='rounded-pill w-50'>Submit</Button>
                        </Form.Group>
                    </Form>
                </Card>
            </aside>
            <aside className='col-4'>
                    <Card className='bg-soft-light mx-auto py-5 px-3 mb-3'>
                        <Card.Title className='fw-bold text-dark'>Aturan Pelaporan</Card.Title>
                        <Card.Body className='fw-light text-dark'>Join today and start discussing what you like.</Card.Body>
                        <Button variant='light' className='w-50 mx-auto text-danger'>Daftar</Button>
                    </Card>
            </aside>
        </Row>
    </section>
  )
}

export default AddReport
