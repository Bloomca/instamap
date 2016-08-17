import React, { Component } from 'react';

// components declaration
import Header from '../header';
import Footer from '../footer';
import Map from '../map';
import Photos from '../photos';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Map />
        <Photos />
        <Footer />
      </div>
    );
  }
}
