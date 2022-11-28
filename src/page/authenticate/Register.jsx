import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap'
import { API_KEY_REGISTER } from '../../env/env'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import axios from 'axios'

const MySwal = withReactContent(Swal)

function Register() {

const navigate = useNavigate();
const [ email, setEmail ] = useState('');
const [ name, setName ] = useState('');
const [ contact, setContact ] = useState('');
const [ password, setPassword ] = useState('');
const [ confirmPassword, setConfirmPassword ] = useState('');

useEffect( () => {
    window.scrollTo(0, 0);
}, [] );

const register = async (data, form) => {
    try {
        const response = await axios.post(API_KEY_REGISTER, data);
        console.log(response);
    } catch(error) {
        console.log(error.response.message);
    }
}

const createFormulir = (email, name, contact, password, confirmPassword) => {
    return {
        email,
        name,
        contact,
        password,
        confirmPassword
    }
}

const handleSubmit = (e) => {
    e.preventDefault();

    const formulir = createFormulir(email, name, contact, password, confirmPassword);
    register(formulir, e.target);

}


  return (
    <Container fluid>
            <Row>
                <Container className='p-5'>
                    <Row className='d-flex justify-content-between'>
                        <Col xs='10' md='6' className='d-flex justify-content-center mx-auto flex-column'>
                            <aside className='text-danger '>
                                <h1 className='text-header'>Daftarkan Akunmu!</h1>
                                <h5>Buat akun sekarang, ayo raih informasi bantuan dari berbagai instansi dan bangkit bersama</h5>
                            </aside>
                        </Col>
                        <Col xs='10' md='5' className='bg-light mx-auto'>
                                <div className='text-center my-3'>
                                    <h2 className='fw-semibold text-dark mt-2'>REGISTER USER</h2>
                                </div>
                                <Form onSubmit={ handleSubmit }>
                                    <Form.Group className='mb-4'>
                                        <div className='group'>
                                            <input required onChange={ (e) => setEmail(e.target.value) } type='email' className='input w-100' />
                                            <span className='highlight'></span>
                                            <span className='bar w-100'></span>
                                            <label className='label-input'>Email</label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group className='mb-4'>
                                        <div className='group'>
                                            <input required onChange={ (e) => setName(e.target.value) } type='text' className='input w-100' />
                                            <span className='highlight'></span>
                                            <span className='bar w-100'></span>
                                            <label className='label-input'>Nama Lengkap</label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group className='mb-4'>
                                        <div className='group'>
                                            <input required onChange={ (e) => setContact(e.target.value) } type='telp' className='input w-100' />
                                            <span className='highlight'></span>
                                            <span className='bar w-100'></span>
                                            <label className='label-input'>Contact</label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group className='mb-4'>
                                        <div className='group'>
                                            <input required onChange={ (e) => setPassword(e.target.value) } type='password' className='input w-100' />
                                            <span className='highlight'></span>
                                            <span className='bar w-100'></span>
                                            <label className='label-input'>Password</label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group className='mb-4'>
                                        <div className='group'>
                                            <input required onChange={ (e) => setConfirmPassword(e.target.value) } type='password' className='input w-100' />
                                            <span className='highlight'></span>
                                            <span className='bar w-100'></span>
                                            <label className='label-input'>Konfirmasi Password</label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group className='mb-5'>
                                        <Button variant='danger' type='submit' className='w-100 mb-2'>Daftar</Button>
                                        <Link to='/register-company' className='btn btn-primary w-100 mb-2'>Buat akun Perusahaan</Link>
                                        <p className='text-dark'>Sudah punya akun ? <Link to='/login' className='text-danger text-decoration-none'>Login sekarang</Link></p>
                                    </Form.Group>
                                </Form>
                        </Col>
                    </Row>
                </Container>
            </Row>
    </Container>
  )
}

export default Register