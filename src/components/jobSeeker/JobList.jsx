import React from 'react'
import { BASE_URL } from '../../env/env';
import { Row, Card, Col } from 'react-bootstrap'
import { FaInfoCircle, FaPhoneSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom'


function JobList({session, data}) {

  return (
    <>
        { data.map( item => {
                return (
                    <Card key={item._id} className='border-0 border-top border-5 border-third rounded m-3 p-3'>
                        <Row className='d-flex justify-content-around'>
                            <Col xs='3' className='p-3' >
                                <img className='img-fluid' src={`${BASE_URL}/${item.image}`} />
                            </Col>
                            <Col xs='10' sm='6' >
                                <Card.Title className='fw-semibold'>{item.positionName}</Card.Title>
                                <Card.Body>{item.workType}</Card.Body>
                                <Card.Body>{item.location}</Card.Body>
                            </Col>
                            <Col xs='10' sm='3'className='d-flex justify-content-center flex-column' >
                                <Link to={'/jobs/' + item._id} className='btn btn-warning w-100 rounded-0 mb-3'><FaInfoCircle className='ms-2'/> Detail</Link>
                                { session && (
                                <a href={`mailto:${item.email}?subject=[BANGKIT] ${item.companyName}: ${item.positionName} Job Application&body=Dengan hormat,%0D%0A%0D%0APerkenalkan saya,%0D%0ANama : ${session.name} %0D%0AUmur  : %0D%0AJenis Kelamin : %0D%0APendidikan Terakhir  : %0D%0ANo. Telepon  : %0D%0A%0D%0ADengan surat lamaran ini saya mengajukan permohonan kerja di perusahaan yang Bapak/Ibu pimpin untuk menempati posisi sebagai posisi ${item.positionName}. [Masukkan kelebihan dan pengalaman Anda pada posisi yang dipilih].%0D%0A%0D%0ASebagai bahan pertimbangan saya telah melampirkan beberapa berkas penting sebagai berikut:%0D%0A1. Daftar Riwayat Hidup%0D%0A2. Scan Kartu Tanda Penduduk (KTP)%0D%0A3. Scan Ijazah Terakhir%0D%0A4. Scan Surat Keterangan Dokter%0D%0A5. Pas Photo format .jpeg (1 file)%0D%0A6. Sertifikat%0D%0A7. Surat Keterangan bukti bahwa anda sebelumnya pekerja yang terkena dampak PHK(Opsional)%0D%0A%0D%0ADemikian surat lamaran kerja yang saya buat, dengan lamaran ini kami berharap agar dapat diterima di perusahaan yang Bapak/Ibu pimpin. Terima kasih.%0D%0A%0D%0AHormat saya,%0D%0A[Masukkan Nama]`} className='btn btn-success text-light w-100 rounded-0 mb-3'><FaPhoneSquare className='ms-2'/> Contact</a>
                                ) }
                            </Col>
                        </Row>
                    </Card>
                )
        } ) }
    </>
  )
}

export default JobList;
