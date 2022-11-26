import React from 'react'
import { Button, Form, Row } from 'react-bootstrap'
import { useParams, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

function EditProfile() {
    const { editOption } = useParams();
    const {isLogin} = useSelector( state => state.userSession );
    const editNavStyle = {
        color: '#1D3557',
        backgroundColor: '#f4f7f9',
        borderLeft: '3px solid #1D3557'
    }
   
  return (
    <>
        <section className='my-5 container-fluid'>
            <Row className='d-flex justify-content-center'>
                <aside className='card col-3 me-3 py-3 px-0'>
                    <NavLink to='/user/edit/editProfile' style={({isActive}) => isActive ? editNavStyle : undefined} className='p-3 text-dark'>Edit Profile</NavLink>
                    <NavLink to='/user/edit/lupaPassword' style={({isActive}) => isActive ? editNavStyle : undefined} className='p-3 text-dark'>Lupa Password</NavLink>
                </aside>
                { editOption==='editProfile' ? (
                <aside className='card col-8 p-3'>
                        <h5 className='fw-semibold'>Edit Profile</h5>
                        <Form>
                            <Form.Group className='mb-3'>
                                <p className='fw-light'>Foto Profil <span className='text-danger'>*</span></p>
                                <Row className='d-flex justify-content-start'>
                                    <img style={{ width: '100px' }} src={`https://api-bangkit.up.railway.app/${isLogin.image}`} />
                                    <Button variant='primary' style={{ width: '150px', height: '30px' }} className='btn-sm'>Unggah Foto</Button>
                                </Row>
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <p className='fw-light'>Nama Lengkap <span className='text-danger'>*</span></p>
                                <Form.Control type='text' />
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <p className='fw-light'>Alamat Email <span className='text-danger'>*</span></p>
                                <Form.Control type='email' />
                            </Form.Group>
                            <Form.Group className='text-end'>
                                <Button variant='danger'>Simpan</Button>
                            </Form.Group>
                        </Form>
                </aside>
                ): (
                <aside className='card col-8 p-3'>
                        <h5 className='fw-semibold'>Ubah Kata Sandi</h5>
                        <Form>
                            <Form.Group className='mb-3'>
                                <p className='fw-light'>Password Lama <span className='text-danger'>*</span></p>
                                <Form.Control type='password' />
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <p className='fw-light'>Password Baru <span className='text-danger'>*</span></p>
                                <Form.Control type='password' />
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <p className='fw-light'>Konfirmasi Password Baru <span className='text-danger'>*</span></p>
                                <Form.Control type='password' />
                            </Form.Group>
                            <Form.Group className='text-end'>
                                <Button variant='danger'>Simpan</Button>
                            </Form.Group>
                        </Form>
                </aside>
                ) }
            </Row>
        </section>
    </>
  )
}

export default EditProfile;
