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

    const [ image, setImage ] = useState('');
    const [ title, setTitle ] = useState('');
    const [ category, setCategory ] = useState('');
    const [ subCategory, setSubCategory ] = useState('');
    const [ content, setContent ] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        const token = getCookie('token');
        const form = new FormData();
        if(image) {
            form.append('laporan', image);
        }
        form.append('title', title);
        form.append('category', category);
        form.append('subcategory', subCategory);
        form.append('content', content);
        dispatch(postDataReport(token, form, MySwal, navigate));
    }

    
  const handleEditUploadImage = () => {
    document.getElementById('edit-upload-image').click();
  }

     const previewImage = () => {
        const preview = document.getElementById('preview-img');
        const file = document.getElementById('edit-upload-image').files[0];
        const reader = new FileReader();
        setImage(file);
        reader.onloadend = () => {
            preview.src = reader.result;
        }
        if (file) {
            reader.readAsDataURL(file);
        }
  }


  return (
    <section className='add-report container-fluid p-3 p-md-5 bg-danger'>
        <Row className='d-flex justify-content-between f-wrap flex-column-reverse flex-md-row px-0 mx-0'>
            <aside className='col-12 col-md-8'>
                <Card className='shadow-lg'>
                <Card.Header className='p-3'><h5>Buat Topik Baru</h5></Card.Header>
                <Card.Body className='p-3'>
                    <Form onSubmit={ handleSubmit }>
                    <Form.Group className='col-3 my-3'>
                        <img src='' id='preview-img' className='img-fluid' />
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label className='d-block'>Image</Form.Label>
                        <button className="icon-btn add-btn" type='button' onClick={ () => handleEditUploadImage() }>
                            <div className="add-icon"></div>
                            <div className="btn-txt text-gray"> Add Photo </div>
                        </button>
                        <Form.Control type='file' id='edit-upload-image' accept='image/jpeg, image/png, image/jpg' onChange={ () => previewImage() } className='d-none' />
                    </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Judul Topik</Form.Label>
                            <Form.Control type='text' className='rounded-0 border-danger' onChange={ (e) => setTitle(e.target.value) } placeholder='Ketik disini...' />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Kategori</Form.Label>
                            <Form.Select className='border-danger' onChange={ (e) => setCategory(e.target.value) }>
                                <option></option>
                                <option>Ekonomi</option>
                                <option>Pendidikan</option>
                                <option>Kesehatan</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className='mb-5'>
                            <Form.Label>Sub-Kategori</Form.Label>
                        <Form.Select required className='border-danger' defaultValue='Ekonomi1' onChange={ (e) => setSubCategory(e.target.value) } >
                            { category==='Ekonomi' && (
                                <>
                                <option></option>
                                <option>Keuangan</option>
                                <option>bahan-pokok</option>
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
                                className='border-danger'
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
                </Card.Body>
                </Card>
            </aside>
            <aside className='col-12 col-md-4'>
                    <Card className='bg-soft-light mx-auto pt-3 px-3 mb-3'>
                        <Card.Title className='border-bottom py-3'>Aturan Pelaporan</Card.Title>
                        <Card.Body className='fw-light text-dark'>User dapat membuat maksimal 3 laporan live/aktif dengan kategori yang tersedia yakni pendidikan, ekonomi, dan kesehatan</Card.Body>
                    </Card>
            </aside>
        </Row>
    </section>
  )
}

export default AddReport
