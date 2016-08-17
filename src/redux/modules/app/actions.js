/* global localStorage */

import {
  SET_INSTAGRAM_TOKEN,
} from './constants';

export function setInstagramToken(token) {
  localStorage.setItem('instagramToken', token);
  return {
    type: SET_INSTAGRAM_TOKEN,
    payload: { token },
  };
}
