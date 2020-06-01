let canvas = document.getElementById('game');
let context = canvas.getContext('2d');

context.clearRect(0, 0, 800, 600); //Clear screen on refresh

context.fillStyle = '#aaa';
context.fillRect(0, 50, 50, 60);
