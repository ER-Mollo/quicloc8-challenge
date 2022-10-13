import React,{useEffect,useRef,useState} from 'react';
import taxi from '../asserts/Quicloc8-logo.png'

import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  InfoWindow
 
} from '@react-google-maps/api';
const center = { lat: 48.8584, lng: 2.2945 };
const markers = 
  {
    id: 1,
    name: "Chicago, Illinois",
    position: { lat: 48.8584, lng: 2.2945}
  };
  


function MyComponent() {
  const [ libraries ] = useState(['places']);
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: 'AIzaSyDFa2CA_EPmOKL0yGbilcX2jD-0VaEor1o',
        libraries: libraries,
      })
    
      const [map, setMap] = useState(/** @type google.maps.Map */ (null))
      const [directionsResponse, setDirectionsResponse] = useState(null)
      const [distance, setDistance] = useState('')
      const [duration, setDuration] = useState('');
      const [activeMarker, setActiveMarker] = useState(null);
      const [infoWindowVisible, setInfoWindowVisible] = useState(false);
      
      
      if (!isLoaded) {
        return <div>nothing</div>
      }
    
      // async function calculateRoute() {
      //   if (originRef.current.value === '' || destiantionRef.current.value === '') {
      //     return
      //   }
      //   // eslint-disable-next-line no-undef
      //   const directionsService = new google.maps.DirectionsService()
      //   const results = await directionsService.route({
      //     origin: originRef.current.value,
      //     destination: destiantionRef.current.value,
      //     // eslint-disable-next-line no-undef
      //     travelMode: google.maps.TravelMode.DRIVING,
      //   })
      //   setDirectionsResponse(results)
      //   setDistance(results.routes[0].legs[0].distance.text)
      //   setDuration(results.routes[0].legs[0].duration.text)
      // }
    
      // function clearRoute() {
      //   setDirectionsResponse(null)
      //   setDistance('')
      //   setDuration('')
      //   originRef.current.value = ''
      //   destiantionRef.current.value = ''
      // }
      const handleActiveMarker = (marker) => {
        if (marker === activeMarker) {
          return;
        }
        setActiveMarker(marker);
      };
    
      // const handleOnLoad = (map) => {
      //   const bounds = new window.google.maps.LatLngBounds();
      //   markers.forEach(({ position }) => bounds.extend(position));
      //   map.fitBounds(bounds);
      // };

  return (
   
    <div>
      <GoogleMap
    center={center}
    zoom={15}
    onClick={() => setActiveMarker(null)}
    mapContainerStyle={{ width: "100vw", height: "80vh" }}
  >
    {/* {markers.map(({ id, name, position }) => ( */}
      <Marker
        position={center} 
        style={{backgroundColor:'red'}}
        icon={{

          url: {taxi},
          // anchor: new window.google.maps.Point(17, 46),
          // scaledSize: new window.google.maps.Size(37, 37)
  
      }}
        
      >
        <img src={taxi} style={{width:'100px',height:'100px'}}/>
        {/* {activeMarker === id ? (
          <InfoWindow onCloseClick={() => setActiveMarker(null)}>
            <div>{name}</div>
          </InfoWindow>
        ) : null} */}

      {infoWindowVisible && (
          <InfoWindow position={center}>
            <div>Hi!!</div>
          </InfoWindow>
        )}


      </Marker>
    {/* ))} */}
  </GoogleMap>
  <button>Message</button>
    </div>
    
  );
}

export default MyComponent;
