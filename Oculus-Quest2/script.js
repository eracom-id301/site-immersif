
const container = document.querySelector("container");
const img = document.querySelector(".img");
const m1 = document.querySelector(".M1");
const m2 = document.querySelector(".M2");
const m3 = document.querySelector(".M3");
const m4 = document.querySelector(".M4");


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

window.addEventListener("scroll", () =>{
  console.log(window.scrollY)
  if (window.scrollY < 250){
if (window.scrollY >= 200) {
  gsap.to(".casque", {duration: 3, ease: "power1.in", y: -1000});
}
}
if (window.scrollY < 800){
if (window.scrollY >= 700) {
  gsap.to(".Mgauche", {duration:2, ease: "power1.inout", x: `15vw`, scale: 1.2});
  gsap.to(".Mdroite", {duration:2, ease: "power1.inout", x: `-15vw`, scale: 1.2});
  gsap.to(".boule", {duration:3, ease:"power1.inout", scale:0.6});
  gsap.to(".titre", {duration:2, ease:"power1.inout", opacity:0});
  gsap.to(".carac", {duration:2, delay:1, opacity:1});

  if (window.scrollY < 1300){
  if (window.scrollY >= 1200){
   
  }
}
}
}
});


container.addEventListener("mouseenter", e => {
  img.style.transition = "none"
});

container.addEventListener("mouseleave", e => {
  img.style.transition = "all 0.5s ease"
  img.style.transform = "translate(0px,0px)"

});

