import { useRef, useEffect } from 'react';
import useMap from '../../custom-hooks/use-map';
import 'leaflet/dist/leaflet.css';
import leaflet from 'leaflet';
import { MapProps } from '../../types/types';
import { AllCities, URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const';
import { useAppSelector } from '../../redux-hooks';
import { getOffers } from '../../store/app-data/selectors';
import { getCity } from '../../store/app-process/selectors';

function Map({activeId, offerId, widthParam, places}: MapProps) {
  const offers = useAppSelector(getOffers);
  const city = useAppSelector(getCity);

  const currentOffer = offers.filter((item) => item.id === offerId);
  const currentCity = AllCities.filter((item) => item.name === city).at(0);

  function chooseOffers () {
    if (places) {
      return places.concat(currentOffer);
    }
    return offers.filter((offer) => offer.city.name === city);
  }
  const filteredOffers = chooseOffers();

  const mapRef = useRef(null);
  const map = useMap(mapRef, currentCity);

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
      if (currentCity) {
        map.setView([currentCity.location.latitude, currentCity.location.longitude], currentCity.location.zoom);
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
    }
  }, [map, filteredOffers, activeId, currentCity, currentCustomIcon, defaultCustomIcon, offerId]);


  return (
    <div
      style={{height: widthParam}}
      ref={mapRef}
    >
    </div>
  );
}

export default Map;
