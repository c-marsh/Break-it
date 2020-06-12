#JS Lint report
##Bricks.js
1.15
Expected 'Object.freeze('. All export values should be frozen.
export default class Brick {
1.21
Undeclared 'Brick'.
export default class Brick {
1.26
Expected ';' and instead saw '{'.
export default class Brick {
1.27
Naked block.
export default class Brick {
2.2
Undeclared 'constructor'.
  constructor(game, position) {
2.14
Undeclared 'game'.
  constructor(game, position) {
2.20
Undeclared 'position'.
  constructor(game, position) {
2.29
Expected ';' and instead saw '{'.
  constructor(game, position) {
2.30
Naked block.
  constructor(game, position) {
3.21
Undeclared 'game'.
    this.gameWidth = game.gameWidth;
4.22
Undeclared 'game'.
    this.gameHeight = game.gameHeight;
5.16
Undeclared 'game'.
    this.game = game;
10.20
Undeclared 'position'.
    this.position = position;
14.2
Undeclared 'draw'.
  draw(context) {
14.7
Undeclared 'context'.
  draw(context) {
14.15
Expected ';' and instead saw '{'.
  draw(context) {
14.16
Naked block.
  draw(context) {
16.4
Undeclared 'context'.
    context.fillStyle = "#AB3428";
18.4
Undeclared 'context'.
    context.fillRect(
25.2
Undeclared 'update'.
  update(deltaTime) {
25.9
Undeclared 'deltaTime'.
  update(deltaTime) {
25.19
Expected ';' and instead saw '{'.
  update(deltaTime) {
25.20
Naked block.
  update(deltaTime) {

##Ball.js
Expected 'Object.freeze('. All export values should be frozen.
export default class Ball {
1.21
Undeclared 'Ball'.
export default class Ball {
1.25
Expected ';' and instead saw '{'.
export default class Ball {
1.26
Naked block.
export default class Ball {
2.2
Undeclared 'constructor'.
  constructor(game) {
2.14
Undeclared 'game'.
  constructor(game) {
2.19
Expected ';' and instead saw '{'.
  constructor(game) {
2.20
Naked block.
  constructor(game) {
3.21
Undeclared 'game'.
    this.gameWidth = game.gameWidth;
4.22
Undeclared 'game'.
    this.gameHeight = game.gameHeight;
5.16
Undeclared 'game'.
    this.game = game;
11.2
Undeclared 'newBall'.
  newBall() {
11.11
Expected ';' and instead saw '{'.
  newBall() {
11.12
Naked block.
  newBall() {
30.2
Undeclared 'draw'.
  draw(context) {
30.7
Undeclared 'context'.
  draw(context) {
30.15
Expected ';' and instead saw '{'.
  draw(context) {
30.16
Naked block.
  draw(context) {
31.4
Undeclared 'context'.
    context.beginPath();
33.4
Undeclared 'context'.
    context.arc(this.position.x, this.position.y, this.sizeR, 0, 2 * Math.PI);
34.4
Undeclared 'context'.
    context.fillStyle = "#F5EE9E";
35.4
Undeclared 'context'.
    context.fill();
38.2
Undeclared 'update'.
  update(deltaTime) {
38.9
Undeclared 'deltaTime'.
  update(deltaTime) {
38.19
Expected ';' and instead saw '{'.
  update(deltaTime) {
38.20
Naked block.
  update(deltaTime) {

##Impact.js
Expected 'Object.freeze('. All export values should be frozen.
export function impact(ball, features) {

##Input.js
Expected 'Object.freeze('. All export values should be frozen.
export default class KeyBindings {
1.21
Undeclared 'KeyBindings'.
export default class KeyBindings {
1.32
Expected ';' and instead saw '{'.
export default class KeyBindings {
1.33
Naked block.
export default class KeyBindings {
3.2
Undeclared 'constructor'.
  constructor(paddle, topPaddle, game) {
3.14
Undeclared 'paddle'.
  constructor(paddle, topPaddle, game) {
3.22
Undeclared 'topPaddle'.
  constructor(paddle, topPaddle, game) {
3.33
Undeclared 'game'.
  constructor(paddle, topPaddle, game) {
3.38
Expected ';' and instead saw '{'.
  constructor(paddle, topPaddle, game) {
3.39
Naked block.
  constructor(paddle, topPaddle, game) {
5.49
Expected 'function' and instead saw '=>'.
    document.addEventListener("keydown", (event) => {
43.47
Expected 'function' and instead saw '=>'.
    document.addEventListener("keyup", (event) => {


