export function impact(ball, features) {
  //Horizontal distances between centre of ball and object
  let xDistance = Math.abs(
    ball.position.x - features.position.xAxis - features.width / 2
  );
  //Vertical distances between centre of ball and object
  let yDistance = Math.abs(
    ball.position.y - features.position.yAxis - features.height / 2
  );
  //Return false if the distance is greater half circle of the ball and half the object
  if (xDistance > features.width / 2 + ball.sizeR) {
    return false;
  }
  if (yDistance > features.height / 2 + ball.sizeR) {
    return false;
  }
  //Return true if the distance is less half circle of the ball and half the object meaning they've collided
  if (xDistance <= features.width / 2) {
    return true;
  }
  if (yDistance <= features.height / 2) {
    return true;
    }
  //Check for collision at corner using Pythagorean theorem a^2 + b^2 = c^2
  let dx = xDistance - features.width / 2;
  let dy = yDistance - features.height / 2;
  return dx * dx + dy * dy <= ball.sizeR * ball.sizeR;
}
