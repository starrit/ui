import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Label,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'
import ContactForm from "../../components/ContactForm"
import styles from "./Style.scss"
import PrimaryNavBar from "../../layout/PrimaryNavigation";
import {FlexContainer} from "@gstarrltd/fragmented"
import Footer from "../../layout/Footer";

class DesktopContainer extends Component {
  constructor(){
    super();
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
          <PrimaryNavBar fixed={false} vertical={false}/>
        </Visibility>

        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  constructor(props){
    super(props)
    this.state = {sidebarOpened:false}
    this.handleToggle = this.handleToggle.bind(this)
  }

  handlePusherClick(){
    const { sidebarOpened } = this.state

    if (sidebarOpened) this.setState({ sidebarOpened: false })
  }

  handleToggle(){ this.setState({ sidebarOpened: !this.state.sidebarOpened })}

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive {...Responsive.onlyMobile}>
        <Sidebar.Pushable>
          <Sidebar as={Menu} animation='uncover' inverted vertical visible={sidebarOpened}>

            <Menu.Item as='a'>
              <Image style={{display:'inline'}} size="small" src='assets/images/logo.png' />
            </Menu.Item>
            <Menu.Item as='a' active>
              Home
            </Menu.Item>
            <Menu.Item as='a'>Services</Menu.Item>
            <Menu.Item as='a'>Blog</Menu.Item>
            <Menu.Item as='a'>Contact Us</Menu.Item>
          </Sidebar>

          <Sidebar.Pusher
            dimmed={sidebarOpened}
            onClick={(e)=>{this.handlePusherClick(e)}}
            style={{ minHeight: '100vh' }}
          >
            <PrimaryNavBar vertical fixed={false} handleToggle={()=>this.handleToggle()}/>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
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
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const Contact = () => (
  <ResponsiveContainer>
    <ContactForm />
    <Footer/>
  </ResponsiveContainer>
)

export default Contact