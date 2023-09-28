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
        deleteIconUI.innerHTML = " ☓";
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

