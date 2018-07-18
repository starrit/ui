import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Notifications, FlexContainer } from '@gstarrltd/fragmented';
import CustomRoute from 'AppComponents/CustomRoute/';
import userActions from 'AppActions/user';
import notficationActions from 'AppActions/notifications';
import UploadMedia from 'AppComponents/UploadMedia';
import Auth from "./services/Auth";
import routes from './routes';
import styles from 'App.scss';
import {setUser} from './actions/user'


class App extends Component {
  constructor(props){
    super(props);
    this.auth = new Auth()
    this.state = {
      notifications: [],
      user:null
    };
  }


  componentDidMount(){
    if(this.auth.isAuthenticated()){
      const user = JSON.parse(JSON.stringify(localStorage))
      this.props.dispatch(setUser(user))
    }
  }

  render() {
    const { dispatch } = this.props
    return (
      <React.Fragment>
        <CustomRoute routes={routes}/>


        <UploadMedia />
        <Notifications
          notifications={this.props.notifications}
          hideNotification={this.props.hideNotification}
        />
      </React.Fragment>
    );
  }
}


const mapStateToProps = state => ({
  user: state.user,
  notifications: state.notifications,
});

const mapDispatchToProps = dispatch => ({
  hideNotification: id => dispatch(notficationActions.delete(id)),
  logout: () => dispatch(userActions.logout()),
  dispatch:dispatch
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

