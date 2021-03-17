const { division } = require('./../modules/division');

beforeEach(() => {
  console.log(`beforeEach ${new Date().toLocaleString()}`);
});

afterEach(() => {
  console.log(`afterEach ${new Date().toLocaleString()}`);
});
describe('division', () => {
  test('2 numbers to be', () => {
    expect(division(5, 4)).toBe(1.25);
  });
  test('2 numbers not be', () => {
    expect(division(1, 1)).not.toBe(0);
  });
  test('by zero', () => {
    expect(division(5, 0)).toBe('no se puede realizar');
  });
});
