import React from 'react';
import { compose, withProps, withPropsOnChange } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps';

import keys from '../../keys/keys';
import MapStyle from './MapStyle';

const MapComponent = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${
      keys.google_maps
    }&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div className="map" />,
    mapElement: <div style={{ height: `100%` }} />,
    center: {
      lat: 40.75912125,
      lng: -74.0042503
    },
    zoom: 12
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    defaultOptions={{ styles: MapStyle }}
    defaultZoom={props.zoom}
    defaultCenter={props.center}
  >
    {props.isMarkerShown
      ? props.items.map(item => {
          if (item.type && item.type === 'Recommended Places') {
            return item.items.map(item => {
              let itemCenter = {
                lat: item.venue.location.lat,
                lng: item.venue.location.lng
              };
              return (
                <Marker
                  key={item.venue.id}
                  position={itemCenter}
                  onClick={props.onMarkerClick}
                />
              );
            });
          } else {
            let itemCenter = {
              lat: item.location.lat,
              lng: item.location.lng
            };
            return (
              <Marker
                key={item.id}
                position={itemCenter}
                onClick={props.onMarkerClick}
              />
            );
          }
        })
      : null}
  </GoogleMap>
));

export default MapComponent;
