import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { API_KEY_INFORMATION } from '../../../env/env'
import Navigation from '../../../components/Navigation'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Loading from '../../../components/loader/Loading';
import SectionScholarship from '../../../components/SectionScholarship'
import Footer from '../../../components/Footer'
import axios from 'axios'
import ScholarshipList from '../../../components/ScholarshipList'

const MySwal = withReactContent(Swal)

function Scholarship() {
  const [ isLoading, setIsLoading ] = useState(true);
  const [ beasiswa, setBeasiswa ] = useState([]);
  const navigate = useNavigate();

  useEffect( () => {
  
          getAPiScholarship(`${API_KEY_INFORMATION}?type=Beasiswa`).then( data => {
                setBeasiswa(data);
                setIsLoading(false);
          } )
  
  }, [] );

  const getAPiScholarship = async (api) => {
      const response = await axios.get(api);
      const result = response.data;
      return result;
  }

  return (
    <>
        <Navigation/>
        { isLoading ? (
          <Loading/>
        ) : (
            <>
              <SectionScholarship scholarship={beasiswa} />
              <Footer/>
            </>
        ) }
    </>
  )
}

export default Scholarship
