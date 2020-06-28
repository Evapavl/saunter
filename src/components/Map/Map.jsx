import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps";

const Map = () => {
  return (
    <div>
    <GoogleMap
     defautZoom={10}
     defaultCenter={{ lat: -34.397, lng: 150.644 }} />
     {/* <Marker
      position={{ lat: -34.397, lng: 150.644 }}
    /> */}
    </div>
  )
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

const MapComponent = () => {
  return(
    <div  style={{width: '40vw', height: '50vh', padding: 20}}>
<WrappedMap
googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBAJBQ370Se3WsuvUSZWI4KNsJqcC_7ass`}
loadingElement={<div style={{height: "100%"}} />}
containerElement={<div style={{height: "100%"}} />}
mapElement={<div style={{height: "100%"}} />}
/>
    </div>
  )

}
export default MapComponent   
