// import React from 'react';
import GoogleMap from './GoogleMap';
import {motion, useScroll, useMotionValueEvent} from 'framer-motion';
import React, {useEffect, useState, useRef} from 'react'

const Map = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [rotate, setRotate] = useState(0);  
  const [scale, setScale] = useState(1);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: 'map',
    // offset: ["start end", "center center"]
    offset: ["start end", "0.3 center"]
  });
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Page scroll: ", latest)
    // if (index == 0) {
    //   setX((300 * latest) - 300 );
    // } else if (index % 2 == 1){
    //   setY(200 - (200 * latest));
    // } else {
    //   setScale(latest);
    // }
    setScale((latest -0.5) * 2 );
    // setY(1000 * latest - 1000);
    console.log(scale);

  })

  return (
     <div id="map" className='mx-auto pt-[90px] pb-[40] min-h-[calc(100vh)]' animate={{x, y, rotate, scale: scale}} transition={{ ease: "easeOut", duration: 0.7 }}>
      <motion.div id={ref} animate={{x, y, rotate, scale: scale}} transition={{ ease: "easeOut", duration: 0.7 }}>
        <p className='text-black text-2xl w-fit font-bold align-middle mx-auto pb-[15px]'>Votier Flats Trail Map</p>
        <GoogleMap/>
      </motion.div>
    </div>
  )
}

export default Map