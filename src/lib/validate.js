export const validateInput = (email, password) => {
  if (email === '' || password === '') {
    return false;
  }
  return true;
};
