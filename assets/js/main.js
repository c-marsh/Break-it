import Paddle from "./paddle.js";
let canvas = document.getElementById('game');
let context = canvas.getContext('2d');
export default context;

//Defining playing size
const gameWidth = 800;
const gameHeight = 600;

context.clearRect(0, 0, gameWidth, gameHeight); //Clear screen on refresh

let paddle = new Paddle(gameWidth, gameHeight);
paddle.draw();

