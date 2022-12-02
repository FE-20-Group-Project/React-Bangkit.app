import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { Row, Form, Col, Card } from 'react-bootstrap'
import { FaInfoCircle, FaPhoneSquare } from 'react-icons/fa';

function SectionDetailJobs({jobs, detailJobs}) {
    const {session} = useSelector( state => state.userSession );
  return (
    <section className='container my-5'>
        <Row className='flex-column-reverse flex-xl-row'>
            <Col xs='12' xl='5' className='card p-0 my-3' style={{ overflow: 'scroll', height: '100vh' }}>
                    <Card.Header className='bg-danger text-center text-light fw-semibold' >
                    Lowongan berdasarkan Profil Anda
                    </Card.Header>
            { jobs.map( item => (
                <Card key={item._id} className='border rounded-0 p-3'>
                            <Row className='d-flex justify-content-around'>
                                <Col xs='3' >
                                    <img className='img-fluid' src={`https://api-bangkit.up.railway.app/${item.image}`} />
                                </Col>
                                <Col xs='6' >
                                    <Card.Title className='fw-semibold'>{item.positionName}</Card.Title>
                                    <Card.Body>{item.workType}</Card.Body>
                                    <Card.Body>{item.location}</Card.Body>
                                </Col>
                                <Col xs='3' className='d-flex justify-content-center flex-column' >
                                    <Link to={'/jobs/' + item._id} className='btn btn-warning w-100 rounded-0 mb-3'><FaInfoCircle className='ms-2'/> Detail</Link>
                                    <a href={`mailto:${item.email}?subject=[BANGKIT] ${item.companyName}: ${item.positionName} Job Application&body=Dengan hormat,%0D%0A%0D%0APerkenalkan saya,%0D%0ANama : ${session.name} %0D%0AUmur  : %0D%0AJenis Kelamin : %0D%0APendidikan Terakhir  : %0D%0ANo. Telepon  : %0D%0A%0D%0ADengan surat lamaran ini saya mengajukan permohonan kerja di perusahaan yang Bapak/Ibu pimpin untuk menempati posisi sebagai posisi ${item.positionName}. [Masukkan kelebihan dan pengalaman Anda pada posisi yang dipilih].%0D%0A%0D%0ASebagai bahan pertimbangan saya telah melampirkan beberapa berkas penting sebagai berikut:%0D%0A1. Daftar Riwayat Hidup%0D%0A2. Scan Kartu Tanda Penduduk (KTP)%0D%0A3. Scan Ijazah Terakhir%0D%0A4. Scan Surat Keterangan Dokter%0D%0A5. Pas Photo format .jpeg (1 file)%0D%0A6. Sertifikat%0D%0A7. Surat Keterangan bukti bahwa anda sebelumnya pekerja yang terkena dampak PHK(Opsional)%0D%0A%0D%0ADemikian surat lamaran kerja yang saya buat, dengan lamaran ini kami berharap agar dapat diterima di perusahaan yang Bapak/Ibu pimpin. Terima kasih.%0D%0A%0D%0AHormat saya,%0D%0A[Masukkan Nama]`} className='btn btn-success text-light w-100 rounded-0 mb-3'><FaPhoneSquare className='ms-2'/> Contact</a>
                                </Col>
                            </Row>
                        </Card>
            ) ) }
            </Col>
            <Col xs='12' xl='7' className='card p-5'>
                <img width='200' src={`https://api-bangkit.up.railway.app/${detailJobs.image}`} />
                <h2 className='mb-3'>{detailJobs.positionName}</h2>
                <p className='mb-3'>{detailJobs.companyName}</p>
                <p className='mb-3'>{detailJobs.location}</p>
                <p className='mb-3'>{detailJobs.salary}</p>
                <p className='mb-3'>{detailJobs.workType}</p>
                <Form.Group>
                    <a href={`mailto:${detailJobs.email}?subject=[BANGKIT] ${detailJobs.companyName}: ${detailJobs.positionName} Job Application&body=Dengan hormat,%0D%0A%0D%0APerkenalkan saya,%0D%0ANama : ${session.name} %0D%0AUmur  : %0D%0AJenis Kelamin : %0D%0APendidikan Terakhir  : %0D%0ANo. Telepon  : %0D%0A%0D%0ADengan surat lamaran ini saya mengajukan permohonan kerja di perusahaan yang Bapak/Ibu pimpin untuk menempati posisi sebagai posisi ${detailJobs.positionName}. [Masukkan kelebihan dan pengalaman Anda pada posisi yang dipilih].%0D%0A%0D%0ASebagai bahan pertimbangan saya telah melampirkan beberapa berkas penting sebagai berikut:%0D%0A1. Daftar Riwayat Hidup%0D%0A2. Scan Kartu Tanda Penduduk (KTP)%0D%0A3. Scan Ijazah Terakhir%0D%0A4. Scan Surat Keterangan Dokter%0D%0A5. Pas Photo format .jpeg (1 file)%0D%0A6. Sertifikat%0D%0A7. Surat Keterangan bukti bahwa anda sebelumnya pekerja yang terkena dampak PHK(Opsional)%0D%0A%0D%0ADemikian surat lamaran kerja yang saya buat, dengan lamaran ini kami berharap agar dapat diterima di perusahaan yang Bapak/Ibu pimpin. Terima kasih.%0D%0A%0D%0AHormat saya,%0D%0A[Masukkan Nama]`} className='btn btn-warning me-3 rounded-pill'>Lamar</a>
                    <Link to='/jobs' className='btn btn-danger rounded-pill'>Kembali</Link>
                </Form.Group>
                <Row>
                    <p className='py-5'>{detailJobs.desc}</p>
                </Row>
            </Col>
        </Row>
    </section>
  )
}

export default SectionDetailJobs
