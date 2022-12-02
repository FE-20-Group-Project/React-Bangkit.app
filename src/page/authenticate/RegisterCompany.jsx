import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Register from '../../assets/png/regis3.jpg'
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap'
import { API_KEY_REGISTER_COMPANY } from '../../env/env'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import axios from 'axios'
import Navigation from '../../components/navigation/Navigation'
import Footer from '../../components/footer/Footer'

const MySwal = withReactContent(Swal)

function RegisterCompany() {

    const [ company_email, setCompany_email ] = useState();
    const [ company_name, setCompany_name ] = useState();
    const [ company_password, setCompany_password ] = useState();
    const [ confirmPassword, setConfirmPassword ] = useState();
    const [ document, setDocument ] = useState();

    const register = async (dataForm, form) => {
        try {
            axios({
                url : API_KEY_REGISTER_COMPANY,
                method : "POST",
                data : dataForm
            }).then( data => {
                console.log(data)
            } )
        } catch(error) {
            console.log(error);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const formulir = createFormulir(company_email, company_name, company_password, confirmPassword, document);
        register(formulir, e.target);
    }

    const createFormulir = (email, name, password, confirmPassword, document) => {
        const form = new FormData();
        form.append('email', email);
        form.append('name', name);
        form.append('password', password);
        form.append('confirmPassword', confirmPassword);
        form.append('dokumen', document);
        return form;
    }

  return (
    <>
        <Navigation/>
            <Container fluid >
            <Row>
                <Container className='p-5'>
                        <Row className='d-flex justify-content-between'>
                            <Col xs='10' md='5' className='mx-auto d-flex justify-content-center py-3 flex-column'>
                                <aside className='ps-3 text-primary rounded'>
                                    <img className='img-fluid' src={Register} />
                                    <h3 className='fw-bold'>Ayo bergabung bersama kami dan kirimkan bantuan untuk mereka yang membutuhkan!</h3>
                                </aside>
                            </Col>
                            <Col xs='10' md='5' className='bg-light mx-auto'>
                            <div className='text-center my-3'>
                                        <h2 className='fw-semibold text-dark mt-2'>REGISTER COMPANY</h2>
                                    </div>
                                    <Form onSubmit={ handleSubmit } >
                                        <Form.Group className='mb-4'>
                                            <div className='group'>
                                                <input required type='email' onChange={ (e) => setCompany_email(e.target.value) } className='input w-100' />
                                                <span className='highlight'></span>
                                                <span className='bar w-100'></span>
                                                <label className='label-input'>Email Perusahaan</label>
                                            </div>
                                        </Form.Group>
                                        <Form.Group className='mb-4'>
                                            <div className='group'>
                                                <input required type='text' onChange={ (e) => setCompany_name(e.target.value) } className='input w-100' />
                                                <span className='highlight'></span>
                                                <span className='bar w-100'></span>
                                                <label className='label-input'>Nama Perusahaan</label>
                                            </div>
                                        </Form.Group>
                                        <Form.Group className='mb-4'>
                                            <div className='group'>
                                                <input required type='password' onChange={ (e) => setCompany_password(e.target.value) } className='input w-100' />
                                                <span className='highlight'></span>
                                                <span className='bar w-100'></span>
                                                <label className='label-input'>Password</label>
                                            </div>
                                        </Form.Group>
                                        <Form.Group className='mb-4'>
                                            <div className='group'>
                                                <input required type='password' onChange={ (e) => setConfirmPassword(e.target.value) } className='input w-100' />
                                                <span className='highlight'></span>
                                                <span className='bar w-100'></span>
                                                <label className='label-input'>Konfirmasi Password</label>
                                            </div>
                                        </Form.Group>
                                        <Form.Group className='mb-4'>
                                            <Form.Control onChange={ (e) => setDocument(e.target.files[0]) } type='file' />
                                        </Form.Group>
                                        <Form.Group className='mb-5'>
                                            <Button variant='danger' type='submit' className='w-100 mb-2'>Daftar</Button>
                                            <Link to='/register' className='btn btn-primary w-100 mb-2'>Daftar sebagai Pengguna</Link>
                                            <p className='text-dark'>Sudah punya akun ? <Link to='/login' className='text-danger text-decoration-none'>Login sekarang</Link></p>
                                        </Form.Group>
                                    </Form>
                            </Col>
                        </Row>
                    </Container>
                </Row>
            </Container>
        <Footer/>
    </>
  )
}

export default RegisterCompany