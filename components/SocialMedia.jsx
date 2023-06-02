import React from 'react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import {FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, WhatsappShareButton, WhatsappIcon, LinkedinShareButton, LinkedinIcon } from 'next-share';


const SocialMedia = () => {
  return (
    <div className='text-white cursor-pointer z-[2] flex justify-center'>
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
  )
}

export default SocialMedia