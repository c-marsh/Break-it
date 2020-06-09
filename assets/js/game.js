import Paddle from "./paddle.js";
import TopPaddle from "./top_paddle.js";
import Ball from "./ball.js";
import KeyBindings from "./input.js";
import Brick from "./brick.js";
import { createLevel, level1 } from "./levels.js";

const screen = {
  menu: 0,
  running: 1,
  paused: 2,
  gameOver: 3,
};

export default class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
  }
    

  //start the game function
  start() {
    this.screen = screen.running;
    //Declare variables
    this.paddle = new Paddle(this);
    this.topPaddle = new TopPaddle(this);
    this.ball = new Ball(this);

    //runs createLevel function from level.js to create the level
    let bricks = createLevel(this, level1);

    //create an array of features in the game
    this.features = [this.ball, this.paddle, this.topPaddle, ...bricks];

    //Keymapping to paddles
    new KeyBindings(this.paddle, this.topPaddle, this);
  }

  update(deltaTime) {
    if (this.screen == screen.paused) return;
    //Pass time to array of feature
    this.features.forEach((Object) => {
      Object.update(deltaTime);
      this.features = this.features.filter((Object) => !Object.flaggedToRemove);
    });
  }
  draw(context) {
    //Redraw paddles
    this.features.forEach((Object) => {
      Object.draw(context);
    });
      
    //pause screen styling
      if (this.screen == screen.paused) {
  //test pause screen from https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors
  for (var i = 0; i < this.gameWidth; i++) {
    for (var j = 0; j < this.gameHeight; j++) {
      context.fillStyle = 'rgb(' + Math.floor(255 - 20 * i) + ', ' +
                       Math.floor(255 - 20 * j) + ', 0)';
      context.fillRect(j * 100, i * 100, 100, 100);
    }
  }
}
  }
  pause() {
    if (this.screen == screen.paused) {
      this.screen = screen.running;
    } else {
      this.screen = screen.paused;
    }
  }
}
