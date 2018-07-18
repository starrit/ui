import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Container,
  Image,
  Menu,
  Icon
} from 'semantic-ui-react'
import styles from "./Styles.scss"

const HMenu = (props)=>
  <Menu
    {...props}
    size='large'
    as="ul"
    className={styles.navbar}
>
  <Image  floated='left' height="40px" src='assets/images/logo.png' />
  <Container>

    <Menu.Item as='a' active>
      Home
    </Menu.Item>
    <Menu.Item as='a'>Services</Menu.Item>
    <Menu.Item as='a'>Blog</Menu.Item>
    <Menu.Item as='a'>Contact us</Menu.Item>
    <Menu.Item position='right'>
      <Button as='a' size="small" color="orange">
        Request a Quote
      </Button>

    </Menu.Item>
  </Container>
</Menu>


const VMenu = (props)=>
  <Menu inverted pointing size='large'>
  <Menu.Item onClick={()=>{
    props.handleToggle()
  }}>
    <Icon name='sidebar' />
  </Menu.Item>
  <Menu.Item position='right'>
    <Button as='a' inverted>
      Request A Quote
    </Button>
  </Menu.Item>
</Menu>

class PrimaryNavBar extends Component {
  constructor(props){
    super(props)
  }

  render() {
    const {fixed, vertical, style} = this.props
    return (


      <Fragment >
        {!vertical ? <HMenu fixed={fixed ? 'top' : null}
                            inverted
                            pointing={!fixed}
                            secondary={!fixed} />
                   :
                     <VMenu fixed={fixed} vertical={vertical} handleToggle={this.props.handleToggle}/>}

      </Fragment>
    );
  }
}

PrimaryNavBar.propTypes = {};

export default PrimaryNavBar;
