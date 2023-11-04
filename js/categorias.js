import categorias from "../dados/categorias.js"
import produtos from "../dados/produtos.js"
import { mostrarProdutos } from "./produtos.js"

const elementoLista = document.querySelector("#categorias ul")
const categoriasElement = document.querySelector("#categorias")
const produtosElement = document.querySelector("#produtos")
const elementoListaProdutos = document.querySelector("#produtos ul")

function mostrarCategorias(categorias) {
    elementoLista.innerHTML = ""

    categorias.forEach(categoria => {
        const li = document.createElement("li")

        li.innerHTML = `
            ${categoria.tagIcone}
            <span>${categoria.nome}</span>
        `
        li.addEventListener("click", () => trocarPagina(categoria.nome))
        elementoLista.appendChild(li)
    })
}

function trocarPagina(categoria) {
    categoriasElement.classList.add("desativo")
    produtosElement.classList.remove("desativo")

    mostrarProdutos(produtos.filter(produto => produto.categoria === categoria.toLowerCase()), elementoListaProdutos)
}

mostrarCategorias(categorias)