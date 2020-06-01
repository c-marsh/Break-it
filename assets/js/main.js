import Paddle from "./paddle.js";
let canvas = document.getElementById('game');

// Adjusts pixel resolution for Retina displays: https://stackoverflow.com/questions/35820750/understanding-html-retina-canvas-support
//Returns: 1 on 'normal' screens, 2 on retina displays
var PIXEL_RATIO = (function () {
    var ctx = document.createElement("canvas").getContext("2d"),
        dpr = window.devicePixelRatio || 1,
        bsr = ctx.webkitBackingStorePixelRatio ||
              ctx.mozBackingStorePixelRatio ||
              ctx.msBackingStorePixelRatio ||
              ctx.oBackingStorePixelRatio ||
              ctx.backingStorePixelRatio || 1;

    return dpr / bsr;
})();


function makeCanvasHiPPI(canvas) {
  canvas.style.width  = canvas.width  + "px";
  canvas.style.height = canvas.height + "px";

  canvas.width  *= PIXEL_RATIO;
  canvas.height *= PIXEL_RATIO;

  var context = canvas.getContext('2d');
  context.scale(PIXEL_RATIO, PIXEL_RATIO)
}

//Define context
let context = canvas.getContext('2d');

//Defining playing size
const gameWidth = 800;
const gameHeight = 600;

context.clearRect(0, 0, gameWidth, gameHeight); //Clear screen on refresh

let paddle = new Paddle(gameWidth, gameHeight);
paddle.draw(context);

