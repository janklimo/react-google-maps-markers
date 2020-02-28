import React from "react";
import "./App.css";
import Map from "./Map";
import { LoadScript } from "@react-google-maps/api";

function App() {
  return (
    <div className="container">
      <LoadScript
        id="script-loader"
        googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
      >
        <h1>React Google Maps API - Markers test demo</h1>
        <Map />
      </LoadScript>
    </div>
  );
}

export default App;
