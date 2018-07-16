import actionTypes from 'constants/action-types';


function requestLogin(creds) {
  return {
    type: actionTypes.user.LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    creds,
  };
}

function receiveLogin(user) {
  return {
    type: actionTypes.user.LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    idToken: user.idToken,
  };
}

function loginError(message) {
  return {
    type: actionTypes.user.LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message,
  };
}


function requestLogout() {
  return {
    type: LOGOUT_REQUEST,
    isFetching: true,
    isAuthenticated: true,
  };
}

function receiveLogout() {
  return {
    type: LOGOUT_SUCCESS,
    isFetching: false,
    isAuthenticated: false,
  };
}


// Logs the user out
export function logoutUser() {
  return (dispatch) => {
    dispatch(requestLogout());
    localStorage.removeItem('idToken');
    localStorage.removeItem('accessToken');
    dispatch(receiveLogout());
  };
}

// Calls the API to get a token and
// dispatches actions along the way
export function loginUser(creds, dispatch) {
  console.log('loggingIn');
  const config = {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `username=${creds.username.value}&password=${creds.password.value}`,
  };


  dispatch(requestLogin(creds));

  return fetch('http://localhost:3001/sessions/create', config)
    .then(response => response.json().then(user => ({ user, response }))).then(({ user, response }) => {
      if (!response.ok) {
        // If there was a problem, we want to
        // dispatch the error condition
        console.log('response was bad');
        dispatch(loginError(user.message));
        return Promise.reject(user);
      }
      // If login was successful, set the token in local storage
      console.log("we're in");
      localStorage.setItem('idToken', user.idToken);
      localStorage.setItem('idToken', user.accessToken);
      const recLoginAction = receiveLogin(user);
      // Dispatch the success action

      dispatch(recLoginAction);
      dispatch(setUser(user));
    }).catch((err) => {
      console.log('Error: ', err);
      dispatch(loginError(err));
    });
}

export function setUser(user) {
  return {
    type: actionTypes.user.UPDATE,
    payload: user,
  };
}


export default {
  logout: () => {
    alert('Logging out from action');
    return {
      type: actionTypes.user.LOGOUT,
    };
  },
};

