import {MutableRefObject, useEffect, useState} from 'react';
import {Map, TileLayer} from 'leaflet';
import 'leaflet/dist/leaflet.css';

import {Location} from 'types/offers';

export const useMap = (location: Location, mapRef: MutableRefObject<HTMLElement | null>): Map | null => {
  const [map, setMap] = useState<Map | null>(null);
  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance = new Map(mapRef.current, {
        center: [location.latitude, location.longitude],
        zoom: location.zoom,
      });
      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        }
      );
      instance.addLayer(layer);
      setMap(instance);
    }

    if (mapRef.current !== null && map !== null) {
      map.setView([location.latitude, location.longitude], location.zoom);
    }
  }, [location, map, mapRef]);

  return map;
};

export default useMap;
