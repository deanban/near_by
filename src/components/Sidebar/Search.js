import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from 'react-places-autocomplete';
import Spinner from '../../Spinner';

import { setAddress, setMercator } from '../actions/LocationActions';
import { searchPlaces } from '../actions/SearchActions';

export class Search extends Component {
  state = {
    address: '',
    lat: null,
    lng: null,
    err: null
  };

  handleChange = address => {
    this.setState({ address });
  };

  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        this.setState(state => ({
          lat: latLng.lat,
          lng: latLng.lng
        }));
      })
      .then(_ => {
        const { address, lat, lng } = this.state;
        const { setAddress, setMercator } = this.props;
        setAddress(address);
        setMercator({ lat, lng });
      })
      .then(() => {
        const { searchPlaces } = this.props;
        const { lat, lng } = this.state;
        searchPlaces({ lat, lng }, null);
      })
      .catch(error =>
        this.setState({
          err: error
        })
      );
  };

  render() {
    const { address } = this.state;
    return (
      <PlacesAutocomplete
        value={address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input'
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <Spinner />}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    );
  }
}

Search.defaultProps = {
  getInputProps: PropTypes.func.isRequired,
  getSuggestionItemProps: PropTypes.func.isRequired,
  suggestion: PropTypes.array.isRequired,
  loading: PropTypes.bool
};

Search.propTypes = {
  searchPlaces: PropTypes.func.isRequired
};

// Search.propTypes = {
//   searchPlaces: PropTypes.func.isRequired,
//   getInputProps: PropTypes.func,
//   getSuggestionItemProps: PropTypes.func,
//   suggestion: PropTypes.array,
//   loading: PropTypes.bool,
//   coords: PropTypes.object,
//   filterBy: PropTypes.string || null
// };

// const mapStateToProps = state => ({
//   coords: state.location.coords
// });

export default connect(
  null,
  { setAddress, setMercator, searchPlaces }
)(Search);
