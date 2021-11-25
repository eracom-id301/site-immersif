
const container = document.querySelector("container");
const img = document.querySelector(".img");


container.addEventListener("mousemove", e => {
  if (window.scrollY < 200) {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 10;
  
    img.style.transform = `translate(${xAxis}px, ${yAxis}px)`
  } else { 
    img.style.transform = "translate(0px,0px)"
    img.style.transition = "all 0.5s ease"
  }
});

container.addEventListener("mouseenter", e => {
  img.style.transition = "none"
});

container.addEventListener("mouseleave", e => {
  img.style.transition = "all 0.5s ease"
  img.style.transform = "translate(0px,0px)"

});


