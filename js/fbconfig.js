const firebaseConfig = {

  apiKey: "--",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "etec24-om",
  messagingSenderId: "",
  appId: "1:452c118d9e"
  
};
  
    // Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
  
    // Firebase Database Reference and the child
const dbRef = firebase.database().ref();
const pessoaRef = dbRef.child('game');
  
