interface Center {
  lat: number;
  lng: number;
}

export interface MapProps {
  center: Center;
  zoom: number;
  containerStyle: React.CSSProperties;
}
