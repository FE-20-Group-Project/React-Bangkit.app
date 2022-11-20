import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Protocol from '../assets/png/protocol.jpg'

function SectionCovidInfo() {
  return (
    <section className='container-fluid bg-danger banner-feature py-5 mb-3'>
        <h3 className='fw-bold text-center text-light'>INFORMASI PENYEBARAN COVID 19 DI INDONESIA</h3>
        <Row className='d-flex justify-content-center text-light my-5 fw-bold'>
            <Col xs='2' className='card-strange p-3 m-3 shadow-md bg-primary'>
                    <h5>#Positif</h5>
                    <h3>4,12 Juta</h3>
            </Col>
            <Col xs='2' className='card-strange p-3 m-3 shadow-md bg-third'>
                    <h5>#Meninggal</h5>
                    <h3>4,12 Juta</h3>
            </Col>
            <Col xs='2' className='card-strange p-3 m-3 shadow-md bg-warning'>
                    <h5>#Dirawat</h5>
                    <h3>4,12 Juta</h3>
            </Col>
            <Col xs='2' className='card-strange p-3 m-3 shadow-md bg-success'>
                    <h5>#Sembuh</h5>
                    <h3>4,12 Juta</h3>
            </Col>
        </Row>
        <Row className='container mx-auto d-flex justify-content-around'>
            <Col xs='6' className='d-flex justify-content-center flex-column'>
                <h1 className='text-header-2 text-light'>Ayo cegah terjadinya <span className='text-primary'>COVID-19</span> dengan menerapkan protocol berikut</h1>
            </Col>
            <Col xs='5'>
                <img className='img-fluid' src={Protocol} />
            </Col>
        </Row>
    </section>
  )
}

export default SectionCovidInfo
