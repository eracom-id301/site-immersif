const explicationsBlue = document.querySelector(".explications_blue")
const explicationsComp = document.querySelector(".explications_comp")
const explicationsOnOff = document.querySelector(".explications_on")
const explicationsFlash = document.querySelector(".explications_flash")
const explicationsOuv = document.querySelector(".explications_ouv")

const bluetooth = document.querySelector(".bluetooth")
const flash = document.querySelector(".flash")
const ouverture = document.querySelector(".ouverture")
const compartiment = document.querySelector(".compartiment")
const onoff = document.querySelector(".onoff")

const transitionFlash = document.querySelector(".transition_flash")

const nextbtn = document.querySelector(".next")
const prevbtn = document.querySelector(".previous")


bluetooth.addEventListener("click", function(){
  transitionFlash.style.display = "block";
  transitionFlash.style.animation = "fade .5s"
  explicationsBlue.style.display = "block";
})

compartiment.addEventListener("click", function(){
  transitionFlash.style.display = "block";
  transitionFlash.style.animation = "fade .5s"
  explicationsComp.style.display = "block";
})

onoff.addEventListener("click", function(){
  transitionFlash.style.display = "block";
  transitionFlash.style.animation = "fade .5s"
  explicationsOnOff.style.display = "block";
})

ouverture.addEventListener("click", function(){
  transitionFlash.style.display = "block";
  transitionFlash.style.animation = "fade .5s"
  explicationsOuv.style.display = "block";
})

flash.addEventListener("click", function(){
  transitionFlash.style.display = "block";
  transitionFlash.style.animation = "fade .5s"
  explicationsFlash.style.display = "block";
})
