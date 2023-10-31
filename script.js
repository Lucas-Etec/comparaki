function carregarPagina(url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            const container = document.getElementById('conteudo');
            const containerContent = data;
            container.innerHTML += containerContent;
        });
}

carregarPagina('pages/categorias.html')