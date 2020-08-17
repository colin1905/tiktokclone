import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD-pSHf-sanxq9c7h0NRXdN5gyOy9_2y2E",
  authDomain: "tiktok-clone-8559e.firebaseapp.com",
  databaseURL: "https://tiktok-clone-8559e.firebaseio.com",
  projectId: "tiktok-clone-8559e",
  storageBucket: "tiktok-clone-8559e.appspot.com",
  messagingSenderId: "959006536303",
  appId: "1:959006536303:web:312dbdc839df5779c3d39a",
  measurementId: "G-SPT2CHBBVP"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;