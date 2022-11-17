import React from 'react'
import { Container, Row, Card, Col, Button } from 'react-bootstrap'
import Pandemic from '../assets/png/beasiswa4.png'

function Header() {
  return (
    <header className='container p-3 mt-5'>
        <Row className='d-flex justify-content-around'>
            <Col xs='5' className='mx-start'>
                <img src={Pandemic} className='img-fluid' />
            </Col>
            <Col xs='6' className='mx-auto'>
                <h1 className='text-header text-dark'>loremmmm</h1>
                <h5 className='text-danger my-3 text-break'>loremmmmmm</h5>
                <button className="learn-more w-50">
                  <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                  </span>
                  <span className="ms-5 button-text">Lihat Sekarang</span>
                </button>
            </Col>
        </Row>
    </header>
  )
}

export default Header
