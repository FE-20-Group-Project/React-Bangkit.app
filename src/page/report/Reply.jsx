import axios from 'axios';
import React, { useState } from 'react'
import { API_KEY_REPLY } from '../../env/env';
import { Form, Row, Col, Button } from 'react-bootstrap'
import { getCookie } from '../../cookie/cookie'
import { FaImage, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Reply({id, session, MySwal}) {
  const navigate = useNavigate();
  const [ content, setContent ] = useState();
  const [ image, setImage ] = useState();
  
  const handleReply = (e) => {
    document.querySelector('.content-preview-img').classList.add('d-none');
    e.preventDefault();
    e.target.reset();

    if(!session) {
        MySwal.fire({
          icon: 'warning',
          title: 'Maaf, untuk dapat mengirim pesan anda harus login terlebih dahulu!',
      })
        navigate('/login');
    }else {
        const token = getCookie('token');
        const form = new FormData();
        form.append('id_laporan', id);
        if(image) {
          form.append('balasan', image);
          setImage('')
          document.getElementById('preview-img').src = '';
          }
          form.append('content', content);
          setContent('')
          axios({
            url: API_KEY_REPLY,
            method: "POST",
            headers: { authorization: `Bearer ${token}` },
            data: form
          }).then( data => {
            if(data.data) {
              setIsLoading(true);
            }
          } ).catch( error => {
            MySwal.fire({
              icon: 'warning',
              title: error.response.data.message,
          })
          } )
    }
  }

  const handleEditUploadImage = () => {
    document.getElementById('edit-upload-image').click();
  }

  const previewImage = () => {
    document.querySelector('.content-preview-img').classList.remove('d-none');
    const preview = document.getElementById('preview-img');
    const file = document.getElementById('edit-upload-image').files[0];
    const reader = new FileReader();
    setImage(file);
    reader.onloadend = () => {
        preview.src = reader.result;
    }
    if (file) {
        reader.readAsDataURL(file);
    }
  }

  const handleDeletePreview = () => {
      document.querySelector('.content-preview-img').classList.add('d-none');
      document.getElementById('preview-img').src = '';
      setImage();
  }

  return (
    <section className='section-reply container'>
      <Row>
            <Col xs='12' md='8' className='p-3'>
                <Form onSubmit={handleReply}>
                      <h6 className='fw-semibold'>Balasan</h6>
                    <Form.Group className='mb-2'>
                        <button type='button' onClick={ () => handleEditUploadImage() } className="icon-btn add-btn">
                            <div className="add-icon"></div>
                            <div className="btn-txt text-gray"> Add Photo </div>
                        </button>
                      <Form.Control type='file' id='edit-upload-image' accept='image/jpeg, image/png, image/jpg' onChange={ () => previewImage() } className='d-none' />
                    </Form.Group>
                      <Form.Group className='mb-3 position-relative content-preview-img d-none' style={{ width:'180px' }}>
                            <FaTimes onClick={ () => handleDeletePreview() } className='text-danger fs-4 fw-bold position-absolute top-0 end-0 bg-transparant-dark p-1' style={{ cursor:'pointer' }} />
                            <img src='' id='preview-img' alt='img-preview' className='img-fluid' />
                      </Form.Group>
                    <Form.Group>
                      <Form.Control
                      required
                      onChange={ (e) => setContent(e.target.value) }
                      placeholder='Tulis balasan...'
                      as="textarea"
                      style={{ height: '100px' }}/>
                    </Form.Group>
                    <Form.Group>
                      <button type='submit' className='contact rounded my-3' style={{ height: '35px' }}>
                        <div className="svg-wrapper-1">
                            <div className="svg-wrapper">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                            </svg>
                            </div>
                        </div>
                        <span className='btn-reply-text'>Send</span>
                    </button>
                    </Form.Group>
                </Form>
            </Col>
      </Row>
    </section>
  )
}

export default Reply
