var usersList = document.getElementById('usersList');
var nameInput = document.getElementById('nameInput');
var qttyInput = document.getElementById('qttyInput');
var addButton = document.getElementById('addButton');

// Ao clicar no botão
addButton.addEventListener('click', function () {
    create(nameInput.value, qttyInput.value);
});

// Função para criar um registro no Firebase
function create(name, qtty) {
    var data = {
        name: name,
        qtty: qtty
    };

    return firebase.database().ref().child('prod').push(data);
}

firebase.database().ref('prod').on('value', function (snapshot) {
    usersList.innerHTML = '';
    snapshot.forEach(function (item) {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(item.val().name + ': ' + item.val().qtty));

        let key = item.key;

		// delete icon
        let deleteIconUI = document.createElement("span");
        deleteIconUI.class = "delete-user";
        deleteIconUI.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
      </svg>`;
        deleteIconUI.setAttribute("prodid", key);
        deleteIconUI.addEventListener("click", deleteButtonClicked)
			
        li.append(deleteIconUI);
        li.setAttribute("prod-key", key);
        usersList.appendChild(li);

    });
});

// --------------------------
// DELETE
// --------------------------
function deleteButtonClicked(e) {
    e.stopPropagation();

    var userID = e.target.getAttribute("prodid");
    const userRef = dbRef.child('prod/' + userID);
    
    userRef.remove();
}

