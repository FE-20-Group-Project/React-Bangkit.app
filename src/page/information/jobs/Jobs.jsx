import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'
import Navigation from '../../../components/Navigation'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Loading from '../../../components/loader/Loading';
import SectionJob from '../../../components/SectionJob';
import Footer from '../../../components/Footer'

const MySwal = withReactContent(Swal)

function Jobs() {
    const [ isLoading, setIsLoading ] = useState(true);
    const navigate = useNavigate();
    const { isLogin } = useSelector( state => state.userSession );

    useEffect( () => {
      if(!isLogin) {
          MySwal.fire({
            icon: 'error',
            title: 'Maaf...',
            text: 'Untuk masuk ke halaman ini anda harus login terlebih dahulu!',
        })
        navigate('/login');
      }else {
        setTimeout( () => {
            setIsLoading(false);
        }, 1500 )
      }
    }, [] )

  return (
    <>
      <Navigation/>
      { isLoading ? (
        <Loading/>
      ) : (
          <>
              <SectionJob/>
              <Footer/>
          </>
      ) }
    </>
  )
}

export default Jobs
