import { impact } from "./impact.js";
//Class to make paddle size
export default class Paddle {
  constructor(game) {
    this.gameWidth = game.gameWidth;
    //Paddle dimensions, relative to canvas size
    this.width = game.gameWidth / 10;
    this.height = game.gameHeight / 50;
      this.game = game;
    //Paddle velocity
    this.maxSpeed = 8;
    this.speed = 0;

    //Paddle position, relative to canvas size
    this.position = {
      xAxis: game.gameWidth / 2 - this.width / 2,
      yAxis: game.gameHeight - this.height - 10,
    };
  }
  //move left function
  moveLeft() {
    this.speed = -this.maxSpeed;
  }
  //move Right function
  moveRight() {
    this.speed = this.maxSpeed;
  }
  //Stop move function
  moveStop() {
    this.speed = 0;
  }
  draw(context) {
    //Paddle styling
    context.fillStyle = "red";
    //Paddle creation
    context.fillRect(
      this.position.xAxis,
      this.position.yAxis,
      this.width,
      this.height
    );
  }
  update(deltaTime) {
    this.position.xAxis += this.speed;
    //Stopping the paddle if it reaches canvas edge
    if (this.position.xAxis < 0) this.position.xAxis = 0;
    if (this.position.xAxis > this.gameWidth - this.width)
        this.position.xAxis = this.gameWidth - this.width;
      if (impact(this.game.ball, this)) {
            this.game.ball.speed.y = -this.game.ball.speed.y;
      }
  }
}
