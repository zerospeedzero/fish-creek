import React from 'react';
import trailData from './TrailData.json';
import {motion, useScroll} from 'framer-motion';

const TrailInfo = () => {
  const trail = trailData.trails[0];
  const wildlifeImages = trailData.wildlifeImages;
  const flowerImages = trailData.flowerImages;

  return (
    <motion.div id="trails" className="max-w-screen-lg mx-auto pt-[90px] pb-[40] min-h-[calc(100vh)]"
      initial={{opacity:0.2}}
      whileInView={{opacity:1}}
      transition={{ ease: "easeOut", duration: 0.7 }}
    >
      <h1 className="text-2xl font-bold text-black text-center p-4">Trails information</h1>
      <div className="pt-5 flex justify-around flex-col md:flex-row">
        <motion.section className="text-black container mx-auto p-4"
          initial={{opacity:0}}
          whileInView={{opacity:1, }}
          transition={{duration:3}}
        >
          <h1 className="text-xl font-bold mb-4">{trail.name}</h1>
          <div className="bg-black/10 p-4">
            <div className="mb-4">
              <h2 className="text-lg font-bold">Trail Information</h2>
              <p className="p-4">Welcome to the Votier Flats Hiking Trail in Fish Creek Park, Calgary, Alberta! Start your journey through the city&apos;s largest urban park as you explore this picturesque trail. The Votier Flats Trail offers a captivating experience for outdoor enthusiasts of all ages and levels of experience.</p>
              <p className="p-4">Spanning 9 kilometers and an average of 2 hours and 16 minutes to complete, the Votier Flats trail offers the perfect destination to explore the city&apos;s nature and wildlife. This trail provides a tranquil escape from the busyness of Calgary’s city life, allowing you to immerse yourself in the natural beauty that surrounds us.</p>
              <p className="p-4">The Votier Flats Hiking Trail caters to a range of skill levels, making it a great place for frequent hikers as well as beginners looking to get outdoors. Some of the fauna you may encounter on this trail include (but are not limited to): Asters, Cow Parsnip, Bluebells etc. and you might even be able to get a look at some of the wildlife as well. Animals that have been encountered on this trail by fellow hikers include the wood frog, the yellow warbler, and even deer!</p>
              <p className="p-4">Whether you are seeking a peaceful solo hike or an outing with a few friends/ family, the Votier Flats trail is able to accommodate your needs. The trail is partially paved and well maintained, dog-friendly and is a great spot for bird-watching, hiking and biking! Grab your hiking boots and your camera and prepare to create lasting memories on the Votier Flats Hiking Trail!</p>
            </div>
            <div className="mb-4">
              <h2 className="text-lg font-bold">Wildlife</h2>
              <ul className="list-disc list-inside ml-4">
                {trail.wildlife.summer.map((animal, index) => (
                  <li key={index}>{animal}</li>
                ))}
              </ul>
            </div>
            <div className="mb-4">
              <h2 className="text-lg font-bold">Flowers found in Grasslands</h2>
              <ul className="list-disc list-inside ml-4">
                {trail.flowers.Grasslands.map((flower, index) => (
                  <li key={index}>{flower}</li>
                ))}
              </ul>
            </div>
            <div className="mb-4">
              <h2 className="text-lg font-bold">Flowers found in Parkland</h2>
              <ul className="list-disc list-inside ml-4">
                {trail.flowers.Parkland.map((flower, index) => (
                  <li key={index}>{flower}</li>
                ))}
              </ul>
            </div>
            <div className="mb-4">
              <h2 className="text-lg font-bold">Flowers found in Riverine</h2>
              <ul className="list-disc list-inside ml-4">
                {trail.flowers.Riverine.map((flower, index) => (
                  <li key={index}>{flower}</li>
                ))}
              </ul>
            </div>          
            <div className="mb-4">
              <h2 className="text-lg font-bold">Flowers found in White Spruce</h2>
              <ul className="list-disc list-inside ml-4">
                {trail.flowers.WhiteSpruce.map((flower, index) => (
                  <li key={index}>{flower}</li>
                ))}
              </ul>
            </div>          
          </div>
        </motion.section>
        <section className="text-black p-4 pl-1">
          <h1 className="text-xl font-bold mb-4">Flowers in Fishcreek</h1>
          {flowerImages.map((flower, index) => (
            <motion.figure key={index} className="mb-4 flex items-center bg-black/10"
              initial={{opacity:0, translateX: -100, translateY: index % 2 === 0 ? -100 : 100}}
              whileInView={{opacity:1, translateX:0, translateY: 0}}
              transition={{duration:0.5, delay: 0.3}}
            >
              <img src={flower.image} alt={flower.name} className="w-48 h-48 object-none aspect-square object-center mr-4" />
              <figcaption>{flower.description}</figcaption>
            </motion.figure>
          ))}
        </section>
      </div>
      <section className="text-black p-4">
        <h1 className="text-xl font-bold mt-8 mb-4">Potential Wildlife</h1>
        <div className="flex flex-row flex-wrap">
          {wildlifeImages.map((wildlife, index) => (
            <motion.figure key={index} className="mb-4 flex items-center bg-black/10 max-w-md mr-4"
              initial={{opacity:0, translateX: -100, translateY: index % 2 === 0 ? -100 : 100}}
              whileInView={{opacity:1, translateX:0, translateY: 0}}
              transition={{duration:0.5, delay: 0.3 - index * 0.05}}
            >
              <img src={wildlife.image} alt={wildlife.name} className="w-48 h-48 mr-4 aspect-square" />
              <figcaption>{wildlife.description}</figcaption>
            </motion.figure>
          ))}
        </div>
      </section>      
    </motion.div>
  );
};

export default TrailInfo;
