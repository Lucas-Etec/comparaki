import categorias from "../dados/categorias.js"

const listElement = document.querySelector("#categorias ul")

function mostrarCategorias(categorias) {
    listElement.innerHTML = ""

    categorias.forEach(categoria => {
        listElement.innerHTML += `
            <li>
                ${categoria.tagIcone}
                <span>${categoria.nome}</span>
            </li>
        `
    })
}

mostrarCategorias(categorias)