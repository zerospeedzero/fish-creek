import React from 'react';
import GoogleMap from './GoogleMap';

const Trails = ({trails, message}) => {
  return (
    <div id="trails" className='h-screen mt-90 mb-12 bg-fixed bg-center bg-cover custom-image'> 
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 -z-[2]'/>
      <div className='bg-black/30 text-white mt-[90px]'>
        <p className='text-white text-2xl w-fit font-bold align-middle mx-auto pt-[15px] pb-[15px]'>Trails in map</p>
        <GoogleMap/>
      </div>
    </div>
  )
}

export default Trails