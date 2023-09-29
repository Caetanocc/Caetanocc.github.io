firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        let displayName = document.getElementById('displayName');
        let imageUser = document.querySelector("#imagemUser");
        let image = document.getElementById("imageUser");

        const idisplayName = user.displayName;
        const email = user.email;
        const photoURL = user.photoURL;

        if (idisplayName !== null) {
            displayName.innerText = 'Logado como ' + idisplayName;
        } else {
            displayName.innerText = 'Logado como ' + email;
        }

        if (imageUser !== null) {
            imageUser.innerHTML = "<img src='" + photoURL + "'>";
        }

        // Armazenar o URL da foto do usuário no localStorage
        if (photoURL !== null) {
            try {
                localStorage.setItem('pic', photoURL);
                console.log('URL da foto armazenado no localStorage com sucesso.');
            } catch (e) {
                console.error('Erro ao armazenar URL da foto no localStorage:', e);
            }
        }
    } 
});
