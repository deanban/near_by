import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TrModal from './TrModal';

export default class Results extends Component {
  state = {
    places: [],
    showModal: false,
    placeName: '',
  };

  getSnapshotBeforeUpdate(prevProps) {
    const { places, restaurant, bar, coffee, bank, park } = this.props.results;

    if (prevProps.results.places !== places) {
      this.setState({ places });
      return null;
    }
    if (prevProps.results.restaurant !== restaurant) {
      this.setState({ places: restaurant });
      return null;
    }
    if (prevProps.results.bar !== bar) {
      this.setState({ places: bar });
      return null;
    }
    if (prevProps.results.coffee !== coffee) {
      this.setState({ places: coffee });
      return null;
    }
    if (prevProps.results.bank !== bank) {
      this.setState({ places: bank });
      return null;
    }
    if (prevProps.results.park !== park) {
      this.setState({ places: park });
      return null;
    }
  }

  handleTrClick = event => {
    this.setState({ showModal: true, placeName: event.target.textContent });
  };

  handleCloseModal = () => this.setState({ showModal: false });

  renderPlaces = () =>
    this.state.places.map((place, i) => {
      if (place.type || place.type === 'Recommended Places') {
        return place.items.map((item, i) => (
          <tbody key={item.venue.id}>
            <tr className="table-secondary" onClick={this.handleTrClick}>
              <th scope="row">{item.venue.name}</th>
              <td>
                <h6>
                  {`${(item.venue.location.distance / 1609.344).toFixed(2)}`}{' '}
                  <cite>miles</cite>
                </h6>
              </td>
            </tr>
            {this.state.showModal ? (
              <TrModal
                onClose={this.handleCloseModal}
                places={this.state.places}
              >
                {this.state.placeName}
              </TrModal>
            ) : null}
          </tbody>
        ));
      }
      return (
        <tbody key={place.id}>
          <tr className="table-secondary" onClick={this.handleTrClick}>
            <th scope="row">{place.name}</th>
            <td>
              <h6>
                {`${(place.location.distance / 1609.344).toFixed(2)}`}{' '}
                <cite>miles</cite>
              </h6>
            </td>
          </tr>
          {this.state.showModal ? (
            <TrModal onClose={this.handleCloseModal}>
              {this.state.placeName}
            </TrModal>
          ) : null}
        </tbody>
      );
    });

  render() {
    return <React.Fragment>{this.renderPlaces()}</React.Fragment>;
  }
}

Results.propTypes = {
  places: PropTypes.array,
  restaurant: PropTypes.array,
  coffee: PropTypes.array,
  bar: PropTypes.array,
  bank: PropTypes.array,
  park: PropTypes.array,
};
