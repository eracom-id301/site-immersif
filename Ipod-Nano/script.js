const main = document.querySelector("#main")
const couple = document.querySelector("#couple")
const casque = document.querySelector("#casque")
const tete = document.querySelector("#tete")
const body = document.querySelector("body")
const frame = document.querySelector(".iframe")
const imgGlitch = document.querySelectorAll("svg")
const span = document.querySelectorAll("span")
const paragraphe = document.querySelectorAll("p")
const nextbtn = document.querySelector(".next")
const prevbtn = document.querySelector(".previous")

//phrases importantes qui se mettent en valeur


// illustration qui apparraisse
frame.addEventListener("mouseover", function (){
  //main
  main.style.transform = "translate(-20vw, -20vw)"
  main.style.transition = ".5s"
  main.style.opacity = "1"
  //couple
  couple.style.transform = "translate(20vw,20vw)"
  couple.style.transition = ".5s"
  couple.style.opacity = "1"
  //casque
  casque.style.transform = "translate(20vw, -20vw)"
  casque.style.transition = ".5s"
  casque.style.opacity = "1"
  //tete
  tete.style.transform = "translate(-20vw, 20vw)"
  tete.style.transition = ".5s"
  tete.style.opacity = "1"
})

// illustration qui disparaisse

frame.addEventListener("mouseout", function () {
  //main
  main.style.transform = "translate(30vw, 0)"
  main.style.transition = ".5s"
  main.style.opacity = "0"
  //couple
  couple.style.transform = "translate(-32vw,0)"
  couple.style.transition = ".5s"
  couple.style.opacity = "0"
  //casque
  casque.style.transform = "translate(0, 40vh)"
  casque.style.transition = ".5s"
  casque.style.opacity = "0"
  //tete
  tete.style.transform = "translate(0,-40vh)"
  tete.style.transition = ".5s"
  tete.style.opacity = "0"
})

body.addEventListener("click", function () {
  body.classList.add("glitch");
})
