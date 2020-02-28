import React, { Component } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";

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
  { lat: 40.796785, lng: -73.9481 },
  { lat: 40.776785, lng: -73.9181 },
  { lat: 40.739941, lng: -73.918669 },
  { lat: 40.729941, lng: -73.998669 },
  { lat: 40.809273, lng: -73.997105 }
];

const circle = (size: number) => {
  const radius = size / 2;
  const anchor = new google.maps.Point(radius, radius);

  return {
    anchor,
    path: `M ${radius},${radius} m -${radius},0
           a ${radius},${radius} 0 1,0 ${radius * 2},0
           a ${radius},${radius} 0 1,0 -${radius * 2},0 Z`
  };
};

const markerOptions = (): google.maps.Symbol => {
  const iconSize = 26;
  const { path, anchor } = circle(iconSize);
  const labelOrigin = new google.maps.Point(iconSize / 2, iconSize / 2);

  return {
    anchor,
    fillColor: "#0c2340",
    fillOpacity: 1,
    labelOrigin,
    path,
    strokeColor: "#e8e8e8",
    strokeWeight: 1.5
  };
};

interface State {
  selected: number;
}

export default class Map extends Component<{}, State> {
  state: Readonly<State> = {
    selected: 0
  };

  render() {
    const { selected } = this.state;

    return (
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
          {markers.map((marker, index) => {
            const zIndex =
              index === selected ? markers.length + 2 : markers.length - index;

            return (
              <Marker
                key={index}
                label={{
                  text: (index + 1).toString(),
                  color: "white",
                  fontSize: "12px",
                  fontFamily: "Verdana",
                  fontWeight: "700"
                }}
                position={marker}
                zIndex={zIndex}
                onClick={() => this.setState({ selected: index })}
                icon={markerOptions()}
              />
            );
          })}
        </GoogleMap>
      </div>
    );
  }
}
