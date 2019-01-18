import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { filter } from "rsvp";
import ResultList from "./ResultList";
import { searchPlaces } from "./actions/SearchActions";

class ResultContainer extends Component {
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
  componentDidMount() {
    const { coords, filterBy, searchPlaces } = this.props;
    // searchPlaces(coords, filterBy);
  }

  render() {
    const { address, coords, filterBy, searchPlaces } = this.props;

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
        <ResultList address={address} filterBy={filterBy} />
      </div>
    );
  }
}

ResultContainer.propTypes = {
  address: PropTypes.string.isRequired,
  coords: PropTypes.object,
  filterBy: PropTypes.string,
  searchPlaces: PropTypes.func.isRequired
};

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
)(ResultContainer);
