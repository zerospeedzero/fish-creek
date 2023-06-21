import { useState, useRef } from "react";
import { GoogleMap, GroundOverlayF, useLoadScript, useGoogleMap, StreetViewPanorama, InfoWindow, onLoad, MarkerF, InfoWindowF, Autocomplete, Polyline} from "@react-google-maps/api";
import {MarkerData} from './MarkerData.js';
// import {TrailData} from './TrailData.js';
import {Mapstyle} from './Mapstyle2.js';
import Image from 'next/image';
import {motion} from 'framer-motion';


const polyLineOptions = {
  strokeColor: '#FF0000',
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: '#FF0000',
  fillOpacity: 0.35,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  radius: 30000,
  zIndex: 1
};


// Marker styles
const faIcons = [
  { path: './marker1.svg',
    fillOpacity: 0.9,
    strokeWeight: 2,
    strokeColor: "#3FA9F5",
    fillColor: "#3FA9F5",
    scale: 2
  },
  { path: 'M8 12l-4.7023 2.4721.898-5.236L.3916 5.5279l5.2574-.764L8 0l2.3511 4.764 5.2574.7639-3.8043 3.7082.898 5.236z' ,
    fillOpacity: 0.9,
    strokeWeight: 2,
    strokeColor: "#0000ff",
    fillColor: "#0000ff",
    scale: 2
  },
  { path: 'M8 12l-4.7023 2.4721.898-5.236L.3916 5.5279l5.2574-.764L8 0l2.3511 4.764 5.2574.7639-3.8043 3.7082.898 5.236z' ,
    fillOpacity: 0.9,
    strokeWeight: 2,
    strokeColor: "#0000ff",
    fillColor: "#0000ff",
    scale: 2
  },

]

const divStyle = {
  background: `white`,
  border: `1px solid #ccc`,
  padding: 15,
}

const votierFalats = {
  latLngBounds: {
    north: 50.936212,
    south: 50.921691,
    west: -114.122789,
    east: -114.075641
  },
  strictBounds: false,
}

const bounds = {
  north: 40.773941,
  south: 40.712216,
  east: -74.12544,
  west: -74.22655
};

const onClick = () => {
  console.info('I have been clicked!')
};


