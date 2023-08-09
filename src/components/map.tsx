import { useRef, useEffect } from 'react';
import useMap from '../custom-hooks/use-map';
import 'leaflet/dist/leaflet.css';
import leaflet from 'leaflet';
import { MapProps } from '../types';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../const';
import { useAppSelector } from '../redux-hooks';

function Map({activeId, offerId, widthParam}: MapProps) {
  const offers = useAppSelector((state) => state.offers);

  const city = useAppSelector((state) => state.city);
  const filteredOffers = offers.filter((offer) => offer.city.name === city);
  const chosenCity = filteredOffers[0].city;

  const mapRef = useRef(null);
  const map = useMap(mapRef, chosenCity);

  console.log(chosenCity);

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
      map.setView([chosenCity.location.latitude, chosenCity.location.longitude], chosenCity.location.zoom);
      filteredOffers.forEach((point) => {
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
  }, [map, filteredOffers, activeId, chosenCity]);


  return (
    <div
      style={{height: widthParam}}
      ref={mapRef}
    >
    </div>
  );
}

export default Map;
