
import { useState } from 'react';
import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';
import 'tailwindcss/tailwind.css';

const MapWithMarker = ({ apiKey }) => {
  console.log(apiKey);
  const [isMarkerOpen, setIsMarkerOpen] = useState(false);

  const markerPosition = {
    lat: 50.91484858712036,
    lng: -114.01179935974952,
  };

  const handleMarkerClick = () => {
    setIsMarkerOpen(true);
  };

  const handleInfoWindowClose = () => {
    setIsMarkerOpen(false);
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <GoogleMap
        zoom={10}
        center={markerPosition}
        mapContainerClassName="w-3/4 h-3/4"
        options={{
          apiKey: apiKey,
        }}
      >
        <Marker
          position={markerPosition}
          onClick={handleMarkerClick}
        />
        {isMarkerOpen && (
          <InfoWindow
            position={markerPosition}
            onCloseClick={handleInfoWindowClose}
          >
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-2">Marker Info</h2>
              <p className="text-gray-700">
                Latitude: {markerPosition.lat}<br/>
                Longitude: {markerPosition.lng}
              </p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
};

export default MapWithMarker;
