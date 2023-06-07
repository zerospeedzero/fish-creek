import React from 'react';
import Image from 'next/image';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { BsSearch } from 'react-icons/bs';
import Weather from '../components/Weather';
import Spinner from '../components/Spinner';

const Head = ({heading, message}) => {
  return (
    <div id="hero" className='flex items-center justify-center h-screen mb-12 xs:bg-scroll md:bg-fixed bg-center bg-cover custom-image'>
      {/* Overlay */}
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[2]'/>
      <Weather heading='Welcome to Fish Creek' message="Hiking in Calgary City"/>
    </div>
  )
}

export default Head