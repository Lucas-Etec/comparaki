fetch('categorias.html')
    .then(response => response.text())
    .then(data => {
        const main = document.getElementsByTagName('main')[0];
        const mainContent = data;
        main.innerHTML += mainContent;
    });