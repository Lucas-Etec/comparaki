import produtos from "../dados/produtos.js"

const lista = document.getElementById("lista")
const listaUl = document.querySelector("#lista ul")

function pegaLista() {
    return JSON.parse(localStorage.getItem("lista")) || []
}

function salvarLista(lista) {
    const JSONLista = JSON.stringify(lista)
    localStorage.setItem("lista", JSONLista)
}

const funcoes = {
    abrir: () => {
        lista.classList.remove("escondido")
    },
    fechar: () => {
        lista.classList.add("escondido")
    },
    carregarLista() {
        const listaProdutos = pegaLista()

        listaUl.innerHTML = ""
        listaProdutos.forEach(index => {
            const produto = produtos[index]
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
    adicionarProduto(indexProduto) {
        let lista = pegaLista()

        if (lista.includes(indexProduto)) {
            const posicaoDoProduto = lista.indexOf(indexProduto)
            lista.splice(posicaoDoProduto, 1)
        }
        lista.push(indexProduto)

        salvarLista(lista)
        this.carregarLista()
    },
    removerProduto(indexProduto) {
        let lista = pegaLista()

        const posicaoDoProduto = lista.indexOf(indexProduto)
        lista.splice(posicaoDoProduto, 1)

        salvarLista(lista)
        this.carregarLista()
    }
}

export default funcoes