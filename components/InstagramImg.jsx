import Image from 'next/image';
import React from 'react';
import { FaInstagram } from 'react-icons/fa';

const InstagramImg = ({ socialImg, link }) => {
  return (
    <div className='relative'>
      <Image
        src={'/ig-img-' + socialImg + '.png'}
        alt='/'
        width={100}
        height={100}
        className='w-full h-full'
        layout='responsive'
      />
      {/* Overlay */}
      <a href={link} target='_blank'>
        <div className='flex justify-center w-full h-full items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/50 group'>
          <p className='text-gray-300 hidden group-hover:block'>
            <FaInstagram size={30} className='z-10' />
          </p>
        </div>
      </a>
    </div>
  );
};

export default InstagramImg;
