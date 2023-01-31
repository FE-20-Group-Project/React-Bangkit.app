import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { BASE_URL } from '../../env/env'
import { getSession } from '../../redux/action/userSession'
import { Container, Row, Card, Col, Form, Button } from 'react-bootstrap'
import Logo from '../../assets/image/bangkit.png'
import LogoLogin from '../../assets/png/login.png'
import axios from 'axios'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Navigation from '../../components/navigation/Navigation'
import Footer from '../../components/footer/Footer'

const MySwal = withReactContent(Swal)

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [ loading, setLoading ] = useState(false);
    const [ email, setEmail ] = useState();
    const [ password, setPassword ] = useState();

    useEffect( () => {
        window.scrollTo(0, 0);
    },[] )

    const createSessionObj = async (email, password, form) => {
       try{
            setLoading(true);
            const response = await axios.post(`${BASE_URL}/api/auth/login`, {
                "email": email,
                "password": password
            })
            const data = response.data;
            if(data.data) {
                document.cookie = `token=${data.token}`;
                dispatch(getSession(data.token));
                if(data.data.type==='instansi') {
                            MySwal.fire({
                                icon: 'success',
                                title: 'Berhasil Login!',
                            })
                            navigate('/dashboard-company');
                        }else if(data.data.type==='admin') {
                            MySwal.fire({
                                icon: 'success',
                                title: 'Berhasil Login!',
                            })
                            navigate('/dashboard-admin')
                        }else {
                            MySwal.fire({
                                icon: 'success',
                                title: 'Berhasil Login!',
                            })
                            navigate('/')
                        }
                }else {
                    return response;
                }
       } catch(error ){
        MySwal.fire({
            icon: 'warning',
            title: error.response.data.message.msg || 'Akun tidak ditemukan, periksa kembali email dan passwordmu!',
        })
       } 
        
    }

    const handleLogin = (e) => {
        e.preventDefault();
        createSessionObj(email, password, e.target);
    }

  return (
    <>
        <Navigation/>
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
                                    <h1 className='fw-bolder text-dark mt-2'>SIGN-IN</h1>
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
                                        <Button variant='danger' type='submit' className='w-100 mb-2'>Log in</Button>
                                        {/* <Link to='/' className='btn btn-danger w-100 mb-2'>Sign-in</Link> */}
                                        <p className='text-dark'>Belum punya akun ? <Link to='/register' className='text-danger text-decoration-none'>Daftar sekarang</Link></p>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                    </Card>
                </Row>
        </Container>
        <Footer/>

    </>
)
}

export default Login