/* global localStorage, location */

// utils declaration
import qs from 'query-string';

// redux declaration
import store from './redux/store';
import Actions from './redux/modules/actions';

let token = localStorage.getItem('instagramToken');
const queryParams = qs.parse(location.hash);
if (!token) {
  if (queryParams.access_token) {
    token = queryParams.access_token;
  }
}

if (queryParams.reset) {
  localStorage.removeItem('instagramToken');
  token = null;
}

if (token) {
  store.dispatch(Actions.app.setInstagramToken(token));
} else {
  const params = {
    client_id: '4b6584973eb34cbca4839d8ff1230759',
    redirect_uri: location.origin,
    response_type: 'token',
  };
  const origin = 'https://api.instagram.com/oauth/authorize/';
  location.href = `${origin}?${qs.stringify(params)}&scope=public_content+likes`;
}
