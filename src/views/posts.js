/* eslint-disable import/no-cycle */
import { logOut } from '../lib/fireBase.js';
import { db } from '../main.js';

export default () => {
  const views = `
  <!-- Menu superior -->
<nav class="nav-flex">
    <a class="logo" id="home" href="#"><img src="img/logo.png" alt=""></a>
    <ul>
        <input id="search" placeholder="Buscar">
    </ul>
    <ul class="navigation">
        <li>
            <div><a href="#/userProfile"><img class='imgPerfil' src="img/perfilUsuario.jpg"></a></div>
        </li>
        <li><a id="btnLogOut" href="#/home">Cerrar Sesion</a></li>

    </ul>
</nav>
<!-- Contenido del sitio -->

<div class="content">
            <form id="add-post-form">
                <input type="text" id="post" name="description" placeholder="Ingresa Descripcion">
                <button id="buttonPost">Agregar Post</button>
            </form>
<div class='contenidoPost'>
    <ul id='contenidoPost'>

    </ul>
</div>
</div>

 <!-- footer -->
<div class="footer">
    <p>© min Corp.</p>
</div>
</div>
</div>

<!-- Fin -->
`;
  const divElement = document.createElement('div');
  divElement.innerHTML = views;

  // agregar publicaciones
  const form = divElement.querySelector('#add-post-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('publicaciones').add({
      // eslint-disable-next-line no-undef
      descripcion: form.description.value,
    });
  });

  // leer publicacioón
  const postList = divElement.querySelector('#contenidoPost');
  db.collection('publicaciones').onSnapshot((querySnapshot) => {
    postList.innerHTML = '';
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
      const uid = `${doc.id}`;
      postList.innerHTML += `
      <th>${doc.id}</th>
      <button id="xDelete">X</button>
      <p> ${doc.data().descripcion} </p>
      `;
      const buttonDelete = document.querySelector('#xDelete');
      buttonDelete.addEventListener('click', () => {
        // eslint-disable-next-line no-undef
        // eslint-disable-next-line no-use-before-define
        deleteComent(uid);
      });
    });
    // Elimina comentarios
    const deleteComent = (id) => {
      db.collection('publicaciones').doc(id).delete().then(() => {
        // eslint-disable-next-line no-console
        console.log('Publicacion borrada');
      }).catch(() => (error) => {
        console.error("errordff: ", error);
      });

    }
  });




 

  // Crea TODOS los elementos & muestra en pantalla
  /*const renderMusic = (doc) => {
    const li = document.createElement('li');
    const title = document.createElement('span');
    const description = document.createElement('span');
    const br = document.createElement('br');
    const deleteX = document.createElement('div');

    li.setAttribute('data-id', doc.id);
    deleteX.setAttribute('class', 'cerrar');
    title.textContent = doc.data().titulo;
    description.textContent = doc.data().descripcion;
    deleteX.textContent = 'x';

    li.appendChild(deleteX);
    li.appendChild(title);
    li.appendChild(br);
    li.appendChild(description);

    postList.appendChild(li);

    // Borrar publicacion por ID
    deleteX.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = e.target.parentElement.getAttribute('data-id')sasasasasas;
      db.collection('publicaciones').doc(id).delete();
    });
  };

  // Traer Data
  /* db.collection("publicaciones").get().then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        console.log(doc.data());
        renderMusic(doc);
      });
    }); */

  // tiempo Real
  /*db.collection('publicaciones').orderBy('titulo').onSnapshot((snapshot) => {
    const changes = snapshot.docChanges();
    changes.forEach((change) => {
      console.log(change.type);
      if (change.type === 'added') {
        renderMusic(change.doc);
      } else if (change.type === 'removed') {
        const li = postList.querySelector(`[data-id=${change.doc.id}]`);
        postList.removeChild(li);
      }
    });
  });*/


  // Agregar Publicacion
  /* const form = divElement.querySelector('#add-post-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('publicaciones').add({
      titulo: form.title.value,
      descripcion: form.description.value,
    });
    form.title.value = '';
    form.description.value = '';
    alert('Su informacion ha sido guardada');
  });*/

  // Boton Cerrar Sesion
  const btnLogOut = divElement.querySelector('#btnLogOut');
  btnLogOut.addEventListener('click', () => {
    logOut();
  });
  return divElement;
};
