import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { API_KEY_INFORMATION } from '../../../env/env';
import Navigation from '../../../components/Navigation';
import SectionDetailJobs from '../../../components/SectionDetailJobs';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Loading from '../../../components/loader/Loading';
import Footer from '../../../components/Footer';

const MySwal = withReactContent(Swal)

function DetailJobs() {
    const navigate= useNavigate();
    const {isLogin} = useSelector( state => state.userSession );
    const [ isLoading, setIsLoading ] = useState(true);
    const [ detailJobs, setDetailJobs ] = useState([]);
    const [ jobs, setJobs ] = useState([]);
    const { id } = useParams();
    useEffect( () => {
        if(!isLogin) {
            MySwal.fire({
                icon: 'error',
                title: 'Maaf...',
                text: 'Untuk dapat melanjutkan proses anda harus login terlebih dahulu!',
            })
            navigate('/login');
          }else {
          
            getApiJobs(`${API_KEY_INFORMATION}/${id}`).then( data => {
                setDetailJobs(data);
            } )
            getApiJobs( API_KEY_INFORMATION ).then( data => {
                setJobs(data);
                setIsLoading(false);
            } )

        }
      
    }, [] );

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
                <SectionDetailJobs jobs={jobs} detailJobs={detailJobs} />
                <Footer/>
            </>
        ) }
      
    </>
  )
}

export default DetailJobs