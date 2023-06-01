import React from 'react';
import GoogleMap from './GoogleMap';
import {FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, WhatsappShareButton, WhatsappIcon, LinkedinShareButton, LinkedinIcon } from 'next-share';

const Trails = ({trails, message}) => {
  return (
    <div id="trails" className='h-screen mt-90 mb-12 bg-fixed bg-center bg-cover'> 
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 -z-[2]'/>
      <div className='bg-black/10 text-white mt-[90px]'>
        <p className='text-white text-2xl w-fit font-bold align-middle mx-auto pt-[15px] pb-[15px]'>Trails in map</p>
        <GoogleMap/>
      </div>
      <div className='w-[80%] mx-auto'>
        <h3>Trail 1 details</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, quod?</p>
        <p>Distinctio non obcaecati a quo esse? Dolorum iste eum enim!</p>
        <p>Quaerat, nisi et? Qui eius unde eaque dolor placeat possimus!</p>
        <p>Reiciendis quo totam, similique aliquid rerum laborum quisquam ut a!</p>
        <div className='flex justify-center'>
          <FacebookShareButton
            url={'https://fish-creek.azurewebsites.net'}
            quote={'next-share is a social share buttons for your next React apps.'}
            hashtag={'#nextshare'}
          >
            <FacebookIcon size={42} round className='m-2 opacity-70 hover:opacity-100'/>
          </FacebookShareButton>
          <TwitterShareButton
            url={'https://fish-creek.azurewebsites.net'}
            title={'next-share is a social share buttons for your next React apps.'}
          >
            <TwitterIcon size={42} round className='m-2 opacity-70 hover:opacity-100' />
          </TwitterShareButton>

          <WhatsappShareButton
            url={'https://fish-creek.azurewebsites.net'}
            title={'next-share is a social share buttons for your next React apps.'}
            separator=":: "
          >
            <WhatsappIcon size={42} round className='m-2 opacity-70 hover:opacity-100'/>
          </WhatsappShareButton>
          <LinkedinShareButton url={'https://fish-creek.azurewebsites.net'}>
            <LinkedinIcon size={42} round className='m-2 opacity-70 hover:opacity-100'/>
          </LinkedinShareButton>
        </div>
      </div>
    </div>
  )
}

export default Trails