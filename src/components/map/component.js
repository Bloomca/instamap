import React, { Component, PropTypes } from 'react';

// utils declaration
import googlePromise from '../../utils/google-maps';

// styles declaration
import styles from './style.module.sass';

export default class Map extends Component {
  static propTypes = {
    getPhotos: PropTypes.func.isRequired,
    setLocation: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { getPhotos, setLocation } = this.props;

    googlePromise.then(google => {
      this.map = new google.maps.Map(this._mapRef, {
        // from here https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
        scrollwheel: false,
        disableDoubleClickZoom: true,
      });

      this.map.addListener('dblclick', (e) => {
        if (this.marker) {
          this.marker.setMap(null);
        }
        this.marker = new google.maps.Marker({
          position: e.latLng,
          map: this.map,
          title: 'Current Center!',
        });

        setLocation(e.latLng);
        getPhotos(e.latLng);
      });
    });
  }

  render() {
    return (
      <div className={styles.container} ref={node => this._mapRef = node} />
    );
  }
}
