import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { searchPlaces } from "./actions/SearchActions";

class ResultList extends Component {
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
      // returning a snapshot just in case I want to use..⬇
      // componentDidUpdate in the future
      return recommendedPlaces;
    }
    if (prevProps.restaurants !== restaurants) {
      this.setState({ places: restaurants });
      // returning a snapshot just in case I want to use..⬇
      // componentDidUpdate in the future
      return restaurants;
    }
    if (prevProps.bars !== bars) {
      this.setState({ places: bars });
      // returning a snapshot just in case I want to use..⬇
      // componentDidUpdate in the future
      return bars;
    }
    if (prevProps.coffee !== coffee) {
      this.setState({ places: coffee });
      // returning a snapshot just in case I want to use..⬇
      // componentDidUpdate in the future
      return coffee;
    }
    if (prevProps.banks !== banks) {
      this.setState({ places: banks });
      // returning a snapshot just in case I want to use..⬇
      // componentDidUpdate in the future
      return banks;
    }
    if (prevProps.parks !== parks) {
      this.setState({ places: parks });
      // returning a snapshot just in case I want to use..⬇
      // componentDidUpdate in the future
      return parks;
    }

    return null;
  }

  showPlaces = () => {};

  render() {
    console.log("resultList State", this.state);
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
            {/* this.showPlaces(recommendedPlaces, restaurants, bars, parks) */}
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

ResultList.defaultProps = {
  recommendedPlaces: PropTypes.array,
  restaurants: PropTypes.array,
  coffee: PropTypes.array,
  bars: PropTypes.array,
  banks: PropTypes.array,
  parks: PropTypes.array
};

ResultList.propTypes = {
  address: PropTypes.string.isRequired,
  filterBy: PropTypes.string.isRequired,
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
