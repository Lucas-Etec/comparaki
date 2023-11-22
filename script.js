import lista from "./js/lista.js";

const botaoAbrirLista = document.getElementById("botao-abrir-lista")
const botaoFecharLista = document.getElementById("botao-fechar-lista")

botaoAbrirLista.onclick = lista.toggle
botaoFecharLista.onclick = lista.fechar
lista.carregarLista()





function carregarPagina(url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            const container = document.getElementById('conteudo');
            const containerContent = data;
            container.innerHTML += containerContent;
        });
}

// carregarPagina('pages/categorias.html')
// carregarPagina('pages/produtos.html')