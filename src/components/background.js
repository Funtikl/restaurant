import React, { Component } from 'react';
import { Col, Media } from 'reactstrap';
import { Parallax } from 'react-scroll-parallax';
//styles
import styles from './main.module.css';

//modules



class Bg extends Component {
  render() {
    return (
      <Parallax
      offsetYMax={10}
      offsetYMin={-40}
      slowerScrollRate={true}
      tag="figure"
    >
    <Media className={styles.coverPhoto2} src={require('./images/2.jpg')} />

    </Parallax>
  
    );
  }
}

export default Bg;
