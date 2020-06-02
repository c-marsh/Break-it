export default class Ball {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    //Ball dimensions, relative to canvas size
    this.width = gameWidth / 50;
    this.height = gameHeight / 50;

    //Ball velocity
    this.maxSpeed = 8;
    this.speed = 0;
  }

  //ball
  draw(context) {
    context.fillStyle = "red";
    context.beginPath();
    //context.arc(x,y,r,sAngle,eAngle,counterclockwise);
    context.arc(100, 100, this.width, 0, 2 * Math.PI);
    context.fillStyle = "green";
    context.fill();
  }
  update(deltaTime) {
    //Prevent division by 0 as a result of no first frame
    if (!deltaTime) return;

  }
}
