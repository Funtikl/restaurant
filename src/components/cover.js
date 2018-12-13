import React, { Component } from 'react';
import { Col, Media } from 'reactstrap';
import { Parallax } from 'react-scroll-parallax';
//styles
import styles from './main.module.css';

//modules



class Cover extends Component {
  render() {
    return (
      <Parallax
        className="custom-class"
        offsetYMax={10}
        offsetYMin={-40}
        slowerScrollRate={true}
        tag="figure"
    >
    <Media className={styles.coverPhoto} src={require('./images/cover.jpg')} />
    </Parallax>
  
    );
  }
}

export default Cover;
