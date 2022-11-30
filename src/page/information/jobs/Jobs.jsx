import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import Navigation from '../../../components/Navigation'
import { getJobs } from '../../../redux/action/jobAction';
import { API_KEY_JOBS } from '../../../env/env'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Loading from '../../../components/loader/Loading';
import SectionJob from '../../../components/SectionJob';
import Footer from '../../../components/Footer'
import axios from 'axios'

const MySwal = withReactContent(Swal)

function Jobs() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { jobs, isLoading } = useSelector( state => state.jobsList );

  useEffect( () => {
      window.scrollTo(0, 0);
      dispatch(getJobs(API_KEY_JOBS));
  },[] )

const getJobs = async (api) => {
    const response = await axios.get(api);
    const result = response.data;
    return result;
}

  return (
    <>
      { isLoading ? (
        <Loading/>
      ) : (
          <>
              <SectionJob jobs={jobs} />
          </>
      ) }
    </>
  )
}

export default Jobs
