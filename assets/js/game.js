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
    //create an array of features in the game
    this.features = [this.ball, this.paddle, this.topPaddle];
    new KeyBindings(this.paddle, this.topPaddle);
  }

  update(deltaTime) {
    //Pass time to array of feature
    this.features.forEach((Object) => {
      Object.update(deltaTime);
    });
  }
  draw(context) {
    //Redraw paddles
    this.features.forEach((Object) => {
      Object.draw(context);
    });
  }
}
