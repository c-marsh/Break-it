export default class Ball {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;

    //Ball dimensions, relative to canvas size
    this.sizeR = gameWidth / 100;

    //Ball Start coordinates
    this.positon = { x: 100, y: 100 };

    //Ball Speed
    this.speed = { x: 2, y: 2 };

    //Ball extremes
    this.ballR = this.positon.x + this.sizeR;
    this.ballL = this.positon.x - this.sizeR;
    this.ballT = this.positon.y + this.sizeR;
    this.ballB = this.positon.y - this.sizeR;

    //Ball direction
    this.direction = this.xMove + this.yMove;
  }

  //ball
  draw(context) {
    context.beginPath();
    //context.arc(x,y,r,sAngle,eAngle,counterclockwise);
    context.arc(this.positon.x, this.positon.y, this.sizeR, 0, 2 * Math.PI);
    context.fillStyle = "green";
    context.fill();
  }

  update(deltaTime) {
    //Prevent division by 0 as a result of no first frame
    this.positon.x += this.speed.x;
    this.positon.y += this.speed.y;
 

    
  }
}
