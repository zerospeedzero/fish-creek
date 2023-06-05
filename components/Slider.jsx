import Image from 'next/image';
import React, {useEffect, useState} from 'react'
import { SliderData } from './SliderData';
import {FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, WhatsappShareButton, WhatsappIcon, LinkedinShareButton, LinkedinIcon } from 'next-share';
import Carousel from 'better-react-carousel';
import SocialMedia from './SocialMedia';

const Slider = ({slides}) => {
  const [feeds, setFeeds ] = useState([]);
  useEffect(() => {
    const fetchFeeds = async () => {
      try {
        const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=${process.env.NEXT_PUBLIC_INSTAGRAM_KEY}`;
        const data = await fetch(url);
        const result = await data.json();
        setFeeds(result.data);
        console.log(result.data);
      } catch(error) {
        console.error('Error fetching Instagram feed image:', error);
      }
    }
    fetchFeeds();
  },[])
  const responsiveLayout = [
    { breakpoint: 9999, cols: 3, rows: 1, gap: 10, loop: true, autoplay: 10000 },
    { breakpoint: 1024, cols: 2, rows: 1, gap: 10, loop: true, autoplay: 10000 },
    // { breakpoint: 768,  cols: 1, rows: 1, gap: 10, loop: true, autoplay: 5000 }

  ]
  return (
    <div id='gallery' className='mx-auto pt-[90px]'>
      <h1 className='text-2xl font-bold text-black text-center p-4'>Gallery of Fish Creek</h1>
        <Carousel gap={10} scrollSnap loop showDots responsiveLayout={responsiveLayout}>
        {feeds.map((feed, index) => {
          return (
            <Carousel.Item key={index}>
              <h4 className='bg-black/70 -mb-1 text-center text-white'>{feed.caption == null ? "Awesome!!": feed.caption}</h4>
              <a href={feed.permalink} target="_blank">
                <img 
                  src={(process.env.NODE_ENV == 'development') ? feed.media_url : feed.image} 
                  alt='dummy'
                  width="100%"
                  onClick={(e) => {console.log('abc1')}}
                />
              </a>
              <div className="-mt-7">
                <SocialMedia/>
              </div>
            </Carousel.Item>
          )
        })}
        </Carousel>
      {/* </div> */}
    </div>
  )
}

export default Slider