import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Search from './Search';
import { setRadioFilter } from '../actions/FilterActions';
import { searchPlaces } from '../actions/SearchActions';

export class Filterby extends Component {
  handleRadioButton = event => {
    const { setRadioFilter, searchPlaces, coords } = this.props;
    const filterBy = event.target.value;
    setRadioFilter(filterBy);
    searchPlaces(coords, filterBy);
  };

  render() {
    return (
      <div className="card border-primary mb-3" style={{ maxWidth: '20rem' }}>
        <article className="card-group-item">
          <header className="card-header">
            <h5 className="title">Filter by type </h5>
          </header>

          <div className="filter-content">
            <div className="card-body ">
              <label className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadio"
                  value="restaurant"
                  onClick={this.handleRadioButton}
                />
                <span className="form-check-label">Restaurants</span>
              </label>
              <label className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadio"
                  value="coffee"
                  onClick={this.handleRadioButton}
                />
                <span className="form-check-label">Coffee</span>
              </label>
              <label className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadio"
                  value="bar"
                  onClick={this.handleRadioButton}
                />
                <span className="form-check-label">Bars</span>
              </label>
              <label className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadio"
                  value="bank"
                  onClick={this.handleRadioButton}
                />
                <span className="form-check-label">Banks</span>
              </label>
              <label className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadio"
                  value="park"
                  onClick={this.handleRadioButton}
                />
                <span className="form-check-label">Parks</span>
              </label>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  coords: state.location.coords,
});

export default connect(
  mapStateToProps,
  { setRadioFilter, searchPlaces }
)(Filterby);
