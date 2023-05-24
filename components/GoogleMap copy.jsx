import { useEffect, useRef } from 'react';

const GoogleMap = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    // Load the Google Maps API script
    const GOOGLE_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
    console.log('KEY starte' + GOOGLE_API_KEY + 'Key end');
    const googleMapsScript = document.createElement('script');
    googleMapsScript.src = 'https://maps.googleapis.com/maps/api/js?key=' + GOOGLE_API_KEY;
    googleMapsScript.async = true;
    googleMapsScript.defer = true;
    document.body.appendChild(googleMapsScript);

    googleMapsScript.onload = initializeMap;

    return () => {
      // Clean up the Google Maps API script
      googleMapsScript.onload = null;
      document.body.removeChild(googleMapsScript);
    };
  }, []);

  const initializeMap = () => {
    const mapOptions = {
      center: { lat: 50.925065, lng: -114.059635 }, // Coordinates for Fish Creek in Calgary
      zoom: 12,
    };

    const map = new google.maps.Map(mapRef.current, mapOptions);

    // Add marker to Fish Creek
    const fishCreekMarker = new google.maps.Marker({
      position: { lat: 50.925065, lng: -114.059635 }, // Coordinates for Fish Creek in Calgary
      map: map,
      title: 'Fish Creek',
    });

    // Highlight trails in Fish Creek (assuming you have the trail coordinates)
    const trailCoordinates = [
      // Array of trail coordinates
      { lat: 50.924717, lng: -114.063040 },
      { lat: 50.925243, lng: -114.060287 },
      { lat: 50.926231, lng: -114.058243 },
      // Add more trail coordinates as needed
    ];

    const trailPath = new google.maps.Polyline({
      path: trailCoordinates,
      geodesic: true,
      strokeColor: '#FF0000', // Red color for the trail
      strokeOpacity: 1.0,
      strokeWeight: 2,
    });

    trailPath.setMap(map);
  };

  return <div ref={mapRef} style={{ width: '100%', height: '400px' }}></div>;
};

export default GoogleMap;
