import actionTypes from 'constants/action-types';

const initialState = {
  shows: [],
  sortBy: null,
  view: 'grid'
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case actionTypes.shows.SET_SHOWS:
      return {
        ...state,
        shows: [].concat(payload)
      };
    case actionTypes.shows.ADD_SHOW:
      return {
        ...state,
        shows: [].concat(state.shows).push(payload)
      };
    case actionTypes.shows.SET_SHOWS_SORT:
      return {
        ...state,
        sortBy: payload
      };
    case actionTypes.shows.SET_VIEW:
      return {
        ...state,
        view: payload
      };
    default:
      return state;
  }
};
