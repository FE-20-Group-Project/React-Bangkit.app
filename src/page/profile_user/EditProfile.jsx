import React, { useEffect, useState } from 'react'
import { Button, Form, Row } from 'react-bootstrap'
import { useParams, NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { editProfile } from '../../redux/action/userSession';
import { getCookie } from '../../cookie/cookie';
import axios from 'axios'
import Navigation from '../../components/navigation/Navigation';
import Footer from '../../components/footer/Footer';

function EditProfile() {
    const { editOption } = useParams();
    const dispatch = useDispatch();
    const {session, token} = useSelector( state => state.userSession );

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
        const inputImage = document.getElementById('edit-upload-image');
        const form = new FormData();
        const token = getCookie('token');
        if( inputImage.files[0] ){
            setEditImage(inputImage.files[0]);
            form.append("file", editImage);
        }
        console.log("id :" + session._id, "token :" + token);
        form.append("name", editName);
        form.append("email", editEmail);
        axios({
            url:` https://api-bangkit.up.railway.app/api/user/edit/${session._id}`,
            method: "PUT",
            headers: {
                authorization: `Bearer ${token}`
            },
            data: form
        }).then( data => {
          console.log(data);
        } )
    }

    const handleForgetPassword = (e) => {
        e.preventDefault();

        const formPassword = new FormData();
        formPassword.append("oldPassword", editOldPassword);
        formPassword.append("newPassword", editNewPassword);
        formPassword.append("confirmPassword", editConfirmNewPassword);
       
        axios({
            url: `https://api-bangkit.up.railway.app/api/user/edit/${session._id}`,
            method: "PUT",
            headers: {
                authorization: `Bearer ${getCookie('token')}`
            },
            data: formPassword
        }).then( data => {
            console.log(data);
        } )
        

    }

    const previewFile = () => {
        const preview = document.getElementById('preview-img');
        const file = document.getElementById('edit-upload-image').files[0];
        const reader = new FileReader();
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
        <section className='my-5 container-fluid'>
            <Row className='d-flex justify-content-center'>
                <aside className='card col-3 me-3 py-3 px-0'>
                    <NavLink to='/user/edit/editProfile' style={({isActive}) => isActive ? editNavStyle : undefined} className='p-3 text-dark'>Edit Profile</NavLink>
                    <NavLink to='/user/edit/lupaPassword' style={({isActive}) => isActive ? editNavStyle : undefined} className='p-3 text-dark'>Lupa Password</NavLink>
                </aside>
                { editOption==='editProfile' ? (
                <aside className='card col-8 p-3'>
                        <h5 className='fw-semibold'>Edit Profile</h5>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className='mb-3'>
                                <p className='fw-light'>Foto Profil <span className='text-danger'>*</span></p>
                                <Row className='d-flex justify-content-start'>
                                    <img id='preview-img' style={{ width: '100px' }} src={`https://api-bangkit.up.railway.app/${session.image}`} />
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
                <aside className='card col-8 p-3'>
                        <h5 className='fw-semibold'>Ubah Kata Sandi</h5>
                        <Form onSubmit={handleForgetPassword}>
                            <Form.Group className='mb-3'>
                                <p className='fw-light'>Password Lama <span className='text-danger'>*</span></p>
                                <Form.Control type='password' onChange={ (e) => setEditOldPassword(e.target.value) } />
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <p className='fw-light'>Password Baru <span className='text-danger'>*</span></p>
                                <Form.Control type='password' onChange={ (e) => setEditNewPassword(e.target.value) } />
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <p className='fw-light'>Konfirmasi Password Baru <span className='text-danger'>*</span></p>
                                <Form.Control type='password' onChange={ (e) => setEditConfirmNewPassword(e.target.value) } />
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
