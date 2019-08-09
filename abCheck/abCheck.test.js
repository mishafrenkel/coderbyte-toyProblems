const abCheck = require('./abCheck.js');

test('letters "a" and "b" occur 3 spaces apart', () => {
  expect(abCheck('acdeb')).toBe(true);
});