import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Navigation from '../../../components/Navigation'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Loading from '../../../components/loader/Loading';
import SectionScholarship from '../../../components/SectionScholarship'
import Footer from '../../../components/Footer'

const MySwal = withReactContent(Swal)

function Scholarship() {
  const [ isLoading, setIsLoading ] = useState(true);
  const { isLogin } = useSelector( state => state.userSession );
  const navigate = useNavigate();

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
              <SectionScholarship/>
              <Footer/>
            </>
        ) }
    </>
  )
}

export default Scholarship
