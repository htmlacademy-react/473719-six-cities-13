import { useRef, useEffect } from 'react';
import useMap from '../custom-hooks/use-map';
import 'leaflet/dist/leaflet.css';
import leaflet from 'leaflet';
import { MapProps } from '../types';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../const';
import { AllCities } from '../const';

function Map({city, locations, activeId, offerId, widthParam}: MapProps) {
  const filteredCity = AllCities.filter((item)=> item.name === city);
  const chosenCity = filteredCity[0];

  const mapRef = useRef(null);
  const map = useMap(mapRef,chosenCity);

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
            icon: (point.id === activeId || point.id === offerId)
              ? currentCustomIcon
              : defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, locations]);


  return (
    <div
      style={{height: widthParam}}
      ref={mapRef}
    >
    </div>
  );
}

export default Map;
