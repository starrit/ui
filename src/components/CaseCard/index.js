import React, {Fragment} from 'react';
import {Header,
Image,
Button,
Card,
Grid,
  Icon
} from 'semantic-ui-react'
import PropTypes from 'prop-types'

import styles from "./Styles.scss";

const CaseCard = (props) => {
  return (
    <Fragment>
      <Card centered>
          <Image src={props.imgSrc} />

          <Card.Content>
            <Card.Header>
              <a href={props.link}>
                {props.title}
              </a>
            </Card.Header>
            <Card.Meta>
              <p className={styles["plain-text"]}>
                {props.subTitle}
              </p>
            </Card.Meta>


          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="cog" loading/>
              {props.status}
            </a>
          </Card.Content>
      </Card>

    </Fragment>
  );
};

CaseCard.propTypes = {
  imgSrc: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  status: PropTypes.string,
  link: PropTypes.string,
}

export default CaseCard;
