//Import class and functions
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

// Screens/Play States created as an object
const screen = {
  menu: 0,
  running: 1,
  paused: 2,
  gameOver: 3,
  levelUp: 4,
};

//Create the Game Class
export default class Game {
  constructor(gameWidth, gameHeight) {
    //Game Attributes
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.screen = screen.menu;
    this.paddle = new Paddle(this);
    this.topPaddle = new TopPaddle(this);
    this.ball = new Ball(this);
    this.features = [];
    this.bricks = [];
    this.ballsRemaining = 3;
    this.levels = [level1, level2, level3, level4, level5, level6];
    this.playLevel = 0;

    //Score
    this.score = 0;
    //SFX

    this.brickSFX = document.getElementById("brickSFX");
    this.paddleSFX = document.getElementById("paddleSFX");
    this.gameOverSFX = document.getElementById("gameOverSFX");
    this.levelUpSFX = document.getElementById("levelUpSFX");

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

    //if all bricks are cleared...
    if (this.bricks.length === 0) {
      //...Level up
      this.playLevel++;
      this.screen = screen.levelUp;
      //...level up SFX
      document.getElementById("levelUpSFX").play();
      this.start();
    }

    //Update all objects
    [...this.features, ...this.bricks].forEach((Object) => {
      Object.update(deltaTime);
      //Update Bricks if not flagged for removal
      this.bricks = this.bricks.filter((Object) => !Object.flaggedToRemove);
    });
  }
  draw(context) {
    //Redraw everything
    [...this.features, ...this.bricks].forEach((Object) => {
      Object.draw(context);
    });

    //pause screen
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
      context.font = "30px Major Mono Display";
      context.fillStyle = "#0095DD";
      context.fillText(
        "press ESC to PAUSE \n\n Press m to Mute",
        this.gameWidth / 20,
        this.gameHeight / 20
      );
    }
    //menu screen
    if (this.screen === screen.menu) {
      //styling
      context.fillStyle = "#3B8EA5";
      context.fillRect(0, 0, this.gameWidth, this.gameHeight);

      //text
      context.font = "45px Major Mono Display";
      context.fillStyle = "#0095DD";
      context.fillText(
        "Press Space to start",
        this.gameWidth / 2,
        this.gameHeight / 2
      );

      context.font = "30px Major Mono Display";
      context.fillStyle = "#0095DD";
      context.fillText(
        "PRESS ESC TO PAUSE | PRESS M MUTE",
        this.gameWidth / 20,
        this.gameHeight / 20
      );
    }
    //game over screen
    if (this.screen === screen.gameOver) {
      //styling
      document.getElementById("gameOverSFX").play();
      context.fillRect(0, 0, this.gameWidth, this.gameHeight);
      context.fillStyle = "rgba(0,0,0,1)";
      context.fill();
      //content
      context.font = "45px Major Mono Display";
      context.fillStyle = "#0095DD";
      context.fillText(
        "score: " + this.score,
        this.gameWidth / 2,
        this.gameHeight / 2
      );
    }
  }
  //pause function called when ESC is pressed
  pause() {
    if (this.screen == screen.paused) {
      this.screen = screen.running;
    } else {
      this.screen = screen.paused;
    }
  }
  //mute functions called when M is pressed
  brickMuteSFX() {
    document.getElementById("brickSFX").muted = !document.getElementById(
      "brickSFX"
    ).muted;
  }
  paddleMuteSFX() {
    document.getElementById("paddleSFX").muted = !document.getElementById(
      "paddleSFX"
    ).muted;
  }
  gameMuteOverSFX() {
    document.getElementById("gameOverSFX").muted = !document.getElementById(
      "gameOverSFX"
    ).muted;
  }

  leveMutelUpSFX() {
    document.getElementById("levelUpSFX").muted = !document.getElementById(
      "levelUpSFX"
    ).muted;
  }
}
