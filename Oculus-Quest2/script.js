// Script qui 
const container = document.querySelector("container")
const img = document.querySelector("img")

container.addEventListener("mousemove", (e) => {
let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
let yAxis = (window.innerHeight / 2 - e.pageY) / 10;

img.style.transform = rotateY(${xAxis}deg) rotateX(${yAxis}deg)
})
