import { resetPassword } from "../lib/fireBase.js";

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
    <div class="bodyForgetPassword">
      <div class="textForgetPassword">
        <p class="textForgetPass">
            Por favor inserta la dirección de tu e-mail registrado a continuación para enviarte la información de recuperación de cuenta.
        </p>
        <input type="email" id="passRecover" class="email" placeholder="     E-mail">
        <button id="resetBtn" class="simpleBtn">enviar</button>
    
      </div>
    </div>
    <!--  -->
    <div class="footer">
      <p>© min Corp.</p>
    </div>
  </div>
    
      <!-- Fin -->
	`;
  const divElement = document.createElement("div");
  divElement.innerHTML = views;

  const resetButton = divElement.querySelector("#resetBtn");
  console.log(resetButton);
  resetButton.addEventListener("click", () => {
    const emailAddress = divElement.querySelector("#passRecover").value;
    resetPassword(emailAddress);
  });

  return divElement;



}; 