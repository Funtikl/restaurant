import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';

//components
import Header from './components/header';
import Cover from './components/cover.js';
import Info from './components/info.js';
import Menu from './components/menu.js';
import Gallery from './components/gallery.js';
import Footer from './components/footer.js';
import { ParallaxProvider } from 'react-scroll-parallax';
//styles
import './App.css';

//modules



class App extends Component {
  render() {
    return (
      <ParallaxProvider>
      <div className="App">
      <Container >
      <Header />
     <Cover />
     <Info />
      </Container>
      </div>
      </ParallaxProvider>
    );
  }
}

export default App;
