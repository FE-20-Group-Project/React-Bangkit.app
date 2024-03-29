import React, { useEffect, useState } from 'react'
import { Button, Form, Row } from 'react-bootstrap'
import { useParams, NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { editProfile, getSession } from '../../redux/action/userSession';
import { BASE_URL } from '../../env/env';
import { getCookie } from '../../cookie/cookie';
import axios from 'axios'
import Navigation from '../../components/navigation/Navigation';
import Footer from '../../components/footer/Footer';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

function EditProfile() {
    const { editOption } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate(); 
    const {session} = useSelector( state => state.userSession );
    const [ editImage, setEditImage ] = useState('');
    const [ editEmail, setEditEmail ] = useState('');
    const [ editName, setEditName ] = useState('');
    const [ editOldPassword, setEditOldPassword ] = useState('');
    const [ editNewPassword, setEditNewPassword ] = useState('');
    const [ editConfirmNewPassword, setEditConfirmNewPassword ] = useState('');

    useEffect( () => {
        setEditName(session.name);
        setEditEmail(session.email);
    }, [] )

    const editNavStyle = {
        color: '#1D3557',
        backgroundColor: '#f4f7f9',
        borderLeft: '3px solid #1D3557'
    }
   
    const handleEditUploadImage = () => {
        document.getElementById('edit-upload-image').click();
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let role = '';
        if(session.type === 'user') {
            role = 'user'
        }else if(session.type === 'instansi') {
            role = 'instansi'
        }
        const form = new FormData();
        const token = getCookie('token');
        if(editImage) {
            form.append("file", editImage);
        }
        
        form.append("name", editName);
        form.append("email", editEmail);
        axios({
            url:`${BASE_URL}/api/${role}/edit/${session._id}`,
            method: "PUT",
            headers: {
                authorization: `Bearer ${token}`
            },
            data: form
        }).then( data => {
            if(data.data){
                dispatch(getSession(token));
                MySwal.fire({
                    icon: 'success',
                    title: 'Data Berhasil Diupdate!',
                  })
                  navigate('/user/profile');
            }
        } ).catch( error => {
            MySwal.fire({
              icon: 'warning',
              title: error.response.data.message,
          })
          } )
    }

    const handleForgetPassword = (e) => {
        e.preventDefault();
        const token = getCookie('token');
        const formPassword = new FormData();
        formPassword.append("oldPassword", editOldPassword);
        formPassword.append("newPassword", editNewPassword);
        formPassword.append("confirmPassword", editConfirmNewPassword);
        axios({
            url: `${BASE_URL}/api/user/edit/${session._id}`,
            method: "PUT",
            headers: {
                authorization: `Bearer ${token}`
            },
            data: formPassword
        }).then( data => {
            if(data){
                dispatch(getSession(token));
                MySwal.fire({
                    icon: 'success',
                    title: 'Data Berhasil Diupdate!',
                  })
            }
        } ).catch( error => {
            MySwal.fire({
              icon: 'warning',
              title: error.response.data.message,
          })
          } )     
    }

    const previewFile = () => {
        const preview = document.getElementById('preview-img');
        const file = document.getElementById('edit-upload-image').files[0];
        const reader = new FileReader();
        setEditImage(file);
        console.log(file)
        reader.onloadend = () => {
            preview.src = reader.result;
        }
        if (file) {
            reader.readAsDataURL(file);
        }else {
            preview.src = `https://api-bangkit.up.railway.app/${session.image}`
        }
    }

  return (
    <>
        <Navigation/>
        <section className='py-5 container-fluid bg-danger'>
            <Row className='d-flex justify-content-center'>
                <aside className='card col-10 col-md-3 mb-3 me-md-3 mb-md-0 py-3 px-0'>
                    <NavLink to='/user/edit/editProfile' style={({isActive}) => isActive ? editNavStyle : undefined} className='p-3 text-dark'>Edit Profile</NavLink>
                    <NavLink to='/user/edit/lupaPassword' style={({isActive}) => isActive ? editNavStyle : undefined} className='p-3 text-dark'>Lupa Password</NavLink>
                </aside>
                { editOption==='editProfile' ? (
                <aside className='card col-10 col-md-8 p-3'>
                        <h5 className='fw-semibold'>Edit Profile</h5>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className='mb-3'>
                                <p className='fw-light'>Foto Profil <span className='text-danger'>*</span></p>
                                <Row className='d-flex justify-content-start'>
                                    <img id='preview-img' style={{ width: '100px', height: '80px' }} src={`https://api-bangkit.up.railway.app/${session.image}`} className='rounded-circle' />
                                    <Button onClick={ () => handleEditUploadImage() } variant='primary' style={{ width: '150px', height: '30px' }} className='btn-sm'>Unggah Foto</Button>
                                    <Form.Control id='edit-upload-image' onChange={ () => previewFile() } className='d-none' type='file' />
                                </Row>
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <p className='fw-light'>Nama Lengkap <span className='text-danger'>*</span></p>
                                <Form.Control type='text' defaultValue={ editName || '' } onChange={ (e) => setEditName(e.target.value) } />
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <p className='fw-light'>Alamat Email <span className='text-danger'>*</span></p>
                                <Form.Control type='email' defaultValue={ editEmail || '' } onChange={ (e) => setEditEmail(e.target.value) } />
                            </Form.Group>
                            <Form.Group className='text-end'>
                                <Button variant='danger' type='submit'>Simpan</Button>
                            </Form.Group>
                        </Form>
                </aside>
                ): (
                <aside className='card col-10 col-md-8 p-3'>
                        <h5 className='fw-semibold'>Ubah Kata Sandi</h5>
                        <Form onSubmit={handleForgetPassword}>
                            <Form.Group className='mb-3'>
                                <p className='fw-light'>Password Lama <span className='text-danger'>*</span></p>
                                <Form.Control type='password'  defaultValue='' onChange={ (e) => setEditOldPassword(e.target.value) } />
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <p className='fw-light'>Password Baru <span className='text-danger'>*</span></p>
                                <Form.Control type='password' defaultValue='' onChange={ (e) => setEditNewPassword(e.target.value) } />
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <p className='fw-light'>Konfirmasi Password Baru <span className='text-danger'>*</span></p>
                                <Form.Control type='password'  defaultValue='' onChange={ (e) => setEditConfirmNewPassword(e.target.value) } />
                            </Form.Group>
                            <Form.Group className='text-end'>
                                <Button variant='danger' type='submit'>Simpan</Button>
                            </Form.Group>
                        </Form>
                </aside>
                ) }
            </Row>
        </section>
        <Footer/>
    </>
  )
}

export default EditProfile;
