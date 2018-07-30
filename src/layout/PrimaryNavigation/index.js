import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Container,
  Image,
  Menu,
  Icon, Responsive, Visibility, Segment, Sidebar
} from 'semantic-ui-react'
import styles from "./Styles.scss"
import {Link,NavLink} from "react-router-dom"

const PrimaryMenu = (props) =>
  <Fragment>
    <Menu.Item  as={NavLink} to="/services" >Services</Menu.Item>
    <Menu.Item  as={NavLink} to="/blog" >Blog</Menu.Item>
    <Menu.Item as={NavLink} to="/contact">Contact us</Menu.Item>
    <Menu.Item position='right'>
      <Button as={NavLink} to="/contact" size="small" color="orange">
        Let's Connect
      </Button>

    </Menu.Item>
  </Fragment>

const HMenu = (props)=>{
  const {fixed} = props;
  return (
    <Menu
    {...props}
    fixed={fixed ? 'top' : null}
    inverted
    size='huge'
    as="ul"
    className={`${styles.navbar}`}>
      <Image
        as={Link}
        to="/"
        style={{"marginLeft": "1em", "marginTop": ".5em"}}
        floated='left'
        height="40px"
        src='assets/images/logo.png'
        size="small"
      />
      <PrimaryMenu />
    </Menu>)}

class DesktopContainer extends Component {
  constructor(props){
    super(props);
    this.state = {};
    this.hideFixedMenu = () => this.setState({ fixed: false })
    this.showFixedMenu = () => this.setState({ fixed: true })
  }

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive {...Responsive.onlyComputer}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            vertical
            className={styles.heading}
            style={{padding:"0"}}
          >

            <HMenu
              fixed={this.state.fixed}
              inverted
            />
          </Segment>
        </Visibility>
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}



const VMenu = (props)=>
  <Fragment>
    <PrimaryMenu size="large"/>
  </Fragment>

class MobileContainer extends Component {
  constructor(props){
    super(props)
    this.state = {visible:false}
    this.handleToggle = this.handleToggle.bind(this)
    this.handleSidebarHide = this.handleSidebarHide.bind(this)
  }

  handleSidebarHide(){ this.setState({ visible: false })}
  handleToggle(){
    console.log(this.state.visible)
    this.setState({ visible: !this.state.visible })
  }

  render() {
    const { visible } = this.state
    const {children} = this.props;
    return (
      <Responsive {...Responsive.onlyMobile}>
        <Menu className={styles.mobileNavbar}>
          <Button icon size="large" color="orange">
            <Icon onClick={this.handleToggle} name="bars" size="large"/>
          </Button>
        </Menu>

        <Sidebar
          as={Menu}
          animation='overlay'
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={visible}
          dimmed
          size='huge'
        >
          <Image as={Link} to="/" floated="left" src='assets/images/logo.png' />
          <Container>
            <VMenu
              handleToggle={this.handleToggle}
            />
          </Container>
        </Sidebar>
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>
      {children}
      </MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}



class PrimaryNavBar extends Component {
  constructor(props){
    super(props)
  }

  render() {
    const {fixed, vertical,children} = this.props

    return (
      <ResponsiveContainer >
        {children}
      </ResponsiveContainer>
    );
  }
}

PrimaryNavBar.propTypes = {};

export default PrimaryNavBar;
