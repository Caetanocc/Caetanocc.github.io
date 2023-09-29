
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {

        const idisplayName = user.displayName;
        const email = user.email;
        const photoURL = user.photoURL;
        let displayName = document.getElementById('displayName');
        let imageUser = document.querySelector("#imagemUser")
                      
        if (idisplayName !== null) displayName.innerText = 'Logado como ' + idisplayName
        else                       displayName.innerText = 'Logado como ' + email
        
        if (imageUser !== null)  imageUser.innerHTML = "<img src='"+ photoURL +"'>"

        // User is signed in.
    } else {
        alert(" você precisa se autenticar para acessar essa página" );
        window.location.replace("authentication.html");
        
        // usuario nao esta logado..
    }
  });

