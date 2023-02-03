import firebase from 'firebase';
// import firebase from "firebase/compat/app";
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// import {getFirestore} from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCATYbig8vkL6vqZ4mEGBAQKv5q7whK8nM",
  authDomain: "clone-web-1a97f.firebaseapp.com",
  projectId: "clone-web-1a97f",
  storageBucket: "clone-web-1a97f.appspot.com",
  messagingSenderId: "194751499894",
  appId: "1:194751499894:web:54be4df32d745c5503d957",
  measurementId: "G-1RLYLMCMTZ"
};

// Use this to initialize the firebase App
const firebaseApp =firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };

//export default db;