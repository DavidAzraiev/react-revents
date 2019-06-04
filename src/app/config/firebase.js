import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyDzHcPeO6ILjj6eVWVtAmynBT2bjkiuYrM',
  authDomain: 'revents-240914.firebaseapp.com',
  databaseURL: 'https://revents-240914.firebaseio.com',
  projectId: 'revents-240914',
  storageBucket: 'revents-240914.appspot.com',
  messagingSenderId: '388620247858',
  appId: '1:388620247858:web:49cd3d807c134998'
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

////////// Old - Before Firebase 6.0.2
// const firestore = firebase.firestore();
// const settings = {
//   timestampsInSnapshots: true
// };
// firestore.settings(settings);

export default firebase;
