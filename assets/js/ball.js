export default class Ball {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;

    //Ball dimensions, relative to canvas size
    this.sizeR = gameWidth / 100;

    //Ball Start coordinates
    this.position = { x: 100, y: 100 };

    //Ball Speed
    this.speed = { x: 2, y: 2 };

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
    //Prevent division by 0 as a result of no first frame
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;

      if (this.position.x > this.gameWidth || this.position.x < 0) {
          this.speed.x = -this.speed.x;
      }
         if (this.position.y > this.gameHeight || this.position.y < 0) {
      this.speed.y = -this.speed.y;
    }
  }
}
