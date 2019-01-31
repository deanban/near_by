import React from 'react';
import { compose, withProps } from 'recompose';
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
    {props.isMarkerShown && (
      <Marker position={props.center} onClick={props.onMarkerClick} />
    )}
  </GoogleMap>
));

export default MapComponent;
