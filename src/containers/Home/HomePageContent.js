import React, { Fragment } from 'react';
import { Segment, Grid, Button, Image, Header } from 'semantic-ui-react';
import { FlexContainer } from '@gstarrltd/fragmented';
import ContentCarousel from '../../components/ContentCarousel';
import styles from './Home.scss';
import ArtistCard from "../../components/Cards/artist";

const HomePageContent = props =>
  (<Fragment>
    <ContentCarousel>
      <Grid columns={2} divided className={styles.carouselContent}>
        <Grid.Row stretched>
          <Grid.Column >
            <Segment style={{ overflow: 'hidden' }}>
              <Image rounded fluid src="assets/images/wireframe/placeholder-dj.jpg" />
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment style={{ overflow: 'hidden' }}>
              <Image rounded fluid src="assets/images/wireframe/placeholder-dj.jpg" />
            </Segment>
            <Segment style={{ overflow: 'hidden' }}>
              <Image rounded fluid src="assets/images/wireframe/placeholder-dj.jpg" />
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <div className={styles.carouselContent}>
        Hello
      </div>
    </ContentCarousel>
   </Fragment>);

export default HomePageContent;
