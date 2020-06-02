//Export Keybindings
export default class KeyBindings {
  //game keybindings: 37=left, 39=right
  constructor(paddle, topPaddle) {
    //Key Depress actions
    document.addEventListener("keydown", (event) => {
      switch (event.keyCode) {
        case 37:
          paddle.moveLeft();
          topPaddle.moveLeft();
          break;

        case 39:
          paddle.moveRight();
          topPaddle.moveRight();
          break;
      }
    });
    //Key Release actions
    document.addEventListener("keyup", (event) => {
      switch (event.keyCode) {
        case 37:
          paddle.moveStop();
          topPaddle.moveStop();
          break;

        case 39:
          paddle.moveStop();
          topPaddle.moveStop();
          break;
      }
    });
  }
}
