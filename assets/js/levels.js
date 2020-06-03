//Import Brick class from brick file
import Brick from "./brick.js";

//create the level
export function createLevel(game, level) {
    let bricks = [];

    level.forEach((row, rowIndex) => {
        row.forEach((brick, brickIndex) => {
        if (brick === 1) {
            let position = {
                xAxisBrick: 80 * brickIndex,
                yAxisBrick: 20 + 24 * rowIndex
            };
            bricks.push(new Brick(game, position));
            }
        });
    });
    return bricks;
}

//build level maps
export const level1 = [
    [0,1,0,1,0,1,0,1,0,1],
    [0,1,0,1,0,1,0,1,0,1],
    [0,1,0,1,0,1,0,1,0,1],
    [0,1,0,1,0,1,0,1,0,1],
    [0,1,0,1,0,1,0,1,0,1]
];