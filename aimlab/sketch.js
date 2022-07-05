

let dataServer;
let pubKey = "pub-c-c0459111-434c-403a-980e-2eff7fc61d04";
let subKey = "sub-c-e1f3336e-ce21-49d5-a2da-29da7dcd2741";
let secretKey = "sec-c-ZTgyOGY0YTktYThjYS00MzBiLWIwNDItMzM2ZjEwNjJkM2Ex";

// channel name is the "room" that you will all be chatting in (think about it like a group chat)
let channelName = "race";
let cursors = [];

let xcircle = (500,500)
let ycircle = (500,500)
let you; 
let timeLimit = 30;
let countdown;

let refresh = 20;
let lastRefresh = 0;

let race = "Click the circles before your classmates!";

function preload() {

  you = random(0,1000000); 
  console.log(you);
  you = int(you);
  console.log(you);
  you = you.toString();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  //noCursor();
  //text(race,windowWidth/2,100,100,100);


  // initialize our PubNub Server
  dataServer = new PubNub({
    subscribeKey: subKey,
    publishKey: pubKey,
    uuid: "you",
    secretKey: "secretKey",
    heartbeatInterval: 0,
  });

  // listen for messages coming through the subcription feed on this specific channel. 
  dataServer.addListener({ message: readIncoming});
  dataServer.subscribe({ channels: [channelName] });

  // create a new JSON object to store our data
  new allCursors(mouseX,mouseY,dataServer.getUUID())
}

function draw() {

  background(255);
  //text(race,windowWidth/2,100,100,100);

  ellipse(xcircle,ycircle,50,50);
  
  for (let i = 0; i < cursors.length; i++) { // loop through all the cursors and show them on the page
    stroke(0);
    strokeWeight(1);
    // draw a small crosshair
    line(cursors[i].x,cursors[i].y-5,cursors[i].x,cursors[i].y+5);
    line(cursors[i].x-5,cursors[i].y,cursors[i].x+5,cursors[i].y);
    }

 let currentTime = int(millis() /1000);
    countdown = timeLimit - currentTime;
    
    
    textSize(24);
    text("TIME: " + currentTime, 10,20);


  
sendTheMessage(); // send the message with the cursor location every 100ms. 
   
  }

  

function mouseClicked(){
  if ((mouseX > xcircle-25) && (mouseX < xcircle+25) &&
  (mouseY > ycircle-25) && (mouseY < ycircle+25)) {
  //background(255);
   //fill(240, 20, 140);
   xcircle = random(0,windowWidth-100)
   ycircle = random(0,windowHeight-100)
} else {
  //fill(128);
}

}





/// PubNub logic below
function sendTheMessage() {
  // Send Data to the server to draw it in all other canvases
  dataServer.publish({
    channel: channelName,
    message: {
      x: mouseX,
      y: mouseY,
    },
  });
}

function readIncoming(inMessage) {
  // when new data comes in it triggers this function,
  // we call this function in the setup

  /*since an App can have many channels, we ensure that we are listening
  to the correct channel */

  if (inMessage.channel == channelName) {

   x = inMessage.message.x // get the mouseX value from the other people
   y = inMessage.message.y // get the mouseY value from the other people
   who = inMessage.publisher; // who sent the message

 //  console.log(inMessage); //logging for information

   let newinput = true; // we are checking to see if this person who sent the message is already on the page. 

      for(let i = 0; i<cursors.length;i++) { // loop through all the IDs that have sent us messages before
        if(you==cursors[i].you) { // if who is already in our array, update the x & y values
          cursors[i].x = x;
          cursors[i].y = y;
          newinput = false;    // set the boolean to false since this is not a new user
        }
      }
      if(newinput) { // if this is a new user, create a new JSON object that we add to our array
        cursors.push(new allCursors(x,y, you));
      }
  }
}
function allCursors(x,y,you){ // creates a new JSON object for us
 
  this.x = x; // this is shorthand for saying "this object"
  this.y = y;
  this.you = you;

}
function windowResized() { // this function detects when the window is moved, and resizes the canvas
  
  resizeCanvas(windowWidth, windowHeight); 

}
