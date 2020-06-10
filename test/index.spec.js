import { validateInput } from '../src/lib/validate.js';

describe('validateInput', () => {
  test('debería ser una función', () => {
    expect(typeof validateInput).toBe('function');
  });
  test('Deberia retornar false para campos incompletos', () => {
    expect(validateInput('prueba@gmail.com', '')).toBe(false);
  });
  test('Deberia retornar true para campos completos', () => {
    expect(validateInput('prueba@gmail.com', 'Ingresar9999')).toBe(true);
  });
});
