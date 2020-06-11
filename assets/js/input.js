//Export Keybindings
export default class KeyBindings {
  //game keybindings: 37=left, 39=right
  constructor(paddle, topPaddle, game) {
    //Key Depress actions
    document.addEventListener("keydown", (event) => {
      switch (event.keyCode) {
        case 37:
          paddle.moveLeft();
          topPaddle.moveLeft();
          break;
        case 65:
          paddle.moveLeftA();
          topPaddle.moveLeftA();
          break;
        case 39:
          paddle.moveRight();
          topPaddle.moveRight();
          break;
        case 68:
          paddle.moveRightD();
          topPaddle.moveRightD();
          break;
        //esc/space bar for pause
        case 32:
          game.spaceBar();
          break;
        //esc/space bar for pause
        case 27:
          game.pause();
          break;
        //M to mute
        case 77:
          game.brickMuteSFX();
          game.paddleMuteSFX();
          game.gameMuteOverSFX();
          game.leveMutelUpSFX();
          game.cheatSFX();
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

        case 65:
          paddle.moveStopA();
          topPaddle.moveStopA();
          break;

        case 39:
          paddle.moveStop();
          topPaddle.moveStop();
          break;

        case 68:
          paddle.moveStopD();
          topPaddle.moveStopD();
          break;
      }
    });
  }
}
