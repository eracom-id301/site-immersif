let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();



let currentImage = 0; 


timeline
  .to(".ground", 10, { y: -300 })
  .to(".yoda", 10, { y: -200 }, "-=10")
  .fromTo(".bg", { y: -25 }, { y: 0, duration: 5 }, "-=10")
  .to(".info", 1, { y: -0 }, "-=10")
  
  .to(".sub", 2, { y: 0 }, "-=10")
  .to(".main-title", 1, { y: 0 }, "-=10")
  
  /*.to(".content", 20, { top: "0%" }, "-=10")
  .fromTo(".content-images", { opacity: 0 }, { opacity: 1, duration: 2 })
  .fromTo(".text", { opacity: 0 }, { opacity: 1, duration: 2 })*/
  ;

let scene = new ScrollMagic.Scene({
  triggerElement: "section",
  duration: "200%",
  triggerHook: 0,


})
  .setTween(timeline)
  .setPin("section")
  .addTo(controller);


  const trailer = document.querySelector(".trailer");
  const miniature = document.querySelector(".video");

  miniature.addEventListener("click", (e) =>{
 trailer.style.visibility = "visible";
 
   return false;
 })
 ;

 trailer.addEventListener("click",(e)=>{ 
 trailer.style.visibility="hidden";
});

  const slider = document.querySelector(".slider-container");
  const miniatureSlider = document.querySelector(".images");

  miniatureSlider.addEventListener("click", (e) =>{
 slider.style.visibility = "visible";
 
   return false;
 })
 ;

 slider.addEventListener("click",(e)=>{ 
 slider.style.visibility = "hidden";
});

 

     
    
  
  
