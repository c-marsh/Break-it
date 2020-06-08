export function impact(ball, paddle, topPaddle, features) {
  //ball measured from centre of ball
  let ballT = ball.position.y - ball.sizeR;
  let ballB = ball.position.y + ball.sizeR;
  let ballL = ball.position.x - ball.sizeR;
  let ballR = ball.position.x + ball.sizeR;

  //rectangles measured from top left
  let paddleT = paddle.position.yAxis;
  let paddleB = paddle.position.yAxis + paddle.height;
  let paddleL = paddle.position.xAxis;
  let paddleR = paddle.position.xAxis + paddle.width;

  let topPaddleT = topPaddle.position.yAxisTop;
  let topPaddleB = topPaddle.position.yAxisTop + topPaddle.height;
  let topPaddleL = topPaddle.position.xAxisTop;
  let topPaddleR = topPaddle.position.xAxisTop + topPaddle.width;

  //bricks - currently only referencing 4th brick in array
  let brickB =
    ball.game.features[3].position.yAxisBrick + ball.game.features[3].height;
  let brickT = ball.game.features[3].position.yAxisBrick;
  let brickL = ball.game.features[3].position.xAxisBrick;
  let brickR =
    ball.game.features[3].position.xAxisBrick + ball.game.features[3].width;

  //returns true if ball has come into contact with a brick/paddle surface
  if (
    ballB >= paddleT &&
    ballR >= paddleL &&
    ballL <= paddleR &&
    ballT <= paddleB
  )
    return true;
  else if (
    ballB >= topPaddleT &&
    ballR >= topPaddleL &&
    ballL <= topPaddleR &&
    ballT <= topPaddleB
  )
    return true;
  else if (
    ballB >= brickT &&
    ballR >= brickL &&
    ballL <= brickR &&
    ballT <= brickB
  )
    return true;
  else return false;
}

// if (
//       ballBottom >= bottomPaddleTop &&
//       this.position.x >= leftSideOfPaddle &&
//       this.position.x <= rightSideOfPaddle
//     )
