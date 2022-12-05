import React from 'react'
import { Link } from 'react-router-dom'

function Error403() {
  return (
    <div className='d-flex justify-content-center flex-column' style={{ height: '100vh' }}>
        <h1 className='text-header fw-bold text-center text-danger my-3'>403</h1>
        <h5 className='text-center my-3'>You don't have access to visit this page!</h5>
        <Link to='/' className='text-danger text-center text-decoration-underline my-3'>Kembali ke halaman beranda</Link>
    </div>
  )
}

export default Error403
