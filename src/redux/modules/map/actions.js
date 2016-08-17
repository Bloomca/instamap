import {
  SET_LOCATION,
} from './constants';

import { resolveLatLng } from '../../../utils/helpers';

export function setLocation(params) {
  const lat = params.lat();
  const lng = params.lng();
  const key = resolveLatLng({ lat, lng });

  return {
    type: SET_LOCATION,
    payload: { key },
  };
}
