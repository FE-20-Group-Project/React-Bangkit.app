import React, { useState } from 'react'
import { Container, Row, Card, Form, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import DashboardTopBar from '../../components/navigation/DashboardTopBar'
import { BASE_URL } from '../../env/env'
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

    const [name, setName] = useState();
    const [content, setContent] = useState('');
    const [kuota, setKuota] = useState('');
    const [link, setLink] = useState('');
    const [expired, setExpired] = useState('');
    const [category, setCategory] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        const token = getCookie('token');
        const form = new FormData();
        form.append('name', name);
        form.append('email', session.email);
        form.append('desc', content);
        form.append('kuota', kuota);
        form.append('category', category);
        form.append('expired', '7');
        form.append('link', link);
        axios({
            url: `${BASE_URL}/api/beasiswa`,
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
        } ).catch( error => {
            console.log(error)
            MySwal.fire({
                icon: 'warning',
                title: error.response.data.message,
            })
        } )
    }

  return (
    <Container fluid>
    <Row>
        <NavSide/>
        <section className='dashboard-content col-10  px-0'>
            <DashboardTopBar/>
                    <main>
                        <Card className='table-responsive col-10 my-5 mx-auto'>
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
                                    <Form.Label><span className='text-danger'>*</span> Kategori</Form.Label>
                                    <Form.Select onChange={ (e) => setCategory(e.target.value) }>
                                        <option></option>
                                        <option>SD</option>
                                        <option>SMP</option>
                                        <option>SMA</option>
                                        <option>Perguruan Tinggi</option>
                                    </Form.Select>
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
