import keys from "../../keys/keys";

function fetchingPlaces() {
  return {
    type: "FETCHING_PLACES"
  };
}
function fetchingRestaurants() {
  return {
    type: "FETCHING_RESTAURANTS"
  };
}
function fetchingBars() {
  return {
    type: "FETCHING_BARS"
  };
}
function fetchingCoffee() {
  return {
    type: "FETCHING_COFFEE"
  };
}
function fetchingBanks() {
  return {
    type: "FETCHING_BANKS"
  };
}
function fetchingParks() {
  return {
    type: "FETCHING_PARKS"
  };
}
function fetchedPlaces(recommendedPlaces) {
  return {
    type: "FETCHED_PLACES",
    payload: recommendedPlaces
  };
}
function fetchedRestaurants(restaurants) {
  return {
    type: "SEARCH_FOR_RESTAURANTS",
    payload: restaurants
  };
}
function fetchedCoffee(coffee) {
  return {
    type: "SEARCH_FOR_COFFEE",
    payload: coffee
  };
}
function fetchedBars(bars) {
  return {
    type: "SEARCH_FOR_BARS",
    payload: bars
  };
}
function fetchedBanks(banks) {
  return {
    type: "SEARCH_FOR_BANKS",
    payload: banks
  };
}
function fetchedParks(parks) {
  return {
    type: "SEARCH_FOR_PARKS",
    payload: parks
  };
}

export const searchPlaces = (coords, filterByType) => async dispatch => {
  const version = new Date()
    .toISOString()
    .slice(0, 10)
    .replace(/-/g, "");

  if (coords !== null && filterByType !== null) {
    console.log("​coords !== null && filterByType !== null");

    const formattedCoords = Object.values(coords).join(",");
    if (filterByType === "restaurant") dispatch(fetchingRestaurants());
    if (filterByType === "coffee") dispatch(fetchingCoffee());
    if (filterByType === "bar") dispatch(fetchingBars());
    if (filterByType === "bank") dispatch(fetchingBanks());
    if (filterByType === "park") dispatch(fetchingParks());

    await fetch(
      `https://api.foursquare.com/v2/venues/search?ll=${formattedCoords}&client_id=${
        keys.foursq_client_id
      }&client_secret=${
        keys.foursq_client_secret
      }&query=${filterByType}&radius=350&limit=10&v=${version}`
    )
      .then(result => result.json())
      .then(jsonData => {
        // console.log("​jsonData", jsonData);

        if (filterByType === "restaurant")
          dispatch(fetchedRestaurants(jsonData.response.venues));
        if (filterByType === "coffee")
          dispatch(fetchedCoffee(jsonData.response.venues));
        if (filterByType === "bar")
          dispatch(fetchedBars(jsonData.response.venues));
        if (filterByType === "bank")
          dispatch(fetchedBanks(jsonData.response.venues));
        if (filterByType === "park")
          dispatch(fetchedParks(jsonData.response.venues));
      })
      .catch(err => console.log(err));
  }
  if (coords !== null && filterByType === null) {
    console.log("​coords !== null && filterByType === null");
    dispatch(fetchingPlaces());
    const formattedCoords = Object.values(coords).join(",");
    await fetch(
      `https://api.foursquare.com/v2/venues/explore?ll=${formattedCoords}&client_id=${
        keys.foursq_client_id
      }&client_secret=${
        keys.foursq_client_secret
      }&radius=350&limit=10&v=${version}`
    )
      .then(result => result.json())
      .then(jsonData => {
        // console.log("​jsonData", jsonData);
        dispatch(fetchedPlaces(jsonData.response.groups));
      })
      .catch(err => console.log(err));
  }
  if (coords === null && filterByType !== null) {
    console.log("​coords === null && filterByType !== null");
    console.log("You must provide an address");
  }
  if (coords === null && filterByType === null) {
    console.log("You must provide an address");
  }
};
