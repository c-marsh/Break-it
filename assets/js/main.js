import Paddle from "./paddle.js";
let canvas = document.getElementById('game');
//Define context


function setupCanvas(canvas) {
  // Get the device pixel ratio, falling back to 1.
  var dpr = window.devicePixelRatio || 1;
  // Get the size of the canvas in CSS pixels.
  var rect = canvas.getBoundingClientRect();
  // Give the canvas pixel dimensions of their CSS
  // size * the device pixel ratio.
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  let context = canvas.getContext('2d');
  // Scale all drawing operations by the dpr, so you
  // don't have to worry about the difference.
  context.scale(dpr, dpr);
  return context;
}

// Now this line will be the same size on the page
// but will look sharper on high-DPI devices!
var context = setupCanvas(document.querySelector('#game'));
context.lineWidth = 5;
context.beginPath();
context.moveTo(100, 100);
context.lineTo(200, 200);
context.stroke();

//Defining playing size
const gameWidth = document.documentElement.clientWidth;
const gameHeight = 600;

context.clearRect(0, 0, gameWidth, gameHeight); //Clear screen on refresh

let paddle = new Paddle(gameWidth, gameHeight);
paddle.draw(context);

