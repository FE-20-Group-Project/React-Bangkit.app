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
import { useSelector } from 'react-redux'
import NavSide from '../../components/navigation/NavSide'

function AddJobs() {
    const navigate = useNavigate();
    const {session} = useSelector( state => state.userSession );

    const [companyName, setCompanyName] = useState(session.name);
    const [positionName, setPositionName] = useState('');
    const [content, setContent] = useState('');
    const [email, setEmail] = useState(session.email);
    const [location, setLocation] = useState('');
    const [salary, setSalary] = useState('');
    const [qualification, setQualification] = useState('');
    const [workType, setWorkType] = useState('');
    const [expired, setExpired] = useState('');
    const [categoryJobs, setCategoryJobs] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        const token = getCookie('token');
        axios({
            url: `${BASE_URL}/api/loker`,
            method: "POST",
            headers: { authorization: `Bearer ${token}`, 'Content-Type':' application/json' },
            data: {
                companyName : companyName,
                positionName : positionName,
                desc : content,
                email : email,
                category : categoryJobs,
                location : location,
                salary : salary,
                qualification : qualification,
                workType : workType,
                expired : '7'
            }
        }).then( data => {
            console.log(data);
            if(data.data) {
                MySwal.fire({
                    title: 'Berhasil membuat Lowongan baru!',
                })
                navigate('/dashboard-company/jobs');
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
                                <Form.Group className='mb-3'>
                                    <Form.Label><span className='text-danger'>*</span> Lokasi</Form.Label>
                                    <Form.Control type='text' required onChange={ (e) => setLocation(e.target.value) } />
                                </Form.Group>
                              <Form.Group>
                                    <Form.Label><span className='text-danger'>*</span> kategori </Form.Label>
                                    <Form.Select required onChange={ (e) => setCategoryJobs(e.target.value) }>
                                        <option></option>
                                        <option>IT</option>
                                        <option>Akuntansi</option>
                                        <option>Pelayanan</option>
                                    </Form.Select>
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
