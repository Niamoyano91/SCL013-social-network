/* import { db } from "../main.js";
//import {renderPost} from "../views/"

// Funcion Obtener data
export const gettingData = () =>
db.collection('publicaciones').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        renderPost(doc.data());
        console.log(doc.data());
    });
});

export {renderPost}; */
