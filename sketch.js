function setup() {

  createCanvas(windowWidth, windowHeight);

  textSize(60);
  textAlign(CENTER);
 

  text("Be the first to click 10 circles!", windowWidth/2, windowHeight/3);

  let page1 = createA('/../aimlab/index.html', 'Start');
  page1.position(windowWidth/2, windowHeight/2);


}

 


function windowResized() { // this function detects when the window is moved, and resizes the canvas

  resizeCanvas(windowWidth, windowHeight); 

}
