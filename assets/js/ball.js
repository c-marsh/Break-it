export default class Ball {
  constructor(game) {
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;

    //Ball dimensions, relative to canvas size
    this.sizeR = this.gameWidth / 100;

    //Ball Start coordinates
      this.position = {
          x: 100,
          y: 100
      };

    //Ball Speed
      this.speed = {
          x: 2,
          y: 2
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

    //Bounce off sides
    if (this.position.x + this.sizeR > this.gameWidth || this.position.x  - this.sizeR < 0) {
      this.speed.x = -this.speed.x;
    }
      
    //Bounce off bottom - for test purposes only
    if (this.position.y > this.gameHeight || this.position.y < 0) {
      this.speed.y = -this.speed.y;
    }
  }
}
