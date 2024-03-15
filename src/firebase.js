import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSy5wl0YvGNLtk07A0EF6rHcFnLH0Spao",
  authDomain: "amzn-clone-72d88.firebaseapp.com",
  projectId: "amzn-clone-72d88",
  storageBucket: "amzn-clone-72d88.appspot.com",
  messagingSenderId: "171839965222",
  appId: "1:171839965222:web:3b521650bde112f0483ee7",
  measurementId: "G-0RXTS0H58J"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  export { db,auth};


  // https://github.com/atharvadeosthale/amazon-clone/blob/master/src/Header.js