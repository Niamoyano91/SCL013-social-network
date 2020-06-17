/* eslint-disable space-before-blocks */
/* eslint-disable no-empty */
export const validateInput = (email, password) => {
  if (email === '' || password === '') {
    return false;
  }
  return true;
};

export const validateRegister = (email, password, repitPassword, name, nickName, city) => {
  // eslint-disable-next-line max-len
  if (email.length === 0 || password.length === 0 || repitPassword.length === 0 || name.length === 0 || nickName.length === 0 || city.length === 0) {
    return false;
  }
  return true;
};

export const validatePassword = (password, repitPassword) => {
  // eslint-disable-next-line eqeqeq
  if (password !== repitPassword){
    return false;
  }
  return true;
};

export const validateEmail = (email) => {
  if (/^\S+@\S+$/.test(email)) {
    return true;
  }
  return false;
};

// Validar cantidad de caracteres del Password
export const validatePasswordCharacters = (password) => {
  if (password.length < 6) {
    return false;
  }
  return true;
};

// validar Campo Vacio del txtarea
export const validateTxtPostArea = (txt) => {
  if (txt.length === 0) {
    return false;
  }
  return true;
};
