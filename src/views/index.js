import { userLogin, statusUser, loginGoogle } from "../lib/fireBase.js";

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
            <a href="#" id="btnLogin" class="btnLogin">
              <span id="span1"></span>
              <span id="span2"></span>
              <span id="span3"></span>
              <span id="span4"></span>
              Iniciar sesión</a>
          </div>
        </div>
        <!--  -->
        <div class="bodyUserGoogle">
          <a href="#" id='loginGoogle'><img id="logoGoogle" src="img/google.png" alt="imagen iniciar sesion google"></a>
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
  const divElement = document.createElement("div");
  divElement.innerHTML = views;

  const btnLogin = divElement.querySelector("#btnLogin");
  const btnGoogle= divElement.querySelector("#loginGoogle");
  const resetPassword = divElement.querySelector("#passRecover");

  btnLogin.addEventListener("click", () => {
    const email = divElement.querySelector("#email").value;
    const password = divElement.querySelector("#password").value;
    userLogin(email, password);
    statusUser();
    //location.hash ='#/userProfile';
  });

  btnGoogle.addEventListener("click", () => {
    loginGoogle();
    //location.hash ='#/userProfile';
  });

  return divElement;

  


}; 