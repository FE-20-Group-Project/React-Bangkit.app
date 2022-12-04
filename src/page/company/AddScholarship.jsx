import React, { useState } from 'react'
import { Container, Row, Card, Form, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import DashboardTopBar from '../../components/navigation/DashboardTopBar'
import { API_KEY_SCHOLARSHIP } from '../../env/env'
import RichTextEditor from '../../components/editors/RichTextEditor'
import { FaArrowLeft } from 'react-icons/fa'
import { getCookie } from '../../cookie/cookie'
import axios from 'axios'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useSelector } from 'react-redux'
import NavSide from '../../components/navigation/NavSide'

const MySwal = withReactContent(Swal)

function AddScholarship() {
    const navigate = useNavigate();
    const {session} = useSelector( state => state.userSession );
    const [countCategory, setCountCategory] = useState([1]);

    const [name, setName] = useState();
    const [content, setContent] = useState('');
    const [kuota, setKuota] = useState('');
    const [link, setLink] = useState('');
    const [expired, setExpired] = useState('');
    const [category1, setCategory1] = useState('');
    const [category2, setCategory2] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        const token = getCookie('token');
        const form = new FormData();
        form.append('name', name);
        form.append('email', session.email);
        form.append('desc', content);
        form.append('kuota', kuota);
        form.append('category', [
            category1, category2
        ]);
        form.append('expired', '7');
        form.append('link', link);
        axios({
            url: API_KEY_SCHOLARSHIP,
            method: "POST",
            headers: { authorization: `Bearer ${token}` },
            data: form
        }).then( data => {
            console.log(data);
            if(data.data) {
                MySwal.fire({
                    title: 'Berhasil membuat Beasiswa baru!',
                })
                navigate('/dashboard-company/scholarship');
            }
        } )
    }


  return (
    <Container fluid>
    <Row>
        <NavSide/>
        <section className='dashboard-content col-10'>
            <DashboardTopBar/>
                    <main>
                        <Card className='table-responsive col-10 my-5'>
                        <Card.Header>
                            <Link to='/dashboard-company/scholarship' className='btn btn-danger btn-sm'><FaArrowLeft/> Kembali</Link>
                        </Card.Header>
                        <Card.Body className='p-5'>
                            <Card.Title className='fs-5 fw-semibold my-3 text-center'>Tambah Beasiswa Baru</Card.Title>
                            <Form onSubmit={ handleSubmit }>
                                <Form.Group className='mb-3'>
                                    <Form.Label><span className='text-danger'>*</span> Nama Beasiswa</Form.Label>
                                    <Form.Control type='text' required onChange={ (e) => setName(e.target.value) } />
                                </Form.Group>
                                <Form.Group className='mb-3'>
                                    <Form.Label><span className='text-danger'>*</span> Kuota</Form.Label>
                                    <Form.Control type='number' min='0' required onChange={ (e) => setKuota(e.target.value) } />
                                </Form.Group>
                                <Form.Group className='mb-3'>
                                    <Form.Label><span className='text-danger'>*</span> Kategori 1</Form.Label>
                                    <Form.Control type='text' required onChange={ (e) => setCategory1(e.target.value) } />
                                </Form.Group>
                                <Form.Group className='mb-3'>
                                    <Form.Label><span className='text-danger'>*</span> Kategori 2</Form.Label>
                                    <Form.Control type='text' required onChange={ (e) => setCategory2(e.target.value) } />
                                </Form.Group>
                                <Form.Group className='mb-3'>
                                    <Form.Label><span className='text-danger'>*</span> Link Formulir Registrasi</Form.Label>
                                    <Form.Control type='url' required onChange={ (e) => setLink(e.target.value) } />
                                </Form.Group>
                                <Form.Group className='mb-3'>
                                    <Form.Label><span className='text-danger'>*</span> Deskripsi Beasiswa</Form.Label>
                                    <RichTextEditor setContent={setContent} />
                                    </Form.Group>
                            <Form.Group className='text-end'>
                            {/* <div dangerouslySetInnerHTML={{ __html: content }}></div> */}
                                <Button variant='primary' type='submit' className='w-50'>Simpan</Button>
                            </Form.Group>
                            </Form>
                        </Card.Body>
                        </Card>
                    </main>
        </section>
        </Row>
    </Container>
  )
}

export default AddScholarship;
