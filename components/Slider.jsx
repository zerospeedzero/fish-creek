import Image from 'next/image';
import React, {useEffect, useState, useRef} from 'react'
// import { SliderData } from './SliderData';
// import {FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, WhatsappShareButton, WhatsappIcon, LinkedinShareButton, LinkedinIcon } from 'next-share';
import Carousel from 'better-react-carousel';
import SocialMedia from './SocialMedia';
import {motion, useScroll} from 'framer-motion';
import SliderItem from './SliderItem';

const Slider = () => {
  const [feeds, setFeeds ] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [share, setShare] = useState(false);
  const [clickIndex, setClickIndex] = useState();
  const { scrollYProgress } = useScroll();
  const gallery = useRef();

  useEffect(() => {
    setLoading(true);
    const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=${process.env.NEXT_PUBLIC_INSTAGRAM_KEY}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setFeeds(data.data);
        setLoading(false);
        console.log('use data' + feeds);
      }) 
  },[])
  if (isLoading) return <p>Loading...</p>;

  const responsiveLayout = [
    { breakpoint: 9999, cols: 4, rows: 2, gap: 40, loop: true, autoplay: 10000 },
    { breakpoint: 1700, cols: 4, rows: 2, gap: 40, loop: true, autoplay: 10000 },
    { breakpoint: 1300, cols: 3, rows: 2, gap: 40, loop: true, autoplay: 10000 },
    { breakpoint: 1024, cols: 2, rows: 1, gap: 40, loop: true, autoplay: 10000 },
  ]
  return (
    <div ref={gallery} id='gallery' className='max-w-screen-xl mx-auto pt-[90px] pb-[40] min-h-[calc(100vh)]' 
      initial={{y:-40}} 
      whileInView={{y:0}} viewport={{margin: '0px'}} transition={{ ease: "easeOut", duration: 2 }}
      >
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