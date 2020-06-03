export default class Brick {
    constructor(game) {
        this.gameWidth = game.gameWidth
        this.gameHeight = game.gameHeight
        this.game = game;
        //Paddle dimensions, relative to canvas size
        this.width = this.gameWidth / 10; 
        this.height = this.gameHeight / 50;
        //Position
         this.position = {
      xAxisBrick: this.gameWidth / 2 - this.width / 2,
      yAxisBrick: this.height*25
    };
    }  
    draw(context){
        //Paddle styling
        context.fillStyle = "blue";
        //Paddle creation
        context.fillRect(this.position.xAxisBrick, this.position.yAxisBrick, this.width, this.height);

    }
    update(deltaTime){

    }
  
}