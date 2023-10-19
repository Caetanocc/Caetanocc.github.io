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
                            <td>Pedido: ${mesa}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        `
                        listaProd.appendChild(tr)

                        for (let kkey in childData){

                            console.log(childData[kkey].desc)
                            console.log(kkey)

                            const tr = document.createElement("tr")
                            tr.classList.add("user-row")
                            tr.setAttribute("id", kkey)

                            tr.innerHTML = `
                                <td>${childData[kkey].item}</td>
                                <td>${childData[kkey].desc}</td>
                                <td>${childData[kkey].valor}</td>
                                <td>${childData[kkey].status}</td>
                                <td>X</td>
                            `
                             listaProd.appendChild(tr)
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
