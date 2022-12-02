import React from 'react'
import { Carousel } from 'react-bootstrap'
import Forum from '../../assets/png/forum.png'
import Beasiswa from '../../assets/png/beasiswa.png'
import JobSeeker from '../../assets/png/jobseeker.png'

function CarouselBS() {
  return (
    <Carousel className='shadow-md'>
        <Carousel.Item>
        <img
            className="d-block w-100"
            src={Forum}
            alt="Second slide"
        />
        </Carousel.Item>
        <Carousel.Item>
        <img
            className="d-block w-100"
            src={JobSeeker}
            alt="First slide"
        />
        </Carousel.Item>
        <Carousel.Item>
        <img
            className="d-block w-100"
            src={Beasiswa}
            alt="Third slide"
        />
        </Carousel.Item>
    </Carousel>
  )
}

export default CarouselBS
