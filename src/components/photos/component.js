import React, { Component, PropTypes } from 'react';

// components declaration
import Loader from '../loader';

// style declaration
import styles from './style.module.sass';

export default class Photos extends Component {
  static propTypes = {
    placeKey: PropTypes.string,
    photos: PropTypes.object.isRequired,
  };

  renderLoader() {
    return (
      <div className={styles.loader}>
        <Loader />
      </div>
    );
  }

  renderLocations(list) {
    return list.length === 0 ? (
      <div>
        <h3>
          {'Instamap application'}
        </h3>
        <article>
          <p>
            {`This application shows locations powered by Instagram API based on coordinates from
              Google Maps. To obtain list of locations nearby, dbclick at some point – values
              have integer precision rounded down. Initially the idea was to show photos based on
              chosen location, but due to severe restrictions of Instagram Sandbox API it is
              impossible (only data of your account is available). So, a lot of components,
              redux handlers are called photo-related, but in the last moment were changed
              to location.`}
          </p>
          <p>
            {`It uses React/Redux stack + Google maps + Instagram APIs. Also webpack, sass,
              css modules, ES2015, and other stuff. Linting mostly from airbnb. Results are stored
              inside Redux, so clicking back and forth won't cause new queries. `}
            <a href={'https://github.com/Bloomca/instamap'} target={'_blank'}>
              {'Github repository'}
            </a>
          </p>
        </article>
      </div>
    ) : list.slice(0, 15).map((item, i) => {
      if (item) {
        return (
          <div key={`${item.id}_${i}`} className={styles.element}>
            {item.name}
            <div className={styles.info}>
              {`latitude: ${Number(item.latitude).toFixed(2)},
              longitude: ${Number(item.longitude).toFixed(2)}`}
            </div>
          </div>
        );
      }

      return null;
    });
  }

  render() {
    const { placeKey, photos } = this.props;

    const placeData = photos[placeKey] || {};

    const { data = [], isFetching } = placeData;

    return (
      <div>
        {isFetching ? this.renderLoader() : this.renderLocations(data)}
      </div>
    );
  }
}
