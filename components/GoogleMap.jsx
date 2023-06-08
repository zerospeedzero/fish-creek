import { useState, useRef } from "react";
import { GoogleMap, KmlLayer, useLoadScript, StreetViewPanorama, InfoWindow, onLoad, Marker, MarkerF, InfoWindowF, Autocomplete, Polyline} from "@react-google-maps/api";
import {MarkerData} from './MarkerData.js';
import {TrailData} from './TrailData.js';
// import {faCamera, faBus, faRestroom} from "@fortawesome/free-solid-svg-icons";
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
  // { path: 'M8 12l-4.7023 2.4721.898-5.236L.3916 5.5279l5.2574-.764L8 0l2.3511 4.764 5.2574.7639-3.8043 3.7082.898 5.236z' ,
  // { path: 'm232.63,33.4C211.36,14.07,180.42,0,135.42,0S59.49,14.07,38.22,33.4C-5.13,72.81-12.28,138.45,20.22,187.2l115.2,172.8,115.21-172.8c32.5-48.75,25.35-114.39-18-153.8Zm-97.21,191.6c-54.67,0-99-44.32-99-99S80.75,27,135.42,27s99,44.33,99,99-44.32,99-99,99Z' ,
  { path: 'm28.44,76.69c-.52.43-1.27.41-1.77-.05C22.06,72.43.59,51.63,0,29.53-.45,12.1,15.36-6.42,38.02,2.17c13.76,5.21,16.9,18.24,17.04,27.37.2,12.68-5.68,22.37-11.59,30.91-5.17,7.47-10.77,12.77-15.04,16.25Zm5.72-33.61c-.34-.35-.68-.7-1.01-1.04-.05.02-.06.03-.07.04-.02.03-.04.06-.06.1-.93,1.51-2.15,2.71-3.69,3.6-2.11,1.21-4.36,1.55-6.75,1.2-1.07-.16-2.08-.51-3.03-1.02-2.89-1.55-4.63-3.96-5.28-7.16-.25-1.23-.25-2.48-.01-3.7.63-3.2,2.39-5.59,5.26-7.16.14-.07.18-.16.18-.31,0-.66,0-1.32,0-1.98v-.22c-3.25,1.2-7.31,4.71-7.81,10.5-.29,3.4.7,6.45,2.93,9.05,2.22,2.59,5.05,4.03,8.46,4.34-.18.02-.34.04-.5.06h2.75l-.28-.07c.11-.03.21-.03.31-.04.11,0,.23,0,.34-.02,2.16-.31,4.13-1.09,5.87-2.43,1.12-.86,2.07-1.88,2.86-3.05.07-.1.05-.16-.03-.23-.16-.15-.31-.3-.45-.45Zm-11.77-25.72c1.28.81,2.57.81,3.86.03,1.53-.93,2.11-2.98,1.28-4.56-.54-1.04-1.38-1.7-2.54-1.93-.11-.02-.21-.06-.32-.09h-.75s-.04.06-.07.07c-.11.02-.23.02-.33.05-1.49.42-2.41,1.38-2.71,2.9-.25,1.3.41,2.78,1.58,3.52Zm20.08,24.44c-1.34-1.34-2.68-2.68-4.02-4.02-1.3-1.3-2.59-2.59-3.88-3.89-.13-.13-.25-.18-.42-.18-2.48,0-4.96,0-7.44,0h-.21v-4.56s.05,0,.07,0c2.6,0,5.2,0,7.8,0,.32,0,.63-.05.93-.18,1.09-.46,1.47-1.47,1.42-2.2-.1-1.26-1.07-2.13-2.34-2.13-2.22,0-4.43,0-6.65,0-.41,0-.81,0-1.24,0,0-.06,0-.09,0-.12,0-.62.02-1.24,0-1.86-.01-.3-.06-.61-.15-.9-.39-1.22-1.83-1.99-3.02-1.37-.84.43-1.34,1.1-1.34,2.06,0,4.73,0,9.46,0,14.2,0,.13,0,.27.02.39.15.72.74,1.2,1.48,1.2,1.08,0,2.16,0,3.24,0,1.86,0,3.73,0,5.59,0,.12,0,.28.03.36.11,2.1,2.09,4.2,4.18,6.29,6.27.2.2.4.42.62.61,1,.83,2.6.58,3.3-.53.6-.95.45-2.06-.39-2.9Z' ,
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

const options = {
  mapTypeControl: false,
  mapTypeId: 'terrain',
  styles: Mapstyle
}

const test = (arg) => {
  console.log(arg);
}

const Map = () => {
  const center = { lat: 50.91175406407451, lng: -114.01832417241165 };
  const position = { lat: 50.91175406407451, lng: -114.01832417241165};

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
  const [streetCenter, setStreetCenter] = useState(center);
  const [streetVisable, setStreetVisable] = useState(false);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading....</div>;
  
  const testing = (event) => {
    console.log(event)
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
    return index == activeMarker ? 1 : 2
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
    <div className='w-full'>
      {locating && (
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[2] flex justify-center items-center' >
          <svg className="bg-white animate-spin h-5 w-5 mr-3" viewBox="0 0 36 36">
          </svg>
        </div>
      )}
      <GoogleMap
        options={options}
        zoom={currentLocation || selectedPlace ? 18 : 13}
        center={currentLocation || searchLngLat || center}
        mapContainerClassName="map"
        mapContainerStyle={{ width: "100%", height: "calc(100vh - 150px)", margin: "auto" }}
        onLoad={onMapLoad}
        onUnmount={onUnmount}
        onClick={() => setActiveMarker(null)}
        onDblClick={(event) => showStreetPanorama(event)}
      >
        {selectedPlace && <Marker position={searchLngLat} />}
        {currentLocation && <MarkerF position={currentLocation} onLoad={currentLocationLoad} animation={1}/>}
        {MarkerData.map((marker, index) => (
          <MarkerF
            key={index}
            onLoad={onMarkerLoad}
            position={marker.position}
            icon={faIcons[marker.iconid]}
            animation={markerAnimation(index)}
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
        ))
        }
        { kmllayer && 
          <KmlLayer url={kmllayer}/>
        }
      </GoogleMap>
    </div>
  );
};

export default Map;