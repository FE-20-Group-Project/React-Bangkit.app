import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'
import Navigation from '../../../components/Navigation'
import { API_KEY_INFORMATION } from '../../../env/env';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Loading from '../../../components/loader/Loading';
import SectionJob from '../../../components/SectionJob';
import Footer from '../../../components/Footer'
import axios from 'axios'

const MySwal = withReactContent(Swal)

function Jobs() {
  const navigate = useNavigate();
  const [ jobs, setJobs ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);


  useEffect( () => {
        getApiJobs(API_KEY_INFORMATION).then( data => {
              setJobs(data);
              setIsLoading(false);
        } )
  },[] )

  const getApiJobs = async (api) => {
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
              <SectionJob jobs={jobs} />
              <Footer/>
          </>
      ) }
    </>
  )
}

export default Jobs
