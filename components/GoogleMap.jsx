import { useState, useRef } from "react";
import { GoogleMap, KmlLayer, useLoadScript, InfoWindow, onLoad, Marker, MarkerF, InfoWindowF, Autocomplete, Polyline} from "@react-google-maps/api";
import {MarkerData} from './MarkerData.js';
import {TrailData} from './TrailData.js';
import {faCamera, faBus, faRestroom} from "@fortawesome/free-solid-svg-icons";
import {Mapstyle} from './Mapstyle.js';
import Image from 'next/image';

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
  { path: faCamera.icon[4],
    fillOpacity: 0.5,
    strokeWeight: 0.5,
    strokeColor: "#0000ff",
    fillColor: "#0000ff",
    scale: 0.05
  },
  { path: faBus.icon[4],
    fillOpacity: 0.5,
    strokeWeight: 0.5,
    strokeColor: "#ff0000",
    fillColor: "#ff0000",
    scale: 0.05
  },
  { path: faRestroom.icon[4],
    fillOpacity: 0.5,
    strokeWeight: 0.5,
    strokeColor: "#64B00",
    fillColor: "#64B00",
    scale: 0.05
  },

]

const divStyle = {
  background: `white`,
  border: `1px solid #ccc`,
  padding: 15,
}

// const options = {
//   mapTypeControl: false,
//   mapTypeId: 'terrain',
//   styles: [{
//     featureType: "poi.business",
//     stylers: [{ visibility: "off" }],
//   },
//   {
//     featureType: "transit",
//     elementType: "labels.icon",
//     stylers: [{ visibility: "off" }],
//   },]
// }

const options = {
  mapTypeControl: false,
  mapTypeId: 'terrain',
  styles: Mapstyle
}

const test = (arg) => {
  console.log(arg);
}

