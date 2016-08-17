import {
  PHOTOS_REQUEST,
  PHOTOS_SUCCESS,
  PHOTOS_FAILURE,
} from './constants';

const initialState = {
  /*
  [key: string]: interface ICollection {
    isFetching: boolean;
    lastUpdated: timestamp;
    data: Array<Location>;
    error: any;
  }
  */
};

export default function (state = initialState, action) {
  switch (action.type) {
    case PHOTOS_REQUEST:
      { // to declare variables safely
        const key = action.payload.key;
        return Object.assign({}, state, {
          [key]: Object.assign({}, state[key], {
            isFetching: true,
            data: [],
            lastUpdated: null,
          }),
        });
      }
    case PHOTOS_SUCCESS:
      {
        const key = action.payload.key;
        return Object.assign({}, state, {
          [key]: Object.assign({}, state[key], {
            isFetching: false,
            data: action.payload.data,
            lastUpdated: Date.now(),
          }),
        });
      }
    case PHOTOS_FAILURE:
      {
        const key = action.payload.key;
        return Object.assign({}, state, {
          [key]: Object.assign({}, state[key], {
            isFetching: false,
            error: action.error,
            lastUpdated: Date.now(),
          }),
        });
      }
    default:
      return state;
  }
}
