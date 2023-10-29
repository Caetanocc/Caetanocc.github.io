listarPedidos();

let listaProd = document.querySelector('#lista-produtos')

function listarPedidos(){
    let linha = ""
    const url = `https://etec22s2-default-rtdb.firebaseio.com/goodfood.json`

    const options = {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
          'content-type': 'application/json;charset=utf-8'
        }
    }

    fetch(url,options).then(
        response => response.json()
    ).then(
        data => {
            if(data) {
                console.log(data)
                listaProd.innerHTML = ""

                for (let mesa in data) {
                    if (data.hasOwnProperty(mesa)) {
                        const childData = data[mesa];

                        console.log(mesa)
                        const tr = document.createElement("tr")
                        tr.classList.add("user-row")
                        tr.setAttribute("id", mesa)

                        tr.innerHTML = `
                            <td>Mesa: ${mesa}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        `
                        listaProd.appendChild(tr)

                        for (let kkey in childData){

                           if(childData[kkey].status==2){

                            console.log(childData[kkey].desc)
                            console.log(kkey)

                            const tr = document.createElement("tr")
                            tr.classList.add("user-row")
                            tr.setAttribute("id", kkey)

                            tr.innerHTML = `
                                <td ></td>
                                <td onclick=Green('${kkey}') ondblclick=Red('${kkey}')>${childData[kkey].desc}</td>
                                <td>${childData[kkey].valor}</td>
                                <td>${childData[kkey].status}</td>
                                <td onclick="ExcluirDB('${kkey}')"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
                                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
                              </svg></td>
                            `

                            
                             listaProd.appendChild(tr)
                           } 
                           

                           
                        }
                    }
                }
            } else {
                linha = '<h5> Cesta está vazia</h5>';
                listaProd.innerHTML = linha;
            }
            return
        }
    ).catch( ()=> {
        linha = '<h5> Erro ao buscar dados</h5>';
        listaProd.innerHTML = linha;
    })
}

function Green(chave){
    let key = document.getElementById(chave);
    key.style.backgroundColor = 'green'
    
}
function Red(chave){
    let key = document.getElementById(chave);
    key.style.backgroundColor = 'red'
    
}
function ExcluirDB(chaves){
    const url = `https://etec22s2-default-rtdb.firebaseio.com/goodfood.json`

    const options = {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
          'content-type': 'application/json;charset=utf-8'
        }
    }

    fetch(url,options).then(
        response => response.json()
    ).then(
        data => {
            if(data) {
                
                console.log(data)
                listaProd.innerHTML = ""

                for (let mesa in data) {
                    if (data.hasOwnProperty(mesa)) {
                        const childData = data[mesa];

                        console.log(mesa)

    const url = `https://etec22s2-default-rtdb.firebaseio.com/goodfood/${mesa}/${chaves}.json`
    const options = {
        method: 'DELETE',
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
          'content-type': 'application/json;charset=utf-8'
        }
      }
    fetch(url,options).then(
        response => response.json()
    ).then(
        data => {
            console.log(data)
            location.reload();
        }
    ) }}
}})
}