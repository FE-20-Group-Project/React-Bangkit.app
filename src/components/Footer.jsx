import React from 'react'
import LogoBangkit from '../assets/image/bangkit.png'
import { Row, Col, ListGroup } from 'react-bootstrap'
import { FaCopyright, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'

function Footer() {
  return (
    <footer className='container-fluid text-light'>
        <Row className='bg-dark p-3 d-flex justify-content-between'>
            <Col xs='5' className='ms-3'>
                <img className='rounded my-3' src={LogoBangkit} width='100px' />
                <h6>
                Group 20 Front-End , Challange Partner : National University of Singapore, Skilvul Tech4Impact Cycle 3 MSIB Kampus Merdeka.
                </h6>
                <Row className='d-flex justify-content-start'>
                    <FaFacebook className='fs-3 m-3 col-1' />
                    <FaInstagram className='fs-3 m-3 col-1' />
                    <FaWhatsapp className='fs-3 m-3 col-1' />
                </Row>
            </Col>
            <Col xs='3'>
            <ul>
                <ListGroup.Item className='fw-semibold my-3'>Information</ListGroup.Item>
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            </ul>
            </Col>
        </Row>
        <Row className='p-3 bg-transparant-dark'>
                <p className='text-light text-center'><FaCopyright className='me-2'/> Copyright Group Front-End 20, Challenge Partner : National University of Singapore</p>
        </Row>
    </footer>
  )
}

export default Footer
