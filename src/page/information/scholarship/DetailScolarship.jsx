import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { API_KEY_INFORMATION } from '../../../env/env';
import SectionDetailJobs from '../../../components/jobSeeker/SectionDetailJobs';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import axios from 'axios';
import SectionDetailScholarship from '../../../components/scholarship/SectionDetailScholarship';
import Loading from '../../../components/loader/Loading';
import Navigation from '../../../components/navigation/Navigation';
import Footer from '../../../components/footer/Footer';

const MySwal = withReactContent(Swal)

function DetailScolarship() {

    const navigate= useNavigate();
    const {session} = useSelector( state => state.userSession );
    const [ isLoading, setIsLoading ] = useState(true);
    const [ detailBeasiswa, setDetailBeasiswa ] = useState([]);
    const [ beasiswa, setBeasiswa ] = useState([]);
    const { id } = useParams();
    useEffect( () => {
        window.scrollTo(0, 0);

            getAPiScholarship(`${API_KEY_INFORMATION}/${id}`).then( data => {
                setDetailBeasiswa(data);
            } )
            getAPiScholarship( `${API_KEY_INFORMATION}?type=Beasiswa` ).then( data => {
                setBeasiswa(data);
                setIsLoading(false);
            } )

        
    }, [])

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
                <SectionDetailScholarship beasiswa={beasiswa} detailBeasiswa={detailBeasiswa} />
            </>
        ) }
        <Footer/>
    </>
  )
}

export default DetailScolarship;
