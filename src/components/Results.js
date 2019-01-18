import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Results extends Component {
  render() {
    const venues = this.props.places.map(place => {
      if (place.type || place.type === "Recommended Places") {
        return place.items.map((item, key) => (
          <tbody>
            <tr className="table-primary">
              <th scope="row">{item.venue.name}</th>
              <td>Column content</td>
            </tr>
          </tbody>
        ));
      }
      return this.props.places.map(place => (
        <tbody>
          <tr className="table-primary">
            <th scope="row">{place.name}</th>
            <td>Column content</td>
          </tr>
        </tbody>
      ));
    });
    return venues;
  }
}
