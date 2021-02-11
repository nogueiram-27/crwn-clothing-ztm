import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyCOn9o4dCwszKxz4owMRHYE1i6VfLAdtp4",
    authDomain: "crwn-clothing-ztm-db-eee43.firebaseapp.com",
    projectId: "crwn-clothing-ztm-db-eee43",
    storageBucket: "crwn-clothing-ztm-db-eee43.appspot.com",
    messagingSenderId: "686744552792",
    appId: "1:686744552792:web:292d3f0deadd445ef5112d",
    measurementId: "G-H2Y1SLV186"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;