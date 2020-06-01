export default class Paddle {
    constructor(gameWidth, gameHeight) {
        this.width = 150; //To Do: make responsive by making object
        this.height = 30; //To Do: make responsive by making object
        this.position = {
            x = gameWidth / 2 - this.width / 2,
            y = gameHeight - this.height - 10,
        }

}
    draw(context) {
        context.fillRect(this.position.x, this.position.y, this.width, this.height);

}
}