import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { searchPlaces } from "./actions/SearchActions";

class ResultList extends Component {
  showPlaces() {
    for (let i = 0; i < arguments.length; i++) {
      if (arguments[i].length > 0) {
        arguments[i].forEach(arg => {
          // console.log(arg);
          if (arg.type && arg.type === "Recommended Places") {
            arg.items.forEach(item => {
              console.log(item.venue.name);
            });
          }
          console.log(arg.name);
        });
      }
    }
  }

  render() {
    const {
      address,
      filterBy,
      recommendedPlaces,
      restaurants,
      bars,
      parks
    } = this.props;
    return (
      <table className="primary table table-hover">
        <thead>
          <tr>
            <th scope="col">
              {filterBy === null ? "Places" : filterBy.toUpperCase()}
              {
                // eslint-disable-next-line
              }{" "}
              near
              {
                // eslint-disable-next-line
              }{" "}
              {address.toUpperCase()}
            </th>
            {this.showPlaces(recommendedPlaces, restaurants, bars, parks)}
            <th scope="col">Distance</th>
          </tr>
        </thead>
        <tbody>
          <tr className="table-primary">
            <th scope="row">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, enim.
            </th>
            <td>Column content</td>
          </tr>
          <tr className="table-secondary">
            <th scope="row">Lorem ipsum dolor sit amet consectetur.</th>
            <td>Column content</td>
          </tr>
          <tr className="table-primary">
            <th scope="row">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, enim.
            </th>
            <td>Column content</td>
          </tr>
        </tbody>
      </table>
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

export default connect(mapStateToProps)(ResultList);
