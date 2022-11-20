import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { API_KEY_INFORMATION } from '../../../env/env';
import Navigation from '../../../components/Navigation';
import SectionDetailJobs from '../../../components/SectionDetailJobs';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import axios from 'axios';
import SectionDetailScholarship from '../../../components/SectionDetailScholarship';
import Loading from '../../../components/loader/Loading';
import Footer from '../../../components/Footer';

const MySwal = withReactContent(Swal)

function DetailScolarship() {

    const navigate= useNavigate();
    const {isLogin} = useSelector( state => state.userSession );
    const [ isLoading, setIsLoading ] = useState(true);
    const [ detailBeasiswa, setDetailBeasiswa ] = useState([]);
    const [ beasiswa, setBeasiswa ] = useState([]);
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
          
            getAPiScholarship(`${API_KEY_INFORMATION}/${id}`).then( data => {
                setDetailBeasiswa(data);
            } )
            getAPiScholarship( `${API_KEY_INFORMATION}?type=Beasiswa` ).then( data => {
                setBeasiswa(data);
                setIsLoading(false);
            } )

        }
    }, [])

    const getAPiScholarship = async (api) => {
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
                <SectionDetailScholarship beasiswa={beasiswa} detailBeasiswa={detailBeasiswa} />
            </>
        ) }
    </>
  )
}

export default DetailScolarship;
