import { SET_LOCATION } from './constants';

const initialState = {
  key: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_LOCATION:
      return Object.assign({}, state, {
        key: action.payload.key,
      });
    default:
      return state;
  }
}
