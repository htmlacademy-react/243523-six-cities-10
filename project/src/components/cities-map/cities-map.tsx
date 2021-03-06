import {FC, useEffect, useRef} from 'react';
import {useNavigate} from 'react-router-dom';
import {Icon, Marker} from 'leaflet';

import useMap from 'hooks/use-map';
import {City, Offer} from 'types/offers';
import {AppRoute, transformRoute} from 'types/const';

const defaultIcon = new Icon({
  iconUrl: '/img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentIcon = new Icon({
  iconUrl: '/img/pin-active.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

export type CitiesMapProps = {
  offers: Offer[];
  currentCity: City;
  selectedPoint?: Offer;
}

export const CitiesMap: FC<CitiesMapProps> = ({offers, selectedPoint, currentCity}) => {
  const mapRef = useRef(null);
  const navigate = useNavigate();
  const map = useMap(currentCity, mapRef);

  useEffect(() => {
    if (map) {
      const markers: Marker[] = [];
      const zoom = 12;
      offers.forEach(({location, id, title}) => {
        const marker = new Marker({
          lat: location.latitude,
          lng: location.longitude,
        }).bindPopup(title);
        map.flyTo([location.latitude, location.longitude], zoom, {duration: 1.5});
        markers.push(marker);
        marker
          .setIcon(
            selectedPoint && selectedPoint.id === id
              ? currentIcon
              : defaultIcon
          )
          .addTo(map);
        marker.on('click', () => navigate(transformRoute(`${AppRoute.Room}/${id}`)));
        marker.on('mouseover', () => marker.openPopup());
      });
      return () => markers.forEach((marker) => map.removeLayer(marker));
    }
  }, [map, navigate, offers, selectedPoint]);

  return (
    <div data-testid="map" style={{
      height: '100%',
    }}
    ref={mapRef}
    >
    </div>
  );
};

export default CitiesMap;
