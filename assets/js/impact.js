export function impact(ball, features) {
  //ball measured from centre of ball
  let ballT = ball.position.y - ball.sizeR;
  let ballB = ball.position.y + ball.sizeR;
  let ballL = ball.position.x - ball.sizeR;
  let ballR = ball.position.x + ball.sizeR;

  //rectangles measured from top left
  let featureT = features.position.yAxis;
  let featureB = features.position.yAxis + features.height;
  let featureL = features.position.xAxis;
  let featureR = features.position.xAxis + features.width;

  //returns true if ball has come into contact with a brick/paddle surface
  if (
    ballB >= featureT &&
    ballR >= featureL &&
    ballL <= featureR &&
    ballT <= featureB
  )
    return true;
  else return false;
}
