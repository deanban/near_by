import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Results extends Component {
  state = {
    places: []
  };

  // shouldComponentUpdate(nextProps, nextState) {
  //     console.log("​Results -> shouldComponentUpdate -> nextState", nextState);
  //     console.log("​Results -> shouldComponentUpdate -> nextProps", nextProps);

  //     console.log("​Results -> shouldComponentUpdate -> this.props", this.props);
  //     const vitalPropsChange = this.props.results.places !== nextProps.results.places;
  //     const vitalStateChange = this.state.places !== nextState.places;
  //     console.log("​Results -> shouldComponentUpdate -> vitalPropsChange", vitalPropsChange);
  //     console.log("​Results -> shouldComponentUpdate -> vitalStateChange", vitalStateChange);

  //     return vitalPropsChange || vitalStateChange;
  // }

  // shouldComponentUpdate(nextProp){
  //     if(nextProp.results.places !== this.state.places){
  //         return true;
  //     }
  //     if(nextProp.results.restaurant !== this.state.places){
  //         return true;
  //     }
  //     if(nextProp.results.coffee !== this.state.places){
  //         return true;
  //     }
  //     if(nextProp.results.bar !== this.state.places){
  //         return true;
  //     }
  //     if(nextProp.results.bank !== this.state.places){
  //         return true;
  //     }
  //     if(nextProp.results.parks !== this.state.places){
  //         return true;
  //     }
  //     return false;

  // }

  getSnapshotBeforeUpdate(prevProps) {
    console.log("​Results -> getSnapshotBeforeUpdate -> prevProps", prevProps);
    console.log(
      "​Results -> getSnapshotBeforeUpdate -> this.props",
      this.props
    );

    // const {places, restaurant, bar, bank, park, coffee} = this.props.results;

    if (prevProps.results.places !== this.props.results.places) {
      this.setState({ places: this.props.results.places });
    }
    if (prevProps.results.restaurant !== this.props.results.restaurant) {
      this.setState({ places: this.props.results.restaurant });
    }
    if (prevProps.results.bar !== this.props.results.bar) {
      this.setState({ places: this.props.results.bar });
    }
    if (prevProps.results.coffee !== this.props.results.coffee) {
      this.setState({ places: this.props.results.coffee });
    }
    if (prevProps.results.bank !== this.props.results.bank) {
      this.setState({ places: this.props.results.bank });
    }
    if (prevProps.results.park !== this.props.results.park) {
      this.setState({ places: this.props.results.park });
    }
  }

  render() {
    const { places } = this.state;
    // console.log("​Results -> render -> state", this.state);

    const venues = places.map((place, i) => {
      if (place.type || place.type === "Recommended Places") {
        return place.items.map((item, i) => (
          <tbody>
            <tr key={item.referralId} className="table-secondary">
              <th scope="row">{item.venue.name}</th>
              <td>{`${item.venue.location.distance / 1609.344} miles`}</td>
            </tr>
          </tbody>
        ));
      }
      return places.map((place, i) => (
        <tbody>
          <tr key={place.id} className="table-secondary">
            <th scope="row">{place.name}</th>
            <td>{`${place.location.distance / 1609.344} miles`}</td>
          </tr>
        </tbody>
      ));
    });
    return venues;
  }
}

Results.propTypes = {
  places: PropTypes.array,
  restaurant: PropTypes.array,
  coffee: PropTypes.array,
  bar: PropTypes.array,
  banks: PropTypes.array,
  parks: PropTypes.array
};
