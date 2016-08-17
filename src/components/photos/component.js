import React, { Component, PropTypes } from 'react';

export default class Photos extends Component {
  static propTypes = {
    placeKey: PropTypes.string,
    photos: PropTypes.object.isRequired,
  };

  renderLocations(list) {
    return list.map((item, i) => {
      if (item) {
        return (
          <div key={`${item.id}_${i}`}>
            {item.name}
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
        {isFetching ? 'LOADING' : this.renderLocations(data)}
      </div>
    );
  }
}
