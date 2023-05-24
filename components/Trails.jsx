import React from 'react';
import GoogleMap from './GoogleMap';

const Trails = ({trails, message}) => {
  return (
    <div id="trails" className1='h-screen mt-90 mb-12 bg-fixed bg-center bg-cover'>
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/80 -z-10'/>
      <div className='p-5 text-white mt-[90px]'>
        <p className='text-white text-2xl w-fit font-bold mx-auto pb-[30px]'>Trails in map</p>
        <GoogleMap/>
      </div>
    </div>
  )
}

export default Trails