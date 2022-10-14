import React,{useEffect,useRef,useState} from 'react';
import taxi from '../asserts/Quicloc8-logo.png'
import PropagateLoader from "react-spinners/PropagateLoader";
import logo from '../asserts/Quicloc8-logo.png'
import '../css/map.css'
import { FaBeer } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  InfoWindow
 
} from '@react-google-maps/api';
const center = { lat: -33, lng: 18};
const markers = [
  {
    id: 1,
    heading: "31",
    position: { lat: -33.876115, lng: 18.5008116}
  },
  {
    id: 2,
    heading: "310",
    position: { lat: -33.9685533, lng: 18.5662383}
  },
  {
    id: 3,
    heading: "0",
    position: { lat: -33.0461583, lng: 18.7047383}
  },
  {
    id: 4,
    heading: "299",
    position: { lat: -33.8942983, lng: 18.878175}
  },
  {
    id: 4,
    heading: "43",
    position: { lat: -33.9998233, lng: 18.5801216}
  },


]
 
  


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
      const [loading,setLoading]=useState(false);

      let history = new useNavigate();

      function click(){
        history('/message')
      }

      useEffect(() => {
        setLoading(true)
            setTimeout(() =>{
              setLoading(false)
            },3500)
          },[])
      
      
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
      {
        loading ?(
        <div className="start">
        <img src={logo} alt="logo" className='logo'/>
        <PropagateLoader
        color={'#FF5722'}
        loading={loading}
        size={'2vh'}
        aria-label="Loading Spinner"
        data-testid="loader"
        className='load'
      />
        </div>)
        :(

        <div>
            <GoogleMap
        center={center}
        zoom={15}
        onClick={() => setActiveMarker(null)}
        mapContainerStyle={{ width: "100vw", height: "80vh" }}
      >
        {markers.map(({ id, position }) => (
          <Marker
            position={position} 
            id={id}

            style={{backgroundColor:'red'}}
            icon={{
              url: {taxi},
          }}
            
          >
            <img src={taxi} style={{width:'100px',height:'100px'}}/>
            {activeMarker === id ? (
              <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                <div>{position}</div>
              </InfoWindow>
            ) : null}

          {infoWindowVisible && (
              <InfoWindow position={center}>
                <div>Hi!!</div>
              </InfoWindow>
            )}


          </Marker>
        ))} 
      </GoogleMap>
      <div className='bottom'>
      <button className='button' onClick={click}>Message</button>
      </div>
      
        </div>
        )

      }


        
    </div>
    
  );
}

export default MyComponent;
