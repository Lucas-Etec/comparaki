import produtos from "../dados/produtos.js"

const listElement = document.querySelector("#produtos ul")

function mostrarProdutos(produtos) {
    listElement.innerHTML = ""

    produtos.forEach(produto => {
        listElement.innerHTML += `
            <li>
                <img class="produtos" src="${produto.linkImagem}">
                <div>
                    <h2>${produto.nome} | ${produto.quantidade}</h2>
                    <p class="cinza">${produto.marca}</p>
                    <p> Melhor Preço:${produto.estabelecimento}<p>
                            <h3> R$: ${produto.preco} </h3>
                </div>
                <button class="botao-produtos"> Ver comparação </button>
                <p class="cinza comparacao"> Comparar entre 3 lojas </p>
            </li>
        `
    })
}

mostraProdutos(produtos)