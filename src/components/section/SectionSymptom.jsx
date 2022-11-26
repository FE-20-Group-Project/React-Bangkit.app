import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Symptom from '../../assets/png/pandemic5.jpg'

function SectionSymptom() {
  return (
    <section className='container-fluid py-5 bg-soft-light'>
        <Row className='d-flex justify-content-around'>
            <Col xs='10' md='5' className='p-3'>
                <img src={Symptom} className='img-fluid w-100' />    
            </Col>
            <Col xs='10' md='5'  className='p-3'>
                <h3 className='fw-bold'>Gejala Umum Covid</h3>
                <p className='text-wrap'>Gejala umum berupa demam ≥38°C, batuk kering, dan sesak napas. Jika ada orang yang dalam 14 hari sebelum muncul gejala tersebut pernah melakukan perjalanan ke negara terjangkit, atau pernah merawat/kontak erat dengan penderita COVID-19, maka terhadap orang tersebut akan dilakukan pemeriksaan laboratorium lebih lanjut untuk memastikan diagnosisnya.</p>
                <p>Seseorang dapat terinfeksi dari penderita COVID-19. Penyakit ini dapat menyebar melalui tetesan kecil (droplet) dari hidung atau mulut pada saat batuk atau bersin. Droplet tersebut kemudian jatuh pada benda di sekitarnya.</p>
            </Col>
        </Row>
    </section>
  )
}

export default SectionSymptom
