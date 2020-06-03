import Paddle from "./paddle.js";
import TopPaddle from "./top_paddle.js";
import Ball from "./ball.js";
import KeyBindings from "./input.js";
import Brick from "./brick.js";

export default class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
  }

 
  start() { 
    //Declare variables
    this.paddle = new Paddle(this);
    this.topPaddle = new TopPaddle(this);
    this.ball = new Ball(this);
    

    //create an empty array for bricks
    let bricks = [];
    //push 10 new bricks into array
    for(let i=0; i<10; i++){
        bricks.push(new Brick(this, { xAxisBrick: i * 87, yAxisBrick: 30 }));
    }
    
    //create an array of features in the game
    this.features = [this.ball, this.paddle, this.topPaddle, ...bricks];
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
