import categorias from "../dados/categorias.js"
import produtos from "../dados/produtos.js"
import { mostrarProdutos, filtraPorMelhorPreço } from "./produtos.js"

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
    categoriasElement.classList.remove("desativo")
}

function trocarPagina(categoria) {
    categoriasElement.classList.add("desativo")
    produtosElement.classList.remove("desativo")

    const produtosFiltradosPorCategoria = produtos.filter(produto => produto.categoria === categoria.toLowerCase())
    const produtosParaMostrar = filtraPorMelhorPreço(produtosFiltradosPorCategoria)

    mostrarProdutos(produtosParaMostrar, elementoListaProdutos)
}

mostrarCategorias(categorias)