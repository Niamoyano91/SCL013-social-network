/* eslint-disable no-restricted-globals */
/* eslint-disable no-const-assign */
// eslint-disable-next-line import/no-cycle
import { auth } from '../main.js';
// Funcion Registrar Usuario
// export const authRegister = (email, password) =>
// firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         alert(errorMessage);
//       })
//       .then(function () {
//         checkEmail();
//       });

// Funcion Inicio de sesion de Usuario

export const statusUser = () => {
  auth.onAuthStateChanged((user) => {
    if (user) {
      // const displayName = user.displayName;
      const email = user.email;
      const emailVerified = user.emailVerified;
      // const photoURL = user.photoURL;
      // const isAnonymous = user.isAnonymous;
      // const uid = user.uid;
      // const providerData = user.providerData;
      // const name = user.name;
      if (emailVerified === false) {
        console.log('Email no Verificado');
        // eslint-disable-next-line no-alert
        alert('Debe verificar su correo antes de ingresar');
      } else {
        console.log('Email verificado');
        location.hash = '#/userPost';
        const txtVerificado = 'Email verificado';
        console.log(`Usuario Logueado ${email}, ${txtVerificado}`);
      }
    } else {
      console.log('Usuario NO Logueado');
    }
  });
};


export const logOut = () => auth.signOut();


export const checkEmail = () => {
  const user = auth.currentUser;
  user.sendEmailVerification().then(() => {
  }).catch(() => {
  });
};

// Funcion Inicio de sesion con Google
export const loginGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider).then((result) => {
    // The signed-in user info.
    const user = result.user;
    console.log(user);
    location.hash = '#/userPost';
  // ...
  });
  // .catch((error) => {
  // Handle Errors here.
  // const errorCode = error.code;
  // const errorMessage = error.message;
  // The email of the user's account used.
  // const email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  // const credential = error.credential;
  // ...
  // });
};

// Reseteo de contraseña
export const resetPassword = (emailAddress) => {
  auth.sendPasswordResetEmail(emailAddress).then(() => {
    // Email sent.
  }).catch(() => {
    // An error happened.
  });
};

// Funcion Inicio de sesion de Usuario
// eslint-disable-next-line max-len
export const userLogin = (email, password) => auth.signInWithEmailAndPassword(email, password).catch((error) => {
  // const errorCode = error.code;
  const errorMessage = error.message;
  alert(errorMessage);
});
