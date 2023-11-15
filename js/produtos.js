import { mostrarComparacao } from "./comparacao.js"

const produtosElement = document.querySelector("#produtos")
const comparacaoElement = document.querySelector("#comparacao")

export function mostrarProdutos(produtos, elementoLista) {
    elementoLista.innerHTML = ""

    produtos.forEach(produto => {
        const li = document.createElement("li")
        li.innerHTML = `
            <img class="produtos" src="${produto.linkImagem}">
            <div>
                <h2>${produto.nome} | ${produto.quantidade}</h2>
                <p class="cinza">${produto.marca}</p>
                <p>Melhor Preço:${produto.estabelecimento}<p>
                        <h3>R$: ${produto.preco}</h3>
            </div>
            <button class="botao-produtos">Ver comparação</button>
            <p class="cinza comparacao">Comparar entre 3 lojas</p>
        `
        li.classList.add("card-produto")
        li.querySelector("button").addEventListener("click", () => trocarPagina(produtos.indexOf(produto)))

        elementoLista.appendChild(li)
    })
}

function trocarPagina(indexProduto) {
    produtosElement.classList.add("desativo")
    comparacaoElement.classList.remove("desativo")

    mostrarComparacao(indexProduto)
}