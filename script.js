fetch('categorias.html')
    .then(response => response.text())
    .then(data => {
        const container = document.getElementById('conteudo');
        const containerContent = data;
        container.innerHTML += containerContent;
    });