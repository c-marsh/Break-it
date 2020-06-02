

export default class KeyBindings {
    constructor(paddle) {
        document.addEventListener('keydown', (event) => {
            switch (event.keyCode) {
                case 37:
                    paddle.moveLeft()
                    break
                
                case 39:
                    paddle.moveRight()
                    break
            }
            
        });
        document.addEventListener('keyup', (event) => {
            switch (event.keyCode) {
                case 37:
                    paddle.moveStop()
                    break
                
                case 39:
                    paddle.moveStop()
                    break
            }
        });

}


}