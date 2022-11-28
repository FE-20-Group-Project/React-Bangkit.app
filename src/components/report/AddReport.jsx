import React from 'react'
import { Row, Card, Form, Button } from 'react-bootstrap'

function AddReport() {
  return (
    <section className='add-report container-fluid p-5 bg-soft-light'>
        <Row className='d-flex justify-content-between'>
            <aside className='col-8'>
                <h5>Buat Topik Baru</h5>
                <Card className='p-4 shadow-lg'>
                    <Form>
                        <Form.Group className='mb-3'>
                            <Form.Control type='text' className='rounded-0' placeholder='Judul Topik' />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Control type='text' className='rounded-0' placeholder='Kategori'/>
                        </Form.Group>
                        <Form.Group className='mb-5'>
                            <Form.Control type='text' className='rounded-0' placeholder='sub-kategori'/>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Control
                                required
                                placeholder='Apa yang ingin kamu sampaikan?'
                                as="textarea"
                                style={{ height: '200px' }}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Check type='checkbox' label='Beritahu saya kalau ada yang balas ini via email'/>
                        </Form.Group>
                    </Form>
                        <Form.Group className='my-3 text-center'>
                            <Button variant='primary' className='rounded-pill w-50'>Submit</Button>
                        </Form.Group>
                </Card>
            </aside>
            <aside className='col-4'>
                    <Card className='bg-soft-light mx-auto py-5 px-3 mb-3'>
                        <Card.Title className='fw-bold text-dark'>Aturan Pelaporan</Card.Title>
                        <Card.Body className='fw-light text-dark'>Join today and start discussing what you like.</Card.Body>
                        <Button variant='light' className='w-50 mx-auto text-danger'>Daftar</Button>
                    </Card>
            </aside>
        </Row>
    </section>
  )
}

export default AddReport
