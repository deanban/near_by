import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Results extends Component {
  state = {
    places: []
  };

  //   shouldComponentUpdate(nextProps, nextState) {

  //       const propsChange = this.props.results.places !== nextProps.results.places;
  //       const stateChange = this.state.places !== nextState.places;

  //       return propsChange;
  //   }

  //   componentDidUpdate(prevProps, prevState){
  //       console.log("​Results -> componentDidUpdate -> prevState", prevState);
  //       console.log("​Results -> componentDidUpdate -> prevProps", prevProps);
  //       console.log("​Results -> componentDidUpdate -> this.props", this.props);
  //       if (this.props.results !== prevProps.results){
  //           this.renderPlaces();
  //       }

  //   }

  getSnapshotBeforeUpdate(prevProps) {
    const { places, restaurant, bar, coffee, bank, park } = this.props.results;

    if (prevProps.results.places !== places) {
      this.setState({ places });
    }
    if (prevProps.results.restaurant !== restaurant) {
      this.setState({ places: restaurant });
    }
    if (prevProps.results.bar !== bar) {
      this.setState({ places: bar });
    }
    if (prevProps.results.coffee !== coffee) {
      this.setState({ places: coffee });
    }
    if (prevProps.results.bank !== bank) {
      this.setState({ places: bank });
    }
    if (prevProps.results.park !== park) {
      this.setState({ places: park });
    }
  }

  renderPlaces = () =>
    this.state.places.map((place, i) => {
      if (place.type || place.type === "Recommended Places") {
        return place.items.map((item, i) => (
          <tbody key={item.venue.id}>
            <tr className="table-secondary">
              <th scope="row">{item.venue.name}</th>
              <td>
                <h6>
                  {`${(item.venue.location.distance / 1609.344).toFixed(2)}`}{" "}
                  <cite>miles</cite>
                </h6>
              </td>
            </tr>
          </tbody>
        ));
      }
      return this.state.places.map((place, i) => (
        <tbody key={place.id}>
          <tr className="table-secondary">
            <th scope="row">{place.name}</th>
            <td>
              <h6>
                {`${(place.location.distance / 1609.344).toFixed(2)}`}{" "}
                <cite>miles</cite>
              </h6>
            </td>
          </tr>
        </tbody>
      ));
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
  banks: PropTypes.array,
  parks: PropTypes.array
};
