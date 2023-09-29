firebase.auth().onAuthStateChanged(function(user) {
    if (user) {

        let displayName = document.getElementById('displayName');
        let imageUser = document.querySelector("#imagemUser")
        let image = document.getElementById("imageUser")
        
        const idisplayName = user.displayName;
        const email = user.email;
        const photoURL = user.photoURL;
              
        if (idisplayName !== null) displayName.innerText = 'Logado como ' + idisplayName
        else                       displayName.innerText = 'Logado como ' + email
        
        if (imageUser !== null)  imageUser.innerHTML = "<img src='"+ photoURL +"'>"
        if (image !== null)  image.innerHTML = "<img src='"+ photoURL +"'>"

        // User is signed in.
    } 
  });

