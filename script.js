// pegando elementos do menu no DOM
const menuBtn = document.getElementById("menu-icon")
const sideMenu = document.getElementById("side-menu")
const overlay = document.getElementById("overlay")

// função toggle para ativar/desativar o menu
menuBtn.addEventListener("click", () => {
    sideMenu.classList.toggle("open") // abre o menu lateral
    menuBtn.classList.toggle("open")  // tranforma o icone do menu para um X
    overlay.classList.toggle("open")  // ativa o overlay com filtro de blur
    document.body.classList.toggle("open") // impede a rolagem vertical enquanto o menu estiver aberto
})

// buscando os botões dos cards da área "explorar"
const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")

// usando arrow functions para cada um dos botões levar para em endereço específico
btn1.addEventListener("click", () => {
    window.location.href = "paginas/arquitetura.html"
})

btn2.addEventListener("click", () => {
    window.location.href = "paginas/webdesign.html"
})

btn3.addEventListener("click", () => {
    window.location.href = "paginas/exemplos.html"
})

// animação simples dos cards na área explorar usando GSAP
document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.from(".card", {
        opacity: 0,         
        duration: 4,
        scrollTrigger: {
            trigger: ".card",
        }
    })
})