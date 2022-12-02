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
import { API_KEY_JOBS } from '../../env/env'
import { useSelector } from 'react-redux'

function AddJobs() {
    const navigate = useNavigate();
    const {session} = useSelector( state => state.userSession );
    const [countCategory, setCountCategory] = useState([1]);

    const [companyName, setCompanyName] = useState(session.name);
    const [positionName, setPositionName] = useState('');
    const [content, setContent] = useState('');
    const [email, setEmail] = useState(session.email);
    const [location, setLocation] = useState('');
    const [salary, setSalary] = useState('');
    const [qualification, setQualification] = useState('');
    const [workType, setWorkType] = useState('');
    const [expired, setExpired] = useState('');
    const [categoryJobs, setCategoryJobs] = useState([]);

  console.log(categoryJobs);

    const handleSubmit = (e) => {
        e.preventDefault();
        const token = getCookie('token');
        const form = new FormData();
        form.append('companyName', companyName);
        form.append('positionName', positionName);
        form.append('desc', content);
        form.append('email', email);
        form.append('category', categoryJobs);
        form.append('location', location);
        form.append('salary', salary);
        form.append('qualification', qualification);
        form.append('workType', workType);
        form.append('expired', '7');
     
        axios({
            url: API_KEY_JOBS,
            method: "POST",
            headers: { authorization: `Bearer ${token}` },
            data: form
        }).then( data => {
            console.log(data);
            if(data.data) {
                MySwal.fire({
                    title: 'Berhasil membuat Lowongan baru!',
                })
                navigate('/dashboard-company/jobs');
            }
        } )
    }

    const categoryInput = countCategory.map( (item, index) => {
        return (
            <Form.Group className='mb-3'>
                <Form.Label><span className='text-danger'>*</span> Kategori Pekerjaan</Form.Label>
                <Form.Control type='text' className='category' onChange={(e) => setCategoryJobs( value => [e.target.value] )} />
            </Form.Group>
            )
    } )

    const incrementCount = () => {
        setCountCategory( oldArray => [...oldArray, 1] )
    }
    const decrementCount = () => {
        setCountCategory( oldArray => [1] )
    }

  return (
    <Container fluid>
    <Row>
        <section className='col-10'>
            <DashboardTopBar/>
                    <main>
                        <Card className='table-responsive col-10 my-5'>
                        <Card.Header>
                            <Link to='/dashboard-company/jobs' className='btn btn-danger btn-sm'><FaArrowLeft/> Kembali</Link>
                        </Card.Header>
                        <Card.Body className='p-5'>
                            <Card.Title className='fs-5 fw-semibold my-3 text-center'>Tambah Lowongan Pekerjaan Baru</Card.Title>
                            <Form onSubmit={ handleSubmit }>
                                <Form.Group className='mb-3'>
                                    <Form.Label><span className='text-danger'>*</span> Nama Perusahaan</Form.Label>
                                    <Form.Control type='text' defaultValue={session.name} required onChange={ (e) => setCompanyName(e.target.value) } />
                                </Form.Group>
                                <Form.Group className='mb-3'>
                                    <Form.Label><span className='text-danger'>*</span> Email Perusahaan</Form.Label>
                                    <Form.Control type='email' defaultValue={session.email} required onChange={ (e) => setEmail(e.target.value) } />
                                </Form.Group>
                                <Form.Group className='mb-3'>
                                    <Form.Label><span className='text-danger'>*</span> Nama Pekerjaan</Form.Label>
                                    <Form.Control type='text' required onChange={ (e) => setPositionName(e.target.value) } />
                                </Form.Group>
                                <Form.Group className='d-flex justify-content-start'>
                                    <aside className='mb-3 col-5'>
                                        { categoryInput }
                                    </aside>
                                        <aside>
                                    { categoryInput.length <= 5 && (
                                        <Button className='bg-primary btn-sm text-light m-2' onClick={ () => incrementCount() }>+</Button>
                                    ) }
                                        <Button variant='danger' className='btn-sm' onClick={ () => decrementCount() }>Clear</Button>
                                        </aside>
                                </Form.Group>
                                <Form.Group className='mb-3'>
                                    <Form.Label><span className='text-danger'>*</span> Gaji Kisaran</Form.Label>
                                    <Form.Control type='text' required onChange={ (e) => setSalary(e.target.value) } />
                                </Form.Group>
                                <Form.Group className='mb-3'>
                                    <Form.Label><span className='text-danger'>*</span> Kualifikasi</Form.Label>
                                    <Form.Control type='text' required onChange={ (e) => setQualification(e.target.value) } />
                                </Form.Group>
                                <Form.Group className='mb-3'>
                                    <Form.Label><span className='text-danger'>*</span> Jenis Pekerjaan</Form.Label>
                                    <Form.Control type='text' required onChange={ (e) => setWorkType(e.target.value) } />
                                </Form.Group>
                                <Form.Group className='mb-3'>
                                    <Form.Label><span className='text-danger'>*</span> Deskripsi Pekerjaan</Form.Label>
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

export default AddJobs
