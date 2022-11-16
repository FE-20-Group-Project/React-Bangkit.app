import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Register from '../../assets/png/regis3.jpg'
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap'
import { API_KEY_COMPANY } from '../../env/env'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import axios from 'axios'

const MySwal = withReactContent(Swal)

function RegisterCompany() {

    const [ company_email, setCompany_email ] = useState();
    const [ company_name, setCompany_name ] = useState();
    const [ company_password, setCompany_password ] = useState();
    const [ confirmPassword, setConfirmPassword ] = useState();

    const register = async (api, data, form) => {
        const res = await axios.get(api);
        const companies = res.data;
        const findEmail = companies.findIndex( index => index.company_email == data.company_email );

        if( findEmail !== -1 ) {
            form.reset();
            return MySwal.fire({
                icon: 'error',
                title: 'Gagal Registrasi',
                text: 'Maaf email perusahaan yang anda masukan sudah pernah terdaftar!',
              })
        }else {
            const response = await axios.post(api, data);
            console.log(response);
            return  MySwal.fire({
                icon: 'success',
                title: 'Registrasi Berhasil',
                text: 'Akunmu Perusahaan sudah berhasil didaftarkan, silahkan login terlebih dahulu!',
            })
        }
    }

    const createFormulir = (company_email, company_name, company_password) => {
        return {
            company_id : +new Date(),
            company_email,
            company_name,
            company_password
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if( company_password === confirmPassword ) {
            const formulir = createFormulir(company_email, company_name, company_password);
            register(API_KEY_COMPANY, formulir, e.target);
        }else {
            return MySwal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'password dan konfirmasi password harus sesuai!',
              })
        }
    }

  return (
    <Container fluid >
    <Row>
        <Container className='p-5'>
                <Row className='d-flex justify-content-between'>
                    <Col xs='6' className='d-flex justify-content-center py-3 flex-column'>
                        <aside className='ps-3 text-primary rounded'>
                            <img width='400' src={Register} />
                            <h3 className='fw-bold'>Ayo bergabung bersama kami dan kirimkan bantuan untuk mereka yang membutuhkan!</h3>
                        </aside>
                    </Col>
                    <Col xs='5' className='bg-light'>
                    <div className='text-center my-3'>
                                <h2 className='fw-semibold text-primary mt-2'>REGISTER COMPANY</h2>
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
  )
}

export default RegisterCompany