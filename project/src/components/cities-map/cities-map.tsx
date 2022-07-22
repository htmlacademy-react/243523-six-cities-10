import {FC, useEffect, useRef} from 'react';
import {useNavigate} from 'react-router-dom';
import {Icon, Marker} from 'leaflet';

import {Offer} from 'types/offers';
import {AppRoute, transformRoute} from 'types/const';
import useMap from 'hooks/use-map';

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
}

export const CitiesMap: FC<CitiesMapProps> = ({offers}) => {
  const [{city}] = offers;
  const mapRef = useRef(null);
  const navigate = useNavigate();
  const property = offers.find((item: Offer) => item.id);

  const map = useMap(city.location, mapRef);

  useEffect(() => {
    const markers: Marker[] = [];
    if (map) {
      offers.forEach(({location, id, title}) => {
        const marker = new Marker([location.latitude, location.longitude]);
        markers.push(marker);
        marker.bindPopup(title);
        id === property?.id && title === property.title ? marker.setIcon(currentIcon).addTo(map) : marker.setIcon(defaultIcon).addTo(map);
        marker.on('click', () => {
          window.scrollTo(0, 0);
          return navigate(transformRoute(`${AppRoute.Room}/${id}`));
        });
        marker.on('mouseover', () => marker.openPopup());
        marker.on('mouseout', () => marker.closePopup());
      });

      return () => markers.forEach((marker) => map.removeLayer(marker));
    }
  }, [map, property, offers, navigate]);

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
