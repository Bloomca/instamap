import {
  SET_INSTAGRAM_TOKEN,
} from './constants';

const initialState = {
  error: null,
  token: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_INSTAGRAM_TOKEN:
      return Object.assign({}, state, {
        token: action.payload.token,
      });
    default:
      return state;
  }
}
