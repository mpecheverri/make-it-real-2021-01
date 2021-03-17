const { division } = require('./../modules/division');

test('divide 2 numbers', () => {
  expect(division(5, 4)).toBe(1.25);
});
