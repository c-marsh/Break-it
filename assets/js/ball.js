export default class Ball {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    //Ball dimensions, relative to canvas size
    this.width = gameWidth / 50;
    this.height = gameHeight / 50;

    //Ball Start coordinates
    this.xStart = gameWidth/4;
    this.yStart = gameHeight / 4;

    //Ball Direction
    this.xMove = 2;
    this.yMove = -2;

    //Ball velocity
  //  this.speed = this.xMove + this.yMove;
  }

  //ball
  draw(context) {
    context.fillStyle = "red";
    context.beginPath();
    //context.arc(x,y,r,sAngle,eAngle,counterclockwise);
    context.arc(this.xStart, this.yStart, this.width, 0, 2 * Math.PI);
    context.fillStyle = "green";
    context.fill();
  }
    
  update(deltaTime) {
    //Prevent division by 0 as a result of no first frame
    if (!deltaTime) return;
      this.xStart += this.xMove;
      this.yStart += this.yMove;
  }
}
