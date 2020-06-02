
//Class to make paddle size
export default class Paddle {
    constructor(gameWidth, gameHeight) {
        //Paddle dimensions, relative to canvas size
        this.width = gameWidth/10; 
        this.height = gameHeight / 50;
        //Paddle position, relative to canvas size
        this.maxSpeed = 8;
        this.speed = 0;
        this.position = {
            xAxis: gameWidth / 2 - this.width / 2,
            yAxis: gameHeight - this.height - 10
        };
    }
    moveLeft() {
        this.speed = -this.maxSpeed;
    }
    draw(context) {
        //Paddle styling
        context.fillStyle = "red";
        //Paddle creation
        context.fillRect(this.position.xAxis, this.position.yAxis, this.width, this.height);

    }
    update(deltaTime) {
    //Prevent division by 0 as a result of no first frame
    if (!deltaTime) return;

    this.position.xAxis += this.speed; //move 5 pixels per frame
}
}

