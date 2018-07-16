import React, {Component} from 'react';
import {FlexContainer} from '@gstarrltd/fragmented';
import styles from './style.scss';

export default class NotFound extends Component {
  render() {
    return <FlexContainer alignItems="center"  alignContent="center" direction="row" className={styles.notFound}><span><h1>BOOOM!</h1>Now what did you do?! <br /><p>Go Back and try again!</p></span></FlexContainer>;
  }
}
