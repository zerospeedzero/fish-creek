import Image from 'next/image';
import React, {useEffect, useState, useRef} from 'react'
import SocialMedia from './SocialMedia';
import {motion, useScroll, useMotionValueEvent} from 'framer-motion';

const SliderItem = ({feed, index}) => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [rotate, setRotate] = useState(0);  
  const [scale, setScale] = useState(1);  
  const [share, setShare] = useState(false);
  const [clickIndex, setClickIndex] = useState();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // console.log("Page scroll: ", latest)
    if (index == 0) {
      setX((300 * latest) - 300 );
    } else if (index % 2 == 1){
      setY(200 - (200 * latest));
    } else {
      setScale(latest);
    }
    // console.log(x);

  })
  // <motion.div ref={ref} initial={{x:-100, scale:0.8}} whileInView={{x:0, scale: 1}} viewport={{margin: '0px'}} transition={{ ease: "easeOut", duration: 2 }}>
    // <motion.div ref={ref} initial={{x:-100, scale:0.8}} animate={{x:0, scale:1}} transition={{duration:0.8, delay:0.5, ease:[0, 0.71, 0.2, 1.01]}}>
  return (
    <motion.div ref={ref} animate={{x, y, rotate, scale: scale}} transition={{ ease: "easeOut", duration: 0.7 }}>
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
    </motion.div>
  )
}

export default SliderItem