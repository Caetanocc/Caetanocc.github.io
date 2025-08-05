import { getFirestore } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js"

const firebaseConfig = {
    apiKey: "--15tH4",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "e"

    
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
