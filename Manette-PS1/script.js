const bodyElement = document.querySelector("body")
const effetEcran = bodyElement.querySelector("#cathodic")
const blue = bodyElement.querySelector(".blue");
const white = bodyElement.querySelector(".white");
const red = bodyElement.querySelector(".red");
const boxes = bodyElement.querySelectorAll("#boxes > div");

var w = 1920;
var h = 1080;
let successImage = false;
let gif;

intervale();

//Effet cathodique
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
};

var myVar = setInterval(function() {
  intervale(); 
}, 100);

function intervale(){transparence = getRandomInt(10);
  var trans = transparence/50;
  effetEcran.style.background = "rgba(0, 0, 0, " + trans + ")";
};

//Gif anime selon souris
function setup() {
  createCanvas(w, h);
  pixelDensity(1);
  centerX = w/2;
  centerY = h/2;
}

function successSwitch() {
  successImage = true;
}

function preload() {
  gif = loadImage('Video/ManettePS_BleuBlancRouge.gif', successSwitch);
}

function draw() {
  if (successImage == true) {
    gif.pause();
    image(gif, 0, 0, w, h);
    let maxFrame = gif.numFrames() - 1;
    let frameNumber = floor(map(mouseX, 0, width, 0, maxFrame, true));
    gif.setFrame(frameNumber);
  }
  if (successImage == false) {
    background(effetEcran.style.color);
    noStroke();
    for (let i = 0; i < 100; i++) {
      rect(random(width), random(height), 1, 1);
    };
  };
}

blue.addEventListener("mouseover", function(){
boxes[0].style.display = "block";
boxes[1].style.display = "none";
boxes[2].style.display = "none";
})

white.addEventListener("mouseover", function(){
boxes[0].style.display = "none";
boxes[1].style.display = "block";
boxes[2].style.display = "none";
})

red.addEventListener("mouseover", function(){
boxes[0].style.display = "none";
boxes[1].style.display = "none";
boxes[2].style.display = "block";
})