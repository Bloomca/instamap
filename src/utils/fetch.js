/* global fetch */

import url from 'url';
import serializeQuery from './serialize-query';

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  return Promise
    .resolve()
    .then(() => response.json())
    .then(parsedResponse => {
      error.response = parsedResponse;
      throw error;
    });
}

function parseJSON(res) {
  return res.json();
}

export function get(uri, options) {
  const link = url.format({
    slashes: false,
    pathname: uri,
    search: serializeQuery(Object.assign({}, options)),
  });

  return fetch(link)
    .then(checkStatus)
    .then(parseJSON);
}
