import { statusUser, checkEmail } from '../lib/fireBase.js';
import { db, auth} from '../main.js';

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

  btnLogin.addEventListener('click', () => {
    const email = divElement.querySelector('#email').value;
    const password = divElement.querySelector('#password').value;
    const name = divElement.querySelector('#name').value;
    const nickName = divElement.querySelector('#nickName').value;
    const city = divElement.querySelector('#city').value;
    if (email.length == 0 || password.length == 0 || name.length == 0 || nickName.length==0 || city.length==0){
      alert("Completa los campos vacios");
    } else{
      auth.createUserWithEmailAndPassword(email, password).then(credencial=>{
        return db.collection('users').doc(credencial.user.uid).set({
          email,name,nickName,city})
      }).then(() => {      
        checkEmail();
      });
    }
    console.log(email, password);
    statusUser();
    location.hash = '#/home';
  });
  return divElement;
};
