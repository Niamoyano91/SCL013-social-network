// eslint-disable-next-line import/no-cycle
import { db, auth } from '../main.js';

export default () => {
  const views = `<nav class="nav-flex">
  <a class="logo" id="home" href="#"><img id = "logo-oldbeat" src="img/logo.png" alt=""></a>
  <ul class="navigation">
      <li>
          <div><a href="#/userProfile"><img class='imgPerfilUser' src="img/perfilUsuario.jpg"></a></div>
      </li>
      <li><a id="btnLogOut" href="#/home">Cerrar Sesion</a></li>
  </ul>
</nav>
  <!--  -->
  
  <div class="body-container" id="body-container">
  <div class="bodyprofile">
      <div class="userinfo">
      <div class="profilepic">
          <img id="profilepicuser" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQBgMmLLeZGSPjovSqJha6gZ1ATXnl1KE9urg5dLsVuoUyH8JXc&usqp=CAU">
      </div>
      <div class="textoprofile" id='textoprofile'>
          <p class="nickname" id='nickname'> </p>
          <p class="fullname" id='name'></p>
          <p class="age" id='age'></p>
          <p class="age" id='city'></p>
          <svg class="iconoubicacion"><use xlink:href="#icon-map-marker"></use>
          <symbol id="icon-map-marker" viewBox="0 0 16 28">
          <path d="M12 10c0-2.203-1.797-4-4-4s-4 1.797-4 4 1.797 4 4 4 4-1.797 4-4zM16 10c0 0.953-0.109 1.937-0.516 2.797l-5.688 12.094c-0.328 0.688-1.047 1.109-1.797 1.109s-1.469-0.422-1.781-1.109l-5.703-12.094c-0.406-0.859-0.516-1.844-0.516-2.797 0-4.422 3.578-8 8-8s8 3.578 8 8z"></path>
          </symbol></svg><p class="location"></p>Ubicación</p>
          </div>
      </div>
  </div>
  <div class="posthistory">
          <h1 class="myposts">mis publicaciones</h1>
          <div class="firstpost" id="minipost"></div>
          <div class="secondpost" id="minipost"></div>
      </div>
  <!--  -->
  <div class="control">
      <a href="#/userPost" id="home">
      <svg class="icon icon-home"><use xlink:href="#icon-home"></use>
      <symbol id="icon-home" viewBox="0 0 26 28">
          <path d="M22 15.5v7.5c0 0.547-0.453 1-1 1h-6v-6h-4v6h-6c-0.547 0-1-0.453-1-1v-7.5c0-0.031 0.016-0.063 0.016-0.094l8.984-7.406 8.984 7.406c0.016 0.031 0.016 0.063 0.016 0.094zM25.484 14.422l-0.969 1.156c-0.078 0.094-0.203 0.156-0.328 0.172h-0.047c-0.125 0-0.234-0.031-0.328-0.109l-10.813-9.016-10.813 9.016c-0.109 0.078-0.234 0.125-0.375 0.109-0.125-0.016-0.25-0.078-0.328-0.172l-0.969-1.156c-0.172-0.203-0.141-0.531 0.063-0.703l11.234-9.359c0.656-0.547 1.719-0.547 2.375 0l3.813 3.187v-3.047c0-0.281 0.219-0.5 0.5-0.5h3c0.281 0 0.5 0.219 0.5 0.5v6.375l3.422 2.844c0.203 0.172 0.234 0.5 0.063 0.703z"></path>
          </symbol>                
      </svg>
      </a>
      <a href="#/" id="events">
          <svg class="icon icon-calendar"><use xlink:href="#icon-calendar"></use>
      <symbol id="icon-calendar" viewBox="0 0 26 28">
          <path d="M2 26h4.5v-4.5h-4.5v4.5zM7.5 26h5v-4.5h-5v4.5zM2 20.5h4.5v-5h-4.5v5zM7.5 20.5h5v-5h-5v5zM2 14.5h4.5v-4.5h-4.5v4.5zM13.5 26h5v-4.5h-5v4.5zM7.5 14.5h5v-4.5h-5v4.5zM19.5 26h4.5v-4.5h-4.5v4.5zM13.5 20.5h5v-5h-5v5zM8 7v-4.5c0-0.266-0.234-0.5-0.5-0.5h-1c-0.266 0-0.5 0.234-0.5 0.5v4.5c0 0.266 0.234 0.5 0.5 0.5h1c0.266 0 0.5-0.234 0.5-0.5zM19.5 20.5h4.5v-5h-4.5v5zM13.5 14.5h5v-4.5h-5v4.5zM19.5 14.5h4.5v-4.5h-4.5v4.5zM20 7v-4.5c0-0.266-0.234-0.5-0.5-0.5h-1c-0.266 0-0.5 0.234-0.5 0.5v4.5c0 0.266 0.234 0.5 0.5 0.5h1c0.266 0 0.5-0.234 0.5-0.5zM26 6v20c0 1.094-0.906 2-2 2h-22c-1.094 0-2-0.906-2-2v-20c0-1.094 0.906-2 2-2h2v-1.5c0-1.375 1.125-2.5 2.5-2.5h1c1.375 0 2.5 1.125 2.5 2.5v1.5h6v-1.5c0-1.375 1.125-2.5 2.5-2.5h1c1.375 0 2.5 1.125 2.5 2.5v1.5h2c1.094 0 2 0.906 2 2z"></path>
          </symbol>
      </svg>
      </a>
      <a href="#/" id="newpost">
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
      </svg>
      </a>
    
  </div>
</div>`;
  const divElement = document.createElement('div');
  divElement.innerHTML = views;
  auth.onAuthStateChanged((user) => {
    if (user) {
      const uid = user.uid;
      console.log(uid);
      db.collection('users').doc(uid).get().then((doc) => {
        // eslint-disable-next-line no-console
        console.log('Document data:', doc.data().name);
        document.getElementById('nickname').innerHTML = `${doc.data().nickName}`;
        document.getElementById('name').innerHTML = `${doc.data().name}`;
        /* document.getElementById('age').innerHTML = `${doc.data().age}`; */
        document.getElementById('city').innerHTML = `${doc.data().city}`;
      });
    }
  });
  return divElement;
};
