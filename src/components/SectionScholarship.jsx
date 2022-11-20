import React from 'react'
import Beasiswa from '../assets/png/beasiswa3.png'
import { Card, Row, Col, Form, Button } from 'react-bootstrap'
import { FaFilter } from 'react-icons/fa'
import Scholarship from '../page/information/scholarship/Scholarship'
import ScholarshipList from './ScholarshipList'

function SectionScholarship({scholarship}) {
  return (
    <>

        <section className='container-fluid job-section bg-light p-3 mb-5'>
        <Row className='d-flex justify-content-around'>
            <Col xs='5' className='d-flex justify-content-center flex-column'>
              <Row>
                <h5 className='text-danger'>Visi Bangkit</h5>
                  <h1 className='text-header-2 text-primary'>Sejuta digital talent untuk Indonesia</h1>
                  <p>Menurut Badan Pusat Statistik (BPS) tingkat pengangguran terbuka (TPT) Agustus 2020 sebesar 7,07 persen, meningkat 1,84 persen poin dibandingkan dengan Agustus 2019. Terdapat 29,12 juta orang (14,28 persen) penduduk usia kerja yang terdampak</p>
              </Row>
            </Col>
            <Col xs='5'>
              <img src={Beasiswa} className='img-fluid w-100' />
            </Col>
        </Row>
      </section>
      <section className='scolarship-filter mt-5 p-3' style={{ backgroundColor: '#e7e7e7' }}>
            <Row className='d-flex justify-content-center p-3'>
                <Col xs='4' >
                    <Card className='p-3 mx-auto border-top border-5 border-danger rounded position-sticky top-10 mt-5'>
                        <Card.Title className='text-center text-danger fw-semibold my-3'>Filter</Card.Title>
                        <Form>
                            <Form.Group className='mb-3'>
                                <Form.Select>
                                    <option>Nama Perusahaan</option>
                                    { scholarship.map( (item, index) => (
                                        <option key={index}>{item.namaPerusahaan}</option>
                                    ) ) }
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Select>
                                    <option>Lokasi</option>
                                    { scholarship.map( (item, index) => (
                                        <option key={index}>{item.lokasi}</option>
                                    ) ) }
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className='w-50 mx-auto'>
                              <Button variant='danger' className='w-100 rounded-0'><FaFilter className='ms-2'/> Filter</Button>
                            </Form.Group>
                        </Form>
                    </Card>
                </Col>
                <Col xs='8'  style={{ height: '100vh', overflow:'scroll' }}>
                    <h3 className='text-center fw-semibold'>Beasiswa List</h3>
                    <ScholarshipList scholarship={scholarship}/>
                </Col>
            </Row>
      </section>
    </>
  )
}

export default SectionScholarship
