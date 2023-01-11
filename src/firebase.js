import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({

    // For Firebase JS SDK v7.20.0 and later, measurementId is optional

    apiKey: "AIzaSyCT0iIYp14DSNGSAwM8Cb9k_c6oy6wrdBA",
    authDomain: "fir-messager-clone.firebaseapp.com",
    projectId: "fir-messager-clone",
    storageBucket: "fir-messager-clone.appspot.com",
    messagingSenderId: "243945369478",
    appId: "1:243945369478:web:0521e2850b5deafd870607",
    measurementId: "G-GF03GWNFK3"
  
});

const db = firebaseApp.firestore();

export default db;
