import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ResultList from './ResultList';

class ResultContainer extends Component {
  render() {
    const { address, filterBy } = this.props;

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
};

function mapStateToProps(state) {
  return {
    address: state.location.address,
    coords: state.location.coords,
    filterBy: state.filterBy.filterByType,
  };
}

export default connect(
  mapStateToProps,
  null
)(ResultContainer);
