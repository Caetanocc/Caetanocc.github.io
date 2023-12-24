const amigos = 
[
     'Kauê'
    ,'Clau'
    ,'Herbert'
    ,'Sergio'
    ,'Ju'
    ,'Gi'
    ,'Alice'
    ,'Miro'
    ,'Nanci'
    ,'Tan'
    ,'Marcelo'
    ,'Milene'
]

amigos.sort()

let text = '<table id="t01"> ';

amigos.forEach( (element, index) => {
    seq = index+1
    text += "<tr><td>" + seq + "</td>";
    text += "<td>" + element + "</td>";
    text += "</tr>";
});

text += "</table>";
document.getElementById("lista").innerHTML = text;

// let qtdeAmigos = amigos.length;

let btn = document.querySelector("#btnSortear")
btn.addEventListener('click', sortear)

let sorteados = [];

function numero_aleatorio() {
    let qtdeAmigos = amigos.length;
    //let aleatorio = Math.floor(Math.random() * qtdeAmigos);

    for (i=0;i<qtdeAmigos;i++){
        let aleatorio = Math.floor(Math.random() * qtdeAmigos);
        if (sorteados.indexOf(aleatorio) == -1) {
            sorteados.push(aleatorio);
            return aleatorio
        }
    }


}

function sortear() {
    let sorteado = numero_aleatorio();

    let text = '<table id="t02"> ';

    sorteados.forEach( element  => {
        seq = element+1
        text += "<tr><td>" + seq + "</td>";
        text += "<td>" + amigos[element] + "</td>";
        text += "</tr>";
    });
    
    text += "</table>";
    document.getElementById("sorteados").innerHTML = text;

    text = '<table id="t01"> ';

    amigos.forEach( (element, index) => {
        seq = index+1
        text += "<tr><td>" + seq + "</td>";
        text += "<td>" + element + "</td>";
        text += "</tr>";
    });
    
    text += "</table>";
    document.getElementById("lista").innerHTML = text;

    mostrarSorteado(sorteado)
}

function mostrarSorteado(sorteado) {
    let x = document.getElementById("snackbar");
    x.innerHTML = amigos[sorteado]
    x.className = "show";
    setTimeout(function() { x.className = x.className.replace("show", ""); }, 3000);
}    



