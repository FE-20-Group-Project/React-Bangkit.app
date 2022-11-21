import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Col, Row } from 'react-bootstrap'
import Join from '../assets/png/join.png'

function SectionJoinUs() {
  return (
    <section className='container-fluid bg-light bg-world  py-5'>
            <Row className='d-flex justify-content-around'>
                <Col xs='8' md='4'>
                    <img src={Join} className='img-fluid' />
                </Col>
                <Col xs='10' md='6' className='d-flex justify-content-center flex-column'>
                <Row>
                    <h1 className='text-header-2'>Ayo Bergabung bersama kami!</h1>
                    <h5 className='text-gray mb-4 text-break'>buat akun perusahaanmu dan berikan bantuan dari berbagai sektor</h5>
                    <Link to='/register-company' className='col-10 col-sm-8 col-md-6' >
                      <button className="learn-more w-100 ms-3">
                              <span className="circle" aria-hidden="true">
                              <span className="icon arrow"></span>
                              </span>
                              <span className="ms-5 button-text">Gabung Sekarang</span>
                      </button>
                    </Link>
                </Row>
                </Col>
            </Row>
    </section>
  )
}

export default SectionJoinUs
