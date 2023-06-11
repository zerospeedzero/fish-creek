// import React from 'react';
import GoogleMap from './GoogleMap';
import {motion} from 'framer-motion';
import React, {useEffect, useState, useRef} from 'react'

const Map = () => {
  // const [x, setX] = useState(0);
  // const [y, setY] = useState(0);
  // const [rotate, setRotate] = useState(0);  
  // const [scale, setScale] = useState(0.2);
  // const [scaleX, setScaleX] = useState(0.2);
  // const [scaleY, setScaleY] = useState(0.2);
  // const [borderRadius, setBorderRadius] = useState('50%');
  // const ref = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: 'map',
  //   offset: ["start end", "center center"]
  //   offset: ["start end", "0.35 center"]
  // });
  // useMotionValueEvent(scrollYProgress, "change", (latest) => {
  //   console.log("Page scroll: ", latest)
    // if (index == 0) {
    //   setX((300 * latest) - 300 );
    // } else if (index % 2 == 1){
    //   setY(200 - (200 * latest));
    // } else {
    //   setScale(latest);
    // }

    // setScaleX((latest -0.9) * 10 < 0.2 ? 0.2 : (latest -0.9) * 10 );
    // setScaleY((latest -0.5) * 2 < 0.2 ? 0.2 : (latest -0.5) * 2 );
    // setBorderRadius((50 - (50 * latest)) + '%');
    // setBorderRadius((0.5));
    // setY(1000 * latest - 1000);
    // console.log(scale);

  // })

  return (
     <div id="map" className='mx-auto pt-[90px] pb-[40] min-h-[calc(100vh)]'>
      <div className="overflow-hidden"
        initial={{scaleX: 0.2, scaleY: 0.4, borderRadius: '50%'}}
        // animate={{x, y, rotate, scaleX: scaleX, scaleY: scaleY, borderRadius: borderRadius}} 
        whileInView={{scaleX: 1, scaleY: 1, borderRadius: '0%'}}
        transition={{ ease: "easeOut", duration: 1.5, delay: 1 }}
      >
        <p className='text-black text-2xl w-fit font-bold align-middle mx-auto pb-[15px]'>Votier Flats Trail Map</p>
        <GoogleMap/>
      </div>
    </div>
  )
}

export default Map