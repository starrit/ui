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
import CaseCard from "../../components/CaseCard"
import styles from "./Home.scss"
import PrimaryNavBar from "../../layout/PrimaryNavigation";
import {FlexContainer} from "@gstarrltd/fragmented"
import Footer from "../../layout/Footer";

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
const HomepageHeading = ({ mobile }) => (
  <Container text>

    <Header
      as='h1'
      content='STARRIT ENGINEERING'
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
      }}
    />
    <Header
      as='h2'
      content='Austin local front end experts.'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
    <Button size='huge' color="orange">
      Get Started
      <Icon name='right arrow' />
    </Button>
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
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
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
            className={styles.heading}
          >

            <PrimaryNavBar fixed={this.state.fixed} vertical={false}/>
            <HomepageHeading />
          </Segment>
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
            <Segment
              inverted
              textAlign='center'
              style={{ minHeight: 350, padding: '1em 0em' }}
              vertical
            >
              <Container>
                 <PrimaryNavBar vertical fixed={false} handleToggle={()=>this.handleToggle()}/>
              </Container>
              <HomepageHeading mobile />
            </Segment>

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

const Home = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={7}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              <p className={styles["plain-text"]}>We Handle the UI, so you can get straight to business</p>
            </Header>
            <p className={styles["plain-text"]}>We know both sides of the fence, so we know the value of time. Let us off site your investment in resources by letting us build out a front-end that suites your needs. We focus on longevity, so we deliver code that integrates into your tech stack, your workflow and most importantly, can be handed off with confidence!</p>

            <Header as='h3' style={{ fontSize: '2em' }}>
              How do you know if you don't test?
            </Header>
            <p className={styles["plain-text"]}>Testing? Yeah we do that too! Well tested, both e2e and unit. As well as stylguide and realtime component visulaizations and testing utilities.</p>

          </Grid.Column>
          <Grid.Column floated='right' width={8}>
            <Image bordered rounded src='assets/images/js-animated.gif' />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>
            <Button size='huge'>Need more? Read More</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: '0em' }} vertical className={styles.accolades}>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }} color="orange">
              "We can integrate into your workflow!"
            </Header>
            <p className={styles["plain-text"]}>Remote or onsite. Agile or waterfall, We are flexible enough to fit into your workflow. Finally a company that's locally owned and fits the budget. Oh, and we delivery quality architecture that will earn your confidence.</p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}  color="orange">
              "You don't have to go to India!"
            </Header>
            <p className={styles["plain-text"]}>
              {/*<Image avatar src='/images/avatar/large/nan.jpg' />*/}
              Local, professional, and we deliver exactly what you need for your project
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Divider
      as='h4'
      className='header'
      horizontal
      style={{ margin: '3em 0em', textTransform: 'uppercase', color:"#207894" }}
    >
      Our Process
    </Divider>
    <Segment style={{ padding: '2em 0em' }} vertical>
      <Container text>
        <Header as='h3' style={{ fontSize: '2em' }}>
          Requirements change, deliverables change, timelines change. <Label color="orange">THAT'S A FACT</Label>
        </Header>
        <p className={styles["plain-text"]}>
          And so do we in pace with your project. This isn't our first rodeo, we communicate first, fail fast, and refactor often. We are highly available and aim high because we know you expect nothing less.
        </p>
        <Button as='a' size='large'>
          Our Process
        </Button>

        <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase', color:"#207894" }}
        >
          <a href='#'>Case Studies</a>
        </Divider>
      </Container>
      <Grid container centered columns={2}>
        <Grid.Column >
          <CaseCard
            imgSrc="assets/images/clients/bassministry/logo.png"
            status="ongoing project"
            subTitle="Austin Local EDM Community"
            title="Bassministry.com"
            link="http://www.bassministry.com"
          />
        </Grid.Column>
        <Grid.Column >
          <CaseCard
            imgSrc="assets/images/Uncle-Sam.jpg"
            status="future project"
            subTitle="Be our our next success story"
            title="Lets work together"
            link="#"
          />
        </Grid.Column>
      </Grid>


    </Segment>

    <Footer />
  </ResponsiveContainer>
)

export default Home