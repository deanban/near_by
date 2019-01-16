const initialState = {
  filterByType: ""
};

export default function filterReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_RADIO_FILTER":
      // return Object.assign({}, state, { filterBy: action.payload });
      return {
        ...state,
        filterByType: action.payload
      };
    default:
      return state;
  }
}
