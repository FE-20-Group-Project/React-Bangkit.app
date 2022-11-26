import React from 'react'

function BannerProfile({image}) {
  return (
    <section className='container-fluid mb-3' style={{ height:'120px' }}>
        <img src={image} className='img-fluid w-100 h-100' />
    </section>
  )
}

export default BannerProfile
