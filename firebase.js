// Import the functions you need from the SDKs you need
import firebase from "firebase";



const firebaseConfig = {
  apiKey: "AIzaSyAI-ftgCVByxhR1sbyizBAD9EgDYXBteXg",
  authDomain: "r-n-instagram.firebaseapp.com",
  projectId: "r-n-instagram",
  storageBucket: "r-n-instagram.appspot.com",
  messagingSenderId: "879795922802",
  appId: "1:879795922802:web:af3e9794af201d3e859feb"
};
!firebase.apps.length ? firebase.initializeApp(firebaseConfig):firebase.app();
var db = firebase.firestore();
export {firebase,db}