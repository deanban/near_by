const initialState = {
  address: "",
  coords: null
};

export default function locationReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_ADDRESS":
      return {
        ...state,
        address: action.payload
      };
    case "SET_MERCATOR":
      return {
        ...state,
        coords: action.payload
      };
    default:
      return state;
  }
}
