const lista = document.getElementById("lista")

export default {
    abrir: () => {
        lista.classList.remove("escondido")
    },
    fechar: () => {
        lista.classList.add("escondido")
    }
}