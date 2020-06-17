/* eslint-disable import/no-cycle */
import { userLogin, statusUser, loginGoogle } from '../lib/fireBase.js';
import { validateInput } from '../lib/validate.js';


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
            <input type="email" id="email" class="email" placeholder="     Usuario">
            <p class="txtPassword"></p>
            <input type="password" id="password" class="password" placeholder="     Contraseña">
            </br>
            <a href="#/resetpassword" id=passRecover>¿Olvidaste tu contraseña?</a>
            </br>
            <a href="#/userPost" id="btnLogin" class="btnLogin">
              <span id="span1"></span>
              <span id="span2"></span>
              <span id="span3"></span>
              <span id="span4"></span>
              Iniciar sesión</a>
          </div>
        </div>
        <!--  -->
        <div class="bodyUserGoogle">
          
          <!-- Boton Google -->
          <a href="#" id='loginGoogle' class="buttonGoogle">
            <img src="img/favicon.ico">Conectar con
            <span class="G1">G</span>
            <span class="o1">o</span>
            <span class="o2">o</span>
            <span class="g2">g</span>
            <span class="l1">l</span>
            <span class="e1">e</span>
          </a>
        </div>
        <div class="bodyUserRegistrar">
          <p id= "bodyUserRegistrar" >¿No tienes una cuenta?</p> <a href="#/userRegister" id="register" > Regístrate </a>
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

  const btnGoogle = divElement.querySelector('#loginGoogle');


  btnLogin.addEventListener('click', (e) => {
    e.preventDefault();
    const email = divElement.querySelector('#email').value;
    const password = divElement.querySelector('#password').value;
    const valid = validateInput(email, password);

    if (valid === false) {
      alert('Por favor llenar los campos');
    } else {
      userLogin(email, password);
      statusUser();
      // eslint-disable-next-line no-undef
    }
  });

  btnGoogle.addEventListener('click', (e) => {
    e.preventDefault();
    loginGoogle();
  });

  return divElement;
};
