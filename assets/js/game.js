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
  constructor(gameWidth, gameHeight, popSound) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.screen = screen.menu;
    //Declare variables
    this.paddle = new Paddle(this);
    this.topPaddle = new TopPaddle(this);
    this.ball = new Ball(this);
    this.features = [];
    this.ballsRemaining = 3;
    //Keymapping to paddles
    new KeyBindings(this.paddle, this.topPaddle, this);
  }
  //start the game function
  start() {
    //runs createLevel function from level.js to create the level
    let bricks = createLevel(this, level1);
    this.ball.newBall();
    //disable reinitiating level once it has started
    if (this.screen !== screen.menu) return;
    //create an array of features in the game
    this.features = [this.ball, this.paddle, this.topPaddle, ...bricks];
    this.screen = screen.running;
  }

  update(deltaTime) {
    if (this.ballsRemaining === 0) this.screen = screen.gameOver;

    //Stop animation cycle if screen is paused/menu
    if (
      this.screen === screen.paused ||
      this.screen === screen.menu ||
      this.screen === screen.gameOver
    )
      return;
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
    if (this.screen === screen.paused) {
      //test pause screen from https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors
      for (var i = 0; i < this.gameWidth; i++) {
        for (var j = 0; j < this.gameHeight; j++) {
          context.fillStyle =
            "rgb(" +
            Math.floor(255 - 20 * i) +
            ", " +
            Math.floor(255 - 20 * j) +
            ", 0)";
          context.fillRect(j * 100, i * 100, this.gameWidth, this.gameHeight);
        }
      }
    }
    //menu screen
    if (this.screen === screen.menu) {
      context.fillRect(0, 0, this.gameWidth, this.gameHeight);
      context.fillStyle = "rgba(0,0,0,0.5)";
    }
    //menu screen
    if (this.screen === screen.gameOver) {
      context.fillRect(0, 0, this.gameWidth, this.gameHeight);
      context.fillStyle = "rgba(0,0,0,1)";
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
