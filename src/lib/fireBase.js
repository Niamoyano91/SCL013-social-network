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
    const photoURL = user.photoURL;
    const email = user.email;
    const emailVerified = user.emailVerified;
    let txtVerificado = '';
    if (photoURL !== null) {
      // let displayName = user.displayName;
      const imgPerfilSup = document.querySelector('.imgPerfil');
      // eslint-disable-next-line no-template-curly-in-string
      imgPerfilSup.setAttribute('src', `${photoURL}`);
      const imgPerfilInf = document.querySelector('.imgPerfilPostUser');
      // eslint-disable-next-line no-template-curly-in-string
      imgPerfilInf.setAttribute('src', `${photoURL}`);
      /* const photoURL = user.photoURL;
        const uid = user.uid;
        const name = user.name; */
    // eslint-disable-next-line eqeqeq
    } else if (photoURL === null) {
      // let displayName = user.displayName;
      const imgPerfilSup = document.querySelector('.imgPerfil');
      // eslint-disable-next-line no-template-curly-in-string
      imgPerfilSup.setAttribute('src', 'img/perfilUsuario.jpg');
      const imgPerfilInf = document.querySelector('.imgPerfilPostUser');
      // eslint-disable-next-line no-template-curly-in-string
      imgPerfilInf.setAttribute('src', 'img/perfilUsuario.jpg');
      /* const photoURL = user.photoURL;
            const uid = user.uid;
            const name = user.name; */
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
