import { impact } from "./impact.js";
export default class Ball {
  constructor(game) {
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;
    this.game = game;
    //Ball dimensions, relative to canvas size
    this.sizeR = this.gameWidth / 100;

    //Ball Start coordinates
    this.position = {
      x: 100,
      y: 100,
    };

    //Ball Speed
    this.speed = {
      x: 4,
      y: 4,
    };

    //Ball extremes

    //Ball direction
    this.direction = this.xMove + this.yMove;
  }

  //ball
  draw(context) {
    context.beginPath();
    //context.arc(x,y,r,sAngle,eAngle,counterclockwise);
    context.arc(this.position.x, this.position.y, this.sizeR, 0, 2 * Math.PI);
    context.fillStyle = "green";
    context.fill();
  }

  update(deltaTime) {
    //Move ball
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;

    //Bounce off L/R sides
    if (
      this.position.x + this.sizeR >= this.gameWidth ||
      this.position.x - this.sizeR <= 0
    ) {
      this.speed.x = -this.speed.x;
    }

    //Bounce off bottom - for test purposes only
    if (this.position.y >= this.gameHeight || this.position.y <= 0) {
      this.speed.y = -this.speed.y;
    }
    //Top Paddle collision
    // let ballTop = this.position.y - this.sizeR;
    // let topPaddleBottom =
    //   this.game.topPaddle.position.yAxisTop + this.game.topPaddle.height;
    // let leftSideOfTopPaddle = this.game.topPaddle.position.xAxisTop;
    // let rightSideOfTopPaddle =
    //   this.game.topPaddle.position.xAxisTop + this.game.topPaddle.width;

    // // if (
    //   ballTop <= topPaddleBottom &&
    //   this.position.x >= leftSideOfTopPaddle &&
    //   this.position.x <= rightSideOfTopPaddle
    // ) {
    //this.speed.y = -this.speed.y;
    //this.position.y = this.game.paddle.position.yAxis - this.sizeR;
    //}
    // //Bottom Paddle collision
    // let ballBottom = this.position.y + this.sizeR;
    // let bottomPaddleTop = this.game.paddle.position.yAxis;
    // let leftSideOfPaddle = this.game.paddle.position.xAxis;
    // let rightSideOfPaddle =
    //   this.game.paddle.position.xAxis + this.game.paddle.width;

    // if (impact(this, this.game.paddle, this.game.topPaddle)) {
    //   this.speed.y = -this.speed.y;
      //this.position.y = this.game.paddle.position.yAxis - this.sizeR;
    
  }
}
