import React from 'react'
import { FcBusiness,FcGraduationCap, FcPlus } from "react-icons/fc";
import { Row, Col } from 'react-bootstrap'

function BannerFeature() {
  return (
    <section className='container-fluid bg-danger banner-feature py-5 mb-3'>
            <Row className='d-flex text-light justify-content-around'>
                <Col xs='3' className='text-center'>
                    <FcBusiness className='feature-icon'/>
                    <h3>Lowongan Pekerjaan</h3>
                </Col>
                <Col xs='3' className='text-center'>
                    <FcGraduationCap className='feature-icon'/>
                    <h3>Beasiswa Gratis</h3>
                </Col>
                <Col xs='3' className='text-center'>
                    <FcPlus className='feature-icon'/>
                    <h3>Informasi Seputar Pandemi</h3>
                </Col>
            </Row>
    </section>
  )
}

export default BannerFeature
