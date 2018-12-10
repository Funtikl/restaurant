import React, { Component } from 'react';

//components
import Header from './components/header';
import Cover from './components/cover.js';
import Info from './components/info.js';
import Menu from './components/menu.js';
import Gallery from './components/gallery.js';
import Footer from './components/footer.js';

//styles
import './App.css';

//modules



class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
     <Cover />
     <Info />
     <Menu />
     <Gallery />
     <Footer />
      </div>
    );
  }
}

export default App;
