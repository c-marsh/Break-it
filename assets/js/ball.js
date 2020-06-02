export default class Ball {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth
        //Ball dimensions, relative to canvas size
        this.width = gameWidth / 50;
        this.height = gameHeight / 50;
        
        //Ball velocity
        this.maxSpeed = 8;
        this.speed = 0;
        
        //Paddle position, relative to canvas size
        this.position = {
            xAxis: gameWidth / 2 - this.width / 2,
            yAxis: gameHeight - this.height - 10
        };
    }

    //ball
    draw(context) {
        context.beginPath();
        context.arc(100, 75, 50, 0, 2 * Math.PI);
        context.stroke();
    }
     update(deltaTime) {
    //Prevent division by 0 as a result of no first frame
    if (!deltaTime) return;

        this.position.xAxis += this.speed; 
        //Stopping the paddle if it reaches canvas edge
        if (this.position.xAxis < 0) this.position.xAxis = 0;
        if (this.position.xAxis > this.gameWidth-this.width) this.position.xAxis = this.gameWidth-this.width;
    }
}
