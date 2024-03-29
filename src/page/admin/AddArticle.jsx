import React, { useState } from 'react'
import { Container, Row, Card, Form, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import DashboardTopBar from '../../components/navigation/DashboardTopBar'
import RichTextEditor from '../../components/editors/RichTextEditor'
import { FaArrowLeft } from 'react-icons/fa'
import { getCookie } from '../../cookie/cookie'
import axios from 'axios'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
import { BASE_URL } from '../../env/env'
import NavSide from '../../components/navigation/NavSide'

function AddArticle() {
    const navigate = useNavigate();
    const [ image, setImage ] = useState('');
    const [ title, setTitle ] = useState('');
    const [ author, setAuthor ] = useState('');
    const [ content, setContent ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(content);
        const token = getCookie('token');
        const form = new FormData();
        form.append('file', image);
        form.append('title', title);
        form.append('author', author);
        form.append('content', content);

        axios({
            url: `${BASE_URL}/api/artikel`,
            method: "POST",
            headers: { authorization: `Bearer ${token}` },
            data: form
        }).then( data => {
            console.log(data);
            if(data.data) {
                MySwal.fire({
                    title: 'Berhasil membuat laporan!',
                })
                navigate('/dashboard-admin/article');
            }
        } )
    }

  return (
    <Container fluid>
    <Row>
        <NavSide/>
        <section className='dashboard-content col-10 px-0'>
            <DashboardTopBar/>
                    <main className='my-3'>
                        <Card className='table-responsive col-md-10 col-sm-12 mx-auto my-5'>
                        <Card.Header>
                            <Link to='/dashboard-admin/article' className='btn btn-danger btn-sm'><FaArrowLeft/> Kembali</Link>
                        </Card.Header>
                        <Card.Body className='p-5'>
                            <Card.Title className='fs-5 fw-semibold my-3 text-center'>Tambah Artikel Baru</Card.Title>
                            <Form onSubmit={ handleSubmit }>
                                <Form.Group className='mb-3'>
                                    <Form.Label><span className='text-danger'>*</span> Image file</Form.Label>
                                    <Form.Control type='file' accept='image/jpeg, image/png, image/jpg' onChange={ (e) => setImage(e.target.files[0]) } />
                                </Form.Group>
                                <Form.Group className='mb-3'>
                                    <Form.Label><span className='text-danger'>*</span> Title</Form.Label>
                                    <Form.Control type='text' onChange={ (e) => setTitle(e.target.value) } />
                                </Form.Group>
                                <Form.Group className='mb-3'>
                                    <Form.Label><span className='text-danger'>*</span> Author</Form.Label>
                                    <Form.Control type='text' onChange={ (e) => setAuthor(e.target.value) } />
                                </Form.Group>
                                <Form.Group className='mb-3'>
                                    <Form.Label><span className='text-danger'>*</span> Konten</Form.Label>
                                    <RichTextEditor setContent={setContent} />
                                    </Form.Group>
                            <Form.Group className='text-end'>
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

export default AddArticle
