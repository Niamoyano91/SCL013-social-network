/* eslint-disable no-use-before-define */
/* eslint-disable no-shadow */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */
/* eslint-disable spaced-comment */
/* eslint-disable import/no-cycle */
import { logOut, statusUser } from '../lib/fireBase.js';
import { db, auth } from '../main.js';
import { validateTxtPostArea } from '../lib/validate.js';

// ------------------------------------------------------------------------------------
// Crea TODOS los elementos & muestra en pantalla
// ------------------------------------------------------------------------------------
export default () => {
  const views = /*html*/ `
  <!-- Menu superior -->
<nav class='nav-flex'>
  <a class='logo' id='home' href='#'><img id='logo-oldbeat' src='img/logo.png' alt=''></a>

  <ul class='navigation'>
    
      <div class='divImgPerfilUser'>
        <img class='imgPerfil'>
      </div>
    
    <li><a id='btnLogOut' href='#/home'>Cerrar Sesion</a></li>

  </ul>
</nav>
<!-- Contenido del sitio -->
<div class='body-container' id='body-container'>
  <section class='home-timeline'>
    <section class='home-publisharea'>
      <div class='divImgPerfilPostUser'>
        <img class='imgPerfilPostUser'>
      </div>
      <!-- contiene el texto y boton de publicar -->
      <form class='home-publishPost'>
        <section class='upContent'>
          <textarea id='txtArea' name='txtArea' maxlength='300' data-resizable='true'
            placeholder=' ¿Qué estás pensando?'></textarea>
        </section>
        <section class='downContent'>
          <div class='iconContent'>
            <span></span>
          </div>
          <button id='btnSendContent' name='btnSend' class='btnSendContent'>Publicar</button>
        </section>
      </form>
    </section>
    <!-- botón editar dinamico -->
    <div class='btnEditHidden'>
      <button style='visibility:hidden' id='btnEditContent' name='btnEdit' class='btnEditContent'>Editar</button>
    </div>
    <!-- feed con posts -->
    <div class='contentPost'>
      <ul id='contentPost'></ul>
    </div>
  </section>
  
  <!--control-->

<div class="control">
    <a href="#/userPost" id="home">
    <svg class="icon icon-home"><use xlink:href="#icon-home"></use>
    <symbol id="icon-home" viewBox="0 0 26 28">
        <path d="M22 15.5v7.5c0 0.547-0.453 1-1 1h-6v-6h-4v6h-6c-0.547 0-1-0.453-1-1v-7.5c0-0.031 0.016-0.063 0.016-0.094l8.984-7.406 8.984 7.406c0.016 0.031 0.016 0.063 0.016 0.094zM25.484 14.422l-0.969 1.156c-0.078 0.094-0.203 0.156-0.328 0.172h-0.047c-0.125 0-0.234-0.031-0.328-0.109l-10.813-9.016-10.813 9.016c-0.109 0.078-0.234 0.125-0.375 0.109-0.125-0.016-0.25-0.078-0.328-0.172l-0.969-1.156c-0.172-0.203-0.141-0.531 0.063-0.703l11.234-9.359c0.656-0.547 1.719-0.547 2.375 0l3.813 3.187v-3.047c0-0.281 0.219-0.5 0.5-0.5h3c0.281 0 0.5 0.219 0.5 0.5v6.375l3.422 2.844c0.203 0.172 0.234 0.5 0.063 0.703z"></path>
        </symbol>             
    </svg><p class='title-home'>Timeline</p>
    </a>
    <a href="#/" id="events">
        <svg class="icon icon-calendar"><use xlink:href="#icon-calendar"></use>
    <symbol id="icon-calendar" viewBox="0 0 26 28">
        <path d="M2 26h4.5v-4.5h-4.5v4.5zM7.5 26h5v-4.5h-5v4.5zM2 20.5h4.5v-5h-4.5v5zM7.5 20.5h5v-5h-5v5zM2 14.5h4.5v-4.5h-4.5v4.5zM13.5 26h5v-4.5h-5v4.5zM7.5 14.5h5v-4.5h-5v4.5zM19.5 26h4.5v-4.5h-4.5v4.5zM13.5 20.5h5v-5h-5v5zM8 7v-4.5c0-0.266-0.234-0.5-0.5-0.5h-1c-0.266 0-0.5 0.234-0.5 0.5v4.5c0 0.266 0.234 0.5 0.5 0.5h1c0.266 0 0.5-0.234 0.5-0.5zM19.5 20.5h4.5v-5h-4.5v5zM13.5 14.5h5v-4.5h-5v4.5zM19.5 14.5h4.5v-4.5h-4.5v4.5zM20 7v-4.5c0-0.266-0.234-0.5-0.5-0.5h-1c-0.266 0-0.5 0.234-0.5 0.5v4.5c0 0.266 0.234 0.5 0.5 0.5h1c0.266 0 0.5-0.234 0.5-0.5zM26 6v20c0 1.094-0.906 2-2 2h-22c-1.094 0-2-0.906-2-2v-20c0-1.094 0.906-2 2-2h2v-1.5c0-1.375 1.125-2.5 2.5-2.5h1c1.375 0 2.5 1.125 2.5 2.5v1.5h6v-1.5c0-1.375 1.125-2.5 2.5-2.5h1c1.375 0 2.5 1.125 2.5 2.5v1.5h2c1.094 0 2 0.906 2 2z"></path>
        </symbol>
    </svg><p class='title-events'>Eventos</p>
    </a>
    <a href="#/userPost" id="newpost">
    <svg class="icon icon-plus"><use xlink:href="#icon-plus"></use>
    <symbol id="icon-plus" viewBox="0 0 22 28">
        <path d="M22 11.5v3c0 0.828-0.672 1.5-1.5 1.5h-6.5v6.5c0 0.828-0.672 1.5-1.5 1.5h-3c-0.828 0-1.5-0.672-1.5-1.5v-6.5h-6.5c-0.828 0-1.5-0.672-1.5-1.5v-3c0-0.828 0.672-1.5 1.5-1.5h6.5v-6.5c0-0.828 0.672-1.5 1.5-1.5h3c0.828 0 1.5 0.672 1.5 1.5v6.5h6.5c0.828 0 1.5 0.672 1.5 1.5z"></path>
        </symbol>
    </svg>
    </a>
    <a href="#/" id="search">
    <svg class="icon icon-search"><use xlink:href="#icon-search"></use>
    <symbol id="icon-search" viewBox="0 0 26 28">
        <path d="M18 13c0-3.859-3.141-7-7-7s-7 3.141-7 7 3.141 7 7 7 7-3.141 7-7zM26 26c0 1.094-0.906 2-2 2-0.531 0-1.047-0.219-1.406-0.594l-5.359-5.344c-1.828 1.266-4.016 1.937-6.234 1.937-6.078 0-11-4.922-11-11s4.922-11 11-11 11 4.922 11 11c0 2.219-0.672 4.406-1.937 6.234l5.359 5.359c0.359 0.359 0.578 0.875 0.578 1.406z"></path>
        </symbol>
    </svg>
    </a>
    <a href="#/userProfile" id="profile">
    <svg class="icon icon-user"><use xlink:href="#icon-user"></use>
    <symbol id="icon-user" viewBox="0 0 20 28">
        <path d="M20 21.859c0 2.281-1.5 4.141-3.328 4.141h-13.344c-1.828 0-3.328-1.859-3.328-4.141 0-4.109 1.016-8.859 5.109-8.859 1.266 1.234 2.984 2 4.891 2s3.625-0.766 4.891-2c4.094 0 5.109 4.75 5.109 8.859zM16 8c0 3.313-2.688 6-6 6s-6-2.688-6-6 2.688-6 6-6 6 2.688 6 6z"></path>
        </symbol>
    </svg><p class='title-user'>Perfil</p>
    </a>

  </div>
</div>
<!-- Fin -->`;

  const body = document.body;
  body.setAttribute('class', 'bodyPost');
  body.setAttribute('overflow', 'visible');

  const divElement = document.createElement('div');
  divElement.innerHTML = views;
  const postList = divElement.querySelector('#contentPost');
  // ------------------------------------------------------------------------------------
  // Crea TODOS los elementos de cada Documento
  // ------------------------------------------------------------------------------------
  const renderMusic = (doc) => {
    const li = document.createElement('li');
    const description = document.createElement('span');
    const nameAuthor = document.createElement('p');
    const deleteX = document.createElement('img');
    const edit = document.createElement('img');
    const likeBtn = document.createElement('i');
    const likeCounter = document.createElement('p');
    const date = document.createElement('p');

    li.setAttribute('data-id', doc.id);
    li.setAttribute('class', 'postContentLi');
    nameAuthor.textContent = doc.data().author;
    nameAuthor.setAttribute('class', 'author-name');
    deleteX.setAttribute('src', './img/trash-alt-regular.svg');
    deleteX.setAttribute('class', 'cerrar');
    description.textContent = doc.data().descripcion;
    description.setAttribute('id', 'description');
    edit.setAttribute('id', `${doc.data().user}`);
    edit.setAttribute('class', 'btnEdit');
    edit.setAttribute('src', './img/edit-solid.svg');
    likeBtn.setAttribute('id', `likeButton${doc.id}`);
    likeBtn.setAttribute('class', 'fa fa-thumbs-up');
    likeCounter.textContent = `${doc.data().likes} likes`;
    likeCounter.setAttribute('class', 'counter-text');
    date.textContent = `${doc.data().fecha}`;
    date.setAttribute('class', 'datePost');

    if (doc.data().author === null) {
      nameAuthor.textContent = '(Usuario Eliminado!!!)';
    }
    li.appendChild(date);
    li.appendChild(nameAuthor);
    li.appendChild(description);
    li.appendChild(likeBtn);
    li.appendChild(likeCounter);

    if (doc.data().user === auth.currentUser.uid) {
      li.appendChild(deleteX);
      li.appendChild(edit);
    }

    postList.appendChild(li);

    // ------------------------------------------------------------------------------------
    // Borrar publicacion
    // ------------------------------------------------------------------------------------
    deleteX.addEventListener('click', (e) => {
      e.stopPropagation();
      const confirmDelete = confirm('¿Está seguro de eliminar?');
      if (confirmDelete) {
        const id = e.target.parentElement.getAttribute('data-id');
        db.collection('publicaciones').doc(id).delete();
      }
    });
    // ------------------------------------------------------------------------------------
    // Editar Documento
    // ------------------------------------------------------------------------------------
    edit.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = doc.id;
      const descrip = doc.data().descripcion;
      document.getElementById('txtArea').value = descrip;
      const botonEdit = document.querySelector('#btnEditContent');
      const editar = () => {
        const descrip = document.getElementById('txtArea').value;
        activa();
        const ref = db.collection('publicaciones').doc(id);
        return ref
          .update({
            descripcion: descrip,
          })
          .then(() => {
            document.querySelector('#txtArea').value = '';
            botonEdit.removeEventListener('click', editar);
          });
      };
      botonEdit.addEventListener('click', editar);
      desactiva();
    });
    // ------------------------------------------------------------------------------------
    // Likes de Publicaciones
    // ------------------------------------------------------------------------------------
    likeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const increment = firebase.firestore.FieldValue.increment(1);
      const id = e.target.parentElement.getAttribute('data-id');
      const postRef = db.collection('publicaciones').doc(id);
      postRef.update({ likes: increment });
      likeBtn.classList.toggle('fa-thumbs-down');
    });
    // ------------------------------------------------------------------------------------
    // Desactiva y Activa Boton Publicar
    // ------------------------------------------------------------------------------------
    const desactiva = () => {
      const btnSend = document.querySelector('#btnSendContent');
      btnSend.disabled = true;
      btnSend.setAttribute('style', 'visibility:hidden');
      const btnEdit = document.querySelector('#btnEditContent');
      btnEdit.setAttribute('style', 'visibility:visible');
    };
  };
  const activa = () => {
    const btnSend = document.querySelector('#btnSendContent');
    btnSend.disabled = false;
    const btnEdit = document.querySelector('#btnEditContent');
    btnEdit.setAttribute('style', 'visibility:hidden');
    btnSend.setAttribute('style', 'visibility:visible');
  };
  // ------------------------------------------------------------------------------------
  // Cambios en tiempo Real
  // ------------------------------------------------------------------------------------
  db.collection('publicaciones')
    .orderBy('fecha', 'desc')
    .onSnapshot((querySnapshot) => {
      postList.innerHTML = '';
      querySnapshot.forEach((doc) => {
        if (doc.data().user === auth.currentUser.uid) {
          renderMusic(doc);
        } else {
          renderMusic(doc);
        }
        const imgPerfilSup = divElement.querySelector('.imgPerfil');
        imgPerfilSup.setAttribute('src', `${auth.currentUser.photoURL}`);
      });
    });
  // ------------------------------------------------------------------------------------
  // Agregar Publicacion
  // ------------------------------------------------------------------------------------
  const form = divElement.querySelector('.home-publishPost');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const txtAreaInput = divElement.querySelector('#txtArea').value;
    const valid = validateTxtPostArea(txtAreaInput);
    if (valid === false) {
      alert('Debe escribir antes de Publicar');
    } else {
      const datePost = new Date();
      db.collection('publicaciones').add({
        user: auth.currentUser.uid,
        pictureUser: auth.currentUser.photoURL,
        author: auth.currentUser.displayName,
        fecha: datePost.toLocaleString(),
        descripcion: txtAreaInput,
        likes: 0,
        usersLikes: [],
      });
      divElement.querySelector('#txtArea').value = '';
      datePost.value = '';
    }
  });
  // ------------------------------------------------------------------------------------
  // Boton Cerrar Sesion
  // ------------------------------------------------------------------------------------
  const btnLogOut = divElement.querySelector('#btnLogOut');
  btnLogOut.addEventListener('click', () => {
    logOut();
    location.hash = '#/home';
  });
  // ------------------------------------------------------------------------------------
  // Ajuste tamaño textArea
  // ------------------------------------------------------------------------------------
  const txtArea = divElement.querySelector('#txtArea');
  txtArea.addEventListener('keyup', () => {
    txtArea.style.height = 'auto';
    txtArea.style.height = `${txtArea.scrollHeight}px`;
  });
  // ------------------------------------------------------------------------------------
  // Ir a publicar Post
  // ------------------------------------------------------------------------------------
  const newPost = divElement.querySelector('#newpost');
  const tArea = divElement.querySelector('#txtArea');
  newPost.addEventListener('click', (e) => {
    e.preventDefault();
    tArea.focus();
  });
  statusUser();
  return divElement;
};
