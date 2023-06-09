import React from 'react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import {FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, WhatsappShareButton, WhatsappIcon, LinkedinShareButton, LinkedinIcon } from 'next-share';


const SocialMedia = ({message, url}) => {
  const title = (message == '') ? 'Get more information about Fish Creek from City Hiker offiical web site.' : message;
  const postUrl = (url == '') ? 'https://www.instagram.com' : url;
  return (
    <div className='text-white cursor-pointer z-[2] flex flex-col justify-center'>
      <a href={postUrl} target="_blank" aria-label="Instagram" className='bg-transparent border-none p-0' >
        <img className='m-2 opacity-60 hover:opacity-100' width="42" src="./instagram-round-color-icon.svg"/>
      </a>
      <FacebookShareButton
        url={'https://fish-creek.azurewebsites.net'}
        quote={title}
        hashtag={'#cityhiker #fishcreek'}
      >
        <FacebookIcon size={42} round className='m-2 opacity-70 hover:opacity-100'/>
      </FacebookShareButton>
      <TwitterShareButton
        url={'https://fish-creek.azurewebsites.net'}
        title={title}
      >
        <TwitterIcon size={42} round className='m-2 opacity-70 hover:opacity-100' />
      </TwitterShareButton>

      <WhatsappShareButton
        url={'https://fish-creek.azurewebsites.net'}
        title={title}
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