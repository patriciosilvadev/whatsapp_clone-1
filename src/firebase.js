// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDB9SIiHb2-FYlhChM7t82HUr-NEptqx3A',
  authDomain: 'whatsapp-clone-e3089.firebaseapp.com',
  projectId: 'whatsapp-clone-e3089',
  storageBucket: 'whatsapp-clone-e3089.appspot.com',
  messagingSenderId: '236270689693',
  appId: '1:236270689693:web:6e4674fa158de6dccd6374',
  measurementId: 'G-LWL4MN5Y0E',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
