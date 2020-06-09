// Funcion Registrar Usuario
/*export const authRegister = (email, password) =>
firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
      })
      .then(function () {
        checkEmail();
      });*/

// Funcion Inicio de sesion de Usuario

export const statusUser = () => {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      var name = user.name;
      var txtVerificado = "";
      if (emailVerified === false) {
        console.log("Email no Verificado");
        txtVerificado = "Email no verificado";
        alert('Debe verificar su correo antes de ingresar');
      } else {
        console.log("Email verificado");
        location.hash = "#/userPost";
        txtVerificado = "Email verificado";
        console.log(`Usuario Logueado ${email}, ${txtVerificado}`);
      }
    } else {
      console.log("Usuario NO Logueado ");
    }
  });
};


export const logOut = () => firebase.auth().signOut();


export const checkEmail = () =>{
        var user = firebase.auth().currentUser;
        user.sendEmailVerification().then(function () {
        }).catch(function (error) {
        });
 }

 //Funcion Inicio de sesion con Google
 export const loginGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
 }



/*export const loginGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function (result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      console.log("token del usuario ", token);
      // The signed-in user info.
      var user = result.user;
      console.log("usuario google ", user);
      // ...
      location.hash = '#/userPost';
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      console.log("Error Codigo ", errorCode);
      var errorMessage = error.message;
      console.log("Mensaje de error ", errorMessage);
      // The email of the user's account used.
      var email = error.email;
      console.log("Email ingresado ", email);
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      console.log("credencial ", credential);
      // ...
    });
};*/

// Reseteo de contraseña
export const resetPassword = (emailAddress) => { 
  firebase.auth().sendPasswordResetEmail(emailAddress).then(function() {
    // Email sent.
  }).catch(function(error) {
    // An error happened.
  });
  
}

//Funcion Inicio de sesion de Usuario
export const userLogin = (email, password) =>
firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);
});
