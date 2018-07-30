import PropTypes from 'prop-types'
import React, { Component, Fragment } from 'react'
import {Link} from "react-router-dom"
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Responsive,
  Label,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'
import styles from "./Services.scss"
import {FlexContainer} from "@gstarrltd/fragmented"
import Page from '../../layout/Page'

/* eslint-disable react/no-multi-comp */
/* Heads up! BlogHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
const BlogHeading = ({ mobile }) => (
  <Container text>

    <Header
      as='h1'
      content='Front end Blog'
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
      content='An Austin local front end expert.'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
    <Button as={Link} to="/contact" size='huge' color="orange">
      Let's talk shop.
      <Icon name='right arrow' />
    </Button>
  </Container>
)

BlogHeading.propTypes = {
  mobile: PropTypes.bool,
}


const Blog = () => (
  <Page>
    <Segment
      inverted
      textAlign='center'
      style={{ minHeight: 700, padding: '1em 0em' }}
      vertical
      className={styles.heading}
    >
      <BlogHeading/>
    </Segment>
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
    <Divider
      as='h4'
      className='header'
      horizontal
      style={{ margin: '3em 0em', textTransform: 'uppercase', color:"#207894" }}
    >
      Our Process
    </Divider>
  </Page>
)

export default Blog