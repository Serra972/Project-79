import firebase from 'firebase';
require('@firebase/firestore')



var firebaseConfig = {
    apiKey: "AIzaSyAV7rp68A0U8GaHOxDvMMt9Fmc_nv_XlV0",
    authDomain: "information-to-and-fro.firebaseapp.com",
    databaseURL: "https://information-to-and-fro.firebaseio.com",
    projectId: "information-to-and-fro",
    storageBucket: "information-to-and-fro.appspot.com",
    messagingSenderId: "1029998854874",
    appId: "1:1029998854874:web:27a8dc1d3204370b6b9be3",
    measurementId: "G-LSRD801F5E"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
