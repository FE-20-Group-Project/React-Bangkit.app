import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Report from '../../assets/png/Report.png'

function HeroSectionReport() {
  return (
    <section className='report-section container-fluid bg-soft-light p-5'>
            <Row className='d-flex justify-content-around f-wrap'>
                <Col xs='6'>
                    <h1 className='text-header-2'><span className='text-danger'>Forum </span>Pelaporan Masalah</h1>
                    <p>User dapat membuat, melihat, mengupdate, serta menghapus laporannya</p>
                    <ul>
                      <li> User dapat membuat maksimal 3 laporan live/aktif dengan kategori yang tersedia yakni pendidikan, ekonomi, dan kesehatan</li>
                      <li>Expired laporan adalah 7 hari</li>
                      <li>  User pelapor dan user lainnya (termasuk instansi) dapat berdiskusi layaknya sebuah forum, hingga menemukan seorang donatur dari user lain ataupun instansi</li>
                      <li> Jika donatur sukses mengirimkan bantuannya, maka donatur wajib mengupload bukti berupa file ke forum laporan terkait</li>
                      <li>   User yang sudah terbantu dapat menutup forum laporannya, dan laporan akan masuk ke arsip user pelapor
                    Jika user belum menemukan donatur dalam waktu 7 hari, maka status laporan menjadi expired</li>
                    </ul>
                </Col>
                <Col xs='5'>
                    <img className='img-fluid' src={Report} />
                </Col>
            </Row>
    </section>
  )
}

export default HeroSectionReport
