import { combineReducers } from 'redux';
import { default as app } from './app/reducer';
import { default as map } from './map/reducer';
import { default as photos } from './photos/reducer';

export default combineReducers({
  app,
  map,
  photos,
});
