import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyB4Kc6P0dOxFqDsNdCjYzV-3zEf0yYPJUI",
    authDomain: "biochat-371ca.firebaseapp.com",
    databaseURL: "https://biochat-371ca.firebaseio.com",
    projectId: "biochat-371ca",
    storageBucket: "biochat-371ca.appspot.com",
    messagingSenderId: "700853277268",
    appId: "1:700853277268:web:dcf018ca869b617784d3c1",
    measurementId: "G-9HFD3R83Q5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase