import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Report from '../../assets/png/pandemic3.jpg'

function HeroSectionReport() {
  return (
    <section className='report-section container-fluid bg-soft-light py-5 px-3'>
            <Row className='d-flex justify-content-around f-wrap'>
                <Col xs='6'>
                    <h1 className='text-header-2'>Brief Explanation tentang Pelaporan Masalah</h1>
                </Col>
                <Col xs='5'>
                    <img className='img-fluid' src={Report} />
                </Col>
            </Row>
    </section>
  )
}

export default HeroSectionReport
