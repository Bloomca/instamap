import test from 'ava';
import { resolveLatLng } from '../helpers';

test('should round correctly', t => {
  t.is(resolveLatLng({ lat: -45.03432, lng: 123.45532 }), '-45:123');
});
