import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { API_KEY_SCHOLARSHIP } from '../../../env/env';
import SectionDetailJobs from '../../../components/jobSeeker/SectionDetailJobs';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import axios from 'axios';
import SectionDetailScholarship from '../../../components/scholarship/SectionDetailScholarship';
import Loading from '../../../components/loader/Loading';
import Navigation from '../../../components/navigation/Navigation';
import Footer from '../../../components/footer/Footer';
import { getCookie } from '../../../cookie/cookie';

const MySwal = withReactContent(Swal)

function DetailScolarship() {

    const navigate= useNavigate();
    const {session} = useSelector( state => state.userSession );
    const [ isLoading, setIsLoading ] = useState(true);
    const [ detailBeasiswa, setDetailBeasiswa ] = useState([]);
    const [ beasiswa, setBeasiswa ] = useState([]);
    const { id } = useParams();
    useEffect( () => {
        if(!session) {
            MySwal.fire({
                icon: 'warning',
                title: 'Maaf, untuk dapat lanjut anda harus login terlebih dahulu!',
            })
            navigate('/login');
        }else {
            window.scrollTo(0, 0);
            getAPi(`${API_KEY_SCHOLARSHIP}/${id}`).then( data => {
                setDetailBeasiswa(data);
                setIsLoading(false);
            } )
            getAPi(API_KEY_SCHOLARSHIP).then( data => {
                setBeasiswa(data);
            } )
        }

        
    }, [isLoading])

    const getAPi = async (api) => {
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
                <SectionDetailScholarship beasiswa={beasiswa} detailBeasiswa={detailBeasiswa} setIsLoading={setIsLoading} />
            <Footer/>
            </>
        ) }
    </>
  )
}

export default DetailScolarship;
