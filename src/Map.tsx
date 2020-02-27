import React, { Component } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapContainerStyle = {
  height: "30rem",
  width: "100%"
};

const center = {
  lat: 40.776516,
  lng: -73.970256
};

const markers = [
  { lat: 40.759941, lng: -73.978669 },
  { lat: 40.766785, lng: -73.9381 },
  { lat: 40.809273, lng: -73.997105 }
];

interface State {
  zIndex: number;
}

export default class Map extends Component<{}, State> {
  state: Readonly<State> = {
    zIndex: 1
  };

  render() {
    const { zIndex } = this.state;

    return (
      <LoadScript
        id="script-loader"
        googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
      >
        <div className="map-wrapper">
          <GoogleMap
            id="marker-example"
            mapContainerStyle={mapContainerStyle}
            zoom={12}
            center={center}
            options={{
              draggable: false
            }}
          >
            {markers.map((marker, index) => (
              <Marker
                key={index}
                label={(index + 1).toString()}
                position={marker}
                zIndex={zIndex}
              />
            ))}
          </GoogleMap>
        </div>
        <h2>Edit zIndex</h2>
        <p>
          Current zIndex: <b>{zIndex}</b>
        </p>
        <p>
          <button
            className="btn"
            onClick={() => this.setState({ zIndex: zIndex + 1 })}
          >
            +
          </button>
          <button
            className="btn"
            onClick={() => this.setState({ zIndex: zIndex - 1 })}
          >
            -
          </button>
        </p>
      </LoadScript>
    );
  }
}
