import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBxpzUMO2_n8CWIpQktGSJVSijBJnTssco",
    authDomain: "eshop-bbf6f.firebaseapp.com",
    projectId: "eshop-bbf6f",
    storageBucket: "eshop-bbf6f.appspot.com",
    messagingSenderId: "827832831330",
    appId: "1:827832831330:web:cf0375746c22f6a4ff303b",
    measurementId: "G-8F4SWJTZKD"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  export {db, auth};
