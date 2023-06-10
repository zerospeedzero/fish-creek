import Image from 'next/image';
import React, {useEffect, useState} from 'react'
// import { SliderData } from './SliderData';
import {FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, WhatsappShareButton, WhatsappIcon, LinkedinShareButton, LinkedinIcon } from 'next-share';
import Carousel from 'better-react-carousel';
import SocialMedia from './SocialMedia';

const Slider = () => {
  const [feeds, setFeeds ] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [share, setShare] = useState(false);
  const [clickIndex, setClickIndex] = useState();

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
    { breakpoint: 9999, cols: 4, rows: 1, gap: 40, loop: true, autoplay: 10000 },
    { breakpoint: 1700, cols: 3, rows: 1, gap: 40, loop: true, autoplay: 10000 },
    { breakpoint: 1100, cols: 3, rows: 2, gap: 40, loop: true, autoplay: 10000 },
    { breakpoint: 1024, cols: 2, rows: 1, gap: 40, loop: true, autoplay: 10000 },
  ]
  return (
    <div id='gallery' className='mx-auto pt-[90px] pb-[40] min-h-[calc(100vh)]'>
      <h1 className='text-2xl font-bold text-black text-center p-4'>Gallery of Fish Creek</h1>
      <div className='pt-5'>
        <Carousel gap={10} scrollSnap loop showDots responsiveLayout={responsiveLayout}>
        {feeds && feeds.map((feed, index) => {
          return (
            <Carousel.Item key={index}>
              <div className="flex">
                <img className="w-100%" 
                  src={(process.env.NODE_ENV == 'development') ? feed.media_url : feed.media_url} 
                  alt='dummy'
                  onClick={() => {console.log('image is clicked')}}
                />
                {share && clickIndex == index && 
                  <div className="-ml-16 pt-3" onClick={()=>setShare(false)}>
                    <SocialMedia message={feed.caption} url={feed.permalink}/>
                  </div>
                }
              </div>
              <div className="flex bg-black/70 -mb-1 text-center items-center text-white h-12 justify-between p-4">
                <p className='text-white'>{feed.caption == null ? "Awesome!!": feed.caption}</p>
                <img className="hover:bg-white/20" src="./share.svg" alt="share" onClick={()=>{setShare(!share); setClickIndex(index);}}/>
              </div>
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