// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import productos from "../data/asyncMock"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCovihsHAmq5xlohxfhXwh86Eb_A_RWg0Y",
  authDomain: "ishop-533de.firebaseapp.com",
  projectId: "ishop-533de",
  storageBucket: "ishop-533de.appspot.com",
  messagingSenderId: "453031106069",
  appId: "1:453031106069:web:38006a29dd4c6fd78f601c"
};

console.log("se conecto")

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

productos.forEach((producto) =>{
    addDoc(collection(db, 'productos'), producto)
        .then((docRef) => {
            console.log(`Se agregó el documento con id ${docRef.id}`)
        })
        .catch((error) => console.log(error))
})