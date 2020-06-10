import Game from "./game.js";

//Identify canvas
let canvas = document.getElementById("game");

//Code for retina/HiDef canvas display from https://www.html5rocks.com/en/tutorials/canvas/hidpi/
function setupCanvas(canvas) {
  // Get the device pixel ratio, falling back to 1.
  var dpr = window.devicePixelRatio || 1;
  // Get the size of the canvas in CSS pixels.
  var rect = canvas.getBoundingClientRect();
  // Give the canvas pixel dimensions of their CSS
  // size * the device pixel ratio.
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  let context = canvas.getContext("2d");
  // Scale all drawing operations by the dpr, so you
  // don't have to worry about the difference.
  context.scale(dpr, dpr);
  return context;
}

// Now this line will be the same size on the page
// but will look sharper on high-DPI devices!
var context = setupCanvas(document.querySelector("#game"));
context.lineWidth = 5;
context.beginPath();
context.moveTo(100, 100);
context.lineTo(200, 200);
context.stroke();
//End of imported code

//Defining playing size
const gameWidth = document.documentElement.clientWidth;
const gameHeight = 700;

//instantiate game
let game = new Game(gameWidth, gameHeight);


//Build a frame refresh loop for the game
let lastTime = 0;

function gameLoop(timestamp) {
  //Define deltaTime as time elapsed since last frame
  let deltaTime = timestamp - lastTime;
  //Update the lastTime to current timestamp
  lastTime = timestamp;
  //Clear screen on refresh
  context.clearRect(0, 0, gameWidth, gameHeight);
  game.update(deltaTime);
  game.draw(context);
  requestAnimationFrame(gameLoop);
}
//Execute Game Loop
requestAnimationFrame(gameLoop);
