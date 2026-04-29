

const botao= document.getElementById("btn-menu")
const menu = document.getElementById("lista-menu")

botao.addEventListener("click", () => {
    alert("clicou")
    menu.classList.toggle("ativo")
})

