import {
  PHOTOS_REQUEST,
  PHOTOS_SUCCESS,
  PHOTOS_FAILURE,
} from './constants';

// import * as API from '../../../utils/fetch';
import scriptRequest from '../../../utils/jsonp';

import { resolveLatLng } from '../../../utils/helpers';

export function getPhotos(params) {
  return (dispatch, getState) => {
    const { app: { token }, photos } = getState();

    const lat = params.lat();
    const lng = params.lng();
    const key = resolveLatLng({ lat, lng });

    const { isFetching, lastUpdated } = photos[key] || {};

    if (!isFetching && !lastUpdated) {
      dispatch({
        type: PHOTOS_REQUEST,
        payload: { key },
      });

      scriptRequest('https://api.instagram.com/v1/locations/search', {
        access_token: token,
        lat,
        lng,
        distance: 750,
      })
        .then(res => {
          dispatch({
            type: PHOTOS_SUCCESS,
            payload: { data: res.data, key },
          });
        })
        .catch(error => {
          dispatch({
            type: PHOTOS_FAILURE,
            payload: { key },
            error,
          });
        });
    }
  };
}
