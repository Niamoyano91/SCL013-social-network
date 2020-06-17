/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
/* eslint-disable import/no-cycle */
import { statusUser, checkEmail } from '../lib/fireBase.js';
import { db, auth } from '../main.js';
import {
  validateRegister, validatePassword, validateEmail, validatePasswordCharacters,
} from '../lib/validate.js';

export default () => {
  const views = `
  <!-- Inicio -->
  <div class="bodyBox">
        <div class="headerPrincipal">
          <header class="headerContent">
            <a class="logoPrincipal" href="#"><img id="logoPrincipal" src="img/logo.png" alt="Logo app"></a>
          </header>
        </div>
        <!--  -->
        <div class="bodyUser">
          <div class="userlogin">
            <p class="txtUser"></p>
            <input type="email" id="email" class="email" placeholder="     Correo electronico">
            <p class="txtPassword"></p>
            <input type="password" id="password" class="password" placeholder="     Contraseña">
            <p class="txtPassword"></p>
            <input type="password" id="password2" class="password" placeholder="     Repite tu contraseña">
            <p class="txtUser"></p>
            <input type="email" id="name" class="email" placeholder="     Nombre">
            <p class="txtUser"></p>
            <input type="email" id="nickName" class="email" placeholder="     Nickname">
            <p class="txtUser"></p>
            <input type="email" id="city" class="email" placeholder="     Ciudad">
            <br>
            <a href="#" id="btnLogin" class="btnLogin">
              <span id="span1"></span>
              <span id="span2"></span>
              <span id="span3"></span>
              <span id="span4"></span>
              Registrar</a>
          </div>
        </div>
        <!--  -->
   
        <div class="registeredUser">
          <p id= "registeredUser">¿Tienes Cuenta?<a href="#/home" id="register" > Ingresa AQUI!!! </a></p> 
        </div>
        <!--  -->
        <div class="footer">
          <p>© min Corp.</p>
        </div>
      </div>
    </div>
    
      <!-- Fin -->
`;
  const divElement = document.createElement('div');
  divElement.innerHTML = views;

  const btnLogin = divElement.querySelector('#btnLogin');

  btnLogin.addEventListener('click', (event) => {
    event.preventDefault();
    const email = divElement.querySelector('#email').value;
    const password = divElement.querySelector('#password').value;
    const repitPassword = divElement.querySelector('#password2').value;
    const name = divElement.querySelector('#name').value;
    const nickName = divElement.querySelector('#nickName').value;
    const city = divElement.querySelector('#city').value;
    // eslint-disable-next-line no-undef
    const valid = validateRegister(email, password, repitPassword, name, nickName, city);
    // eslint-disable-next-line no-undef
    const validPassword = validatePassword(password, repitPassword);
    const validatePasswordCharactersp = validatePasswordCharacters(password);
    const validateEmailp = validateEmail(email);
    // eslint-disable-next-line no-bitwise
    if (valid === false & validPassword === false) {
      alert('Completa los campos vacios y contraseña incorrecta');
    // eslint-disable-next-line no-bitwise
    } else if (valid === true & validPassword === false) {
      alert('Contraseña incorrecta');
    // eslint-disable-next-line no-bitwise
    } else if (valid === false & validPassword === true) {
      alert('Completa los campos');
    } else if (validatePasswordCharactersp === false) {
      alert('Contraseña debe tener minimo 6 caracteres');
    } else if (validateEmailp === false) {
      alert('Email incorrecto');
    } else {
      auth.createUserWithEmailAndPassword(email, password).then((credencial) => {
        console.log('1', nickName);
        credencial.user.updateProfile({
          displayName: nickName,
        });
        db.collection('users').doc(credencial.user.uid).set({
          email, name, nickName, city,
        });
      }).then(() => {
        checkEmail();
        console.log('2', nickName);
        console.log('3', email);
      });
      // eslint-disable-next-line no-console
      console.log(email, password);
      statusUser();
      location.hash = '#/home';
    }
  });
  return divElement;
};
