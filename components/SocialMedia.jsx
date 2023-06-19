import React from 'react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import {FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, WhatsappShareButton, WhatsappIcon, LinkedinShareButton, LinkedinIcon } from 'next-share';
import * as gtag from "../lib/gtag";

const SocialMedia = ({message, url}) => {
  const title = (message == '') ? 'Get more information about Fish Creek from City Hiker offiical web site.' : message;
  const postUrl = (url == '') ? 'https://www.instagram.com' : url;
  return (
    <div className='text-white cursor-pointer z-[2] flex flex-col justify-center'>
      <FacebookShareButton
        url={'https://fish-creek.azurewebsites.net/#gallery'}
        quote={title}
        hashtag={'#cityhiker #fishcreek'}
        onClick={()=>{gtag.event('share', 'Social Media', 'Platform', 'Facebook')}}
      >
        <FacebookIcon size={40} round className='m-2 opacity-100 hover:scale-150'/>
      </FacebookShareButton>
      <TwitterShareButton
        url={'https://fish-creek.azurewebsites.net'}
        title={title}
      >
        <TwitterIcon size={40} round className='m-2 opacity-100 hover:scale-150' />
      </TwitterShareButton>

      <WhatsappShareButton
        url={'https://fish-creek.azurewebsites.net'}
        title={title}
        separator=":: "
      >
        <WhatsappIcon size={40} round className='m-2 opacity-100 hover:scale-150'/>
      </WhatsappShareButton>
      <LinkedinShareButton url={'https://fish-creek.azurewebsites.net'}>
        <LinkedinIcon size={40} round className='m-2 opacity-100 hover:scale-150'/>
      </LinkedinShareButton>
    </div>
  )
}

export default SocialMedia