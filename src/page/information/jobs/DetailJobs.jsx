import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { API_KEY_JOBS} from '../../../env/env';
import SectionDetailJobs from '../../../components/jobSeeker/SectionDetailJobs';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Loading from '../../../components/loader/Loading';
import Navigation from '../../../components/navigation/Navigation';
import Footer from '../../../components/footer/Footer';
import { getCookie } from '../../../cookie/cookie';


const MySwal = withReactContent(Swal)

function DetailJobs() {
    const navigate= useNavigate();
    const {session} = useSelector( state => state.userSession );
    const [ isLoading, setIsLoading ] = useState(true);
    const [ detailJobs, setDetailJobs ] = useState([]);
    const [ jobs, setJobs ] = useState([]);
    const { id } = useParams();
    useEffect( () => {
        window.scrollTo(0, 0);
      
            getApiJobs(`${API_KEY_JOBS}/${id}`).then( data => {
                setDetailJobs(data);
                setIsLoading(false);
            } )
            getApiJobs( API_KEY_JOBS ).then( data => {
                setJobs(data);
            } )
      
    }, [isLoading] );

    const getApiJobs = async (api) => {
        const token = getCookie('token');
        const response = await axios.get(api, {
            'headers': { 'Authorization': `Bearer ${token}` }
        });
        const result = response.data.data;
        return result;
    }


  return (
    <>
        { isLoading ? (
            <Loading/>
        ) : (
            <>
            <Navigation/>
                <SectionDetailJobs jobs={jobs} detailJobs={detailJobs} setIsLoading={setIsLoading} />
            <Footer/>
            </>
        ) }
    </>
  )
}

export default DetailJobs
