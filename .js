

const botao= document.getElementById("btn-menu")
const menu = document.getElementById("lista-menu")

botao.addEventListener("click", () => {
    menu.classList.toggle("ativo")
})