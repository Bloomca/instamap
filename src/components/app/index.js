import React from 'react';

// components declaration
import Header from '../header';
import Footer from '../footer';
import Map from '../map';
import Photos from '../photos';

// styles declaration
import styles from './style.module.sass';

export default function () {
  return (
    <div className={styles.flexContainer}>
      <Header />
      <div className={`mui-container ${styles.container}`}>
        <div className={'mui-row'}>
          <div className={'mui-col-md-6'}>
            <Map />
          </div>
          <div className={'mui-col-md-6'}>
            <Photos />
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}
