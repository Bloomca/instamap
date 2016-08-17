import test from 'ava';

import serializeQuery from '../serialize-query';

test('should serialize flat objects correctly', t => {
  const res = serializeQuery({
    first: '123',
    second: '456',
  });
  t.is(res, '?first=123&second=456');
});
