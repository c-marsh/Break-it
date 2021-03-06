
export default class Ball{
  constructor(game) {
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;
    this.game = game;
    //Ball dimensions, relative to canvas size
    this.sizeR = this.gameWidth / 100;
    this.newBall();
  }
  //Ball Start coordinates
  newBall(){
    this.position = {
      x: 1 + this.sizeR,
      //Starts just below top paddle to prevent collison on generating ball
      y:
        this.game.topPaddle.position.yAxis +
        this.game.topPaddle.height +
        this.sizeR +
        1
    };

    //Ball Speed
    this.speed = {
      x: 3,
      y: 4
    };
  }

  //ball
  draw(context) {
    context.beginPath();
    //context.arc(x,y,r,sAngle,eAngle,counterclockwise);
    context.arc(this.position.x, this.position.y, this.sizeR, 0, 2 * Math.PI);
    context.fillStyle = "#F5EE9E";
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

    //If hits bottom/top, remove 1 life and reset ball
    if (this.position.y >= this.gameHeight || this.position.y <= 0) {
      this.game.ballsRemaining-=1;
      this.newBall();
    }
  }
}
