
//Class to make paddle size
export default class Paddle {
    constructor(gameWidth, gameHeight) {
        this.width = gameWidth / 20; //To Do: make responsive by making object
        this.height = gameHeight/200; //To Do: make responsive by making object
        this.position = {
            xAxis : gameWidth / 6, //To Do: revisit - odd maths
            yAxis : gameHeight/ 5 + this.height*5 //To Do: revisit - odd maths
        }

}
    draw(context) {
        context.fillStyle = "red";
        context.fillRect(this.position.xAxis, this.position.yAxis, this.width, this.height);

    }

}