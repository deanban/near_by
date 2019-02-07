import React from 'react';
import {
  compose,
  withProps,
  withPropsOnChange,
  withStateHandlers
} from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
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
    zoom: 12,
    mapStyle: MapStyle
  }),
  withStateHandlers(
    () => ({
      isOpen: false,
      openInfoWindowMarkerId: ''
    }),
    {
      onToggleOpen: ({ isOpen }) => () => ({
        isOpen: !isOpen
      })
    },
    {
      handleToggleOpen: id => () => ({
        openInfoWindowMarkerId: id
      })
    }
  ),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    defaultOptions={{ styles: props.mapStyle }}
    defaultZoom={props.zoom}
    defaultCenter={props.center}
  >
    {props.isMarkerShown
      ? props.items.map(item => {
          if (item.type && item.type === 'Recommended Places') {
            return item.items.map(item => {
              const itemCenter = {
                lat: item.venue.location.lat,
                lng: item.venue.location.lng
              };
              console.log(item);
              const [
                name,
                address,
                city
              ] = item.venue.location.formattedAddress;
              return (
                <Marker
                  key={item.venue.id}
                  position={itemCenter}
                  onClick={props.onToggleOpen}
                >
                  {props.isOpen && (
                    <InfoWindow
                      onCloseClick={props.onToggleOpen}
                      position={itemCenter}
                    >
                      <div key={item.referralId}>
                        <h4>{item.venue.name}</h4>
                        <hr />
                        <h5>{name}</h5>
                        <h6>{address}</h6>
                        <h6>{city}</h6>
                      </div>
                    </InfoWindow>
                  )}
                </Marker>
              );
            });
          } else {
            const itemCenter = {
              lat: item.location.lat,
              lng: item.location.lng
            };
            return (
              <Marker
                key={item.id}
                position={itemCenter}
                onClick={props.onToggleOpen}
              >
                {props.isOpen && (
                  <InfoWindow onCloseClick={props.onToggleOpen}>
                    <i className="fas fa-anchor" />
                  </InfoWindow>
                )}
              </Marker>
            );
          }
        })
      : null}
  </GoogleMap>
));

export default MapComponent;
