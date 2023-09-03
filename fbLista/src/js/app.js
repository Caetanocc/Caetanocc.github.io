const firebaseConfig = {
      apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "1:429631871423:web:8a91da2ae6bb57f88fa90a",
    measurementId: "G-LZS9HLK6PQ"
  };

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);

  // Firebase Database Reference and the child
const dbRef = firebase.database().ref();
const prodRef = dbRef.child('prod');

