import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import React from 'react';

import { MapProps } from './Map';

const NonMemoMap: React.FC<MapProps> = ({ center, zoom, containerStyle }) => (
  <LoadScript googleMapsApiKey={process.env.GOOGLE_MAPS_API_KEY}>
    <GoogleMap center={center} zoom={zoom} mapContainerStyle={containerStyle}>
      <Marker position={center} />
    </GoogleMap>
  </LoadScript>
);

export const Map = React.memo<MapProps>(NonMemoMap);
