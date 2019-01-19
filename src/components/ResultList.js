import React, { Component } from "react";
import PropTypes from "prop-types";
import memoize from "memoize-one";

import { connect } from "react-redux";
import Results from "./Results";

class ResultList extends Component {
  state = {
    places: [],
    restaurant: [],
    bar: [],
    coffee: [],
    bank: [],
    park: []
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
      // returning a snapshot just in case I want to use..⬇
      // componentDidUpdate in the future
      return recommendedPlaces;
    }
    if (prevProps.restaurants !== restaurants) {
      this.setState({ restaurant: restaurants });
      // returning a snapshot just in case I want to use..⬇
      // componentDidUpdate in the future
      return restaurants;
    }
    if (prevProps.bars !== bars) {
      this.setState({ bar: bars });
      // returning a snapshot just in case I want to use..⬇
      // componentDidUpdate in the future
      return bars;
    }
    if (prevProps.coffee !== coffee) {
      this.setState({ coffee });
      // returning a snapshot just in case I want to use..⬇
      // componentDidUpdate in the future
      return coffee;
    }
    if (prevProps.banks !== banks) {
      this.setState({ bank: banks });
      // returning a snapshot just in case I want to use..⬇
      // componentDidUpdate in the future
      return banks;
    }
    if (prevProps.parks !== parks) {
      this.setState({ park: parks });
      // returning a snapshot just in case I want to use..⬇
      // componentDidUpdate in the future
      return parks;
    }

    return null;
  }

  render() {
    const { address, filterBy } = this.props;
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
            {/* this.showPlaces(recommendedPlaces, restaurants, bars, parks) */}
            <th scope="col">Distance</th>
          </tr>
        </thead>
        <Results results={this.state} />
      </table>
    );
  }
}

ResultList.defaultProps = {
  address: PropTypes.string,
  filterBy: PropTypes.string,
  recommendedPlaces: PropTypes.array,
  restaurants: PropTypes.array,
  coffee: PropTypes.array,
  bars: PropTypes.array,
  banks: PropTypes.array,
  parks: PropTypes.array
};

ResultList.propTypes = {
  address: PropTypes.string,
  filterBy: PropTypes.string,
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

export default connect(mapStateToProps)(ResultList);
