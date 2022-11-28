import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Breadcrumb } from 'react-bootstrap'

function HeaderReport() {
  return (
        <header className='header-report bg-soft-light pt-5 px-5'>
            <h1>Judul Sub-Category</h1>
            <Row>
                <Breadcrumb>        
                        <Link to='/' className='text-danger breadcrumb-item'>Beranda</Link>
                        <Link to='/report' className='text-danger breadcrumb-item'>Pelaporan</Link>
                    <Breadcrumb.Item active>List Pelaporan Ekonomi</Breadcrumb.Item>
                </Breadcrumb>
            </Row>
        </header>
  )
}

export default HeaderReport
