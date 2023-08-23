let usrData = ""
// Initialize Firebase
let config = {

  // incluir aqui os dados do seu projeto
  
  apiKey: "AIzaSyC4IpXHz4wbwb5emaPFoVpz51gQvkDoF2U",
  authDomain: "etec22s2.firebaseapp.com",
  databaseURL: "https://etec22s2-default-rtdb.firebaseio.com",
  projectId: "etec22s2",
  storageBucket: "etec22s2.appspot.com",
  messagingSenderId: "429631871423",
  appId: "1:429631871423:web:8a91da2ae6bb57f88fa90a",
  measurementId: "G-LZS9HLK6PQ"
};

firebase.initializeApp(config);

// Firebase Variables
let auth = firebase.auth();

// on state changed
auth.onAuthStateChanged(firebaseUser => {
  // check email
  if(firebaseUser){

    usrData = document.querySelector("#usr-data");
    currentEmail.innerHTML = auth.currentUser.email
    
    currentEmail.style.display = 'block';
    singoutButton.style.display = 'block';
    
    singupForm.style.display = 'none';

    usrData.classList.toggle('mostrar');
  } else{
    singoutButton.style.display = 'none';
    singupForm.style.display = 'block';
    currentEmail.style.display = 'none';
  }

});


// •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
// signup form
// •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
let singoutButton = document.querySelector("#signout");
let currentEmail = document.querySelector("#current-email");

let singupForm = document.querySelector("#signup-form");
let userName = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let singupButton = document.querySelector("#signup");


singupButton.addEventListener("click", clickSignupButton);
singoutButton.addEventListener("click", clickSignoutButton);


function clickSignupButton(){

  //signup firebase method
  auth.createUserWithEmailAndPassword(email.value, password.value).
  then(function(user){
    console.log(auth.currentUser.email)


  }, function(error) {
    console.log(error.message);
    // error message show that you need to enable that authentication in firebase
  });

}

function clickSignoutButton(){
  auth.signOut()
}

// •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
// singin form
// •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
let signinEmail = document.querySelector("#signinEmail");
let signinPassword = document.querySelector("#signinPassword");
let singinButton = document.querySelector("#signin");

singinButton.addEventListener("click", clickSigninButton);


function clickSigninButton() {

  auth.signInWithEmailAndPassword(signinEmail.value, signinPassword.value).
  then(function(user){
    console.log(user)
  }, function(error) {
    console.log(error.message);
    // error message show that you need to enable that authentication in firebase
  });

}

$(".toggle-password").click(function() {

  $(this).toggleClass("fa-eye fa-eye-slash");
  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});
