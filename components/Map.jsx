// import React from 'react';
import GoogleMap from './GoogleMap';
import {motion} from 'framer-motion';
import React, {useEffect, useState, useRef} from 'react'

const Map = () => {
  return (
     <div id="map" className='mx-auto pt-[90px] pb-[40] min-h-[calc(100vh)]'>
      <div className="overflow-hidden">
        <p className='text-black text-2xl w-fit font-bold align-middle mx-auto pb-[15px]'>Votier Flats Trail Map</p>
        <GoogleMap/>
      </div>
    </div>
  )
}

export default Map