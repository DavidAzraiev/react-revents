import firebase from 'firebase';
import 'firebase/firestore';

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

export default firebase;
