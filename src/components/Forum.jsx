import React from 'react'
import { Card, Col, Row, Form, Button, Container } from 'react-bootstrap'
import { FaFilter } from 'react-icons/fa'
import forum from '../assets/png/forum.jpg'
import { FaInfoCircle, FaPhoneSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom'
const Forum = () => {
  return (
    <div>
       <header className='container p-3 mt-5 mb-3'>
        <Row className='header-section d-flex justify-content-around f-wrap'>
        <Col xs='10' xl='7' className='mx-auto d-flex justify-content-center flex-column'>
        <h1 className='text-header mb-3 text-dark'>Mari Berdiskusi</h1>
        </Col>
        <Col xs='8' xl='5' className='mx-start'>
                <img src={forum} className='img-fluid' />
            </Col>
        </Row>
        </header>
        <section className='job-filter mt-5 p-3 bg-danger bg-overlay'>
            <Row className='d-flex justify-content-center p-3'>
                <Col xs='10' xl='4' className='p-3' >
                  <div className='container p-3 mt-5 mb-3'>
                  <h2 className='text-center text-white'>Ekonomi</h2>
                  <Card className='border-0 border-top border-5 border-third rounded m-3 p-3'>
                        <Row className='d-flex justify-content-around'>
                            <Col xs='10' sm='6' >
                                <Card.Title className='fw-semibold'>detail masalah</Card.Title>
                                <Card.Body></Card.Body>
                                <Card.Body></Card.Body>
                            </Col>
                        </Row>
                    </Card>
                    </div>
                    <div className='container p-3 mt-5 mb-3'>
                  <h2 className='text-center text-white'>Kesehatan</h2>
                  <Card className='border-0 border-top border-5 border-third rounded m-3 p-3'>
                        <Row className='d-flex justify-content-around'>
                            <Col xs='10' sm='6' >
                                <Card.Title className='fw-semibold'>detail maasalah</Card.Title>
                                <Card.Body></Card.Body>
                                <Card.Body></Card.Body>
                            </Col>
                        </Row>
                    </Card>
                    </div>
                    <div className='container p-3 mt-5 mb-3'>
                  <h2 className='text-center text-white'>Pendidikan</h2>
                  <Card className='border-0 border-top border-5 border-third rounded m-3 p-3'>
                        <Row className='d-flex justify-content-around'>
                            <Col xs='10' sm='6' >
                                <Card.Title className='fw-semibold'>detail masalah</Card.Title>
                                <Card.Body></Card.Body>
                                <Card.Body></Card.Body>
                            </Col>
                        </Row>
                    </Card>
                    </div>
                </Col>
            </Row>
      </section>
      <div className='container p-3 mt-5 mb-3'>
      <Form>
      <fieldset>
          <legend>Buat Diskusi Baru</legend>
      <Form.Group className="mb-1">
      <p>Judul</p>
      <input type="text"/>
      </Form.Group>
      <Form.Group className="mb-1">
      <p>Kategori</p>
      <input type="text"/>
      </Form.Group>
      <p>Apa yang Ingin Kamu Sampaikan?</p>
      <Form.Group className="mb-3">
      <textarea rows='10' cols='60' placeholder="Sampaikan Pesanmu" ></textarea>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      </fieldset>
    </Form>
    </div>
    </div>
  )
}

export default Forum