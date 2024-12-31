// import { db } from './firebase/config.js';
// import { collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";

// const fetchItems = async () => {
//     const q = query(collection(db, "users"));
//     const querySnapshot = await getDocs(q);
//     let ItemList = [];
//     querySnapshot.forEach((doc) => {
//         ItemList.push({ id: doc.id, ...doc.data() });
//     });
//     setItems(ItemList);
// };

// // Carregar os itens ao montar o componente
// useEffect(() => {
//     fetchItems();
//     loadUsers();
// }, [uid]);

let alunos = []
let fotos = []
let sorteados = [];

let btnin = document.querySelector("#btnIniciar")
btnin.addEventListener('click', loadUsers)

let btn1 = document.querySelector("#btnSortear1")
btn1.addEventListener('click', sortear)
let btn2 = document.querySelector("#btnSortear2")
btn2.addEventListener('click', sortear)
let btn3 = document.querySelector("#btnSortear3")
btn3.addEventListener('click', sortear)
let btn4 = document.querySelector("#btnSortear4")
btn4.addEventListener('click', sortear)

let win = document.getElementById("winner");


listarPessoas()

function listarPessoas() {
    const url = `https://etec24-3dc8c-default-rtdb.firebaseio.com/pessoas.json`;
    const options = {
        method: 'GET',
        mode: 'cors',
        headers: {
            'content-type': 'application/json;charset=utf-8'
        }
    };

    fetch(url, options)
        .then(response => response.json())
        .then(dados => {
            if (dados.error) {
                linha = '<h5> Erro ao consultar BD</h5>';
                return;
            }
            console.log ( dados)

            if (dados) {
                for (let _id in dados) {
                    let item = dados[_id];

                    alunos.push( `${item.Nome}`)
                    fotos.push( `${item.foto}`)

                    console.log ( _id + ' ' +  `${item.Nome}`) 

                }
            
            } else {
                // Handle the case where there are no data
            }
    });

    // let qtdealunos = alunos.length;
}


function loadUsers() {

    if (! confirm("Reiniciar o jogo! Tem Certeza?")) return

    win.className = win.className.replace("show", "");

    let text = '<table id="t01"> ';

    alunos.sort()

    alunos.forEach( (element, index) => {
        console.log('alunos ' + element )

        seq = index+1
        text += "<tr><td>" + seq + "</td>";
        text += "<td>" + element + "</td>";
        //text += '<td><img class="img_al" src="' + fotos[index] + '" alt="' + index + '"' + " </td>";
        text += "</tr>";
    });
    
    text += "</table>";
    document.getElementById("lista").innerHTML = text;
    
    console.log ( text ) 
    sorteados = [];
}

function numero_aleatorio() {
    let qtdealunos = alunos.length;
    //let aleatorio = Math.floor(Math.random() * qtdealunos);

    for (i=0;i<qtdealunos;i++){
        let aleatorio = Math.floor(Math.random() * qtdealunos);
        if (sorteados.indexOf(aleatorio) == -1) {
            sorteados.push(aleatorio);
            return aleatorio
        }
    }
}

function isWiner(ind) {
    if (alunos.length == sorteados.length) {
        console.log("Vencedor@  : " + alunos[ind])

        win.innerHTML = alunos[ind] + ' venceu $$$'
        win.className = "show";

        //setTimeout(function() { x.className = x.className.replace("show", ""); }, 7000);
    
    }
}

function sortear() {
    let sorteado = numero_aleatorio();

    let text = '<table id="t02"> ';

    sorteados.forEach( element  => {
        seq = element+1
        text += "<tr><td>" + seq + "</td>";
        text += "<td>" + alunos[element] + "</td>";
        //text += '<td><img class="img_al" src="' + fotos[element] + '" alt="' + element + '"';
        text += "</tr>";
    });
    
    text += "</table>";
    document.getElementById("sorteados").innerHTML = text;

    text = '<table id="t01"> ';

    alunos.forEach( (element, index) => {
        seq = index+1
        text += "<tr><td>" + seq + "</td>";
        text += "<td>" + element + "</td>";
        //text += '<td><img class="img_al" src="' + fotos[index] + '" alt="' + element + '"' + " </td>";
        text += "</tr>";
    });
    
    text += "</table>";
    document.getElementById("lista").innerHTML = text;

    mostrarSorteado(sorteado)


}

function mostrarSorteado(sorteado) {
    let x = document.getElementById("snackbar");
    x.innerHTML = alunos[sorteado]
    x.className = "show";
    setTimeout(function() { x.className = x.className.replace("show", ""); }, 7000);

    isWiner(sorteado)
}    


