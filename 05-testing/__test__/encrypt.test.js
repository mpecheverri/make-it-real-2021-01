const { encrypt, decrypt } = require('./../modules/encrypt');

describe('encrypt', () => {
  test('encrypt message', () => {
    expect(encrypt(['Hola', 'Mundo'])).toBe('PEOVNBMPI');
  });
});
'hola esto es un ensayo'
