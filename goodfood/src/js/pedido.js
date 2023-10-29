let mesa = 0;


	// Obtém a string de consulta da URL
	const queryString = window.location.search;
	// Cria um objeto com os parâmetros da string de consulta
	const params = new URLSearchParams(queryString);
	// Obtém o valor do parâmetro "mesa"
	const mesamd5 = params.get('mesamd5');



let mesas = [
    {"mesa":1, "mesamd5": "c4ca4238a0b923820dcc509a6f75849b"},
    {"mesa":2, "mesamd5": "10400c6faf166902b52fb97042f1e0eb"},
    {"mesa":3, "mesamd5": "844afd44ff5361df28129df1e3ef8915"},
    {"mesa":4, "mesamd5": "c83bbf39a26190b2d0ec2d3091356053"},
    {"mesa":5, "mesamd5": "8bf1569c67ae09bffec145f2ab96e637"},
];


mesas.forEach( (item) =>{
    if (item.mesamd5 == mesamd5){
        mesa = item.mesa
    }
})

console.log(mesa); // "mesa"


let produtos = [
    {"id": "p1", "desc": "Tigela de abacate", "valor": "20"},
    {"id": "p2", "desc": "Salada de kiwi", "valor": "45"},
    {"id": "p3", "desc": "Mix de vegetais", "valor": "30"},
    {"id": "p4", "desc": "Pimentões à Juliana", "valor": "35"},
    {"id": "p5", "desc": "Prato oriental", "valor": "40"},
    {"id": "p6", "desc": "Beterrabas assadas", "valor": "15"},
    {"id": "p7", "desc": "Peixe assado", "valor": "50"},
    {"id": "p8", "desc": "Porco assado", "valor": "35"},
    {"id": "p9", "desc": "Carne assada", "valor": "60"},
    {"id": "p10", "desc": "Picadinho de Carne com Quiabo", "valor": "40"},
    {"id": "p11", "desc": "Pudim de Aveia Corte Rústico", "valor": "50"},
    {"id": "p12", "desc": "Bolo De Maçã Sem Açúcar", "valor": "27"},
    
]

let allbtnpedir = document.querySelectorAll(".btn-success")

allbtnpedir.forEach(botao =>{
    botao.addEventListener('click', ()=>{
        console.log(botao.id)

        addItemPedido(botao.id)
    })
})

let qtdeItens = 0;
let valorPedido = 0;

function addItemPedido(idProduto){
    let valor = 0
    let desc  = ""
    qtdeItens++

    produtos.forEach( (elemento) =>{
        if (elemento.id == idProduto){
            valor = elemento.valor
            desc = elemento.desc
        }
    })

    const url = `https://etec22s2-default-rtdb.firebaseio.com/goodfood/${mesa}.json`
    const options = {
        method: 'POST',
        mode: 'cors',
        headers: { 'Accept': 'application/json', 
        'content-type': 'application/json;charset=utf8'},
        body: `{
            "produto": "${idProduto}",
            "desc": "${desc}",
            "valor": "${valor}",
            "qtde": "1",
            "status": "1"
        }`
    }

    fetch(url,options).then(
        response => response.json()
    ).then(
        data =>{
            console.log(data)

            valorPedido += parseInt(valor)
            let resumo = document.querySelector("#snackbar")
            resumo.innerHTML = "itens:" + qtdeItens + "  total $: " + valorPedido
            resumo.className = "show"
            
        }
    ).catch(error =>{
        console.log(error)
    })


}