import React, {Component, Fragment} from 'react';
import loading from './loading.svg';
import Auth from "../../services/Auth"
import {connect} from "react-redux";
import {Icon} from "semantic-ui-react"
import {Redirect} from "react-router-dom"

class Callback extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.auth = new Auth(this.props.dispatch);
    this.auth.handleAuthentication(this.props.dispatch);
  }
  render() {
    const style = {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      height: '100vh',
      width: '100vw',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'black',
    }

    return (
      <div style={style}>

        {this.props.user.auth.accessToken  ?   <Redirect to="/dashboard"/> : <Fragment><h4>Logging In, You will be redirected...</h4><Icon name="sun" loading size="massive" /></Fragment>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
});


export default connect(mapStateToProps)(Callback);
//export default Callback;