import React, { Component } from "react";
import PropTypes from "prop-types";

export default class RenderRestaurants extends Component {
  render() {
    const { restaurant } = this.props;
    console.log("​RenderRestaurants -> render -> restaurant", restaurant);
    let venues;

    if (restaurant.length > 0) {
      venues = restaurant.map((item, key) => (
        <tbody>
          <tr className="table-primary" key={item.referralID}>
            <th scope="row">{item.name}</th>
            <td>{key}</td>
          </tr>
        </tbody>
      ));
    }

    // const venues = places.map((place, key) => {
    //     if (place.type || place.type === "Recommended Places") {
    //         return place.items.map((item, key) => (
    //             <tbody>
    //                 <tr className="table-primary" key={item.referralID}>
    //                     <th scope="row">{item.venue.name}</th>
    //                     <td>{key}</td>
    //                 </tr>
    //             </tbody>
    //         ));
    //     }
    //     return this.props.places.map(place => (
    //         <tbody>
    //             <tr className="table-primary">
    //                 <th scope="row">{place.name}</th>
    //                 <td>Column content</td>
    //             </tr>
    //         </tbody>
    //     ));
    // });
    return venues;
  }
}

RenderRestaurants.propTypes = {
  restaurant: PropTypes.array.isRequired
};
