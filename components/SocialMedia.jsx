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
        <img className='m-2 opacity-100 hover:animate-spin' width="37" src="./instagram-round-color-icon.svg"/>
      </a>
      <FacebookShareButton
        url={'https://fish-creek.azurewebsites.net'}
        quote={title}
        hashtag={'#cityhiker #fishcreek'}
      >
        <FacebookIcon size={37} round className='m-2 opacity-100 hover:animate-spin'/>
      </FacebookShareButton>
      <TwitterShareButton
        url={'https://fish-creek.azurewebsites.net'}
        title={title}
      >
        <TwitterIcon size={37} round className='m-2 opacity-100 hover:animate-spin' />
      </TwitterShareButton>

      <WhatsappShareButton
        url={'https://fish-creek.azurewebsites.net'}
        title={title}
        separator=":: "
      >
        <WhatsappIcon size={37} round className='m-2 opacity-100 hover:animate-spin'/>
      </WhatsappShareButton>
      <LinkedinShareButton url={'https://fish-creek.azurewebsites.net'}>
        <LinkedinIcon size={37} round className='m-2 opacity-100 hover:animate-spin'/>
      </LinkedinShareButton>
    </div>
  )
}

export default SocialMedia