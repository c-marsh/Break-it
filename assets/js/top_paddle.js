//Class to make paddle size
export default class TopPaddle {
  constructor(game) {
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;
    //Paddle dimensions, relative to canvas size
    this.width = this.gameWidth / 10;
    this.height = this.gameHeight / 50;
    //Paddle velocity
    this.maxSpeed = 8;
    this.speed = 0;
    //Paddle position, relative to canvas size
    this.position = {
      xAxisTop: this.gameWidth / 2 - this.width / 2,
      yAxisTop: this.height,
    };
  } //move left function
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
      this.position.xAxisTop,
      this.position.yAxisTop,
      this.width,
      this.height
    );
  }
  update(deltaTime) {
    this.position.xAxisTop += this.speed;
    //Stopping the paddle if it reaches canvas edge
    if (this.position.xAxisTop < 0) this.position.xAxisTop = 0;
    if (this.position.xAxisTop > this.gameWidth - this.width)
      this.position.xAxisTop = this.gameWidth - this.width;
  }
}
