

export default class KeyBindings {
    constructor(paddle) {
        document.addEventListener('keydown', (event) => {
            switch (event.keyCode) {
                case 37:
                    paddle.moveLeft()
                    break
                
                case 39:
                    alert('move right')
                    break
            }

        });
}


}