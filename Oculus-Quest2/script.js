
const container = document.querySelector("container");
const img = document.querySelector(".img");


container.addEventListener("mousemove", e => {
  console.log(e.pageX);
  let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 10;
  img.style.transform = "translate("+ xAxis +"px,"+ yAxis +"px)";
  
});
