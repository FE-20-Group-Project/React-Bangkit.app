import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Row, Button } from 'react-bootstrap'
import { FaEdit } from 'react-icons/fa'
import BannerProfile from '../banner/BannerProfile'

function UserProfile({profile}) {
  return (
    <>
        <BannerProfile image='https://thumbs.dreamstime.com/b/career-d-rendered-blue-tag-banner-isolated-white-background-career-tag-banner-112020813.jpg' />
        <section className='p-3 my-5'>
            <Row className='d-flex justify-content-center'>
                <aside className='card col-4 border text-center me-3 p-3 position-relative'>
                    <Link to='/user/edit/editProfile' className='btn bg-light text-dark border m-2 position-absolute top-0 end-0'><FaEdit className='fs-5 fw-light'/></Link>
                    <img src={`https://api-bangkit.up.railway.app/${profile.image}`} width='150px' className='rounded-cricle mx-auto mb-3' />
                    <Card.Body className='fw-bold'>
                        <Card.Title className='fs-5 fw-bold'>{profile.name}</Card.Title>
                        <Card.Text className='text-danger'>{profile.email}</Card.Text>
                    </Card.Body>
                </aside>
                <aside className='card col-7 border'>
                    
                </aside>
            </Row>
        </section>
    </>
  )
}

export default UserProfile
