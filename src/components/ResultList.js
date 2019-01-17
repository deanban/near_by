import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { searchPlaces } from "./actions/SearchActions";

class ResultList extends Component {
  // static getDerivedStateFromProps(props, state) {
  //   if (
  //     props.coords !== state.prevCoords ||
  //     state.prevFilterByType !== state.filterByType
  //   ) {
  //     const prevCoords = props.coords;
  //     const prevFilterByType = state.filterByType;
  //     return {
  //       prevCoords,
  //       prevFilterByType
  //     };
  //   }
  //   return null;
  // }

  // componentDidUpdate(prevProps) {
  //   console.log("​ResultList -> componentDidUpdate -> prevProps", prevProps);
  //   const { coords, filterBy } = this.props;
  //   console.log();
  //   if (coords !== prevProps.coords) {
  //     searchPlaces(coords, null);
  //   }
  //   if (coords === prevProps.coords) {
  //     searchPlaces(coords, null);
  //   }
  //   if (filterBy !== prevProps.filterByType) {
  //     searchPlaces(null, filterBy);
  //   }
  // }
  // componentDidMount() {
  //   const { coords, filterBy, searchPlaces } = this.props;
  // }

  render() {
    const { address, coords, filterBy, searchPlaces } = this.props;
    searchPlaces(coords, filterBy);
    // console.log("resultList");
    return (
      <div className="content-area-right">
        <div className="input-group has-danger">
          <input
            type="search"
            className="form-control"
            id="filter"
            aria-describedby="filter-list"
            placeholder="Filter by name..."
          />
          <div className="input-group-append">
            <span className="input-group-text bg-transparent">
              <i className="fas fa-map-marker-alt" />
            </span>
          </div>
        </div>
        <table className="primary table table-hover">
          <thead>
            <tr>
              <th scope="col">
                {filterBy === null ? "Places" : filterBy.toUpperCase()} near{" "}
                {address.toUpperCase()}
              </th>
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
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    address: state.location.address,
    coords: state.location.coords,
    filterBy: state.filterBy.filterByType
  };
}

export default connect(
  mapStateToProps,
  { searchPlaces }
)(ResultList);
