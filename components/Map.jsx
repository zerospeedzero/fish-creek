import React from 'react';
import GoogleMap from './GoogleMap';
const Map = ({trails, message}) => {
  return (
     <div id='map' className='mx-auto pt-[90px]'>
      <div>
        <p className='text-black text-2xl w-fit font-bold align-middle mx-auto pb-[15px]'>Map</p>
        <GoogleMap/>
      </div>
    </div>
  )
}

export default Map