import React, { useContext } from 'react';
import bannerImg from  '../assets/ngmwxpcl-slide.jpg'
import { AuthContext } from '../provider/AuthProvider';


const banner2Img = {
   backgroundImage: `url(${bannerImg})`,
   backgroundSize: 'cover',
   backgroundPosition: 'center',
   height: '50vh'
}


const Banner = () => {
    const {user} = useContext(AuthContext)
    return (
        <div style={banner2Img} >
            <div className='w-11/12 mx-auto' >

            <p className='text-7xl text-teal-800 font-bold'>{user && user.name} is name</p>
            </div>
        </div>
    );
};

export default Banner; 