import React from 'react';
import GoogleMap from './GoogleMap';
import SocialMedia from './SocialMedia';
const Trails = ({trails, message}) => {
  return (
     <div id='trails' className='mx-auto pt-[90px]'>
      {/*<div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 -z-[2]'/> */}
      <div>
        <p className='text-black text-2xl w-fit font-bold align-middle mx-auto pb-[15px]'>Trails in map</p>
        <GoogleMap/>
      </div>
      <div className='w-[80%] mx-auto'>
        <h3 className='text-black'>Trail 1 details</h3>
        <p className='text-black'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, quod?</p>
        <p className='text-black'>Distinctio non obcaecati a quo esse? Dolorum iste eum enim!</p>
        <p className='text-black'>Quaerat, nisi et? Qui eius unde eaque dolor placeat possimus!</p>
        <p className='text-black'>Reiciendis quo totam, similique aliquid rerum laborum quisquam ut a!</p>
      </div>
      <SocialMedia/>
    </div>
  )
}

export default Trails