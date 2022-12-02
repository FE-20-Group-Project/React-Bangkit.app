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
    document.getElementById('preview-img').src = '';
      const form = new FormData();
      form.append('id_laporan', id);
      if(image) {
        form.append('balasan', image);
      }
      form.append('content', content);
      axios({
        url: API_KEY_REPLY,
        method: "POST",
        headers: { authorization: `Bearer ${token}` },
        data: form
      }).then( data => {
        if(data.data) {
          setIsLoading(true);
          setImage('')
          setContent('')
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
            <Col xs='8' className='p-3'>
                <Form onSubmit={handleReply}>
                      <h5 className='fw-semibold'>Balasan</h5>
                    <Form.Group className='mb-2'>
                        <button onClick={ () => handleEditUploadImage() } class="icon-btn add-btn">
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
                      <Button variant='danger' type='submit' className='w-100 mt-3'>Balas</Button>
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
