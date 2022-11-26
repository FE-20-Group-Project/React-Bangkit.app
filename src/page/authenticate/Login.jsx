import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { KEY_SESSION, API_KEY_LOGIN  } from '../../env/env'
import { loginSession } from '../../redux/action/userSession'
import { Container, Row, Card, Col, Form, Button, Spinner } from 'react-bootstrap'
import Logo from '../../assets/image/bangkit.png'
import LogoLogin from '../../assets/png/login.png'
import axios from 'axios'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [ loading, setLoading ] = useState(false);
    const [ email, setEmail ] = useState();
    const [ password, setPassword ] = useState();

    const createSessionObj = async (email, password, form) => {
       try{
            setLoading(true);
            const response = await axios.post(API_KEY_LOGIN, {
                "email": email,
                "password": password
            })
            const session = createSession(response.data);
            console.log(response);
            dispatch(loginSession(session));
            setLoading(false);
            localStorage.setItem(KEY_SESSION, JSON.stringify(session));

            MySwal.fire({
                icon: 'success',
                title: 'Berhasil Login!',
              })
              navigate('/');
       } catch(error) {
            console.log(error.response.data.message);
       }
        
    }

    const createSession = (obj) => {
        return {
            token: obj.token,
            message: obj.message,
            id: obj.data._id,
            email: obj.data.email,
            name: obj.data.name,
            image: obj.data.image,
            password: obj.data.password
        }
    }

    const handleLogin = (e) => {
        e.preventDefault();
        createSessionObj(email, password, e.target);
    }

  return (
        <Container fluid className='authenticate py-5' >
                <Row>
                    <Card className='col-12 col-sm-10 mx-auto rounded shadow-lg' >
                        <Row className='d-flex justify-content-start'>
                            <Col xs={12} md={5}  className='d-flex bg-danger justify-content-center flex-column' >
                                <img className='img-fluid w-100' src={LogoLogin} />
                            </Col>
                            <Col xs={10} md={5} className='p-3 mx-auto'>
                                <div className='text-center my-3'>
                                    <img src={Logo} width='150' />
                                    <h1 className='fw-bolder text-dark mt-2'>SIGN-UP</h1>
                                </div>
                                <Form onSubmit={ handleLogin } >
                                    <Form.Group className='mb-5'>
                                        <div className='group'>
                                            <input required type='email' onChange={ (e) => setEmail(e.target.value) } className='input w-100' />
                                            <span className='highlight'></span>
                                            <span className='bar w-100'></span>
                                            <label className='label-input'>Email</label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group className='mb-4'>
                                        <div className='group'>
                                            <input required type='password' onChange={ (e) => setPassword(e.target.value) } className='input w-100' />
                                            <span className='highlight'></span>
                                            <span className='bar w-100'></span>
                                            <label className='label-input'>Password</label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group className='mb-5'>
                                        <Link>
                                        <p className='text-danger'>Lupa Password?</p>
                                        </Link>
                                        <Button variant='danger' type='submit' className='w-100 mb-2'>
                                        { loading? (
                                            <Spinner
                                                as="span"
                                                animation="border"
                                                size="sm"
                                                role="status"
                                                />
                                        ): (
                                            <>Log in</>
                                        ) }
                                        </Button>
                                        {/* <Link to='/' className='btn btn-danger w-100 mb-2'>Sign-in</Link> */}
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