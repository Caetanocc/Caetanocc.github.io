const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""

  };

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);

  // Firebase Database Reference and the child
const dbRef = firebase.database().ref();
const prodRef = dbRef.child('prod');

