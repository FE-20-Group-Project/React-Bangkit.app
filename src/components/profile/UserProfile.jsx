import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Row, Button } from 'react-bootstrap'
import { FaEdit } from 'react-icons/fa'
import BannerImage from '../../assets/png/jobseeker2.png'
import BannerProfile from '../banner/BannerProfile'

function UserProfile({profile}) {
  return (
    <>
        <BannerProfile image={BannerImage} />
        <section className='p-3 py-5 bg-danger'>
            <Row className='d-flex justify-content-center'>
                <aside className='card col-4 border bg-soft-light text-center me-3 pt-3 px-0 position-relative' style={{ marginTop: '-100px' }}>
                    <Link to='/user/edit/editProfile' className='btn bg-light text-dark border m-2 position-absolute top-0 end-0'><FaEdit className='fs-5 fw-light'/></Link>
                    <img src={`https://api-bangkit.up.railway.app/${profile.image}`} width='150px' className='rounded-cricle mx-auto mb-3' />
                    <Card.Footer className='fw-bold'>
                        <Card.Title className='fs-5 fw-bold'>{profile.name}</Card.Title>
                        <Card.Text className='text-danger'>{profile.email}</Card.Text>
                    </Card.Footer>
                </aside>
                <aside className='card col-7 bg-soft-light' style={{ marginTop: '-100px' }}>
                    
                </aside>
            </Row>
        </section>
    </>
  )
}

export default UserProfile
