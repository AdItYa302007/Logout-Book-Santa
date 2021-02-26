import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyAuA0kaygZFID7yWtt735WV93WyKD8PR9M",
  authDomain: "book-santa-6eaf0.firebaseapp.com",
  projectId: "book-santa-6eaf0",
  storageBucket: "book-santa-6eaf0.appspot.com",
  messagingSenderId: "218497904219",
  appId: "1:218497904219:web:2dfa21555ef0019c8f597e"
  };
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
