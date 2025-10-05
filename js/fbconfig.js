const firebaseConfig = {

  apiKey: "AIzaSyCaB0vLOOvCjMim9Z-UfK4W2ryvD-15tH4",
  authDomain: "etec24-3dc8c.firebaseapp.com",
  databaseURL: "https://etec24-3dc8c-default-rtdb.firebaseio.com",
  projectId: "etec24-3dc8c",
  storageBucket: "etec24-3dc8c.firebasestorage.app",
  messagingSenderId: "452717358267",
  appId: "1:452717358267:web:76df1c741b160aec118d9e"
  
};
  
    // Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
  
    // Firebase Database Reference and the child
const dbRef = firebase.database().ref();
const pessoaRef = dbRef.child('game');
  

