const alphabetSoup = require('./alphabetSoup.js');

describe('test suite', function () {

  test('returning string sorted alphabetically', () => {
    const test1 = alphabetSoup('coderbyte');
    expect(test1).toMatch('bcdeeorty');
  });

  test('returning string sorted alphabetically', function () {
    const test2 = alphabetSoup('hooplah');
    expect(test2).toMatch('ahhloop');
  });
});
