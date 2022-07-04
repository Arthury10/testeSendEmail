import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "450px",
};

const center = {
  lat: -31.76357929879422,
  lng: -52.342266440480245,
};

export const GoogleMaps = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY,
    region: "BR",
    language: "pt-BR",
    preventGoogleFontsLoading: true,
  } as any);

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={50}>
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
};
