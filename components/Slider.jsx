import Image from 'next/image';
import React, {useEffect, useState} from 'react'
import { SliderData } from './SliderData';
import {FaArrowCircleLeft , FaArrowCircleRight}  from 'react-icons/fa';
import {FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, WhatsappShareButton, WhatsappIcon, LinkedinShareButton, LinkedinIcon } from 'next-share';


const Slider = ({slides}) => {
  const [current, setCurrent ] =useState(0);
  const length = slides.length;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }
  const prevSlide = () => {
    setCurrent(current === 0 ? length -1  : current - 1)
  }
  if (!Array.isArray(slides) || slides.length <=0 ) {
    return null;
  }
  useEffect(() => {
    setTimeout(() => {nextSlide()}, 5000);
  });
  // setInterval(() => {nextSlide}, 1000);
  // useEffect(() => {
  //   setInterval(() => {nextSlide}, 1000);
  // }, [])
  return (
    <div id='gallery' className='max-w-[900px] mx-auto pt-[90px]'>
      <h1 className='text-2xl font-bold text-black text-center p-4'>Gallery of Fish Creek</h1>
        <div className='relative flex justify-center p-4'>
        {SliderData.map((slide, index) => {
          return  ( 
            <div key={index} className={index === current ? 'opacity-[1] ease-in duration-1000' : 'opacity-0'}>
              {/* <div className='relative flex justify-center p-4'> */}
                <FaArrowCircleLeft
                  onClick={prevSlide}
                  className='absolute top-[45%] left-[30px] text-white/70 cursor-pointer select-non z-[2]' 
                  size={50} 
                />
                {index === current && (
                  <div>
                    <Image 
                      src={(process.env.NODE_ENV == 'development') ? slide.image : `${process.env.imagePrefix}` + slide.image} 
                      alt='dummy' 
                      width='1440' 
                      height='600' 
                      objectFit='cover'
                    />
                    <figcaption>{slide.description}</figcaption>
                  </div>
                )}
                <FaArrowCircleRight 
                  onClick={nextSlide}
                  className='absolute top-[45%] right-[30px] text-white/70 cursor-pointer select-non z-[2]' 
                  size={50}
                />
                <div className='absolute bottom-[20%] left-[0] text-white/70 cursor-pointer select-non z-[2] w-[100%] flex justify-center'>
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
          );
        })}
      </div>
    </div>
  )
}

export default Slider