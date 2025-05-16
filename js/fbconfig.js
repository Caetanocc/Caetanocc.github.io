const firebaseConfig = {

  apiKey: "--",
  authDomain: "m",
  databaseURL: "https://com",
  projectId: "ec",
  storageBucket: "et",
  messagingSenderId: "",
  appId: ""
  
};
  
    // Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
  
    // Firebase Database Reference and the child
const dbRef = firebase.database().ref();
const pessoaRef = dbRef.child('game');
  
