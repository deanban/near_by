import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

export class Filterby extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <div
        className="card border-primary mb-3"
        style={{ "max-width": "20rem" }}
      >
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
                />
                <span className="form-check-label">Restaurants</span>
              </label>
              <label className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadio"
                  value=""
                />
                <span className="form-check-label">Banks</span>
              </label>
              <label className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadio"
                  value=""
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

export default Filterby;
