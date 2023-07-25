import { useEffect, useRef, useState } from 'react';
import useMap from '../custom-hooks/use-map';
import { Card, Cards, MainPageCardProps, City } from '../types';

function Map({city}: City) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  return (
    <div
      style={{height: '500px'}}
      ref={mapRef}
    >
    </div>
  );
}

export default Map;
