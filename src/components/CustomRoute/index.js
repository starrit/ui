import React, {Component} from 'react';
import {Route, Switch, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import NotFound from '../Errors/notFound/index.js';

export function CustomRoute(props) {
  let count = 0;
  return (
    <Switch>
      {props.routes.map(route => (
        <Route
          key={count++}
          path={route.path}
          exact
          render={routeProps => {
            if (route.public || props.userLoggedIn) {
              return (
                <route.component
                  {...routeProps}
                  routes={route.routes}
                />
              );
            }
            return <Redirect to="/login" />;
          }}
        />
      ))}
      <Route component={NotFound} />
    </Switch>
  );
}

CustomRoute.defaultProps = {
  userLoggedIn: null
};
CustomRoute.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string,
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
  })).isRequired,
  userLoggedIn: PropTypes.any
};

const mapStateToProps = state => ({
  userLoggedIn: state.user
});

export default withRouter(connect(mapStateToProps)(CustomRoute));
