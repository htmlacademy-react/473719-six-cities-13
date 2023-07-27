import { useRef, useEffect } from 'react';
import useMap from '../custom-hooks/use-map';
import 'leaflet/dist/leaflet.css';
import leaflet from 'leaflet';
import { CityWithLocations } from '../types';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../const';

function Map({city, locations}: CityWithLocations) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      locations.forEach((point) => {
        leaflet
          .marker({
            lat: point.location.latitude,
            lng: point.location.longitude,
          }, {
            icon: defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, locations]);


  return (
    <div
      style={{height: '714px'}}
      ref={mapRef}
    >
    </div>
  );
}

export default Map;
