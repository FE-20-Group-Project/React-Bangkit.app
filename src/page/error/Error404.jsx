import React from 'react'
import { Link } from 'react-router-dom'

function Error404() {
  return (
    <div>
      <div className='d-flex justify-content-center flex-column' style={{ height: '100vh' }}>
        <h1 className='text-header fw-bold text-center text-danger my-3'>404</h1>
        <h5 className='text-center my-3'>Halaman tidak ditemukan!</h5>
        <Link to='/' className='text-danger text-center text-decoration-underline my-3'>Kembali ke halaman beranda</Link>
    </div>
    </div>
  )
}

export default Error404
