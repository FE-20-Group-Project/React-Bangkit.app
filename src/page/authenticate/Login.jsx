import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Card, Col, Form, Button } from 'react-bootstrap'
import Logo from '../../assets/image/bangkit.png'

function Login() {

  return (

        <Container fluid className='mt-5' >
                <Row>
                    <Card className='col-9 mx-auto shadow-lg'>
                        <Row className='d-flex justify-content-between'>
                            <Col xs={6} className='p-0 bg-danger' >
                                <img className='img-fluid w-100' src='https://cdni.iconscout.com/illustration/premium/thumb/boy-writing-notes-while-learning-from-online-class-4762285-3963991.png' />
                            </Col>
                            <Col xs={5} className='p-3 mx-auto'>
                                <div className='text-center my-3'>
                                    <img src={Logo} width='150' />
                                    <h2 className='fw-semibold text-warning mt-2'>WELCOME!</h2>
                                </div>
                                <Form>
                                    <Form.Group className='mb-5'>
                                        <div className='group'>
                                            <input required type='email' className='input w-100' />
                                            <span className='highlight'></span>
                                            <span className='bar w-100'></span>
                                            <label className='label-input'>Email</label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group className='mb-4'>
                                        <div className='group'>
                                            <input required type='password' className='input w-100' />
                                            <span className='highlight'></span>
                                            <span className='bar w-100'></span>
                                            <label className='label-input'>Password</label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <Button variant='danger' className='w-100 mb-2'>Sign-in</Button>
                                        <p className='text-dark'>Belum punya akun ? <Link to='/register' className='text-danger text-decoration-none'>Daftar sekarang</Link></p>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                    </Card>
                </Row>
        </Container>
)
}

export default Login