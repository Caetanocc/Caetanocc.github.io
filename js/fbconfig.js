const firebaseConfig = {
    apiKey: "AIzaSyC4IpXHz4wbwb5emaPFoVpz51gQvkDoF2U",
    authDomain: "etec22s2.firebaseapp.com",
    databaseURL: "https://etec22s2-default-rtdb.firebaseio.com",
    projectId: "etec22s2",
    storageBucket: "etec22s2.appspot.com",
    messagingSenderId: "429631871423",
    appId: "1:429631871423:web:8a91da2ae6bb57f88fa90a",
    measurementId: "G-LZS9HLK6PQ"
  
};
  
    // Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
  
    // Firebase Database Reference and the child
const dbRef = firebase.database().ref();
const pessoaRef = dbRef.child('alunos');
  
