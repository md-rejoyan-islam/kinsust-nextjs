"use client";

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

export default function Map() {
  const containerStyle = {
    height: "400px",
  };
  const onLoad = () => {};
  const center = {
    lat: 24.9203068348844,
    lng: 91.83228375215963,
  };
  return (
    <LoadScript googleMapsApiKey="AIzaSyDhWWmZ-Jovpu6rwfSsFt9qYdUSd3G7Mxc">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={16}>
        {/* Child components, such as markers, info windows, etc. */}
        <Marker position={center} onLoad={onLoad} />
      </GoogleMap>
    </LoadScript>
  );
}
