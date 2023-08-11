import Image from 'next/image';
import React, {useEffect, useState, useRef} from 'react'
// import { SliderData } from './SliderData';
// import {FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, WhatsappShareButton, WhatsappIcon, LinkedinShareButton, LinkedinIcon } from 'next-share';
import Carousel from 'better-react-carousel';
import SocialMedia from './SocialMedia';
import {motion, useScroll} from 'framer-motion';
import SliderItem from './SliderItem';
import SliderData from './SliderData.json';

const Slider = () => {
  const [feeds, setFeeds ] = useState(SliderData.data);
  const [isLoading, setLoading] = useState(false);
  const [share, setShare] = useState(false);
  const [clickIndex, setClickIndex] = useState();
  const { scrollYProgress } = useScroll();
  const gallery = useRef();

  // useEffect(() => {
  //   setLoading(true);
  //   const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=${process.env.NEXT_PUBLIC_INSTAGRAM_KEY}`;
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setFeeds(data.data);
  //       setLoading(false);
  //     }) 
  // },[])
  // if (isLoading) return <p>Loading...</p>;

  const responsiveLayout = [
    { breakpoint: 9999, cols: 4, rows: 2, gap: 40, loop: true, autoplay: 10000 },
    { breakpoint: 1700, cols: 4, rows: 2, gap: 40, loop: true, autoplay: 10000 },
    { breakpoint: 1300, cols: 3, rows: 2, gap: 40, loop: true, autoplay: 10000 },
    { breakpoint: 1024, cols: 2, rows: 1, gap: 40, loop: true, autoplay: 10000 },
  ]
  return (
    <div ref={gallery} id='gallery' className='snap-mandatory max-w-screen-xl lg:max-w-screen-xl mx-auto pt-[90px] pb-[40] min-h-[calc(100vh)]'>
      {/*<svg height="100" width="400">
        <path d="M42.6275 12.1196L25.1485 2.23599C24.7917 2.03588 24.4002 1.93148 24 1.93148C23.5998 1.93148 23.2083 2.03588 22.8516 2.23599L5.37249 12.1196C4.64166 12.5372 4.18924 13.3116 4.18924 14.1555V33.8445C4.18924 34.6884 4.64166 35.4627 5.37249 35.8804L22.8516 45.764C23.5563 46.1642 24.4437 46.1642 25.1485 45.764L42.6275 35.8804C43.3584 35.4627 43.8108 34.6884 43.8108 33.8445V14.1555C43.8108 13.3116 43.3584 12.5372 42.6275 12.1196Z" fill="white"></path><path d="M24 48C23.2692 48 22.547 47.8173 21.8945 47.4519L4.41545 37.5595C3.08429 36.8026 2.24905 35.3757 2.24905 33.8445V14.1555C2.24905 12.6156 3.08429 11.1887 4.41545 10.4318L21.8945 0.548124C23.1909 -0.182708 24.8004 -0.182708 26.1055 0.548124L43.5846 10.4318C44.9244 11.1887 45.751 12.6156 45.751 14.1555V33.8445C45.751 35.3844 44.9157 36.8026 43.5846 37.5595L26.1055 47.4432C25.453 47.8173 24.7308 48 24 48ZM24 1.94018C23.5998 1.94018 23.2083 2.04459 22.8516 2.2447L5.37249 12.1196C4.64166 12.5372 4.18924 13.3116 4.18924 14.1555V33.8445C4.18924 34.6884 4.64166 35.4627 5.37249 35.8804L22.8516 45.764C23.5563 46.1642 24.4437 46.1642 25.1485 45.764L42.6275 35.8804C43.3584 35.4627 43.8108 34.6884 43.8108 33.8445V14.1555C43.8108 13.3116 43.3584 12.5372 42.6275 12.1196L25.1485 2.236C24.7917 2.03589 24.4002 1.94018 24 1.94018Z" fill="#4563ff"></path><path d="M23.0168 5.32464C23.6259 4.97662 24.3741 4.97662 24.9918 5.32464L39.9913 13.8075C40.6177 14.1642 41.0092 14.8255 41.0092 15.5476V32.4437C41.0092 33.1659 40.6177 33.8358 39.9913 34.1838L24.9918 42.6667C24.3828 43.0147 23.6346 43.0147 23.0168 42.6667L8.01738 34.1925C7.39095 33.8358 6.99944 33.1746 6.99944 32.4524V15.5563C6.99944 14.8342 7.39095 14.1642 8.01738 13.8162L23.0168 5.32464Z" fill="#4563ff"></path>
      </svg>*/}
      <h1 className='text-2xl font-bold text-black text-center p-4'>Gallery of Fish Creek</h1>
      <div className='pt-5 h-fill'>
        <Carousel gap={10} scrollSnap loop showDots responsiveLayout={responsiveLayout}>
        {feeds && feeds.map((feed, index) => {
          return (
            <Carousel.Item key={index}>
              <SliderItem feed={feed} index={index} gallery={gallery}/>
            </Carousel.Item>
          )
        })}
        </Carousel>
      </div>
      {/* </div> */}
    </div>
  )
}

export default Slider