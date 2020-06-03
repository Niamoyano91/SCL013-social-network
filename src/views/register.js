import {authRegister, statusUser} from "../lib/fireBase.js";



export default () => {
  const views = `
  <!-- Inicio -->
  <div class="bodyBox">
        <div class="headerPrincipal">
          <header class="headerContent">
            <a class="logoPrincipal" href="#"><img id="logoPrincipal" src="img/logo2-01.png" alt="Logo app"></a>
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
            <a href="#" id=passRecover>¿Olvidaste tu contraseña?</a>
            </br>
            <a href="#" id="btnLogin" class="btnLogin">
              <span id="span1"></span>
              <span id="span2"></span>
              <span id="span3"></span>
              <span id="span4"></span>
              Registrar</a>
          </div>
        </div>
        <!--  -->
        <div class="bodyUserGoogle">
          <a href="#">Conectar con Google</a>
        </div>
        <div class="bodyUserRegistrar">
          <p id= "bodyUserRegistrar" >Nos encanta que estes aqui!!!! Tienes Cuenta?  </p> 
          <a href="#/home" id="register" > Ingresa AQUI!!! </a>
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

  btnLogin.addEventListener("click", () => {
    const email = divElement.querySelector("#email").value;
    const password = divElement.querySelector("#password").value;
    console.log(email, password);
    authRegister(email, password);
    statusUser();
  });

  return divElement;
};
