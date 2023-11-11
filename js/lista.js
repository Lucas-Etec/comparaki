const lista = document.getElementById("lista")
const listaUl = document.querySelector("#lista ul")

function pegaLista() {
    return JSON.parse(localStorage.getItem("lista")) || []
}

export default {
    abrir: () => {
        lista.classList.remove("escondido")
    },
    fechar: () => {
        lista.classList.add("escondido")
    },
    carregarLista() {
        const listaProdutos = pegaLista()

        listaUl.innerHTML = ""
        listaProdutos.forEach(produto => {
            const li = document.createElement("li")
            li.innerHTML = `
                <li>
                    <img src="${produto.linkImagem}" alt="${produto.nome}">
                    <div>
                        <h2>${produto.nome} | ${produto.quantidade}</h2>
                        <p class="cinza">${produto.marca}</p>
                        <p>${produto.estabelecimento}<p>
                        <h3>R$: ${produto.preco}</h3>
                    </div>
                    <button type="button" class="botao-produtos">Remover</button>
                </li>
            `
            listaUl.appendChild(li)
        });

    },
}