import { useRef, useEffect, useState } from 'react';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';
import { FeatureGroup, Icon, Marker } from 'leaflet';
import City from '../../types/city';
import Offer from '../../types/offer';
import useMap from '../../hooks/useMap';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  city: City;
  offers: Offer[];
  activeCardId?: null | number;
  classNameMap: string | undefined;
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

function Map({city, offers, activeCardId, classNameMap}: MapProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  const [markersGroup] = useState<FeatureGroup>(new FeatureGroup());

  useEffect(() => {
    if (map) {
      markersGroup.clearLayers();
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });
        marker.setIcon((offer.id === activeCardId) ? currentCustomIcon : defaultCustomIcon);
        markersGroup.addLayer(marker);
      });

      markersGroup.addTo(map);
      map.setView([city.location.latitude, city.location.longitude], city.location.zoom);
    }
  }, [map, offers, activeCardId]);

  return (
    <section className={classNameMap} ref={mapRef}/>
  );
}

export default Map;
