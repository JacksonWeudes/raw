const menuBtn = document.getElementById("menu-icon")
const sideMenu = document.getElementById("side-menu")
const overlay = document.getElementById("overlay")

menuBtn.addEventListener("click", () => {
    sideMenu.classList.toggle("open")
    menuBtn.classList.toggle("open")
    overlay.classList.toggle("open")
    document.body.classList.toggle("open")
})

const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")

btn1.addEventListener("click", () => {
    window.location.href = "paginas/arquitetura.html"
})

btn2.addEventListener("click", () => {
    window.location.href = "paginas/webdesign.html"
})

btn3.addEventListener("click", () => {
    window.location.href = "paginas/exemplos.html"
})

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