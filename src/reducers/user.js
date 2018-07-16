import actionTypes from 'constants/action-types';
import { combineReducers } from 'redux'
// The auth reducer. The starting state sets authentication
// based on a token being in local storage. In a real app,
// we would also want a util to check if the token is expired.
function auth(state = {
  isFetching: false,
  isAuthenticated: localStorage.getItem('idToken') ? true : false,
  user:null
}, action) {
  switch (action.type) {
    case actionTypes.user.LOGIN_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false,
        user: action.creds
      })
    case actionTypes.user.LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        errorMessage: ''
      })
    case actionTypes.user.LOGIN_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.message
      })
    case actionTypes.user.LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false
      })
    case actionTypes.user.UPDATE:
      return action.payload;
    default:
      return state
  }
}

// We combine the reducers here so that they
// can be left split apart above
const userReducers = combineReducers({
  auth
})

export default userReducers;
