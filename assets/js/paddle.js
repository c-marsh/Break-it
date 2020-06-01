
//Class to make paddle size
export default class Paddle {
    constructor(gameWidth, gameHeight) {
        this.width = gameWidth/10; //To Do: make responsive by making object
        this.height = gameHeight/50; //To Do: make responsive by making object
        this.position = {
            xAxis : gameWidth/2-this.width/2, 
            yAxis : gameHeight-this.height-10 
        }

}
    draw(context) {
        context.fillStyle = "red";
        context.fillRect(this.position.xAxis, this.position.yAxis, this.width, this.height);

    }

}