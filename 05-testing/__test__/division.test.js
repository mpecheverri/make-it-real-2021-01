const { division } = require('./../modules/division');

describe('division', () => {
  test('2 numbers', () => {
    expect(division(5, 4)).toBe(1.25);
  });
  test('by zero', () => {
    expect(division(5, 0)).toBe('no se puede realizar');
  });
});
