import React from 'react'
import { Row, Card, Button, Col } from 'react-bootstrap'
import { FaInfoCircle, FaPhoneSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom'


function JobList({isLogin, data}) {

  return (
    <>
        { data.map( item => {
            if(item.type === 'Job Seeker') {
                return (
                    <Card key={item.id} className='border-0 border-top border-5 border-third rounded m-3 p-3'>
                        <Row className='d-flex justify-content-around'>
                            <Col xs='3' className='p-3' >
                                <img className='img-fluid' src={item.logo} />
                            </Col>
                            <Col xs='10' sm='6' >
                                <Card.Title className='fw-semibold'>{item.nama}</Card.Title>
                                <Card.Body>{item.jenisPekerjaan}</Card.Body>
                                <Card.Body>{item.lokasi}</Card.Body>
                            </Col>
                            <Col xs='10' sm='3'className='d-flex justify-content-center flex-column' >
                                <Link to={'/jobs/' + item.id} className='btn btn-warning w-100 rounded-0 mb-3'><FaInfoCircle className='ms-2'/> Detail</Link>
                                { isLogin && (
                                <a href={`mailto:${item.kontak}?subject=[BANGKIT] ${item.namaPerusahaan}: ${item.nama} Job Application&body=Dengan hormat,%0D%0A%0D%0APerkenalkan saya,%0D%0ANama : ${isLogin.name} %0D%0AUmur  : %0D%0AJenis Kelamin : %0D%0APendidikan Terakhir  : %0D%0ANo. Telepon  : %0D%0A%0D%0ADengan surat lamaran ini saya mengajukan permohonan kerja di perusahaan yang Bapak/Ibu pimpin untuk menempati posisi sebagai posisi ${item.nama}. [Masukkan kelebihan dan pengalaman Anda pada posisi yang dipilih].%0D%0A%0D%0ASebagai bahan pertimbangan saya telah melampirkan beberapa berkas penting sebagai berikut:%0D%0A1. Daftar Riwayat Hidup%0D%0A2. Scan Kartu Tanda Penduduk (KTP)%0D%0A3. Scan Ijazah Terakhir%0D%0A4. Scan Surat Keterangan Dokter%0D%0A5. Pas Photo format .jpeg (1 file)%0D%0A6. Sertifikat%0D%0A7. Surat Keterangan bukti bahwa anda sebelumnya pekerja yang terkena dampak PHK(Opsional)%0D%0A%0D%0ADemikian surat lamaran kerja yang saya buat, dengan lamaran ini kami berharap agar dapat diterima di perusahaan yang Bapak/Ibu pimpin. Terima kasih.%0D%0A%0D%0AHormat saya,%0D%0A[Masukkan Nama]`} className='btn btn-success text-light w-100 rounded-0 mb-3'><FaPhoneSquare className='ms-2'/> Contact</a>
                                ) }
                            </Col>
                        </Row>
                    </Card>
                )
            }
        } ) }
    </>
  )
}

export default JobList;
