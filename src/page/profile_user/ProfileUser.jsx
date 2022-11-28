import React, { useState, useEffect } from 'react'
import Loading from '../../components/loader/Loading';
import { useSelector } from 'react-redux';
import UserProfile from '../../components/profile/UserProfile';
import Navigation from '../../components/navigation/Navigation';
import Footer from '../../components/footer/Footer';

function ProfileUser() {
    const {session} = useSelector( state => state.userSession );
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect( () => {
        setTimeout( () => {
                setIsLoading(false);
        }, 1500 )
    }, [] )

  return (
    <>
        <Navigation/>
        { isLoading ? (
            <Loading/>
        ) : (
            <>
                <UserProfile profile={session} />
            </>
        ) }
        <Footer/>
    </>
  )
}

export default ProfileUser
