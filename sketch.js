function setup() {

  createCanvas(windowWidth, windowHeight);

  textSize(60);
  textAlign(CENTER);
 

  text("Click the circles before your classmates!", windowWidth/2, windowHeight/2);

  let page1 = createA('/../aimlab/index.html', 'Start');
  page1.position(windowWidth/2, windowHeight/2);


}

function draw() {

//ellipse(width/2,height/2,100,100);  
}

function windowResized() { // this function detects when the window is moved, and resizes the canvas

  resizeCanvas(windowWidth, windowHeight); 

}
