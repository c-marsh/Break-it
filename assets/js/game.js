import Paddle from "./paddle.js";
import TopPaddle from "./top_paddle.js";
import Ball from "./ball.js";
import KeyBindings from "./input.js";
export default class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
  }
    
  //Define and draw paddles
  start() {
    this.paddle = new Paddle(this);
    this.topPaddle = new TopPaddle(this);
    this.ball = new Ball(this);
    new KeyBindings(this.paddle, this.topPaddle);
  }

  update(deltaTime) {
    //Pass time to paddles
    this.paddle.update(deltaTime);
    this.topPaddle.update(deltaTime);
    this.ball.update(deltaTime);
  }
  draw(context) {
    //Redraw paddles
    this.paddle.draw(context);
    this.topPaddle.draw(context);
    this.ball.draw(context);
  }
}
