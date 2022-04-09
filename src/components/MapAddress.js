import React, { useState, useEffect } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";


function Map() {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 18.079021, lng: -15.965662 }}
     
    >
     <Marker
      position={{ lat:18.079021, lng: -15.965662  }}
    /> 
    </GoogleMap>
  );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function MapAddress() {
  return (
    <div style={{  height: "200px" }}>
      <MapWrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key="AIzaSyByMdeGDpK7bJQN3M6OdvO2x_k1GmfLInA"`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}
