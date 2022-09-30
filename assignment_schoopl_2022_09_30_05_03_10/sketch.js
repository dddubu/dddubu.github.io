let imgs = [];
let idx;
let a1;
let a2;
let a3;
let a4;

function preload(){
  a1 = loadImage("pic1.jpg")
  a2 = loadImage("pic2.jpg")
  a3 = loadImage("pic3.jpg")
  a4 = loadImage("pic4.jpg")
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  imgs[0] = a1;
  imgs[1] = a2;
  imgs[2] = a3;
  imgs[3] = a4;
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
  a1.resize(400,800);
 a2.resize(400,800);
  a3.resize(400,800);
  a4.resize(400,800);
}
function mouseClicked() {
  idx++;
  if (idx > imgs.length - 1) {
    idx = 0;
  }
}
