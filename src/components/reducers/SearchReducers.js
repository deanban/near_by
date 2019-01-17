const initialState = {
  searchingForPlaces: false,
  isFetchingRestaurants: false,
  isFetchingCoffee: false,
  isFetchingBars: false,
  isFetchingBanks: false,
  isFetchingParks: false,

  recommendedPlaces: [],
  restaurants: [],
  fetchedRestaurants: false,
  coffee: [],
  fetchedCoffee: false,
  bars: [],
  fetchedBars: false,
  banks: [],
  fetchedBanks: false,
  parks: [],
  fetchedParks: false
};

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCHING_PLACES":
      return {
        ...state,
        searchingForPlaces: true
      };
    case "FETCHED_PLACES":
      return {
        ...state,
        recommendedPlaces: action.payload,
        searchingForPlaces: false
      };
    case "FETCHING_RESTAURANTS":
      return {
        ...state,
        isFetchingRestaurants: true
      };
    case "FETCHING_COFFEE":
      return {
        ...state,
        isFetchingCoffee: true
      };
    case "FETCHING_BARS":
      return {
        ...state,
        isFetchingBars: true
      };
    case "FETCHING_BANKS":
      return {
        ...state,
        isFetchingBanks: true
      };
    case "FETCHING_PARKS":
      return {
        ...state,
        isFetchingParks: true
      };
    case "SEARCH_FOR_RESTAURANTS":
      return {
        ...state,
        restaurants: action.payload,
        fetchedRestaurants: true
      };
    case "SEARCH_FOR_COFFEE":
      return {
        ...state,
        coffee: action.payload,
        fetchedCoffee: true
      };
    case "SEARCH_FOR_BARS":
      return {
        ...state,
        bars: action.payload,
        fetchedBars: true
      };
    case "SEARCH_FOR_BANKS":
      return {
        ...state,
        banks: action.payload,
        fetchedBanks: true
      };
    case "SEARCH_FOR_PARKS":
      return {
        ...state,
        parks: action.payload,
        fetchedParks: true
      };
    case "CLEAR_PLACES":
      return {
        ...state,
        recommendedPlaces: [],
        restaurants: [],
        coffee: [],
        bars: [],
        banks: [],
        parks: []
      };
    default:
      return state;
  }
}
