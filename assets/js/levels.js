//Import Brick class from brick file
import Brick from "./brick.js";

//create the level
export function createLevel(game, level) {
  let bricks = [];
  let gameHeight = game.gameHeight;
  let gameWidth = game.gameWidth;

  //Implement rows as per level layout
  level.forEach((row, rowIndex) => {
    row.forEach((brick, brickIndex) => {
      if (brick === 1) {
        let position = {
          xAxisBrick: (gameWidth / 11) * brickIndex,
          yAxisBrick: gameHeight / 2 - 20 * rowIndex,
        };
        bricks.push(new Brick(game, position));
      }
    });
  });
  return bricks;
}

//build level maps
export const level1 = [
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
];
