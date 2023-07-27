import { useEffect, useState, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import leaflet from 'leaflet';
import { City } from '../types';

function useMap(mapRef: any, city: City) {
  const [map, setMap] = useState(null);
  const isRenderedRef = useRef(false);

  useEffect(()=> {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude,
        },
        zoom: city.location.zoom,
      });

      leaflet
        .tileLayer(
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
          {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          },
        )
        .addTo(instance);

      setMap(instance);
      isRenderedRef.current = true;
    }
  },[]);

  return map;
}

export default useMap;
