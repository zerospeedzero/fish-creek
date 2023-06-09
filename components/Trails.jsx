import Image from 'next/image';
import React, {useEffect, useState} from 'react'
import SocialMedia from './SocialMedia';

const Trails = () => {
  const [feeds, setFeeds ] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [share, setShare] = useState(false);

  return (
    <div id='trails' className='mx-auto pt-[90px] pb-[40] min-h-[calc(100vh)]'>
      <h1 className='text-2xl font-bold text-black text-center p-4'>Trails information</h1>
      <div className='pt-5 flex justify-around flex-col md:flex-row'>
        <section className='text-black  container mx-auto p-6'>
          <h1 class="text-xl font-bold mb-4">Votier Flats Trail</h1>
          <div class="mb-4">
            <h2 class="text-lg font-bold">Trail Information</h2>
            <ul class="list-disc list-inside ml-4">
              <li>Moderately challenging</li>
              <li>Takes around 2 hr 16 min</li>
              <li>Good for bird watching, hiking, biking</li>
              <li>Dog friendly</li>
              <li>Partially paved</li>
            </ul>
          </div>
          <div class="mb-4">
            <h2 class="text-lg font-bold">Wildlife</h2>
            <ul class="list-disc list-inside ml-4">
              <li>Boreal chorus frog</li>
              <li>Wood frog</li>
              <li>Coyotes</li>
              <li>Muskrats</li>
              <li>Beavers</li>
              <li>Deer</li>
            </ul>
          </div>
          <div class="mb-4">
            <h2 class="text-lg font-bold">Birds that can be seen in the summer</h2>
            <ul class="list-disc list-inside ml-4">
              <li>Tennesse Warbler (rare)</li>
              <li>Yellow warbler (common)</li>
              <li>Common yellowthroat (uncommon)</li>
              <li>Western Meadowlark (rare)</li>
            </ul>
          </div>
          <div class="mb-4">
            <h2 class="text-lg font-bold">Birds that can be seen in the winter</h2>
            <ul class="list-disc list-inside ml-4">
              <li>Snow bunting (rare)</li>
              <li>Gray-crowned rosy finch (accidental)</li>
              <li>Pine grosbeak (rare)</li>
            </ul>
          </div>
          <div class="mb-4">
            <h2 class="text-lg font-bold">Flowers found in Fishcreek</h2>
            <ul class="list-disc list-inside ml-4">
              <li>Brown-eyed susan (Grasslands)</li>
              <li>Buffalo bean (Grasslands)</li>
              <li>Common yarrow (Grasslands)</li>
              <li>Prairie crocus (Grasslands)</li>
              <li>Asters (Parkland)</li>
              <li>Cow parsnip (Parkland)</li>
              <li>Twining honeysuckle (Parkland)</li>
              <li>Bluebells (Riverine)</li>
              <li>Bunchberry (White Spruce)</li>
              <li>Purple clematis (White Spruce)</li>
            </ul>
          </div>
        </section>
        <section class="text-black p-4">
          <h1 class="text-xl font-bold mb-4">Flowers in Fishcreek</h1>
          <figure class="mb-4 flex items-center">
            <img src="brown-eyed-susan.jpg" alt="Brown-Eyed Susan" class="w-48 h-48 mr-4"/>
            <figcaption>Brown-Eyed Susan (Found on dry, south-facing slopes and wide areas of the valley, primarily the east end of the park)</figcaption>
          </figure>
          <figure class="mb-4 flex items-center">
            <img src="buffalo-bean.jpg" alt="Buffalo Bean" class="w-48 h-48 mr-4"/>
            <figcaption>Buffalo Bean (Found on dry, south-facing slopes and wide areas of the valley, primarily the east end of the park)</figcaption>
          </figure>
          <figure class="mb-4 flex items-center">
            <img src="common-yarrow.jpg" alt="Common Yarrow" class="w-48 h-48 mr-4"/>
            <figcaption>Common Yarrow (Found on dry, south-facing slopes and wide areas of the valley, primarily the east end of the park)</figcaption>
          </figure>
          <figure class="mb-4 flex items-center">
            <img src="prairie-crocus.jpg" alt="Prairie Crocus" class="w-48 h-48 mr-4"/>
            <figcaption>Prairie Crocus (Found on dry, south-facing slopes and wide areas of the valley, primarily the east end of the park)</figcaption>
          </figure>
          <figure class="mb-4 flex items-center">
            <img src="asters.jpg" alt="Asters" class="w-48 h-48 mr-4"/>
            <figcaption>Asters (Found in areas moister than grasslands, often at the edge of floodplains and in ravines)</figcaption>
          </figure>
          <figure class="mb-4 flex items-center">
            <img src="cow-parsnip.jpg" alt="Cow Parsnip" class="w-48 h-48 mr-4"/>
            <figcaption>Cow Parsnip (Found in areas moister than grasslands, often at the edge of floodplains and in ravines)</figcaption>
          </figure>
          <figure class="mb-4 flex items-center">
            <img src="twining-honeysuckle.jpg" alt="Twining Honeysuckle" class="w-48 h-48 mr-4"/>
            <figcaption>Twining Honeysuckle (Found in areas moister than grasslands, often at the edge of floodplains and in ravines)</figcaption>
          </figure>
          <figure class="mb-4 flex items-center">
            <img src="bluebells.jpg" alt="Bluebells" class="w-48 h-48 mr-4"/>
            <figcaption>Bluebells (Found along the banks of Fish Creek and the Bow River)</figcaption>
          </figure>
          <figure class="mb-4 flex items-center">
            <img src="bunchberry.jpg" alt="Bunchberry" class="w-48 h-48 mr-4"/>
            <figcaption>Bunchberry (Found on north-facing slopes. Also found on the narrow valley bottom at the west end of the park, extending east from Shannon Terrace to parts of Votier's Flats)</figcaption>
          </figure>
          <figure class="mb-4 flex items-center">
            <img src="purple-clematis.jpg" alt="Purple Clematis" class="w-48 h-48 mr-4"/>
            <figcaption>Purple Clematis (Found on north-facing slopes. Also found on the narrow valley bottom at the west end of the park, extending east from Shannon Terrace to parts of Votier's Flats)</figcaption>
          </figure>
          <h1 class="text-2xl font-bold mt-8 mb-4">Potential Wildlife</h1>
          <figure class="mb-4 flex items-center">
            <img src="boreal-chorus-frog.jpg" alt="Boreal Chorus Frog" class="w-48 h-48 mr-4"/>
            <figcaption>Boreal Chorus Frog (most common in summer, August)</figcaption>
          </figure>
          <figure class="mb-4 flex items-center">
            <img src="wood-frog.jpg" alt="Wood Frog" class="w-48 h-48 mr-4"/>
            <figcaption>Wood Frog (most common in summer, August)</figcaption>
          </figure>
          <figure class="mb-4 flex items-center">
            <img src="coyote.jpg" alt="Coyote" class="w-48 h-48 mr-4"/>
            <figcaption>Coyote (more common in summer/fall)</figcaption>
          </figure>
          <figure class="mb-4 flex items-center">
            <img src="beaver.jpg" alt="Beaver" class="w-48 h-48 mr-4"/>
            <figcaption>Beaver</figcaption>
          </figure>
        </section>
      </div>
      {/* </div> */}
    </div>
  )
}

export default Trails