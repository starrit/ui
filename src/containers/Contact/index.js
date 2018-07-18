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
import {Link} from "react-router-dom";
import {requestQuote} from "../../services/quoteRequest.service";

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
            <Menu.Item as={Link} to="/" active>
              Home
            </Menu.Item>
            <Menu.Item as={Link} to="/services">Services</Menu.Item>
            <Menu.Item as={Link} to="/blog">Blog</Menu.Item>
            <Menu.Item as={Link} to="/contact">Contact Us</Menu.Item>
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

class Contact extends Component{
  constructor(props){
    super(props)
    this.makeRequest= this.makeRequest.bind(this);
    this.state={
      isLoading:false,
      success:false
    }
  }


  makeRequest(e){
    this.setState({isLoading:true})
    e.preventDefault()
    const {firstName,lastName,companyName,email, phone} = e.target.elements;
    requestQuote("http://localhost:1337/requestQuote", {
      firstName:firstName.value,
      lastName:lastName.value,
      companyName:companyName.value,
      phone:phone.value,
      email:email.value,
      body:body.value
    }).then((response)=>{
      this.setState({isLoading:false, success:true})
    }).catch((err)=>{
      this.setState({isLoading:false, hasErrors:err})
    })
  }
  render(){
    return(
      <ResponsiveContainer>
        <ContactForm hasErrors={this.state.hasErrors} success={this.state.success} isLoading={this.state.isLoading} onSubmit={this.makeRequest}/>
        <Footer/>
      </ResponsiveContainer>
    )
  }
}



export default Contact