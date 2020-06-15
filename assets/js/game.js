//Import class and functions
import Paddle from "./paddle.js";
import TopPaddle from "./topPaddle.js";
import Ball from "./ball.js";
import KeyBindings from "./keyBindings.js";
import {
  createLevel,
  level1,
  level2,
  level3,
  level4,
  level5,
  level6,
  level7,
  level8,
  level9,
  level10,
  level11,
  level12,
  level13,
  level14,
  level15,
} from "./levels.js";

// Screens/Play States created as an object
const screen = {
  menu: 0,
  running: 1,
  paused: 2,
  gameOver: 3,
  levelUp: 4,
  cheat: 5,
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
    this.levels = [
      level1,
      level2,
      level3,
      level4,
      level5,
      level6,
      level7,
      level8,
      level9,
      level10,
      level11,
      level12,
      level13,
      level14,
      level15,
    ];
    this.playLevel = 0;

    //Score
    this.score = 0;
    this.highscore = localStorage.getItem("highscore");

    //SFX

    this.brickSFX = document.getElementById("brickSFX");
    this.paddleSFX = document.getElementById("paddleSFX");
    this.gameOverSFX = document.getElementById("gameOverSFX");
    this.levelUpSFX = document.getElementById("levelUpSFX");
    this.cheatSFX = document.getElementById("cheatSFX");

    //Keymapping to paddles
    new KeyBindings(this.paddle, this.topPaddle, this);
  }
  // This allows Space bar to be used for innitiating the game in the menu screen, or refreshing the page in the gameover/cheat screen
  spaceBar() {
    if (this.screen === screen.menu) {
      this.start();
    } else if (
      this.screen === screen.gameOver ||
      this.screen === screen.cheat
    ) {
      window.location.reload(false);
    }
  }
  //pause function called when ESC is pressed
  pause() {
    if (this.screen == screen.menu) {
      return;
    } else if (this.screen == screen.paused) {
      this.screen = screen.running;
    } else if ((this.screen = screen.running)) {
      this.screen = screen.paused;
    }
  }
  //start the game function
  start() {
    if (this.screen !== screen.menu && this.screen !== screen.levelUp) {
      return;
    }
    //runs createLevel function from level.js to create the level
    this.bricks = createLevel(this, this.levels[this.playLevel]);
    this.ball.newBall();

    //create an array of features in the game
    this.features = [this.ball, this.paddle, this.topPaddle];
    this.screen = screen.running;

    //play start levevel SFX
    document.getElementById("levelUpSFX").play();
  }

  update(deltaTime) {
    //display GameOver screen if no balls left or last level reached
    if (this.ballsRemaining === 0 || this.playLevel === 15) {
      this.screen = screen.gameOver;
      //if previous highscore found...
      if (this.highscore !== null) {
        //...and if this is greater than previous highscore, overwrite it.
        if (this.score > this.highscore) {
          localStorage.setItem("highscore", this.score);
        }
        //if NaN has been recorded
      } else if (this.highscore.isNaN()) {
        localStorage.setItem("highscore", this.score);
      } else {
        //if no previous score record this score
        localStorage.setItem("highscore", this.score);
      }
    }
    //If screen width is not the same as screen when game loaded, remove 1 from highscore, unless no highscore detected
    if (document.documentElement.clientWidth != this.gameWidth) {
      this.screen = screen.cheat;
      if (this.highscore !== null) {
        localStorage.setItem("highscore", (this.highscore = -1));
      }
    }

    //Stop animation cycle if screen is paused/menu/game over/cheat
    if (
      this.screen === screen.paused ||
      this.screen === screen.menu ||
      this.screen === screen.gameOver ||
      this.screen === screen.cheat
    ) {
      return;
    }

    //if all bricks are cleared...
    if (this.bricks.length === 0) {
      //...Level up
      this.playLevel += 1;
      //... add a ball
      this.ballsRemaining += 1;
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
    //draw game field text
    this.textStyling(
      context,
      "12px Major Mono Display",
      "#3b8ea5",
      "left",
      "Score: " + this.score + " | " + this.ballsRemaining + " balls left",
      10,
      15
    );

    this.textStyling(
      context,
      "12px Major Mono Display",
      "#3b8ea5",
      "right",
      "level " + (this.playLevel + 1),
      this.gameWidth - 10,
      15
    );

    //Redraw game features
    [...this.features, ...this.bricks].forEach((Object) => {
      Object.draw(context);
    });

    //cheat screen
    if (this.screen === screen.cheat) {
      document.getElementById("cheatSFX").play();
      if (this.gameWidth < 600) {
        //styling small screens
        context.fillStyle = "#AB3428";
        context.fillRect(0, 0, this.gameWidth, this.gameHeight);
        //content
        this.textStyling(
          context,
          "12px Major Mono Display",
          "#F5EE9E",
          "center",
          "press SPACE to restart",
          this.gameWidth / 2,
          this.gameHeight / 20
        );

        this.textStyling(
          context,
          "30px Major Mono Display",
          "#F5EE9E",
          "center",
          "Cheat!",
          this.gameWidth / 2,
          this.gameHeight / 3
        );

        this.textStyling(
          context,
          "20px Major Mono Display",
          "#F5EE9E",
          "center",
          "You've been caught cheating",
          this.gameWidth / 2,
          this.gameHeight / 2
        );

        this.textStyling(
          context,
          "12px Major Mono Display",
          "#F5EE9E",
          "center",
          "Your highscore may be reduced as punishment",
          this.gameWidth / 2,
          (this.gameHeight / 3) * 2
        );
      } else {
        //styling larger screens
        context.fillStyle = "#AB3428";
        context.fillRect(0, 0, this.gameWidth, this.gameHeight);
        //content
        this.textStyling(
          context,
          "16px Major Mono Display",
          "#F5EE9E",
          "left",
          "press SPACE to restart",
          this.gameWidth / 20,
          this.gameHeight / 20
        );

        this.textStyling(
          context,
          "30px Major Mono Display",
          "#F5EE9E",
          "center",
          "Cheat!",
          this.gameWidth / 2,
          this.gameHeight / 3
        );

        this.textStyling(
          context,
          "30px Major Mono Display",
          "#F5EE9E",
          "center",
          "You've been caught cheating",
          this.gameWidth / 2,
          this.gameHeight / 2
        );

        this.textStyling(
          context,
          "30px Major Mono Display",
          "#F5EE9E",
          "center",
          "Your highscore may be reduced as punishment",
          this.gameWidth / 2,
          (this.gameHeight / 3) * 2
        );
      }
    }
    //pause screen
    if (this.screen === screen.paused) {
      if (this.gameWidth < 600) {
        // Small screen version
        context.fillStyle = "#183E4E";
        context.fillRect(0, 0, this.gameWidth, this.gameHeight);

        this.textStyling(
          context,
          "16px Major Mono Display",
          "#F5EEA3",
          "center",
          "ESC to PAUSE | m to Mute",
          this.gameWidth / 2,
          this.gameHeight / 20
        );

        this.textStyling(
          context,
          "30px Major Mono Display",
          "#F5EEA3",
          "center",
          "Paused",
          this.gameWidth / 2,
          this.gameHeight / 3
        );

        this.textStyling(
          context,
          "20px Major Mono Display",
          "#F5EEA3",
          "center",
          "Your current score: " + this.score,
          this.gameWidth / 2,
          this.gameHeight / 2
        );

        this.textStyling(
          context,
          "20px Major Mono Display",
          "#F5EEA3",
          "center",
          this.ballsRemaining + " balls remaining",
          this.gameWidth / 2,
          (this.gameHeight / 3) * 2
        );
      } else {
        context.fillStyle = "#183E4E";
        context.fillRect(0, 0, this.gameWidth, this.gameHeight);

        this.textStyling(
          context,
          "16px Major Mono Display",
          "#F5EEA3",
          "left",
          "press ESC to PAUSE | Press m to Mute",
          this.gameWidth / 20,
          this.gameHeight / 20
        );

        this.textStyling(
          context,
          "30px Major Mono Display",
          "#F5EEA3",
          "center",
          "Paused",
          this.gameWidth / 2,
          this.gameHeight / 3
        );

        this.textStyling(
          context,
          "20px Major Mono Display",
          "#F5EEA3",
          "center",
          "Your current score: " + this.score,
          this.gameWidth / 2,
          this.gameHeight / 2
        );

        this.textStyling(
          context,
          "20px Major Mono Display",
          "#F5EEA3",
          "center",
          this.ballsRemaining + " balls remaining",
          this.gameWidth / 2,
          (this.gameHeight / 3) * 2
        );
      }
    }
    //menu screen
    if (this.screen === screen.menu) {
      if (document.documentElement.clientHeight < 600 || this.gameWidth < 421) {
        //styling too small
        context.fillStyle = "#3B8EA5";
        context.fillRect(0, 0, this.gameWidth, this.gameHeight);
        //text
        this.textStyling(
          context,
          "14px Major Mono Display",
          "#F5EE9E",
          "center",
          "screen too small for game",
          this.gameWidth / 2,
          this.gameHeight / 2 - 50
        );

        //text
        this.textStyling(
          context,
          "12px Major Mono Display",
          "#F5EE9E",
          "center",
          "try vertical alignment",
          this.gameWidth / 2,
          this.gameHeight / 2
        );
      } else if (421 < this.gameWidth) {
        //styling tablet size+
        context.fillStyle = "#3B8EA5";
        context.fillRect(0, 0, this.gameWidth, this.gameHeight);
        //text
        this.textStyling(
          context,
          "14px Major Mono Display",
          "#F5EE9E",
          "center",
          "use LEFT and RIGHT to move paddle",
          this.gameWidth / 2,
          this.gameHeight / 2 - 50
        );

        //text
        this.textStyling(
          context,
          "28px Major Mono Display",
          "#F5EE9E",
          "center",
          "Press SPACE to start",
          this.gameWidth / 2,
          this.gameHeight / 2
        );

        this.textStyling(
          context,
          "12px Major Mono Display",
          "#F5EE9E",
          "center",
          "press ESC to PAUSE | Press m to Mute",
          this.gameWidth / 2,
          this.gameHeight / 20
        );

        this.textStyling(
          context,
          "12px Major Mono Display",
          "#F5EE9E",
          "center",
          this.ballsRemaining + " balls left",
          this.gameWidth / 2,
          this.gameHeight / 20 + 18 * (this.gameHeight / 20)
        );
      }
    }

    //game over screen
    if (this.screen === screen.gameOver) {
      if (this.gameWidth < 600) {
        //styling Small screen
        document.getElementById("gameOverSFX").play();
        context.fillStyle = "#AB3428";
        context.fillRect(0, 0, this.gameWidth, this.gameHeight);
        //content
        this.textStyling(
          context,
          "12px Major Mono Display",
          "#F5EE9E",
          "center",
          "press SPACE to restart",
          this.gameWidth / 2,
          this.gameHeight / 20
        );

        this.textStyling(
          context,
          "30px Major Mono Display",
          "#F5EE9E",
          "center",
          "game over",
          this.gameWidth / 2,
          this.gameHeight / 3
        );

        this.textStyling(
          context,
          "16px Major Mono Display",
          "#F5EE9E",
          "center",
          "Your score: " + this.score,
          this.gameWidth / 2,
          this.gameHeight / 2
        );

        if (this.score > this.highscore || this.highscore == null) {
          this.textStyling(
            context,
            "12px Major Mono Display",
            "#F5EE9E",
            "center",
            "Congratulations, new highscore",
            this.gameWidth / 2,
            (this.gameHeight / 3) * 2
          );
        } else {
          this.textStyling(
            context,
            "12px Major Mono Display",
            "#F5EE9E",
            "center",
            "Previous highscore: " + this.highscore,
            this.gameWidth / 2,
            (this.gameHeight / 3) * 2
          );
        }
      } else {
        //styling larger screen
        document.getElementById("gameOverSFX").play();
        context.fillStyle = "#AB3428";
        context.fillRect(0, 0, this.gameWidth, this.gameHeight);
        //content
        this.textStyling(
          context,
          "16px Major Mono Display",
          "#F5EE9E",
          "left",
          "press SPACE to restart",
          this.gameWidth / 20,
          this.gameHeight / 20
        );

        this.textStyling(
          context,
          "30px Major Mono Display",
          "#F5EE9E",
          "center",
          "game over",
          this.gameWidth / 2,
          this.gameHeight / 3
        );

        this.textStyling(
          context,
          "30px Major Mono Display",
          "#F5EE9E",
          "center",
          "Your score: " + this.score,
          this.gameWidth / 2,
          this.gameHeight / 2
        );

        if (this.score > this.highscore) {
          this.textStyling(
            context,
            "30px Major Mono Display",
            "#F5EE9E",
            "center",
            "Congratulations, new highscore",
            this.gameWidth / 2,
            (this.gameHeight / 3) * 2
          );
        } else {
          this.textStyling(
            context,
            "30px Major Mono Display",
            "#F5EE9E",
            "center",
            "Previous highscore: " + this.highscore,
            this.gameWidth / 2,
            (this.gameHeight / 3) * 2
          );
        }
      }
    }
  }

  //Method for styling text
  textStyling(context, font, style, align, textString, xText, yText) {
    context.font = font;
    context.fillStyle = style;
    context.textAlign = align;
    context.fillText(textString, xText, yText);
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
  cheatSFX() {
    document.getElementById("cheatSFX").muted = !document.getElementById(
      "cheatSFX"
    ).muted;
  }
}
