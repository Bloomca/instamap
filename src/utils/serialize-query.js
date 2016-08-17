import { isArray, isObject } from 'lodash';

/**
 * serializeQuery – serializes query object with nested values
 * @param {Object} object – object with arbitrary fields.
 * One-level nesting arrays and objects are appropriate
 * @returns {String} result search query with preceding '?' if needed
 */
export default function serializeQuery(object) {
  const queryString = Object.keys(object).reduce((result, key) => {
    const value = object[key];

    if (isArray(value)) {
      value.forEach(nestedValue => {
        result.push(`${encodeURIComponent(key)}[]=${encodeURIComponent(nestedValue)}`);
      });
    } else if (isObject(value)) {
      Object.keys(value).forEach(nestedKey => {
        const resultValue = encodeURIComponent(value[nestedKey]);
        result.push(`${encodeURIComponent(key)}[${nestedKey}]=${resultValue}`);
      });
    } else if (value !== null) {
      result.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
    }

    return result;
  }, []).join('&');

  return queryString ? `?${queryString}` : '';
}
