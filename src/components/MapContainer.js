import React from 'react';
import { compose, withProps } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import keys from '../keys/keys';
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

class MapContainer extends React.PureComponent {
  state = {
    isMarkerShown: false
  };

  componentDidMount() {
    this.delayedShowMarker();
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true });
    }, 3000);
  };

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false });
    this.delayedShowMarker();
  };

  render() {
    return (
      <MapComponent
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
      />
    );
  }
}

const mapStateToProps = state => ({
  recommendedPlaces: state.places.recommendedPlaces,
  restaurants: state.places.restaurants,
  coffee: state.places.coffee,
  bars: state.places.bars,
  banks: state.places.banks,
  parks: state.places.parks
});

export default connect(mapStateToProps)(MapContainer);

/*import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GoogleMapReact from 'google-map-react';
import MapStyle from './MapStyle';
import keys from '../keys/keys';

const MarkerComponent = () => (
  <i className="fa fa-2x fa-map-marker" aria-hidden="true" />
);

class MapContainer extends Component {
  static defaultProps = {
    center: {
      lat: 40.75912125,
      lng: -74.0042503
    },
    zoom: 12,
    mapOptions: {
      styles: MapStyle
    }
  };

  state = {
    places: []
  };

  getSnapshotBeforeUpdate(prevProps) {
    const {
      recommendedPlaces,
      restaurants,
      coffee,
      bars,
      banks,
      parks
    } = this.props;

    if (prevProps.recommendedPlaces !== recommendedPlaces) {
      this.setState({ places: recommendedPlaces });
      return null;
    }
    if (prevProps.restaurants !== restaurants) {
      this.setState({ places: restaurants });
      return null;
    }
    if (prevProps.bars !== bars) {
      this.setState({ places: bars });
      return null;
    }
    if (prevProps.coffee !== coffee) {
      this.setState({ places: coffee });
      return null;
    }
    if (prevProps.banks !== banks) {
      this.setState({ places: banks });
      return null;
    }
    if (prevProps.parks !== parks) {
      this.setState({ places: parks });
      return null;
    }
  }

  renderMarkers = () => {
    this.state.places.map(place => {
      if (place.type || place.type === 'Recommended Places') {
        return place.items.map(item => {
          const RecItemCenter = {
            lat: item.venue.location.lat,
            lng: item.venue.location.lng
          };
          return (
            <MarkerComponent
              key={item.venue.id}
              defaultCenter={RecItemCenter}
            />
          );
        });
      }
      const ItemCenter = {
        lat: place.location.lat,
        lng: place.location.lng
      };
      return <MarkerComponent key={place.id} defaultCenter={ItemCenter} />;
    });
  };

  render() {
    const { center, zoom, mapOptions } = this.props;
    return (
      <div className="map ">
        <div style={{ height: '100%', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: `${keys.google_maps}`
            }}
            defaultCenter={center}
            defaultZoom={zoom}
            options={mapOptions}
          />
        </div>
      </div>
    );
  }
}

MapContainer.propTypes = {
  center: PropTypes.object,
  zoom: PropTypes.number,
  mapOptions: PropTypes.object,
  recommendedPlaces: PropTypes.array,
  restaurants: PropTypes.array,
  coffee: PropTypes.array,
  bars: PropTypes.array,
  banks: PropTypes.array,
  parks: PropTypes.array
};

const mapStateToProps = state => ({
  recommendedPlaces: state.places.recommendedPlaces,
  restaurants: state.places.restaurants,
  coffee: state.places.coffee,
  bars: state.places.bars,
  banks: state.places.banks,
  parks: state.places.parks
});

export default connect(mapStateToProps)(MapContainer);*/