const Map = () => {
  const mapid = useRef(null);
  const center = { lat:50.9289515, lng: -114.099215 };
  const position = {lat:50.9289515, lng: -114.099215};

  const [map, setMap] = useState(null);
  const [bounds, setBounds] = useState(null);
  const [restriction, setRestriction] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [searchLngLat, setSearchLngLat] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);
  const autocompleteRef = useRef(null);
  const [address, setAddress] = useState("");
  const [activeMarker, setActiveMarker] = useState(null);
  const [kmllayer, setKmllayer] = useState(null);
  const [locating, setLocating] = useState(null);
  const [streetCenter, setStreetCenter] = useState(center);
  const [streetVisable, setStreetVisable] = useState(false);
  const [mapType, setMapType] = useState('Outline');
  const [showMarker, setShowMarker] = useState(false);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading....</div>;
  
  const testing = (event) => {
    console.log(event)
  }

  const widthHeightRatio = () => {
    const mapId = document.getElementById('map');
    return mapId.offsetWidth / mapId.offsetHeight;
  }

  const onLoad = infoWindow => {
    // console.log('infoWindow: ', infoWindow)
  }
  const onMarkerLoad = marker => {

  }
  const onPolylineLoad = polyline => {
    console.log('polyline:' , polyline);
  }

  const markerAnimation = (index) => {
    // return index == activeMarker ? 1 : 3
    return 2;
  }

  // handle place change on search
  const handlePlaceChanged = () => {
    const place = autocompleteRef.current.getPlace();
    setSelectedPlace(place);
    setSearchLngLat({
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng(),
    });
    setCurrentLocation(null);
  };

  const showStreetPanorama = (event) => {
    setStreetCenter({lat: event.latLng.lat(), lng: event.latLng.lng()});
    let panorama = map.getStreetView(); 
    panorama.setPosition(streetCenter);
    panorama.setPov(
      /** @type {google.maps.StreetViewPov} */ {
        heading: 265,
        pitch: 0,
      }
    );
    panorama.setVisible(true);
  }
  // get current location
  const handleGetLocationClick = () => {
    setLocating('1');
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setSelectedPlace(null);
          setSearchLngLat(null);
          setCurrentLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }

    // setCurrentLocation({lat:50.93461180162025, lng:  -114.1028846591232});
    setLocating(null);
  };

  const displayInfo = (e) => {
    console.log(e);
  }

  const images = [
    {url: './restroom.png',scale: 1,origin: new google.maps.Point(0, 0),anchor: new google.maps.Point(0, 32)},
    {url: './me.png',scale: 1,origin: new google.maps.Point(0, 0),anchor: new google.maps.Point(0, 32)},
    {url: './bird.png',scale: 1,origin: new google.maps.Point(0, 0),anchor: new google.maps.Point(0, 32)},
    {url: './besttime.png',scale: 1,origin: new google.maps.Point(0, 0),anchor: new google.maps.Point(0, 32)},
    {url: './lookout.png',scale: 1,origin: new google.maps.Point(0, 0),anchor: new google.maps.Point(0, 32)},
    {url: './accessibility.png',scale: 1,origin: new google.maps.Point(0, 0),anchor: new google.maps.Point(0, 32)},
    {url: './weather.png',scale: 1,origin: new google.maps.Point(0, 0),anchor: new google.maps.Point(0, 32)},
    {url: './parking.png',scale: 1,origin: new google.maps.Point(0, 0),anchor: new google.maps.Point(0, 32)}
  ]


  const handleActiveMarker = (event, marker) => {
    if (marker == activeMarker) {
      return;
    }
  };

  const handleOnLoad = (map) => {
    const bounds = new google.maps.LatLngBounds();
    markers.forEach(({ position }) => bounds.extend(position));
    map.fitBounds(bounds);
  };


  // on map load
  const onMapLoad = (map) => {
    setMap(map);
    const controlDiv = document.createElement("div");
    const controlUI = document.createElement("button");
    controlUI.innerHTML = "<p>Me</p>";
    controlUI.style.backgroundColor = "white";
    controlUI.style.color = "black";
    controlUI.style.border = "2px solid #ccc";
    controlUI.style.borderRadius = "50%";
    controlUI.style.boxShadow = "0 2px 6px rgba(0,0,0,.3)";
    controlUI.style.cursor = "pointer";
    controlUI.style.marginTop = "20px";
    controlUI.style.textAlign = "center";
    controlUI.style.width = "100%";
    controlUI.style.padding = "10px 10px";
    controlUI.addEventListener("click", handleGetLocationClick);
    controlUI.style.marginBottom = "20px";
    controlDiv.appendChild(controlUI);

   // Create the radio buttons
    const options = ["All the information","Difficulty", "Road type", "None"];
    const container = document.createElement("div"); 
    container.style.padding ='20px';
    for (let i = 0; i < options.length; i++) {
      const label = document.createElement("label");
      label.style.fontSize = '1rem';
      label.style.color = 'black';
      const radio = document.createElement("input");
      radio.style.paddingBottom ='2rem';
      radio.style.paddingRight ='4rem';


      radio.addEventListener("change", function() {
        if (this.checked) {
          setMapType(this.value.replace(/\s/g,''));
        }
      });      
      radio.type = "radio";
      radio.name = "selection";
      radio.value = options[i];
      label.appendChild(radio);
      label.appendChild(document.createTextNode(options[i]));
      container.appendChild(label);
      container.appendChild(document.createElement("br"));
    }

    const titleDiv = document.createElement("div");
    const titleUI = document.createElement("img");
    titleDiv.style.paddingBottom ='20px';
    titleDiv.style.zIndex ='0';
    titleDiv.className = 'max-sm:hidden';
    titleDiv.appendChild(titleUI);
    
    // titleUI.setAttribute('src', 'http://dev.saitnewmedia.ca/~gcheng/fish_creek/title.svg');
    titleUI.setAttribute('src', '/title.svg');
    titleUI.setAttribute('alt', 'na');
    // titleUI.setAttribute('height', '10rem');
    titleUI.setAttribute('width', '300rem');

    map.controls[window.google.maps.ControlPosition.BOTTOM_LEFT].push(titleDiv);
    map.controls[window.google.maps.ControlPosition.TOP_CENTER].push(controlDiv);
    map.controls[window.google.maps.ControlPosition.TOP_LEFT].push(container);
  };
  const onUnmount = () => {
    setMap(null);
  };

  const currentLocationLoad = () => {
    const bounds = new google.maps.LatLngBounds();
    MarkerData.forEach(({ position }) => bounds.extend(position));
    bounds.extend(currentLocation);
    map.fitBounds(bounds);
  }

  const mapAnimationStart = () => {
    setShowMarker(false);
    map.setZoom(4);
    // setTimeout(()=>{map.setZoom(15)}, 5000);
    for (let i = 4; i < 16; i++) {
      setTimeout(()=>{
        if (i == 15) {
          map.setRestriction(votierFalats); 
          map.setZoom(4);
        } else {
          map.setZoom (i);
        }
      }, 1000 + i * 136)
    }
  }

  const mapAnimationComplete = () => {
    setShowMarker(true);
  }

  return (
    <motion.div id="mapContainer" className='w-full overflow-hidden flex flex-row'
        initial={{scaleX: 0.27, scaleY: widthHeightRatio() * 0.27 * 1.15 , borderRadius: '50%'}}
        whileInView={{scaleX: 1, scaleY: 1, borderRadius: '0%'}}
        transition={{ ease: "easeOut", duration: 1.5, delay: 1 }}
        onAnimationStart={mapAnimationStart}
        onAnimationComplete={mapAnimationComplete}
    >
      <GoogleMap
        id="mapid"
        options={{mapTypeControl: false, mapTypeId: 'terrain', styles: Mapstyle, restriction: null, keyboardShortcuts: false}}
        zoom={currentLocation || selectedPlace ? 18 : 4}
        center={currentLocation || searchLngLat || center}
        mapContainerClassName="map"
        mapContainerStyle={{ width: "100%", height: "calc(100vh - 150px)", margin: "auto" }}
        onLoad={onMapLoad}
        onUnmount={onUnmount}
        onClick={() => {setActiveMarker(null);map.setRestriction(votierFalats);}}
        onDblClick={(event) => {console.log('showStreet before called');showStreetPanorama(event);}}
      >
        {selectedPlace && <MarkerF position={searchLngLat} />}
        {currentLocation && <MarkerF position={currentLocation} onLoad={currentLocationLoad} animation={1}/>}
        {showMarker && MarkerData.map((marker, index) => (
          <MarkerF
            key={index}
            onLoad={onMarkerLoad}
            position={marker.position}
            icon={images[marker.iconid]}
            animation={markerAnimation(index)}
            onClick={() => {setActiveMarker(index);return; handleActiveMarker(event, index); test(this)}}
          >
            {index == activeMarker && 
              <InfoWindowF onCloseClick={()=>{ map.setRestriction(votierFalats);}}
                 position={marker.position}
              >
                <div className='max-w-md z-10'>
                  <h3 className='text-black text-lg'>{marker.name}</h3>
                  <figure>
                    <img width='100%' src={marker.picture} alt='testing'/>
                    <figcaption className="text-black text-md pt-4 pb-4">{marker.description}</figcaption>
                  </figure>
                </div>
              </InfoWindowF>
            }
          </MarkerF>
        ))
        }
        { mapType == 'Alltheinformation' && (<GroundOverlayF
          key={'url'}
          url={'https://fish-creek.azurewebsites.net/' + mapType + '.svg'}
          bounds={votierFalats.latLngBounds}
          onClick={console.log('all overlay is clicked')}
        />)
        }
        { mapType == 'Difficulty' && (<GroundOverlayF
          key={'url'}
          url={'https://fish-creek.azurewebsites.net/' + mapType + '.svg'}
          bounds={votierFalats.latLngBounds}
        />)
        }
        { mapType == 'Roadtype' && (<GroundOverlayF
          key={'url'}
          url={'https://fish-creek.azurewebsites.net/' + mapType + '.svg'}
          bounds={votierFalats.latLngBounds}
        />)
        }
        { mapType == 'None' && (<GroundOverlayF
          key={'url'}
          url={'https://fish-creek.azurewebsites.net/' + mapType + '.svg'}
          bounds={votierFalats.latLngBounds}
        />)
        }        
      </GoogleMap>
    </motion.div>
  );
};

export default Map;