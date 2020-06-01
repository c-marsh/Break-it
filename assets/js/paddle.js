
//Class to make paddle size
export default class Paddle {
    constructor(gameWidth, gameHeight) {
        this.width = 150; //To Do: make responsive by making object
        this.height = 30; //To Do: make responsive by making object
        this.position = {
            xAxis : 6,
            yAxis : 6
        }

}
    draw(context) {
        context.fillStyle = "red";
        context.fillRect(this.position.xAxis, this.position.yAxis, this.width, this.height);

    }

}