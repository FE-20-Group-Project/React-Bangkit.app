import axios from 'axios';
import React, { useState } from 'react'
import { API_KEY_REPLY } from '../../env/env';
import { Form, Row, Col, Button } from 'react-bootstrap'
import { getCookie } from '../../cookie/cookie'
import { FaImage } from 'react-icons/fa';

function Reply({id}) {
  const token = getCookie('token');
  const [ content, setContent ] = useState();
  const [ image, setImage ] = useState();

  const handleReply = (e) => {
    e.preventDefault();
    e.target.reset();
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
      } )
  }

  const handleEditUploadImage = () => {
    document.getElementById('edit-upload-image').click();
  }

  const previewImage = () => {
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

  console.log(image, content);

  return (
    <section className='section-reply container'>
      <Row>
            <Col xs='12' md='8' className='p-3'>
                <Form onSubmit={handleReply}>
                      <h6 className='fw-semibold'>Balasan</h6>
                    <Form.Group className='mb-2'>
                        <button type='button' onClick={ () => handleEditUploadImage() } class="icon-btn add-btn">
                            <div class="add-icon"></div>
                            <div class="btn-txt text-gray"> Add Photo </div>
                        </button>
                      <Form.Control type='file' id='edit-upload-image' onChange={ () => previewImage() } className='d-none' />
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
            <Col xs='3' className='p-3'>
              <img src='' id='preview-img' className='img-fluid' />
            </Col>
      </Row>
    </section>
  )
}

export default Reply
