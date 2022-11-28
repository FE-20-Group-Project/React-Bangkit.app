import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getScholarship } from '../../../redux/action/scholarshipAction'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Loading from '../../../components/loader/Loading';
import SectionScholarship from '../../../components/scholarship/SectionScholarship'
import axios from 'axios'
import ScholarshipList from '../../../components/scholarship/ScholarshipList'
import Navigation from '../../../components/navigation/Navigation'
import Footer from '../../../components/footer/Footer'

const MySwal = withReactContent(Swal)

function Scholarship() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { scholarship, isLoading } = useSelector( state => state.scholarshipList );

  useEffect( () => {
      window.scrollTo(0, 0);
        dispatch(getScholarship());
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
              <SectionScholarship scholarship={scholarship} />
            </>
        ) }
      <Footer/>
    </>
  )
}

export default Scholarship
