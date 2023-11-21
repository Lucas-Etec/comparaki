import { mostrarComparacao } from "./comparacao.js"
import todosProdutos from "../dados/produtos.js"

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
        li.querySelector("button").addEventListener("click", () => trocarPagina(todosProdutos.indexOf(produto)))

        elementoLista.appendChild(li)
    })
}

export function filtraPorMelhorPreço(produtos) {
    let nomesDosProdutos = produtos.map(produto => produto.nome)
    nomesDosProdutos = new Set(nomesDosProdutos)
    let produtosComMelhoresPrecos = []

    nomesDosProdutos.forEach(nome => {
        // Agrupa os produtos que tem o mesmo nome
        const produtosComMesmoNome = produtos.filter(produto => produto.nome === nome)
        const produtoMaisBarato = produtosComMesmoNome.sort((a, b) => a.preco > b.preco)[0]
        produtosComMelhoresPrecos.push(produtoMaisBarato)
    })

    return produtosComMelhoresPrecos
}

function trocarPagina(indexProduto) {
    produtosElement.classList.add("desativo")
    comparacaoElement.classList.remove("desativo")
    mostrarComparacao(indexProduto)
}