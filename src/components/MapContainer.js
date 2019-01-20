import React, { Component } from "react";
import PropTypes from "prop-types";
import GoogleMapReact from "google-map-react";
import { connect } from "react-redux";
import keys from "../keys/keys";
import MapStyle from "./MapStyle";

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

  render() {
    console.log("mapcontainer", this.props);
    const { center, zoom, mapOptions } = this.props;
    return (
      <div className="map ">
        <div style={{ height: "100vh", width: "100%" }}>
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
  mapOptions: PropTypes.object
};

const mapStateToProps = state => ({
  recommendedPlaces: state.places.recommendedPlaces,
  restaurants: state.places.restaurants,
  coffee: state.places.coffee,
  bars: state.places.bars,
  banks: state.places.banks,
  parks: state.places.parks
});

export default connect(mapStateToProps)(MapContainer);
