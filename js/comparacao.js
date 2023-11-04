import produtos from "../dados/produtos.js"
import { mostrarProdutos } from "./produtos.js"

const comparacaoElement = document.getElementById("comparacao")
const estabelecimentoElement = document.getElementById("estabelecimento")
const comparacaoImagem = document.getElementById("comparacao-imagem")
const comparacaoNome = document.getElementById("comparacao-nome")
const comparacaoQuantidade = document.getElementById("comparacao-quantidade")
const comparacaoMarca = document.getElementById("comparacao-marca")
const comparacaoPreco = document.getElementById("comparacao-preco")
const comparacaoEstabelecimento = document.getElementById("comparacao-estabelecimento")
const listaOutrasMarcas = document.getElementById("lista-outras-marcas")
const listaOutrosEstabelecimentos = document.getElementById("lista-outros-estabelecimentos")

export function mostrarComparacao(indexProduto) {
    const produto = produtos[indexProduto]

    comparacaoImagem.src = produto.linkImagem
    comparacaoImagem.alt = produto.nome
    comparacaoNome.innerText = produto.nome
    comparacaoQuantidade.innerText = produto.quantidade
    comparacaoMarca.innerText = produto.marca
    comparacaoPreco.innerText = produto.preco
    comparacaoEstabelecimento.innerText = produto.estabelecimento

    comparacaoEstabelecimento.addEventListener("click", () => trocarPagina(produto.estabelecimento))

    mostrarProdutos(pegaProdutoDeOutrasMarcas(produto.nome), listaOutrasMarcas)

    listaOutrosEstabelecimentos.innerHTML = ""
    pegaOutrosEstabelecimentos(produto.nome).forEach(estabelecimento => {
        listaOutrosEstabelecimentos
            .appendChild(criaElementoOutroEstabelecimento(estabelecimento))
    })
}

function pegaProdutoDeOutrasMarcas(nomeProduto) {
    let listaDeProdutos = []

    // falta terminar essa função 

    return listaDeProdutos
}

function pegaOutrosEstabelecimentos(nomeProduto) {
    let listaDeProdutos = ["", ""]

    // falta terminar essa função 

    return listaDeProdutos
}

function criaElementoOutroEstabelecimento(estabelecimento) {
    const li = document.createElement("li")

    // falta terminar essa função 

    li.innerHTML = `
        <span class="nome-estabelecimento">Mercado X</span>
        <span>R$ 12,99</span>
        <button type="button">Adicionar na lista</button>
    `

    li.querySelector(".nome-estabelecimento").addEventListener("click", () => trocarPagina(estabelecimento))

    return li
}

function trocarPagina(estabelecimento) {
    comparacaoElement.classList.add("desativo")
    estabelecimentoElement.classList.remove("desativo")
}