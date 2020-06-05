export function impact(ball, paddle, topPaddle, brick) {
  //ball measured from centre of ball
  let ballT = ball.position.y - ball.sizeR;
  let ballB = ball.position.y + ball.sizeR;
  let ballL = ball.position.x - ball.sizeR;
  let ballR = ball.position.x + ball.sizeR;

  //rectangles measured from top left
  let brickB = brick.position.yAxisBrick + brick.height;
  let brickT = brick.position.yAxisBrick;
  let brickL = brick.position.xAxisBrick;
  let brickR = brick.position.xAxisBrick + brick.width;

  let paddleT = paddle.position.yAxis;
  let paddleB = paddle.position.yAxis + paddle.height;
  let paddleL = paddle.position.xAxis;
  let paddleR = paddle.position.xAxis + paddle.width;

  let TopPaddleT = topPaddle.position.yAxis;
  let TopPaddleB = topPaddle.position.yAxis + paddle.height;
  let TopPaddleL = topPaddle.position.xAxis;
  let TopPaddleR = topPaddle.position.xAxis + paddle.width;

    //returns true if ball has come into contact with a brick/paddle surface
  if (
    ballB >= TopPaddleT ||
    paddleT ||
    (brickT && ballR >= TopPaddleL) ||
    paddleL ||
    (brickL && ballL <= TopPaddleR) ||
    paddleR ||
    (brickR && ballT <= TopPaddleB) ||
    paddleB ||
    brickB
  ) {
    return true;
  } else {
    return false;
  }
}

// if (
//       ballBottom >= bottomPaddleTop &&
//       this.position.x >= leftSideOfPaddle &&
//       this.position.x <= rightSideOfPaddle
//     )
