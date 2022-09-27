let start = false
let button;
let clickme;
let timer = 0

//starts/resets sim and adds click button

function start_sim(){
  background(255)
  start = true
  timer = 0
  counter= 0
  written = []
  clickme = createButton("click");
  clickme.position(windowWidth/2,500);
}
//makes start button when clicked intiate function start_sim

function setup() {
  createCanvas(windowWidth,windowHeight);
  button = createButton("START");
  button.position(windowWidth/2,0);
  button.mouseClicked(start_sim);

}
//draws timer + prints from array randomly 

function draw() {
  if (!start) return
  background(255)
  for (let i = 0; i < written.length; i++ ) {
    let w = written[i]
    textSize(w.textsize)
    text(words[w.randomprint%words.length],w.width,w.height)
  }
  textSize(20)
  if (frameCount % 60 == 0)
    timer ++;
  text(timer+" seconds",10,20)
  text(counter+" clicks",150,20)
   
}
let counter = 0
let words = ["happy" , "love", "good", "fabulous", "excellent", "congratulations", "accomplished", "food", "sex", "best", "cheer", "smart", "pretty", "enjoy", "joy","warm", "bliss", "laughter", "win", "success", "free", "smile", "sun", "holiday", "lucky"
]
let width = 0
let height = 0
let written = []
let textsize = 0
let randomprint = 0

// counter clicks + random location of words and size + pushes words to array
function mousePressed() {
  if (!start)return
  counter++
  randomprint =Math.floor(Math.random()*words.length)
  console.log(counter)
  width = Math.random()*(windowWidth-200)+50
  height = Math.random()*(windowHeight-100)+50
  textsize = (Math.random()*20+20);
  written.push({randomprint,width,height,textsize})
  
}
