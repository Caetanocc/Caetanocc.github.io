listarPessoas();

function listarPessoas() {
    const userListUI = document.getElementById("lista-pessoas");

    pessoaRef.on("value", snap => {
        userListUI.innerHTML = ""

        snap.forEach(childSnap => {

            let chave = childSnap.key,
                dados = childSnap.val()
            
            let $li = document.createElement("tr");

            $li.innerHTML =       "<td>" + dados.nome    + "</td>" +
                                  "<td>" + dados.dtnasc  + "</td>" +
                                  "<td>" + dados.nota    + "</td>" +
                                  "<td><a href='" + dados.url    + "'>"+dados.url+"</a></td>" ;
            
            userListUI.append($li);

        });
    })
};

