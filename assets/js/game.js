import Paddle from "./paddle.js";
import TopPaddle from "./top_paddle.js";
import Ball from "./ball.js";
import KeyBindings from "./input.js";
import Brick from "./brick.js";
import {
  createLevel,
  level1,
  level2,
  level3,
  level4,
  level5,
  level6,
} from "./levels.js";

const screen = {
  menu: 0,
  running: 1,
  paused: 2,
  gameOver: 3,
  levelUp: 4,
};

export default class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.screen = screen.menu;
    //Declare variables
    this.paddle = new Paddle(this);
    this.topPaddle = new TopPaddle(this);
    this.ball = new Ball(this);
    this.features = [];
    this.bricks = [];
    this.ballsRemaining = 3;
    this.levels = [level1, level2, level3, level4, level5, level6];
    this.playLevel = 0;

    //Keymapping to paddles
    new KeyBindings(this.paddle, this.topPaddle, this);
  }
  //start the game function
  start() {
    if (this.screen !== screen.menu && this.screen !== screen.levelUp) return;
    //runs createLevel function from level.js to create the level
    this.bricks = createLevel(this, this.levels[this.playLevel]);
    this.ball.newBall();
    //disable reinitiating level once it has started
    if (this.screen !== screen.menu) return;
    //create an array of features in the game
    this.features = [this.ball, this.paddle, this.topPaddle];
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
    if (this.bricks.length === 0) {
      this.playLevel++;
      this.screen = screen.levelUp;
      document.getElementById("levelUpSFX").play();
      this.start();
    }

    [...this.features, ...this.bricks].forEach((Object) => {
      Object.update(deltaTime);
      this.bricks = this.bricks.filter((Object) => !Object.flaggedToRemove);
    });
  }
  draw(context) {
    //Redraw paddles
    [...this.features, ...this.bricks].forEach((Object) => {
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
      document.getElementById("gameOverSFX").play();
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
