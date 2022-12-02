import React from 'react'

function BannerProfile({image}) {
  return (
    <section className='container-fluid pb-3 px-0 bg-danger' style={{ height:'220px' }}>
        <img src={image} className='img-fluid w-100 h-100' />
    </section>
  )
}

export default BannerProfile
