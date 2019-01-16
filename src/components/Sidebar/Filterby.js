import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Search from "./Search";
import { setRadioFilter } from "../actions/FilterActions";

export class Filterby extends Component {
  handleRadioButton = event => {
    const { setRadioFilter } = this.props;
    const filterBy = event.target.value;
    setRadioFilter(filterBy);
  };

  render() {
    return (
      <div className="card border-primary mb-3" style={{ maxWidth: "20rem" }}>
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
                  value="restaurants"
                  onClick={this.handleRadioButton}
                />
                <span className="form-check-label">Restaurants</span>
              </label>
              <label className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadio"
                  value="banks"
                  onClick={this.handleRadioButton}
                />
                <span className="form-check-label">Banks</span>
              </label>
              <label className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadio"
                  value="parks"
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

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

export default connect(
  null,
  { setRadioFilter }
)(Filterby);
