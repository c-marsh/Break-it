
//Class to make paddle size
export default class TopPaddle {
    constructor(gameWidth, gameHeight) {
        this.width = gameWidth/10; 
        this.height = gameHeight/50; 
        this.position = {
            xAxis : gameWidth/2-this.width/2, 
            yAxis : this.height
        }

}
    draw(context) {
        context.fillStyle = "red";
        context.fillRect(this.position.xAxis, this.position.yAxis, this.width, this.height);

    }
    update(deltaTime) {
    if (!deltaTime) return;

    this.position.xAxis += 5 / deltaTime; //move 5 pixels per frame
}

}