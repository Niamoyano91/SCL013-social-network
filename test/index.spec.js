
import {
  validateInput, validateRegister, validatePassword, validateEmail, validatePasswordCharacters,
} from '../src/lib/validate.js';

describe('validateInput', () => {
  test('should be a function', () => {
    expect(typeof validateInput).toBe('function');
  });
  test('return false for inputs voids', () => {
    expect(validateInput('prueba@gmail.com', '')).toBe(false);
  });
  test('return true for inputs complets', () => {
    expect(validateInput('prueba@gmail.com', 'Ingresar9999')).toBe(true);
  });
});

describe('validateRegister', () => {
  test(' should be a function', () => {
    expect(typeof validateRegister).toBe('function');
  });
  test('return false for inputs voids ', () => {
    expect(validateRegister('prueba@gmail.com', '', '', '', 'Jess', '')).toBe(false);
  });
  test('return true for inputs complets ', () => {
    expect(validateRegister('prueba@gmail.com', 'Jess2020', 'Jess2020', 'Jessie', 'Jess', 'Angeles')).toBe(true);
  });
});

describe('validatePassword', () => {
  test(' should be a function', () => {
    expect(typeof validatePassword).toBe('function');
  });
  test('return false for passwords diferent ', () => {
    expect(validatePassword('Jess', 'Jess2020')).toBe(false);
  });
  test('return true for passwords equal ', () => {
    expect(validatePassword('Jess2020', 'Jess2020')).toBe(true);
  });
});

describe('validateEmail', () => {
  test('should be a function', () => {
    expect(typeof validateEmail).toBe('function');
  });
  test('should return true if its a valid email', () => {
    expect(validateEmail('admin@oldbeat.com')).toBe(true);
  });
  test('should return false if its an invalid email', () => {
    expect(validateEmail('admin.oldbeat2comnn')).toBe(false);
  });
});

describe('validatePasswordCharacters', () => {
  test('debería ser una función', () => {
    expect(typeof validatePasswordCharacters).toBe('function');
  });
  test('Deberia retornar false para password menor a 6 caracteres', () => {
    expect(validatePasswordCharacters('In251')).toBe(false);
  });
  test('Deberia retornar true para password de 6 o mas caracteres', () => {
    expect(validatePasswordCharacters('Ingresar9999')).toBe(true);
  });
});
