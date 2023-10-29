let notaModal = document.querySelector('#notaModal')
let bodyModalDados = document.querySelector('#bodyModalDados')
let ModalPedidos = document.querySelector('#ModalPedidos')

function CarrinhosDeCompras() {
    const url = `https://etec22s2-default-rtdb.firebaseio.com/goodfood/${mesa}.json`;
    console.log(mesa)
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
                bodyModalDados.innerHTML = linha;
                return;
            }

            if (dados) {
                console.log(dados);
                let tabela = document.getElementById('tabelaCompras');
                let tbody = tabela.querySelector('tbody');

                tbody.innerHTML = '';
                
                for (let chave in dados) {
                    let item = dados[chave];
                    if(item.status == 1){
                      
                        let row = document.createElement('tr');
                        row.innerHTML = `
                            <td>${item.desc}</td>
                            <td>${item.qtde}</td>
                            <td>${item.valor}</td>
                        `;
                        tbody.appendChild(row);
                    }
                  
                }
            
            } else {
                // Handle the case where there are no data
            }
        });

       
}

function Pedidos() {
    const url = `https://etec22s2-default-rtdb.firebaseio.com/goodfood/${mesa}.json`;
    console.log(mesa)
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
                bodyModalDados.innerHTML = linha;
                return;
            }

            if (dados) {
                console.log(dados);
                let tabela = document.getElementById('tabelaPedidos');
                let tbody = tabela.querySelector('tbody');

                tbody.innerHTML = '';
                
                for (let chave in dados) {
                    let item = dados[chave];
                    if(item.status == 2){
                      
                        let row = document.createElement('tr');
                        row.innerHTML = `
                            <td>${item.desc}</td>
                            <td>${item.qtde}</td>
                            <td>${item.valor}</td>
                        `;
                        tbody.appendChild(row);
                    }
                  
                }
            
            } else {
                // Handle the case where there are no data
            }
        });

       
}

ModalPedidos.addEventListener('focus', Pedidos)

buttonadicionar = document.getElementById('carrinhoEnviar');
buttonadicionar.addEventListener('click',function atualizarItem(){
    const url = `https://etec22s2-default-rtdb.firebaseio.com/goodfood/${mesa}.json`;
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
    }else{
                if(dados){
                    for(let chave in dados) {
                        
                    const url = `https://etec22s2-default-rtdb.firebaseio.com/goodfood/${mesa}/${chave}.json`
                    console.log(dados)
                    const options = {
                        method: 'PATCH',
                        mode: 'cors',
                        headers: {
                          'Accept': 'application/json',
                          'content-type': 'application/json;charset=utf-8'
                        },
                        body: `{
                            "produto": "${dados[chave].produto}",
                            "desc": "${dados[chave].desc}",
                            "valor": "${dados[chave].valor}",
                            "qtde": "1",
                            "status": "2" }`,
                      }
                
                
                
                    fetch(url,options).then(
                        response => response.json()
                    ).then(
                        data => {
                            console.log(data)
                        }
                    )    
                }}}})
                
})
