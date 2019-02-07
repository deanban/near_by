import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MapComponent from './MapComponent';
import { InfoWindow } from 'react-google-maps';

class MapContainer extends React.PureComponent {
  state = {
    isMarkerShown: false,
    places: [],
    items: [],
    openInfoWindowMarkerId: '',
    isOpen: false
  };

  componentDidMount() {
    this.delayedShowMarker();
    this.showInfoWindow();
  }

  getSnapshotBeforeUpdate(prevProps) {
    const {
      recommendedPlaces,
      restaurants,
      bars,
      coffee,
      banks,
      parks
    } = this.props;

    if (prevProps.recommendedPlaces !== recommendedPlaces) {
      this.setState({ places: recommendedPlaces });
      return recommendedPlaces;
    }
    if (prevProps.restaurants !== restaurants) {
      this.setState({ places: restaurants });
      return restaurants;
    }
    if (prevProps.bars !== bars) {
      this.setState({ places: bars });
      return bars;
    }
    if (prevProps.coffee !== coffee) {
      this.setState({ places: coffee });
      return coffee;
    }
    if (prevProps.banks !== banks) {
      this.setState({ places: banks });
      return banks;
    }
    if (prevProps.parks !== parks) {
      this.setState({ places: parks });
      return parks;
    }
  }

  placeMarkers = () => {
    const { places } = this.state;
    // let arr = [];
    if (places.length === 1) {
      places.map(place => {
        if (place.type && place.type === 'Recommended Places') {
          this.setState({ items: place.items });
          // arr.push(
          //   place.items.reduce(
          //     (acc, x) => [
          //       Object.values(x.venue.name).join(''),
          //       Object.values(x.venue.location.labeledLatLngs)
          //     ],
          //     []
          //   )
          // );
        }
      });
    }

    this.setState({ items: places });
  };

  // toggleInfoWindow = loc => {
  //   // clicking 'x' in the info window will pass null, so if we detect that, reset the position in state
  //   if (loc == null) {
  //     this.setState({ windowPosition: null });
  //     return;
  //   }
  //   // otherwise get coords of clicked marker and set to state
  //   let markerLoc = { lat: loc.lat, lng: loc.lng };
  //   this.setState({ windowPosition: markerLoc });
  // };

  //just to test marker click
  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true });
    }, 1000);
  };

  handleCloseClick = () => {
    this.setState({ isOpen: false });
  };

  showInfoWindow = () => {
    return (
      this.state.isOpen && (
        <InfoWindow onCloseClick={this.handleCloseClick}>
          <div>
            <h2>Infowindow</h2>
          </div>
        </InfoWindow>
      )
    );
  };

  handleMarkerClick = id => {
    this.setState({
      isMarkerShown: false,
      openInfoWindowMarkerId: id,
      isOpen: true
    });
    this.delayedShowMarker();
    this.showInfoWindow();
  };

  render() {
    this.placeMarkers();

    return (
      <MapComponent
        items={this.state.items}
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
        /*onClose={this.toggleInfoWindow}
    position={this.state.windowPosition}*/
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
