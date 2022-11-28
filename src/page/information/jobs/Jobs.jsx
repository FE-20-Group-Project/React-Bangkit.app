import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { getJobs } from '../../../redux/action/jobAction';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Loading from '../../../components/loader/Loading';
import SectionJob from '../../../components/jobSeeker/SectionJob';

const MySwal = withReactContent(Swal)

function Jobs() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { session } = useSelector( state => state.userSession );
  const { jobs, isLoading } = useSelector( state => state.jobsList );

  useEffect( () => {
      window.scrollTo(0, 0);
      dispatch(getJobs(isLogin.token));
  },[] )


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
