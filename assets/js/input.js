export default class KeyBindings {
    constructor() {
        document.addEventListener('keydown', (event) => {
            switch (event.keyCode) {
                case 37:
                    alert('move left')
                    break
                
                case 39:
                    alert('move right')
                    break
            }

        });
}


}