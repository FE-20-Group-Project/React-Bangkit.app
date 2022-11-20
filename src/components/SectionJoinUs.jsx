import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import Join from '../assets/png/join.jpg'

function SectionJoinUs() {
  return (
    <section className='container-fluid bg-light my-5 p-3'>
            <Row className='d-flex justify-content-around'>
                <Col xs='4'>
                    <img src={Join} className='img-fluid' />
                </Col>
                <Col xs='6' className='d-flex justify-content-center flex-column'>
                <Row>
                    <h1 className='text-header-2'>Ayo Bergabung bersama kami!</h1>
                    <h5 className='text-gray mb-4 text-break'>buat akun perusahaanmu dan berikan bantuan dari berbagai sektor</h5>
                    <button className="learn-more w-50 ms-3">
                            <span className="circle" aria-hidden="true">
                            <span className="icon arrow"></span>
                            </span>
                            <span className="ms-5 button-text">Gabung Sekarang</span>
                    </button>
                </Row>
                </Col>
            </Row>
    </section>
  )
}

export default SectionJoinUs
