

export default class KeyBindings {
    constructor(paddle, topPaddle) {
        document.addEventListener('keydown', (event) => {
            switch (event.keyCode) {
                case 37:
                    paddle.moveLeft()
                    topPaddle.moveLeft()
                    break
                
                case 39:
                    paddle.moveRight()
                    topPaddle.moveRight()
                    break
            }
            
        });
        document.addEventListener('keyup', (event) => {
            switch (event.keyCode) {
                case 37:
                    paddle.moveStop()
                    topPaddle.moveStop()
                    break
                
                case 39:
                    paddle.moveStop()
                    topPaddle.moveStop()
                    break
            }
        });

}


}