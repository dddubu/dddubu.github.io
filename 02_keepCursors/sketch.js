let imgs = [];
let idx;
let a1;
let a2;

function preload(){
  a1 = loadImage("animegirl1.jpg")
  a2 = loadImage("animegirl2.jpg")
  
}


function setup() {
  createCanvas(windowWidth/2, windowHeight/2);
  imgs[0] = a1;
  imgs[1] = a2;
  //imgs[2] = 2;
  idx = 0;
  background(20);
  fill(220);
  textSize(20);
}

function draw() {
  //background(20);
  //fill(220);
 // textSize(20);
  image(imgs[idx], 0, 0);
  a1.resize(400,400);
  a2.resize(400,400);
}

function mouseClicked() {
  idx++;
  if (idx > imgs.length - 1) {
    idx = 0;
  }
}