const Map = () => {
  const [map, setMap] = useState(null);
  const [bounds, setBounds] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [searchLngLat, setSearchLngLat] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);
  const autocompleteRef = useRef(null);
  const [address, setAddress] = useState("");
  const [activeMarker, setActiveMarker] = useState(null);
  const [kmllayer, setKmllayer] = useState(null);
  const [locating, setLocating] = useState(null);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading....</div>;

  // static lat and lng
  // const center = { lat: 50.91484858712036, lng: -114.01179935974952 };
  // const position = { lat: 50.91484858712036, lng: -114.01179935974952 };
  const center = { lat: 50.91175406407451, lng: -114.01832417241165 };
  const position = { lat: 50.91175406407451, lng: -114.01832417241165};


  const onLoad = infoWindow => {
    // console.log('infoWindow: ', infoWindow)
  }
  const onMarkerLoad = marker => {
    // return new Promise(resolve => setTimeout(resolve, 1000));
    // marker.setAnimation(google.maps.Animation.BOUNCE);
    // console.log('marker: ', marker)
    // setKmllayer("https://googlearchive.github.io/js-v2-samples/ggeoxml/cta.kml");

  }
  const onPolylineLoad = polyline => {
    console.log('polyline:' , polyline);
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

  // get current location
  const handleGetLocationClick = () => {
    setLocating('1');
    console.log(locating)
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
    setLocating(null);
    console.log(locating)
  };

  const displayInfo = (e) => {
    console.log(e);
  }

  const handleActiveMarker = (event, marker) => {
    console.log(event);
    if (marker == activeMarker) {
      return;
    }
    // setActiveMarker(null);
    // const infowindow = new google.maps.InfoWindow({
    //   content: 
    //     "<div style=''>" +
    //       "<figure style=''>" +
    //         "<h3 style='color:black; font-size: 1.5rem;'>" + MarkerData[marker].name + "</h3>" +
    //         "<img style='width:100%' src='" + MarkerData[marker].picture + "' alt='testing'/>" +
    //         "<figcaption style='color:black'>" + MarkerData[marker].description + "</figcaption>" +
    //       "</figure>" +
    //     "</div>", 
    //   position:  MarkerData[marker].position,
    //   ariaLabel: MarkerData[marker].name,
    // });
    // infowindow.open({
    //   map,
    // });
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
    const controlUI = document.createElement("div");
    controlUI.innerHTML = "<p>Locate</p><p>Me</p>";
    controlUI.style.backgroundColor = "white";
    controlUI.style.color = "black";
    controlUI.style.border = "2px solid #ccc";
    controlUI.style.borderRadius = "50%";
    controlUI.style.boxShadow = "0 2px 6px rgba(0,0,0,.3)";
    controlUI.style.cursor = "pointer";
    controlUI.style.marginTop = "20px";
    controlUI.style.textAlign = "center";
    controlUI.style.width = "100%";
    controlUI.style.padding = "14px 10px";
    controlUI.addEventListener("click", handleGetLocationClick);
    controlDiv.appendChild(controlUI);

    const buttonDiv = document.createElement("div");
    const buttonUI = document.createElement("div");
    buttonUI.innerHTML = "Trail 1";
    buttonUI.style.backgroundColor = "white";
    buttonUI.style.color = "black";
    buttonUI.style.border = "2px solid #ccc";
    buttonUI.style.boxShadow = "0 2px 6px rgba(0,0,0,.3)";
    buttonUI.style.cursor = "pointer";
    buttonUI.style.marginBottom = "20px";
    buttonUI.style.textAlign = "center";
    buttonUI.style.width = "100%";
    buttonUI.style.padding = "4px 14px";
    buttonUI.addEventListener("click", () => {setKmllayer("https://googlearchive.github.io/js-v2-samples/ggeoxml/cta.kml")}); 
    buttonDiv.appendChild(buttonUI); 



    // const centerControl = new window.google.maps.ControlPosition(
    //   window.google.maps.ControlPosition.TOP_CENTER,
    //   0,
    //   10
    // );

    map.controls[window.google.maps.ControlPosition.TOP_CENTER].push(
      controlDiv
    );
    map.controls[window.google.maps.ControlPosition.BOTTOM_LEFT].push(
      buttonDiv
    );
  };
  const onUnmount = () => {
    setMap(null);
  };

  const currentLocationLoad = () => {
    const bounds = new google.maps.LatLngBounds();
    MarkerData.forEach(({ position }) => bounds.extend(position));
    bounds.extend(currentLocation);
    map.fitBounds(bounds);
    // console.log('currentlocationload is called');
    // console.log(MarkerData);
  }

  return (
    <div
      style={{
        display: 'block',
        width: '100%'
        // display: "flex",
        // flexDirection: "column",
        // justifyContent: "center",
        // alignItems: "center",
        // gap: "20px",
      }}
    > 
      {locating && (
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[2] flex justify-center items-center' >
          <svg className="bg-white animate-spin h-5 w-5 mr-3" viewBox="0 0 36 36">
          </svg>
        </div>
      )}
      {/* map component  */}
      <GoogleMap
        options={options}
        zoom={currentLocation || selectedPlace ? 18 : 13}
        center={currentLocation || searchLngLat || center}
        mapContainerClassName="map"
        mapContainerStyle={{ width: "100%", height: "calc(100vh - 150px)", margin: "auto" }}
        onLoad={onMapLoad}
        onUnmount={onUnmount}
        onClick={() => setActiveMarker(null)}
      >
        {selectedPlace && <Marker position={searchLngLat} />}
        {currentLocation && <MarkerF position={currentLocation} onLoad={currentLocationLoad} animation={1}/>}
        {MarkerData.map((marker, index) => (
          <MarkerF
            key={index}
            onLoad={onMarkerLoad}
            position={marker.position}
            icon={faIcons[marker.iconid]}
            animation={index == activeMarker ? 1 : 2}
            onClick={() => {setActiveMarker(index);return; handleActiveMarker(event, index); test(this)}}
          >
            {index == activeMarker && 
              <InfoWindowF>
                <div className=''>
                  <h3 className='text-black text-lg'>{marker.name}</h3>
                  <figure>
                    <img width='300' src={marker.picture} alt='testing'/>
                    <figcaption className="text-black">{marker.description}</figcaption>
                  </figure>
                </div>
              </InfoWindowF>
            }
          </MarkerF>
        ))}
        { kmllayer && 
          <KmlLayer url={kmllayer}/>
        }
      </GoogleMap>
    </div>
  );
};

export default Map;